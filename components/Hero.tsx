'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-hero]');
    items.forEach((item, i) => {
      const el = item as HTMLElement;
      el.style.animationDelay = `${i * 100}ms`;
      el.classList.add('animate-fade-up');
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div
          data-hero
          className="opacity-0 inline-flex items-center gap-2 border border-[#2a2a2a] px-4 py-1.5 text-xs text-[#888] tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          {t('badge')}
        </div>

        {/* Headline */}
        <h1
          data-hero
          className="opacity-0 font-display font-extrabold text-white leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
        >
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p
          data-hero
          className="opacity-0 text-[#888] leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          {t('subheadline')}
        </p>

        {/* CTAs */}
        <div data-hero className="opacity-0 flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="#pricing"
            className="bg-white text-black font-semibold px-8 py-3.5 text-sm hover:bg-[#e8e8e8] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {t('cta_primary')}
          </a>
          <a
            href="#portfolio"
            className="border border-[#2a2a2a] text-[#888] font-medium px-8 py-3.5 text-sm hover:text-white hover:border-[#444] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {t('cta_secondary')}
          </a>
        </div>

        {/* Social proof */}
        <div data-hero className="opacity-0 flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            {['M', 'J', 'A', 'D', 'S'].map((initial, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-xs font-medium text-[#888]"
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#555]">{t('proof')}</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#333] to-transparent" />
      </div>
    </section>
  );
}
