'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

const copy: Record<string, { text: string; accept: string; reject: string; policy: string }> = {
  pt: {
    text: 'Usamos cookies analíticos para melhorar a tua experiência. Os cookies essenciais são sempre activos.',
    accept: 'Aceitar',
    reject: 'Rejeitar',
    policy: 'Política de Cookies',
  },
  es: {
    text: 'Usamos cookies analíticas para mejorar tu experiencia. Las cookies esenciales siempre están activas.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    policy: 'Política de Cookies',
  },
  en: {
    text: 'We use analytics cookies to improve your experience. Essential cookies are always active.',
    accept: 'Accept',
    reject: 'Decline',
    policy: 'Cookie Policy',
  },
};

export default function CookieBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const c = copy[locale] ?? copy.en;

  useEffect(() => {
    const consent = localStorage.getItem('sb_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('sb_cookie_consent', accepted ? 'accepted' : 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[200] glass-card rounded-2xl p-5">
      <p className="text-[var(--text-2)] text-xs leading-relaxed mb-4">
        {c.text}{' '}
        <a href={`/${locale}/cookies`} className="text-white underline underline-offset-2 hover:no-underline">
          {c.policy}
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handle(true)}
          className="flex-1 btn-primary-bg text-[var(--color-primary-cta-text)] text-xs font-semibold py-2.5 rounded-full hover:scale-[0.97] transition-transform duration-200"
        >
          {c.accept}
        </button>
        <button
          onClick={() => handle(false)}
          className="flex-1 btn-secondary-bg text-[var(--color-secondary-cta-text)] text-xs font-medium py-2.5 rounded-full hover:scale-[0.97] transition-transform duration-200"
        >
          {c.reject}
        </button>
      </div>
    </div>
  );
}
