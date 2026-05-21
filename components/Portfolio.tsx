'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const S3 = 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2';

const gridShots = [
  { src: `${S3}/shot-1.webp`,  category: 'App & SaaS',  title: 'Daily Life App',    desc: 'Produto mobile com onboarding e checkout integrado' },
  { src: `${S3}/shot-4.webp`,  category: 'SaaS',         title: 'SaaS Platform',     desc: 'Dashboard de gestão com planos e faturação automática' },
  { src: `${S3}/shot-6.webp`,  category: 'E-commerce',   title: 'Luminé Skincare',   desc: 'Loja premium com páginas de produto de alta conversão' },
  { src: `${S3}/shot-7.webp`,  category: 'Educação',     title: 'Online Courses',    desc: 'Plataforma de cursos com área de membros e vídeo' },
  { src: `${S3}/shot-9.webp`,  category: 'Coaching',     title: 'Business Coach',    desc: 'Página de vendas para programa de alto valor' },
  { src: `${S3}/shot-2.webp`,  category: 'Turismo',      title: 'Luxuria Travel',    desc: 'Site de luxo com reservas e galeria imersiva' },
];

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <p data-animate className="text-xs text-[#555] uppercase tracking-widest">
            {t('badge')}
          </p>
          <h2
            data-animate
            className="font-display font-extrabold text-[var(--text-1)] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('title')}
          </h2>
          <p data-animate className="text-[var(--text-2)] max-w-lg text-sm leading-relaxed">
            {t('subtitle')}
          </p>
          <div data-animate>
            <a
              href="#pricing"
              className="inline-flex items-center btn-primary-bg text-[var(--color-primary-cta-text)] font-semibold px-6 py-2.5 text-sm rounded-full hover:scale-[0.97] transition-transform duration-200 mt-1"
            >
              Ver Preços →
            </a>
          </div>
        </div>

        {/* Grid — 2 colunas grandes + 1 destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridShots.map((item, i) => (
            <div
              key={i}
              data-animate
              className={`group cursor-default glass-card rounded-2xl overflow-hidden hover:scale-[1.015] transition-transform duration-300 ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-xs text-white glass-card rounded-full px-4 py-1.5 tracking-widest uppercase">
                    Ver Projecto
                  </span>
                </div>
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="glass-card text-[10px] uppercase tracking-widest px-3 py-1 font-medium rounded-full text-[var(--text-1)]">
                    {item.category}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="px-5 py-4 border-t border-white/[0.06]">
                <h3 className="font-display font-bold text-[var(--text-1)] text-sm mb-1">{item.title}</h3>
                <p className="text-[#555] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
