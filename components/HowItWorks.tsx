'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = t.raw('steps') as Array<{ num: string; title: string; desc: string }>;

  return (
    <section id="howItWorks" ref={sectionRef} className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-24">
            <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
              {t('badge')}
            </p>
            <h2
              data-animate
              className="font-display font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', whiteSpace: 'pre-line' }}
            >
              {t('title')}
            </h2>

            {/* Visual timeline mock */}
            <div data-animate className="mt-12 hidden lg:block">
              <div className="border border-[#1a1a1a] p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <span className="text-black text-xs font-bold font-display">SB</span>
                  </div>
                  <div>
                    <div className="h-2 w-32 bg-[#1a1a1a] rounded-sm" />
                    <div className="h-1.5 w-20 bg-[#141414] rounded-sm mt-1.5" />
                  </div>
                </div>
                <div className="h-px bg-[#1a1a1a]" />
                <div className="space-y-2">
                  {[70, 50, 80, 45].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-sm bg-[#1a1a1a]" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="h-px bg-[#1a1a1a]" />
                <div className="flex gap-2">
                  <div className="h-6 flex-1 bg-white opacity-90 rounded-sm" />
                  <div className="h-6 flex-1 border border-[#2a2a2a] rounded-sm" />
                </div>
              </div>
              <p className="text-[#444] text-xs mt-3 text-center tracking-wide uppercase">
                Preview — 7 days
              </p>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                data-animate
                className="flex gap-6 py-8 border-b border-[#111] last:border-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="font-display font-bold text-[#2a2a2a] text-3xl leading-none select-none">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
