import { MetadataRoute } from 'next';

const BASE_URL = 'https://shopbulds.com';
const locales = ['pt', 'es', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/privacy', '/terms', '/refund'];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.3,
      });
    }
  }

  return entries;
}
