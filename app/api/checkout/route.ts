import { NextRequest, NextResponse } from 'next/server';

const PLANS: Record<string, { amount: number; name: Record<string, string>; description: Record<string, string> }> = {
  starter: {
    amount: 4900,
    name: { pt: 'Starter — Landing Page', es: 'Starter — Landing Page', en: 'Starter — Landing Page' },
    description: {
      pt: '1 landing page profissional, até 5 secções, entrega em 7 dias, revisões ilimitadas.',
      es: '1 landing page profesional, hasta 5 secciones, entrega en 7 días, revisiones ilimitadas.',
      en: '1 professional landing page, up to 5 sections, 7-day delivery, unlimited revisions.',
    },
  },
  growth: {
    amount: 9900,
    name: { pt: 'Growth — Landing Page', es: 'Growth — Landing Page', en: 'Growth — Landing Page' },
    description: {
      pt: 'Landing page com animações, copywriting, SEO, analytics, entrega em 7 dias, revisões ilimitadas.',
      es: 'Landing page con animaciones, copywriting, SEO, analytics, entrega en 7 días, revisiones ilimitadas.',
      en: 'Landing page with animations, copywriting, SEO, analytics, 7-day delivery, unlimited revisions.',
    },
  },
  pro: {
    amount: 29900,
    name: { pt: 'Pro — Landing Page', es: 'Pro — Landing Page', en: 'Pro — Landing Page' },
    description: {
      pt: 'Landing page premium com SEO avançado, Core Web Vitals 90+, deploy incluído, revisões ilimitadas.',
      es: 'Landing page premium con SEO avanzado, Core Web Vitals 90+, deploy incluido, revisiones ilimitadas.',
      en: 'Premium landing page with advanced SEO, Core Web Vitals 90+, deploy included, unlimited revisions.',
    },
  },
};

const SUBMIT_MSG: Record<string, string> = {
  pt: 'Após o pagamento receberás um email com o briefing em menos de 1 hora.',
  es: 'Tras el pago recibirás un email con el briefing en menos de 1 hora.',
  en: 'After payment you will receive an email with the briefing within 1 hour.',
};

export async function POST(req: NextRequest) {
  // Strip BOM (U+FEFF) and whitespace injected by PowerShell into env vars
  const secretKey = (process.env.STRIPE_SECRET_KEY || '').replace(/﻿/g, '').trim();

  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY not set');
    return NextResponse.json({ error: 'Payment service not configured' }, { status: 500 });
  }

  try {
    const { planId, locale = 'pt' } = await req.json();
    const plan = PLANS[planId];
    if (!plan) return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });

    const lang   = (locale as string) in plan.name ? (locale as string) : 'pt';
    const origin = req.headers.get('origin') || 'https://www.shopbulds.com';

    // Use raw fetch instead of Stripe SDK to bypass SDK connectivity issues
    const body = new URLSearchParams({
      'payment_method_types[0]':                     'card',
      'line_items[0][price_data][currency]':          'eur',
      'line_items[0][price_data][product_data][name]': plan.name[lang],
      'line_items[0][price_data][product_data][description]': plan.description[lang],
      'line_items[0][price_data][unit_amount]':       String(plan.amount),
      'line_items[0][quantity]':                      '1',
      'mode':                                          'payment',
      'success_url':                                   `${origin}/${locale}/success?session_id={CHECKOUT_SESSION_ID}&plan=${planId}`,
      'cancel_url':                                    `${origin}/${locale}#pricing`,
      'billing_address_collection':                    'required',
      'metadata[planId]':                              planId,
      'metadata[locale]':                              locale,
      'custom_text[submit][message]':                  SUBMIT_MSG[lang] || SUBMIT_MSG.en,
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type':  'application/x-www-form-urlencoded',
        'Stripe-Version': '2024-06-20',
      },
      body: body.toString(),
    });

    const data = await response.json() as { url?: string; error?: { message: string; type: string } };

    if (!response.ok || data.error) {
      const msg = data.error?.message || 'Stripe error';
      console.error(`Stripe API error [${response.status}] [${data.error?.type}]: ${msg}`);
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json({ url: data.url });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Checkout error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
