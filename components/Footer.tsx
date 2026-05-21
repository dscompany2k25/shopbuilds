'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-[#111] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="font-display font-extrabold text-black text-sm leading-none">SB</span>
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                Shop<span className="text-[#555]">Builds</span>
              </span>
            </div>
            <p className="text-[#444] text-xs leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{t('links.title')}</p>
            <ul className="space-y-2.5">
              <li><a href="#portfolio" className="text-[#666] hover:text-white text-xs transition-colors">{t('links.portfolio')}</a></li>
              <li><a href="#pricing" className="text-[#666] hover:text-white text-xs transition-colors">{t('links.pricing')}</a></li>
              <li><a href="#howItWorks" className="text-[#666] hover:text-white text-xs transition-colors">{t('links.howItWorks')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{t('legal.title')}</p>
            <ul className="space-y-2.5">
              <li><a href={`/${locale}/privacy`} className="text-[#666] hover:text-white text-xs transition-colors">{t('legal.privacy')}</a></li>
              <li><a href={`/${locale}/terms`} className="text-[#666] hover:text-white text-xs transition-colors">{t('legal.terms')}</a></li>
              <li><a href={`/${locale}/refund`} className="text-[#666] hover:text-white text-xs transition-colors">{t('legal.refund')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{t('contact.title')}</p>
            <ul className="space-y-2.5">
              <li><span className="text-[#666] text-xs">{t('contact.name')}</span></li>
              <li><a href="mailto:Lucasbreno@proton.me" className="text-[#666] hover:text-white text-xs transition-colors">Lucasbreno@proton.me</a></li>
              <li><a href="tel:+351243302900" className="text-[#666] hover:text-white text-xs transition-colors">+351 243 302 900</a></li>
              <li><span className="text-[#444] text-xs">{t('contact.nif')}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#111] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[#333] text-xs">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <p className="text-[#2a2a2a] text-xs">{t('address')}</p>
        </div>
      </div>
    </footer>
  );
}
