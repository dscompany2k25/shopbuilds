import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'es', 'en'],
  defaultLocale: 'pt',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
