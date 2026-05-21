import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n';

const BASE = 'https://shopbuilds.com';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    pt: 'Shop Builds — Landing Pages que Convertem | Entrega em 7 Dias',
    es: 'Shop Builds — Landing Pages que Convierten | Entrega en 7 Días',
    en: 'Shop Builds — Landing Pages that Convert | Delivered in 7 Days',
  };

  const descriptions: Record<string, string> = {
    pt: 'Landing pages profissionais entregues em 7 dias com revisões ilimitadas e garantia de reembolso total. SEO incluído. A partir de 49€. Para negócios em Portugal, Espanha e Europa.',
    es: 'Landing pages profesionales entregadas en 7 días con revisiones ilimitadas y garantía de reembolso total. SEO incluido. Desde 49€. Para negocios en España, Portugal y Europa.',
    en: 'Professional landing pages delivered in 7 days with unlimited revisions and full money-back guarantee. SEO included. From €49. Serving businesses across Europe.',
  };

  const ogImage = `${BASE}/og-image.png`;

  return {
    metadataBase: new URL(BASE),
    title: titles[locale] ?? titles.pt,
    description: descriptions[locale] ?? descriptions.pt,

    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        'pt-PT': `${BASE}/pt`,
        'es-ES': `${BASE}/es`,
        'en': `${BASE}/en`,
        'x-default': `${BASE}/pt`,
      },
    },

    openGraph: {
      title: titles[locale] ?? titles.pt,
      description: descriptions[locale] ?? descriptions.pt,
      url: `${BASE}/${locale}`,
      siteName: 'Shop Builds',
      locale: locale === 'pt' ? 'pt_PT' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Shop Builds — Landing Pages Profissionais',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.pt,
      description: descriptions[locale] ?? descriptions.pt,
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: '32x32' },
      ],
      apple: '/apple-touch-icon.png',
    },

    verification: {
      google: '',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE}/#business`,
  name: 'Shop Builds',
  url: BASE,
  logo: `${BASE}/favicon.svg`,
  image: `${BASE}/og-image.png`,
  description: 'Professional landing page creation service. Delivered in 7 days with unlimited revisions and full money-back guarantee.',
  email: 'Lucasbreno@proton.me',
  telephone: '+351243302900',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Estrada de Mata Burros, Apartamento 1, Quinta do Vale Bom',
    postalCode: '2050-378',
    addressLocality: 'Azambuja',
    addressCountry: 'PT',
  },
  vatID: '315027371',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Credit Card, Debit Card',
  areaServed: [
    { '@type': 'Country', name: 'Portugal' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Continent', name: 'Europe' },
  ],
  serviceType: ['Landing Page Design', 'Web Development', 'SEO Optimisation'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Landing Page Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '49',
        priceCurrency: 'EUR',
        description: '1 landing page, up to 5 sections, 7-day delivery, unlimited revisions.',
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '99',
        priceCurrency: 'EUR',
        description: 'Up to 10 sections, copywriting, animations, SEO, Analytics, 7-day delivery.',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '299',
        priceCurrency: 'EUR',
        description: 'Unlimited sections, advanced SEO, Core Web Vitals 90+, deploy included.',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://github.com/dscompany2k25/shopbuilds',
  ],
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
