'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

function IconRefund() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 14l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10h11a4 4 0 010 8h-1" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconRevisions() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconClock() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconSupport() {
  return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
const iconComponents = [IconRefund, IconRevisions, IconClock, IconSupport];

export default function Guarantee() {
  const t = useTranslations('guarantee');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <section ref={sectionRef} className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p data-animate className="text-xs text-[#555] uppercase tracking-widest mb-4">
              {t('badge')}
            </p>
            <h2
              data-animate
              className="font-display font-extrabold text-white leading-tight mb-6 whitespace-pre-line"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              {t('title')}
            </h2>
            <p data-animate className="text-[#666] leading-relaxed text-base">
              {t('desc')}
            </p>

            <div data-animate className="mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-[#e8e8e8] transition-colors duration-200"
              >
                Ver Preços →
              </a>
            </div>
          </div>

          {/* Right: 4 pillars */}
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                data-animate
                className="border border-[#1a1a1a] p-6 hover:border-[#2a2a2a] transition-colors duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-[#555] mb-4">{(() => { const Icon = iconComponents[i]; return <Icon />; })()}</div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-[#555] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
