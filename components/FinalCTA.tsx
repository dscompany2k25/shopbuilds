'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const t = useTranslations('finalCta');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 border-t border-[#111] relative overflow-hidden">
      {/* Background effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          data-animate
          className="font-display font-extrabold text-white leading-tight mb-6 whitespace-pre-line"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          {t('title')}
        </h2>
        <p data-animate className="text-[#666] text-base mb-10">
          {t('desc')}
        </p>
        <div data-animate className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="bg-white text-black font-bold px-10 py-4 text-sm hover:bg-[#e8e8e8] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {t('cta')}
          </a>
        </div>
        <p data-animate className="mt-5 text-[#444] text-xs">
          {t('sub')}
        </p>
      </div>
    </section>
  );
}
