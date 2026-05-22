import { NextRequest, NextResponse } from 'next/server';

const PLANS: Record<string, { amount: number; name: string }> = {
  starter: { amount: 4900,  name: 'Starter — Landing Page' },
  growth:  { amount: 9900,  name: 'Growth — Landing Page'  },
  pro:     { amount: 29900, name: 'Pro — Landing Page'     },
};

export async function POST(req: NextRequest) {
  const secretKey = (process.env.STRIPE_SECRET_KEY || '').replace(/﻿/g, '').trim();

  if (!secretKey) {
    return NextResponse.json({ error: 'Payment service not configured' }, { status: 500 });
  }

  try {
    const { planId, locale = 'pt' } = await req.json();
    const plan = PLANS[planId];
    if (!plan) return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });

    const body = new URLSearchParams({
      amount:   String(plan.amount),
      currency: 'eur',
      'metadata[planId]':  planId,
      'metadata[locale]':  locale,
      'payment_method_types[0]': 'card',
    });

    const res  = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type':  'application/x-www-form-urlencoded',
        'Stripe-Version': '2024-06-20',
      },
      body: body.toString(),
    });

    const data = await res.json() as { client_secret?: string; error?: { message: string } };

    if (!res.ok || data.error) {
      console.error('Stripe PaymentIntent error:', data.error?.message);
      return NextResponse.json({ error: data.error?.message || 'Stripe error' }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: data.client_secret, planName: plan.name, amount: plan.amount });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('PaymentIntent error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
