'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const S3 = 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2';

const col1 = [
  { src: `${S3}/shot-1.webp`, alt: 'Daily Life app' },
  { src: `${S3}/shot-4.webp`, alt: 'SaaS platform' },
  { src: `${S3}/shot-6.webp`, alt: 'Skincare brand' },
  { src: `${S3}/shot-7.webp`, alt: 'Online courses' },
  { src: `${S3}/shot-9.webp`, alt: 'Business coach' },
];

const col2 = [
  { src: `${S3}/shot-2.webp`, alt: 'Luxuria travel' },
  { src: `${S3}/shot-5.webp`, alt: 'Dental practice' },
  { src: `${S3}/shot-3.webp`, alt: 'AI product builder' },
  { src: `${S3}/shot-8.webp`, alt: 'AI automation' },
];

// Repeat 4× to keep loop seamless
const marquee1 = [...col1, ...col1, ...col1, ...col1];
const marquee2 = [...col2, ...col2, ...col2, ...col2];

export default function Hero() {
  const t = useTranslations('hero');
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.querySelectorAll('[data-hero]').forEach((item, i) => {
      const el = item as HTMLElement;
      el.style.animationDelay = `${i * 100}ms`;
      el.classList.add('animate-fade-up');
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen md:h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-12 items-center pt-28 pb-16 md:pt-0 md:pb-0">

        {/* Left: text */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col gap-5">
          <div
            data-hero
            className="opacity-0 inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs text-[var(--text-2)] tracking-wider uppercase w-fit"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            {t('badge')}
          </div>

          <h1
            data-hero
            className="opacity-0 font-display font-extrabold text-[var(--text-1)] leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            {t('headline')}
          </h1>

          <p
            data-hero
            className="opacity-0 text-[var(--text-2)] leading-relaxed max-w-lg"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
          >
            {t('subheadline')}
          </p>

          <div data-hero className="opacity-0 flex flex-wrap items-center gap-3 mt-1">
            <a
              href="#pricing"
              className="btn-primary-bg text-[var(--color-primary-cta-text)] font-semibold px-7 py-3.5 text-sm rounded-full hover:scale-[0.97] transition-transform duration-200 text-center"
            >
              {t('cta_primary')}
            </a>
            <a
              href="#portfolio"
              className="btn-secondary-bg text-[var(--color-secondary-cta-text)] font-medium px-7 py-3.5 text-sm rounded-full hover:scale-[0.97] transition-transform duration-200 text-center"
            >
              {t('cta_secondary')}
            </a>
          </div>

          <div data-hero className="opacity-0 flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {['M', 'J', 'A', 'D', 'S'].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-xs font-medium text-[var(--text-2)]"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#555]">{t('proof')}</p>
          </div>
        </div>

        {/* Right: vertical marquee columns */}
        <div className="w-full md:w-1/2 overflow-hidden h-[28rem] md:h-screen md:py-24 flex-shrink-0">
          <div className="h-full flex gap-3">

            {/* Column 1 — scrolls up */}
            <div className="flex-1 overflow-hidden mask-fade-y">
              <div className="flex flex-col gap-3 animate-marquee-vertical">
                {marquee1.map((img, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-2xl p-1 overflow-hidden flex-shrink-0"
                    style={{ aspectRatio: '4/5' }}
                  >
                    <div className="h-full w-full rounded-xl overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — scrolls down */}
            <div className="flex-1 overflow-hidden mask-fade-y">
              <div className="flex flex-col gap-3 animate-marquee-vertical-reverse">
                {marquee2.map((img, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-2xl p-1 overflow-hidden flex-shrink-0"
                    style={{ aspectRatio: '4/5' }}
                  >
                    <div className="h-full w-full rounded-xl overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={500}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
