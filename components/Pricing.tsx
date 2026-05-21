'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const PLAN_IDS = ['starter', 'growth', 'pro'] as const;

export default function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plans = t.raw('plans') as Array<{
    name: string;
    price: string;
    desc: string;
    features: string[];
    cta: string;
  }>;

  const enterprise = t.raw('enterprise') as {
    title: string;
    desc: string;
    cta: string;
    email: string;
  };

  const handleCheckout = async (planId: string) => {
    setLoading(planId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erro ao iniciar pagamento. Tente novamente.');
      }
    } catch {
      alert('Erro de ligação. Tente novamente.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-24 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-[var(--text-1)] leading-tight mb-4 whitespace-pre-line"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            {t('title')}
          </h2>
          <p data-animate className="text-[#666] text-base">
            {t('subtitle')}
          </p>
        </div>

        {/* Plans */}
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {plans.map((plan, i) => {
              const planId = PLAN_IDS[i];
              const isPopular = i === 1;
              const isLoading = loading === planId;

              return (
                <div
                  key={i}
                  data-animate
                  className={`relative flex flex-col p-8 ${isPopular ? 'bg-white/[0.03]' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {isPopular && (
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  )}

                  {/* Badge spacer — keeps all columns aligned */}
                  <div className="h-7 flex items-center mb-4">
                    {isPopular && (
                      <span className="btn-primary-bg text-[var(--color-primary-cta-text)] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {t('popular')}
                      </span>
                    )}
                  </div>

                  {/* Plan name */}
                  <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{plan.name}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display font-extrabold text-[var(--text-1)]" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                      {plan.price}€
                    </span>
                  </div>

                  <p className="text-[#666] text-sm leading-relaxed mb-8">{plan.desc}</p>

                  {/* CTA */}
                  <button
                    onClick={() => handleCheckout(planId)}
                    disabled={isLoading}
                    className={`w-full py-3 text-sm font-semibold rounded-full transition-all duration-200 mb-8 ${
                      isPopular
                        ? 'btn-primary-bg text-[var(--color-primary-cta-text)] hover:scale-[0.98]'
                        : 'btn-secondary-bg text-[var(--color-secondary-cta-text)] hover:scale-[0.98]'
                    } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? '...' : plan.cta}
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <svg
                          className="flex-shrink-0 mt-0.5"
                          width="14"
                          height="14"
                          fill="none"
                          stroke={isPopular ? '#fff' : '#555'}
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={isPopular ? 'text-[#ccc]' : 'text-[#666]'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise */}
        <div
          data-animate
          className="mt-4 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-[var(--text-1)] text-lg mb-2">{enterprise.title}</h3>
            <p className="text-[#666] text-sm max-w-xl">{enterprise.desc}</p>
          </div>
          <a
            href={`mailto:${enterprise.email}?subject=Projecto%20Enterprise%20-%20Shop%20Bulds`}
            className="flex-shrink-0 btn-secondary-bg text-[var(--color-secondary-cta-text)] hover:scale-[0.97] px-6 py-3 text-sm font-medium rounded-full transition-transform duration-200 whitespace-nowrap"
          >
            {enterprise.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
