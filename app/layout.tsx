import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shop Builds — Landing Pages que Convertem',
  description: 'Landing pages profissionais entregues em 7 dias, com revisões ilimitadas e garantia de reembolso total.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
