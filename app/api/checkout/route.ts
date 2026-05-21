import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const PLANS: Record<string, { amount: number; name: Record<string, string>; description: Record<string, string> }> = {
  starter: {
    amount: 4900,
    name: { pt: 'Starter — Landing Page', es: 'Starter — Landing Page', en: 'Starter — Landing Page' },
    description: {
      pt: '1 landing page profissional, até 5 secções, design responsivo, entrega em 7 dias, revisões ilimitadas.',
      es: '1 landing page profesional, hasta 5 secciones, diseño responsive, entrega en 7 días, revisiones ilimitadas.',
      en: '1 professional landing page, up to 5 sections, responsive design, 7-day delivery, unlimited revisions.',
    },
  },
  growth: {
    amount: 9900,
    name: { pt: 'Growth — Landing Page', es: 'Growth — Landing Page', en: 'Growth — Landing Page' },
    description: {
      pt: 'Landing page completa com animações, copywriting, SEO básico, analytics, entrega em 7 dias, revisões ilimitadas.',
      es: 'Landing page completa con animaciones, copywriting, SEO básico, analytics, entrega en 7 días, revisiones ilimitadas.',
      en: 'Complete landing page with animations, copywriting, basic SEO, analytics, 7-day delivery, unlimited revisions.',
    },
  },
  pro: {
    amount: 29900,
    name: { pt: 'Pro — Landing Page', es: 'Pro — Landing Page', en: 'Pro — Landing Page' },
    description: {
      pt: 'Landing page premium com SEO avançado, Core Web Vitals 90+, deploy incluído, relatório de performance, revisões ilimitadas.',
      es: 'Landing page premium con SEO avanzado, Core Web Vitals 90+, deploy incluido, informe de rendimiento, revisiones ilimitadas.',
      en: 'Premium landing page with advanced SEO, Core Web Vitals 90+, deploy included, performance report, unlimited revisions.',
    },
  },
};

export async function POST(req: NextRequest) {
  try {
    const { planId, locale = 'pt' } = await req.json();

    const plan = PLANS[planId];
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const lang = (locale as string) in plan.name ? (locale as string) : 'pt';
    const origin = req.headers.get('origin') || 'https://shopbulds.com';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: plan.name[lang],
              description: plan.description[lang],
              metadata: { plan: planId },
            },
            unit_amount: plan.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/${locale}/success?session_id={CHECKOUT_SESSION_ID}&plan=${planId}`,
      cancel_url: `${origin}/${locale}#pricing`,
      billing_address_collection: 'required',
      metadata: {
        planId,
        locale,
      },
      custom_text: {
        submit: {
          message:
            lang === 'pt'
              ? 'Após o pagamento receberás um email com o briefing em menos de 1 hora.'
              : lang === 'es'
              ? 'Tras el pago recibirás un email con el briefing en menos de 1 hora.'
              : 'After payment you will receive an email with the briefing within 1 hour.',
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Checkout error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
