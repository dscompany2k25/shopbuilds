import { MetadataRoute } from 'next';

const BASE = 'https://shopbulds.com';
const locales = ['pt', 'es', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Main pages — highest priority
  const mainPages = locales.map((locale) => ({
    url: `${BASE}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: locale === 'pt' ? 1.0 : 0.9,
  }));

  // Legal pages — lower priority
  const legalRoutes = ['/support', '/privacy', '/terms', '/refund', '/cookies'];
  const legalPages = locales.flatMap((locale) =>
    legalRoutes.map((route) => ({
      url: `${BASE}/${locale}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }))
  );

  return [...mainPages, ...legalPages];
}
