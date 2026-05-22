import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('Webhook: missing signature or secret');
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook signature error';
    console.error('Webhook signature verification failed:', message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const timestamp = new Date().toISOString();

  switch (event.type) {

    // ── Checkout ─────────────────────────────────────────────────────────────

    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const { planId, locale } = session.metadata || {};
      const email    = session.customer_details?.email;
      const name     = session.customer_details?.name;
      const amount   = session.amount_total ? `€${(session.amount_total / 100).toFixed(2)}` : '—';
      const currency = session.currency?.toUpperCase();

      console.log(`[${timestamp}] ✅ PAYMENT SUCCESS`);
      console.log(`  Plan: ${planId} | Locale: ${locale} | Amount: ${amount} ${currency}`);
      console.log(`  Customer: ${name} <${email}>`);
      console.log(`  Session: ${session.id}`);

      // TODO: Send briefing email via Resend/SendGrid when email service is configured
      // await sendBriefingEmail({ to: email, name, planId, locale, sessionId: session.id });
      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      const { planId, locale } = session.metadata || {};
      const email = session.customer_details?.email;

      console.log(`[${timestamp}] ⏰ CHECKOUT EXPIRED`);
      console.log(`  Plan: ${planId} | Locale: ${locale}`);
      console.log(`  Customer email: ${email || 'unknown'}`);
      console.log(`  Session: ${session.id}`);

      // TODO: Send abandoned cart recovery email
      break;
    }

    // ── Payment Intent ────────────────────────────────────────────────────────

    case 'payment_intent.succeeded': {
      const intent = event.data.object as Stripe.PaymentIntent;
      const amount = `€${(intent.amount / 100).toFixed(2)}`;

      console.log(`[${timestamp}] 💳 PAYMENT INTENT SUCCEEDED`);
      console.log(`  Amount: ${amount} | Intent: ${intent.id}`);
      break;
    }

    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent;
      const reason = intent.last_payment_error?.message || 'Unknown reason';
      const email  = intent.last_payment_error?.payment_method?.billing_details?.email;

      console.warn(`[${timestamp}] ❌ PAYMENT FAILED`);
      console.warn(`  Reason: ${reason}`);
      console.warn(`  Customer: ${email || 'unknown'}`);
      console.warn(`  Intent: ${intent.id}`);

      // TODO: Send payment failed notification to customer
      break;
    }

    // ── Charges ───────────────────────────────────────────────────────────────

    case 'charge.succeeded': {
      const charge = event.data.object as Stripe.Charge;
      const amount = `€${(charge.amount / 100).toFixed(2)}`;
      const email  = charge.billing_details?.email;

      console.log(`[${timestamp}] 💰 CHARGE SUCCEEDED`);
      console.log(`  Amount: ${amount} | Customer: ${email || 'unknown'}`);
      console.log(`  Charge: ${charge.id}`);
      break;
    }

    case 'charge.failed': {
      const charge = event.data.object as Stripe.Charge;
      const reason = charge.failure_message || 'Unknown';
      const email  = charge.billing_details?.email;

      console.warn(`[${timestamp}] ⛔ CHARGE FAILED`);
      console.warn(`  Reason: ${reason} | Customer: ${email || 'unknown'}`);
      console.warn(`  Charge: ${charge.id}`);
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      const refunded = charge.amount_refunded
        ? `€${(charge.amount_refunded / 100).toFixed(2)}`
        : '—';
      const email = charge.billing_details?.email;

      console.log(`[${timestamp}] 🔄 REFUND PROCESSED`);
      console.log(`  Amount refunded: ${refunded} | Customer: ${email || 'unknown'}`);
      console.log(`  Charge: ${charge.id}`);

      // TODO: Send refund confirmation email to customer
      break;
    }

    // ── Disputes ──────────────────────────────────────────────────────────────

    case 'charge.dispute.created': {
      const dispute = event.data.object as Stripe.Dispute;
      const amount  = `€${(dispute.amount / 100).toFixed(2)}`;

      console.error(`[${timestamp}] 🚨 DISPUTE OPENED — ACTION REQUIRED`);
      console.error(`  Amount: ${amount} | Reason: ${dispute.reason}`);
      console.error(`  Charge: ${dispute.charge} | Dispute: ${dispute.id}`);
      console.error(`  Due by: ${dispute.evidence_details?.due_by
        ? new Date(dispute.evidence_details.due_by * 1000).toISOString()
        : 'unknown'}`);

      // CRITICAL: You must respond to disputes before the due date
      // Go to: https://dashboard.stripe.com/disputes
      // TODO: Send urgent alert email to business owner
      break;
    }

    case 'charge.dispute.closed': {
      const dispute = event.data.object as Stripe.Dispute;

      console.log(`[${timestamp}] 📋 DISPUTE CLOSED`);
      console.log(`  Status: ${dispute.status} | Reason: ${dispute.reason}`);
      console.log(`  Dispute: ${dispute.id}`);
      break;
    }

    case 'charge.dispute.funds_withdrawn': {
      const dispute = event.data.object as Stripe.Dispute;
      const amount  = `€${(dispute.amount / 100).toFixed(2)}`;

      console.error(`[${timestamp}] 💸 DISPUTE FUNDS WITHDRAWN`);
      console.error(`  Amount: ${amount} | Dispute: ${dispute.id}`);
      break;
    }

    case 'charge.dispute.funds_reinstated': {
      const dispute = event.data.object as Stripe.Dispute;
      const amount  = `€${(dispute.amount / 100).toFixed(2)}`;

      console.log(`[${timestamp}] ✅ DISPUTE WON — FUNDS REINSTATED`);
      console.log(`  Amount: ${amount} | Dispute: ${dispute.id}`);
      break;
    }

    default:
      console.log(`[${timestamp}] ℹ️ Unhandled event: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
