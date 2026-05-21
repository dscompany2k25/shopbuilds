'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = t.raw('items') as Array<{ q: string; a: string }>;

  return (
    <section ref={sectionRef} className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            {t('title')}
          </h2>
        </div>

        <div data-animate className="divide-y divide-[#111]">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span className="font-medium text-[#ccc] group-hover:text-white transition-colors text-sm">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 text-[#444] transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
