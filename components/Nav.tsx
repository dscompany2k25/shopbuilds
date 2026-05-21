'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  const switchLocale = (next: string) => {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/') || '/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Floating pill nav */}
        <div className="glass-card rounded-full px-5 md:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <span className="font-display font-extrabold text-black text-xs leading-none tracking-tight">SB</span>
            </div>
            <span className="font-display font-bold text-[var(--text-1)] text-sm tracking-tight hidden sm:block">
              Shop<span className="text-[var(--text-2)]">Builds</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {(['portfolio', 'howItWorks', 'pricing'] as const).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-200"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-0.5 rounded-full px-3 py-1.5 btn-secondary-bg">
              {(['pt', 'es', 'en'] as const).map((l, i) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`text-xs font-medium transition-colors duration-150 px-1 ${
                    locale === l ? 'text-[var(--text-1)]' : 'text-[#555] hover:text-[var(--text-2)]'
                  } ${i < 2 ? 'border-r border-white/10 pr-2 mr-0.5' : ''}`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#pricing"
              className="hidden sm:flex items-center gap-1.5 btn-primary-bg text-[var(--color-primary-cta-text)] text-sm font-semibold px-5 py-2 rounded-full hover:scale-[0.97] transition-transform duration-200"
            >
              {t('cta')}
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[var(--text-2)] hover:text-[var(--text-1)] w-8 h-8 flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 6h12M3 12h12" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 glass-card rounded-3xl px-6 py-5 flex flex-col gap-4">
            {(['portfolio', 'howItWorks', 'pricing'] as const).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors"
              >
                {t(key)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-1 border-t border-white/[0.06]">
              <div className="flex items-center gap-0.5 rounded-full px-3 py-1.5 btn-secondary-bg flex-1">
                {(['pt', 'es', 'en'] as const).map((l, i) => (
                  <button
                    key={l}
                    onClick={() => { switchLocale(l); setOpen(false); }}
                    className={`text-xs font-medium transition-colors duration-150 px-1 flex-1 text-center ${
                      locale === l ? 'text-[var(--text-1)]' : 'text-[#555]'
                    } ${i < 2 ? 'border-r border-white/10 pr-2 mr-0.5' : ''}`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="btn-primary-bg text-[var(--color-primary-cta-text)] text-sm font-semibold px-5 py-2 rounded-full text-center"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
