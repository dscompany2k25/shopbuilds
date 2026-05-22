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
        { label: 'Atendimento ao Cliente', href: '/pt/support' },
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
        { label: 'Atención al Cliente', href: '/es/support' },
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
        { label: 'Customer Support', href: '/en/support' },
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="16"
      viewBox="0 0 40 16"
      aria-label="Stripe"
      fill="none"
    >
      <path
        fill="#888"
        d="M3.57 6.27c0-.57.47-.79 1.24-.79 1.11 0 2.51.34 3.62.93V3.37A9.64 9.64 0 0 0 4.81 3C2.04 3 .17 4.39.17 6.43c0 3.14 4.34 2.64 4.34 4 0 .67-.58.89-1.4.89C2 11.32.47 10.9-.5 10.24v3.1C.6 13.82 1.82 14 3.11 14c2.83 0 4.78-1.37 4.78-3.43-.02-3.39-4.32-2.79-4.32-3.3ZM13.84 1l-3.16.67v2.06l-1.38.3v2.5h1.38v4.04c0 2.13 1.43 2.95 3.47 2.95.75 0 1.58-.12 2.16-.34V10.5a4.17 4.17 0 0 1-1.1.15c-.75 0-1.37-.26-1.37-1.12V6.53h2.47V4.03h-2.47V1ZM19.7 2.98c1.03 0 1.65-.67 1.65-1.5C21.35.67 20.73 0 19.7 0c-1.04 0-1.66.67-1.66 1.48 0 .83.62 1.5 1.66 1.5Zm-1.58 10.54h3.16V4.03h-3.16v9.49ZM27.12 4.03h-.06l-.2-1.35h-2.72v10.84h3.16V7.27c.75-.97 2.02-.8 2.41-.67V3.83c-.41-.15-1.96-.43-2.59.2ZM34.55 3.8c-3.08 0-4.95 2.3-4.95 5.19C29.6 12.03 31.68 14 34.82 14c1.35 0 2.66-.32 3.7-.9v-2.82c-.94.56-2.02.88-3.12.88-1.24 0-2.34-.43-2.49-1.76h6.34c.04-.27.06-.69.06-1-.01-2.93-1.55-4.6-4.76-4.6Zm-2.02 4.14c.14-1.15.86-1.72 1.93-1.72 1.05 0 1.7.59 1.7 1.72h-3.63Z"
      />
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
