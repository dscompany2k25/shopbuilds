'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const copy: Record<string, {
  name: string; email: string; paying: string; pay: string;
  processing: string; security: string; back: string;
  nameRequired: string; emailRequired: string;
}> = {
  pt: {
    name: 'Nome completo',
    email: 'Endereço de e-mail',
    paying: 'A pagar',
    pay: 'Pagar agora',
    processing: 'A processar...',
    security: 'Pagamento seguro via Stripe. Os teus dados são encriptados.',
    back: '← Voltar',
    nameRequired: 'Por favor insere o teu nome',
    emailRequired: 'Por favor insere um e-mail válido',
  },
  es: {
    name: 'Nombre completo',
    email: 'Dirección de correo electrónico',
    paying: 'A pagar',
    pay: 'Pagar ahora',
    processing: 'Procesando...',
    security: 'Pago seguro vía Stripe. Tus datos están cifrados.',
    back: '← Volver',
    nameRequired: 'Por favor ingresa tu nombre',
    emailRequired: 'Por favor ingresa un email válido',
  },
  en: {
    name: 'Full name',
    email: 'Email address',
    paying: 'Total',
    pay: 'Pay now',
    processing: 'Processing...',
    security: 'Secure payment via Stripe. Your data is encrypted.',
    back: '← Back',
    nameRequired: 'Please enter your name',
    emailRequired: 'Please enter a valid email',
  },
};

export default function CheckoutForm({
  locale,
  planId,
  planName,
  amount,
  onBack,
}: {
  locale: string;
  planId: string;
  planName: string;
  amount: number;
  onBack: () => void;
}) {
  const stripe   = useStripe();
  const elements = useElements();
  const c = copy[locale] ?? copy.pt;

  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [error,      setError]      = useState('');
  const [loading,    setLoading]    = useState(false);
  const [ready,      setReady]      = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!name.trim()) { setError(c.nameRequired); return; }
    if (!email.includes('@')) { setError(c.emailRequired); return; }

    setError('');
    setLoading(true);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/${locale}/success?plan=${planId}`,
        payment_method_data: {
          billing_details: { name: name.trim(), email: email.trim() },
        },
      },
    });

    if (stripeError) {
      setError(stripeError.message || 'Payment failed');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Customer info */}
      <div className="flex flex-col gap-3">
        <div>
          <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">{c.name}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[var(--text-1)] text-sm placeholder-[#444] focus:outline-none focus:border-white/25 transition-colors"
            placeholder="Lucas Ferreira"
            required
          />
        </div>
        <div>
          <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">{c.email}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-[var(--text-1)] text-sm placeholder-[#444] focus:outline-none focus:border-white/25 transition-colors"
            placeholder="email@exemplo.com"
            required
          />
        </div>
      </div>

      {/* Stripe Payment Element */}
      <div className={`transition-opacity duration-300 ${ready ? 'opacity-100' : 'opacity-40'}`}>
        <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">
          {locale === 'pt' ? 'Dados do cartão' : locale === 'es' ? 'Datos de la tarjeta' : 'Card details'}
        </label>
        <PaymentElement
          onReady={() => setReady(true)}
          options={{
            layout: 'tabs',
            fields: { billingDetails: { name: 'never', email: 'never' } },
          }}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!stripe || !ready || loading}
        className="w-full btn-primary-bg text-[var(--color-primary-cta-text)] font-bold py-4 rounded-full text-sm hover:scale-[0.98] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {loading ? c.processing : `${c.pay} — ${(amount / 100).toFixed(0)}€`}
      </button>

      {/* Security */}
      <div className="flex items-center justify-center gap-2">
        <svg width="12" height="12" fill="none" stroke="#444" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="text-[#444] text-[11px] text-center">{c.security}</p>
      </div>

    </form>
  );
}
