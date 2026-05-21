'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

const portfolioVisuals = [
  {
    bg: '#0D0D0D',
    accent: '#C8A97E',
    pattern: 'lines',
    tag: 'Restaurant',
  },
  {
    bg: '#0A0A0A',
    accent: '#E8E8E8',
    pattern: 'dots',
    tag: 'Fitness',
  },
  {
    bg: '#0D0D0D',
    accent: '#7EA3C8',
    pattern: 'grid',
    tag: 'Law',
  },
  {
    bg: '#0A0A0A',
    accent: '#C87EA3',
    pattern: 'circles',
    tag: 'Beauty',
  },
  {
    bg: '#0D0D0D',
    accent: '#7EC8A9',
    pattern: 'dots',
    tag: 'SaaS',
  },
  {
    bg: '#0A0A0A',
    accent: '#A9C87E',
    pattern: 'lines',
    tag: 'Real Estate',
  },
];

function PortfolioCard({
  visual,
  title,
  category,
  desc,
  index,
}: {
  visual: (typeof portfolioVisuals)[number];
  title: string;
  category: string;
  desc: string;
  index: number;
}) {
  return (
    <div
      data-animate
      className="group cursor-default border border-[#1a1a1a] hover:border-[#333] transition-colors duration-300"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Visual mock */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: visual.bg }}
      >
        {/* Abstract page mock */}
        <div className="absolute inset-4 flex flex-col gap-2 opacity-60">
          <div className="h-2 rounded-sm" style={{ background: visual.accent, width: '40%', opacity: 0.9 }} />
          <div className="h-1 rounded-sm bg-[#333] w-3/4" />
          <div className="h-1 rounded-sm bg-[#333] w-1/2" />
          <div className="mt-2 h-16 rounded-sm" style={{ background: `${visual.accent}18` }} />
          <div className="flex gap-2 mt-auto">
            <div className="h-6 w-20 rounded-sm" style={{ background: visual.accent, opacity: 0.8 }} />
            <div className="h-6 w-16 rounded-sm border border-[#333]" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-xs text-white border border-white/30 px-3 py-1.5 tracking-widest uppercase">
            View
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] uppercase tracking-widest px-2 py-1 font-medium"
            style={{ background: `${visual.accent}20`, color: visual.accent, border: `1px solid ${visual.accent}30` }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 border-t border-[#1a1a1a]">
        <h3 className="font-display font-bold text-white text-base mb-1">{title}</h3>
        <p className="text-[#555] text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('[data-animate]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = t.raw('items') as Array<{ title: string; category: string; desc: string }>;

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('title')}
          </h2>
          <p data-animate className="text-[#888] max-w-lg text-base">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <PortfolioCard
              key={i}
              index={i}
              visual={portfolioVisuals[i]}
              title={item.title}
              category={item.category}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
