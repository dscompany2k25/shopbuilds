'use client';

export const dynamic = 'force-dynamic';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PLAN_INFO: Record<string, {
  price: string;
  features: Record<string, string[]>;
  badge?: Record<string, string>;
}> = {
  starter: {
    price: '49€',
    features: {
      pt: ['1 landing page profissional', 'Até 5 secções', 'Design responsivo', 'Formulário de contacto', 'Entrega em 7 dias', 'Revisões ilimitadas', 'Garantia de reembolso'],
      es: ['1 landing page profesional', 'Hasta 5 secciones', 'Diseño responsive', 'Formulario de contacto', 'Entrega en 7 días', 'Revisiones ilimitadas', 'Garantía de reembolso'],
      en: ['1 professional landing page', 'Up to 5 sections', 'Responsive design', 'Contact form', '7-day delivery', 'Unlimited revisions', 'Money-back guarantee'],
    },
  },
  growth: {
    price: '99€',
    badge: { pt: 'Mais popular', es: 'Más popular', en: 'Most popular' },
    features: {
      pt: ['Tudo do Starter', 'Até 10 secções', 'Animações e micro-interacções', 'Copywriting incluído', 'SEO básico', 'Google Analytics + Meta Pixel', 'Entrega em 7 dias', 'Revisões ilimitadas', 'Garantia de reembolso total'],
      es: ['Todo del Starter', 'Hasta 10 secciones', 'Animaciones', 'Copywriting incluido', 'SEO básico', 'Google Analytics + Meta Pixel', 'Entrega en 7 días', 'Revisiones ilimitadas', 'Garantía de reembolso total'],
      en: ['Everything in Starter', 'Up to 10 sections', 'Animations', 'Copywriting included', 'Basic SEO', 'Google Analytics + Meta Pixel', '7-day delivery', 'Unlimited revisions', 'Full money-back guarantee'],
    },
  },
  pro: {
    price: '299€',
    features: {
      pt: ['Tudo do Growth', 'Secções ilimitadas', 'SEO avançado', 'Core Web Vitals 90+', 'Deploy incluído', 'Relatório de performance', 'Revisões ilimitadas', 'Garantia de reembolso total'],
      es: ['Todo del Growth', 'Secciones ilimitadas', 'SEO avanzado', 'Core Web Vitals 90+', 'Deploy incluido', 'Informe de rendimiento', 'Revisiones ilimitadas', 'Garantía de reembolso total'],
      en: ['Everything in Growth', 'Unlimited sections', 'Advanced SEO', 'Core Web Vitals 90+', 'Deploy included', 'Performance report', 'Unlimited revisions', 'Full money-back guarantee'],
    },
  },
};

const LABELS: Record<string, {
  order: string; total: string; back: string;
  loading: string; guarantee: string; secure: string;
}> = {
  pt: { order: 'Resumo do pedido', total: 'Total', back: '← Voltar aos preços', loading: 'A preparar pagamento...', guarantee: 'Garantia de reembolso total se não ficares satisfeito.', secure: 'Encriptação SSL 256-bit' },
  es: { order: 'Resumen del pedido', total: 'Total', back: '← Volver a precios', loading: 'Preparando pago...', guarantee: 'Garantía de reembolso total si no quedas satisfecho.', secure: 'Cifrado SSL 256-bit' },
  en: { order: 'Order summary', total: 'Total', back: '← Back to pricing', loading: 'Preparing payment...', guarantee: 'Full money-back guarantee if you are not satisfied.', secure: '256-bit SSL encryption' },
};

const appearance = {
  theme: 'night' as const,
  variables: {
    colorPrimary:         '#ffffff',
    colorBackground:      '#111111',
    colorText:            '#f0f0f0',
    colorDanger:          '#f87171',
    fontFamily:           'DM Sans, sans-serif',
    spacingUnit:          '4px',
    borderRadius:         '12px',
    colorTextPlaceholder: '#555555',
  },
  rules: {
    '.Input':          { border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)', padding: '12px 16px' },
    '.Input:focus':    { border: '1px solid rgba(255,255,255,0.25)', outline: 'none', boxShadow: 'none' },
    '.Label':          { color: '#555555', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' },
    '.Tab':            { border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' },
    '.Tab--selected':  { border: '1px solid rgba(255,255,255,0.25)', backgroundColor: 'rgba(255,255,255,0.08)' },
  },
};

function CheckoutContent({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const planId       = searchParams.get('plan') || 'growth';
  const plan         = PLAN_INFO[planId];
  const l            = LABELS[locale] ?? LABELS.pt;

  const [clientSecret, setClientSecret] = useState('');
  const [planName,     setPlanName]     = useState('');
  const [amount,       setAmount]       = useState(0);
  const [err,          setErr]          = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, locale }),
    })
      .then(r => r.json())
      .then((d: { clientSecret?: string; planName?: string; amount?: number; error?: string }) => {
        if (d.error) { setErr(d.error); return; }
        setClientSecret(d.clientSecret || '');
        setPlanName(d.planName || '');
        setAmount(d.amount || 0);
      })
      .catch(() => setErr('Connection error'));
  }, [planId, locale]);

  const features = plan?.features[locale] ?? plan?.features.pt ?? [];
  const badge    = plan?.badge?.[locale];

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="font-bold text-black text-xs">SB</span>
            </div>
            <span className="font-display font-bold text-[var(--text-1)] text-base">
              Shop<span className="text-[#555]">Bulds</span>
            </span>
          </div>
          <button
            onClick={() => router.push(`/${locale}#pricing`)}
            className="text-[#555] hover:text-[var(--text-1)] text-sm transition-colors"
          >
            {l.back}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Left — Order summary */}
          <div className="glass-card rounded-3xl p-8">
            <p className="text-[#555] text-xs uppercase tracking-widest mb-6">{l.order}</p>

            <div className="flex items-start justify-between mb-6">
              <div>
                {badge && (
                  <span className="btn-primary-bg text-[var(--color-primary-cta-text)] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3">
                    {badge}
                  </span>
                )}
                <h2 className="font-display font-extrabold text-[var(--text-1)] text-xl">
                  {planName || planId.charAt(0).toUpperCase() + planId.slice(1)}
                </h2>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-[var(--text-1)] text-3xl">{plan?.price}</span>
                <p className="text-[#555] text-xs mt-0.5">
                  {locale === 'pt' ? 'pagamento único' : locale === 'es' ? 'pago único' : 'one-time payment'}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/[0.06] mb-6" />

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#ccc]">{f}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/[0.06] mb-5" />

            <div className="flex items-center justify-between mb-5">
              <span className="text-[#888] text-sm">{l.total}</span>
              <span className="font-display font-extrabold text-[var(--text-1)] text-2xl">{plan?.price}</span>
            </div>

            <div className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-4">
              <svg width="16" height="16" fill="none" stroke="#888" strokeWidth="1.5" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#666] text-xs leading-relaxed">{l.guarantee}</p>
            </div>
          </div>

          {/* Right — Payment form */}
          <div className="glass-card rounded-3xl p-8">
            {err && (
              <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl p-4 mb-6">
                {err}
              </div>
            )}

            {!clientSecret ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                <p className="text-[#555] text-sm">{l.loading}</p>
              </div>
            ) : (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret, appearance, locale: locale as 'pt' | 'es' | 'en' }}
              >
                <CheckoutForm
                  locale={locale}
                  planId={planId}
                  planName={planName}
                  amount={amount}
                  onBack={() => router.push(`/${locale}#pricing`)}
                />
              </Elements>
            )}

            <div className="flex items-center justify-center gap-2 mt-5">
              <svg width="12" height="12" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="text-[#333] text-[11px]">{l.secure}</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
      </main>
    }>
      <CheckoutContent locale={params.locale} />
    </Suspense>
  );
}
