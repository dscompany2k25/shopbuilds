import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webild-components-2.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'webuild-dev.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
