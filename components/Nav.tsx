'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const localeLabels: Record<string, string> = {
  pt: 'PT',
  es: 'ES',
  en: 'EN',
};

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (next: string) => {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/') || '/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="font-display font-extrabold text-black text-sm leading-none tracking-tight">SB</span>
          </div>
          <span className="font-display font-bold text-white text-base tracking-tight hidden sm:block">
            Shop<span className="text-[#888]">Builds</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {(['portfolio', 'howItWorks', 'pricing'] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-[#888] hover:text-white transition-colors duration-200"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-[#2a2a2a] rounded-sm px-2 py-1">
            {(['pt', 'es', 'en'] as const).map((l, i) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-xs font-medium transition-colors duration-150 px-1 ${
                  locale === l ? 'text-white' : 'text-[#555] hover:text-[#888]'
                } ${i < 2 ? 'border-r border-[#2a2a2a] pr-2 mr-1' : ''}`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className="hidden sm:flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-4 py-2 hover:bg-[#e0e0e0] transition-colors duration-200"
          >
            {t('cta')}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#888] hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <>
                  <path d="M4 4l12 12M16 4L4 16" />
                </>
              ) : (
                <>
                  <path d="M3 6h14M3 12h14M3 18h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a] px-6 py-4 flex flex-col gap-4">
          {(['portfolio', 'howItWorks', 'pricing'] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="bg-white text-black text-sm font-semibold px-4 py-2 text-center"
          >
            {t('cta')}
          </a>
        </div>
      )}
    </header>
  );
}
