'use client';

import { useLocale } from 'next-intl';

const copy: Record<string, {
  tagline: string;
  nav: { title: string; items: { label: string; href: string }[] };
  legal: { title: string; items: { label: string; href: string }[] };
  contact: { title: string };
  payment: string;
  copyright: string;
  address: string;
  vat: string;
  dispute: string;
  disputeLink: string;
}> = {
  pt: {
    tagline: 'Landing pages profissionais que convertem visitantes em clientes. Entrega em 7 dias, garantida.',
    nav: {
      title: 'Navegação',
      items: [
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Como Funciona', href: '#howItWorks' },
        { label: 'Preços', href: '#pricing' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { label: 'Política de Privacidade', href: '/pt/privacy' },
        { label: 'Termos de Serviço', href: '/pt/terms' },
        { label: 'Política de Reembolso', href: '/pt/refund' },
        { label: 'Política de Cookies', href: '/pt/cookies' },
      ],
    },
    contact: { title: 'Contacto' },
    payment: 'Pagamentos processados com segurança via',
    copyright: 'Shop Bulds. Todos os direitos reservados.',
    address: 'Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal',
    vat: 'NIF: 315027371',
    dispute: 'Resolução de Litígios (UE)',
    disputeLink: 'https://ec.europa.eu/consumers/odr/',
  },
  es: {
    tagline: 'Landing pages profesionales que convierten visitantes en clientes. Entrega en 7 días, garantizada.',
    nav: {
      title: 'Navegación',
      items: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Cómo Funciona', href: '#howItWorks' },
        { label: 'Precios', href: '#pricing' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { label: 'Política de Privacidad', href: '/es/privacy' },
        { label: 'Términos de Servicio', href: '/es/terms' },
        { label: 'Política de Reembolso', href: '/es/refund' },
        { label: 'Política de Cookies', href: '/es/cookies' },
      ],
    },
    contact: { title: 'Contacto' },
    payment: 'Pagos procesados de forma segura por',
    copyright: 'Shop Bulds. Todos los derechos reservados.',
    address: 'Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal',
    vat: 'NIF: 315027371',
    dispute: 'Resolución de Litigios (UE)',
    disputeLink: 'https://ec.europa.eu/consumers/odr/',
  },
  en: {
    tagline: 'Professional landing pages that turn visitors into customers. Delivered in 7 days, guaranteed.',
    nav: {
      title: 'Navigation',
      items: [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'How It Works', href: '#howItWorks' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/en/privacy' },
        { label: 'Terms of Service', href: '/en/terms' },
        { label: 'Refund Policy', href: '/en/refund' },
        { label: 'Cookie Policy', href: '/en/cookies' },
      ],
    },
    contact: { title: 'Contact' },
    payment: 'Payments securely processed by',
    copyright: 'Shop Bulds. All rights reserved.',
    address: 'Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal',
    vat: 'VAT: 315027371',
    dispute: 'EU Online Dispute Resolution',
    disputeLink: 'https://ec.europa.eu/consumers/odr/',
  },
};

function StripeLogo() {
  return (
    <svg height="20" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Stripe">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.2 10.2 0 0 1-4.56.94c-3.93 0-6.65-2.5-6.65-7.04 0-4.17 2.5-7.07 6.13-7.07 3.61 0 5.87 2.86 5.87 7.07v1.18zm-5.87-4.82c-.91 0-1.9.63-1.9 2.05h3.82c0-1.38-.96-2.05-1.92-2.05zM44.09 6.01c-1.3 0-2.16.62-2.63 1.04l-.17-.83h-2.95V25l3.3-.7v-4.33c.5.34 1.23.84 2.38.84 2.42 0 4.63-1.95 4.63-6.27-.01-3.9-2.24-6.53-4.56-6.53zm-.8 9.62c-.8 0-1.26-.28-1.59-.63V9.93c.36-.39.83-.65 1.59-.65 1.22 0 2.06 1.37 2.06 3.17 0 1.84-.83 3.18-2.06 3.18zM33.41 4.7l-3.3.69V6.2h3.3V4.7zm-3.3 1.5h3.3v10.24h-3.3V6.2zm-2.22 8.91c0 1.63-1.44 2.36-2.85 2.36a6.5 6.5 0 0 1-3.86-1.26v3.44c.93.5 2.07.82 3.86.82 2.99 0 5.87-1.44 5.87-5.14 0-5.49-7.3-4.52-7.3-6.56 0-1.25 1.12-1.71 2.31-1.71 1.3 0 2.56.51 3.6 1.23V5.26A7.58 7.58 0 0 0 25.92 4.5c-2.76 0-5.57 1.39-5.57 4.97 0 5.24 7.54 4.41 7.54 5.64zM15.5 6.01c-1.35 0-2.64.57-3.52 1.47l-.23-1.17H8.77v18.7l3.3-.7v-4.54c.65.44 1.6.95 2.97.95 2.82 0 5.4-2.14 5.4-7.03 0-3.98-2.26-6.68-4.94-6.68zm-.88 10.01c-.82 0-1.38-.35-1.73-.79V9.82c.41-.47.98-.8 1.73-.8 1.33 0 2.24 1.48 2.24 3.49 0 2.05-.9 3.51-2.24 3.51z" fill="#aaa"/>
    </svg>
  );
}


export default function Footer() {
  const locale = useLocale();
  const c = copy[locale] ?? copy.pt;

  return (
    <footer className="border-t border-white/[0.04] px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="font-display font-extrabold text-black text-xs leading-none">SB</span>
              </div>
              <span className="font-display font-bold text-[var(--text-1)] text-base tracking-tight">
                Shop<span className="text-[#555]">Bulds</span>
              </span>
            </div>
            <p className="text-[#444] text-xs leading-relaxed mb-5">{c.tagline}</p>

            {/* Stripe badge */}
            <div className="flex items-center gap-2 mt-1">
              <svg width="12" height="12" fill="none" stroke="#555" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#555] text-[10px]">{c.payment}</span>
              <StripeLogo />
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{c.nav.title}</p>
            <ul className="space-y-2.5">
              {c.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#666] hover:text-[var(--text-1)] text-xs transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{c.legal.title}</p>
            <ul className="space-y-2.5">
              {c.legal.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[#666] hover:text-[var(--text-1)] text-xs transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={c.disputeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555] hover:text-[#888] text-xs transition-colors"
                >
                  {c.dispute} ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{c.contact.title}</p>
            <ul className="space-y-2.5">
              <li><span className="text-[#555] text-xs">Lucas Breno Ferreira da Costa</span></li>
              <li>
                <a href="mailto:Lucasbreno@proton.me" className="text-[#666] hover:text-[var(--text-1)] text-xs transition-colors">
                  Lucasbreno@proton.me
                </a>
              </li>
              <li>
                <a href="tel:+351243302900" className="text-[#666] hover:text-[var(--text-1)] text-xs transition-colors">
                  +351 243 302 900
                </a>
              </li>
              <li><span className="text-[#444] text-xs">{c.vat}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-[#333] text-[11px]">
              &copy; {new Date().getFullYear()} {c.copyright}
            </p>
            <p className="text-[#2a2a2a] text-[11px]">{c.address}</p>
          </div>
          <p className="text-[#252525] text-[10px] leading-relaxed">
            {locale === 'pt' && 'Os pagamentos são processados pela Stripe, Inc. Os seus dados de pagamento são encriptados e nunca armazenados nos nossos servidores. Ao adquirir os nossos serviços, o cliente aceita os Termos de Serviço e a Política de Privacidade. Direito de livre resolução de 14 dias nos termos do DL 24/2014.'}
            {locale === 'es' && 'Los pagos son procesados por Stripe, Inc. Sus datos de pago están cifrados y nunca se almacenan en nuestros servidores. Al adquirir nuestros servicios, el cliente acepta los Términos de Servicio y la Política de Privacidad. Derecho de desistimiento de 14 días conforme a la Directiva 2011/83/UE.'}
            {locale === 'en' && 'Payments are processed by Stripe, Inc. Your payment data is encrypted and never stored on our servers. By purchasing our services, the client accepts the Terms of Service and Privacy Policy. 14-day right of withdrawal under EU Consumer Rights Directive 2011/83/EU.'}
          </p>
        </div>

      </div>
    </footer>
  );
}
