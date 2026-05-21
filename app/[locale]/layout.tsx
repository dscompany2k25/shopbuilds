import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    pt: 'Shop Builds — Landing Pages que Convertem | Entrega em 7 Dias',
    es: 'Shop Builds — Landing Pages que Convierten | Entrega en 7 Días',
    en: 'Shop Builds — Landing Pages that Convert | 7-Day Delivery',
  };

  const descriptions: Record<string, string> = {
    pt: 'Landing pages profissionais entregues em 7 dias, revisões ilimitadas e garantia de reembolso total. A partir de 49€.',
    es: 'Landing pages profesionales entregadas en 7 días, revisiones ilimitadas y garantía de reembolso total. Desde 49€.',
    en: 'Professional landing pages delivered in 7 days, unlimited revisions and full money-back guarantee. From €49.',
  };

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
    metadataBase: new URL('https://shopbulds.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt-PT': '/pt',
        'es-ES': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      title: titles[locale] || titles.pt,
      description: descriptions[locale] || descriptions.pt,
      url: `https://shopbulds.com/${locale}`,
      siteName: 'Shop Builds',
      locale: locale === 'pt' ? 'pt_PT' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.pt,
      description: descriptions[locale] || descriptions.pt,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Shop Builds',
              url: 'https://shopbulds.com',
              email: 'Lucasbreno@proton.me',
              telephone: '+351243302900',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Estrada de Mata Burros, Apartamento 1, Quinta do Vale Bom',
                postalCode: '2050-378',
                addressCountry: 'PT',
              },
              vatID: '315027371',
              priceRange: '€€',
              description: 'Professional landing pages delivered in 7 days with unlimited revisions.',
            }),
          }}
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
