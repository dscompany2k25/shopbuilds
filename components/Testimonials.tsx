'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

function StarRating({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={dark ? '#0a0a0a' : '#888'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = t.raw('items') as Array<{
    name: string;
    role: string;
    company: string;
    text: string;
  }>;

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p data-animate className="text-xs text-[#aaa] uppercase tracking-widest mb-4">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-[#0a0a0a] leading-tight whitespace-pre-line"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Featured testimonial */}
        <div data-animate className="white-card rounded-3xl p-8 mb-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,0,0,0.02) 0%, transparent 60%)' }}
          />
          <StarRating dark />
          <p className="font-display font-bold text-[#0a0a0a] text-xl md:text-2xl leading-relaxed mt-5 mb-6 relative z-10">
            &ldquo;{items[2].text}&rdquo;
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#0a0a0a]"
            >
              <span className="font-display font-bold text-white text-sm">
                {items[2].name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-[#0a0a0a] font-semibold text-sm">{items[2].name}</p>
              <p className="text-[#999] text-xs">
                {items[2].role} · {items[2].company}
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[items[0], items[1], items[3], items[4]].map((item, i) => (
            <div
              key={i}
              data-animate
              className="white-card rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <StarRating dark />
              <p className="text-[#555] text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f0f0f0] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#0a0a0a] text-xs">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#0a0a0a] font-semibold text-sm">{item.name}</p>
                  <p className="text-[#aaa] text-xs">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
