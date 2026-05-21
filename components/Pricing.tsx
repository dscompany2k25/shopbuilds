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
    <section id="pricing" ref={sectionRef} className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-white leading-tight mb-4 whitespace-pre-line"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            {t('title')}
          </h2>
          <p data-animate className="text-[#666] text-base">
            {t('subtitle')}
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a1a1a]">
          {plans.map((plan, i) => {
            const planId = PLAN_IDS[i];
            const isPopular = i === 1;
            const isLoading = loading === planId;

            return (
              <div
                key={i}
                data-animate
                className={`relative flex flex-col p-8 ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-[#1a1a1a]' : ''
                } ${isPopular ? 'bg-[#0a0a0a]' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-white" />
                )}

                {isPopular && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {t('popular')}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{plan.name}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display font-extrabold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                    {plan.price}€
                  </span>
                </div>

                <p className="text-[#666] text-sm leading-relaxed mb-8">{plan.desc}</p>

                {/* CTA */}
                <button
                  onClick={() => handleCheckout(planId)}
                  disabled={isLoading}
                  className={`w-full py-3 text-sm font-semibold transition-colors duration-200 mb-8 ${
                    isPopular
                      ? 'bg-white text-black hover:bg-[#e8e8e8]'
                      : 'border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#444]'
                  } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? '...' : plan.cta}
                </button>

                {/* Divider */}
                <div className="h-px bg-[#1a1a1a] mb-6" />

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

        {/* Enterprise */}
        <div
          data-animate
          className="mt-4 border border-[#1a1a1a] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-2">{enterprise.title}</h3>
            <p className="text-[#666] text-sm max-w-xl">{enterprise.desc}</p>
          </div>
          <a
            href={`mailto:${enterprise.email}?subject=Projecto%20Enterprise%20-%20Shop%20Builds`}
            className="flex-shrink-0 border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#444] px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
          >
            {enterprise.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
