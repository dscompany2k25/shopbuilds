'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const S3 = 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2';

const row1 = [
  { src: `${S3}/project-1.webp`, label: 'Luxuria Travel' },
  { src: `${S3}/project-2.webp`, label: 'Dental Practice' },
  { src: `${S3}/project-3.webp`, label: 'Summit Roofing' },
  { src: `${S3}/project-4.webp`, label: 'Luxury Living' },
  { src: `${S3}/project-5.webp`, label: 'Business Coach' },
  { src: `${S3}/shot-3.webp`,    label: 'AI Builder' },
  { src: `${S3}/shot-5.webp`,    label: 'Dental Studio' },
  { src: `${S3}/shot-8.webp`,    label: 'AI Automation' },
];

const row2 = [
  { src: `${S3}/shot-1.webp`,    label: 'Daily Life App' },
  { src: `${S3}/shot-4.webp`,    label: 'SaaS Platform' },
  { src: `${S3}/shot-6.webp`,    label: 'Luminé Skincare' },
  { src: `${S3}/shot-7.webp`,    label: 'Online Courses' },
  { src: `${S3}/shot-9.webp`,    label: 'Business Coach' },
  { src: `${S3}/shot-2.webp`,    label: 'Luxuria Travel' },
  { src: `${S3}/dev-1.webp`,     label: 'Architecture Studio' },
  { src: `${S3}/dev-2.webp`,     label: 'AgentFlow AI' },
];

const marquee1 = [...row1, ...row1];
const marquee2 = [...row2, ...row2];

export default function WorkCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-14 text-center flex flex-col items-center gap-4">
        <p data-animate className="text-xs text-[#555] uppercase tracking-widest">
          Trabalho recente
        </p>
        <h2
          data-animate
          className="font-display font-extrabold text-[var(--text-1)] leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Mais de 50 páginas entregues.
        </h2>
        <p data-animate className="text-[var(--text-2)] max-w-md text-sm leading-relaxed">
          Projectos reais para negócios reais — restaurantes, SaaS, coaching, e-commerce e muito mais.
        </p>
      </div>

      {/* Row 1 — desliza para a esquerda */}
      <div data-animate className="relative mb-4">
        <div className="overflow-hidden mask-fade-x">
          <div className="flex gap-4 animate-marquee-horizontal" style={{ width: 'max-content' }}>
            {marquee1.map((img, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-1 overflow-hidden flex-shrink-0 group"
                style={{ width: '340px', aspectRatio: '16/10' }}
              >
                <div className="h-full w-full rounded-xl overflow-hidden relative">
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={680}
                    height={425}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium">{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — desliza para a direita */}
      <div data-animate className="relative">
        <div className="overflow-hidden mask-fade-x">
          <div
            className="flex gap-4"
            style={{
              width: 'max-content',
              animation: 'marqueeHorizontalReverse 38s linear infinite',
            }}
          >
            {marquee2.map((img, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-1 overflow-hidden flex-shrink-0 group"
                style={{ width: '340px', aspectRatio: '16/10' }}
              >
                <div className="h-full w-full rounded-xl overflow-hidden relative">
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={680}
                    height={425}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium">{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
