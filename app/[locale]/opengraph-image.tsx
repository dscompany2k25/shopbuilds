import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shop Builds — Landing Pages Profissionais';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const headline: Record<string, string> = {
    pt: 'Landing Pages que Convertem.',
    es: 'Landing Pages que Convierten.',
    en: 'Landing Pages that Convert.',
  };

  const sub: Record<string, string> = {
    pt: 'Entrega em 7 dias · Revisões ilimitadas · A partir de 49€',
    es: 'Entrega en 7 días · Revisiones ilimitadas · Desde 49€',
    en: '7-day delivery · Unlimited revisions · From €49',
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              background: '#ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 800,
              color: '#0a0a0a',
            }}
          >
            SB
          </div>
          <span style={{ color: '#f0f0f0', fontSize: '20px', fontWeight: 700 }}>
            Shop<span style={{ color: '#666' }}>Builds</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f0f0f0',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          {headline[locale] ?? headline.pt}
        </div>

        {/* Sub */}
        <div style={{ fontSize: '24px', color: '#888', marginBottom: '48px' }}>
          {sub[locale] ?? sub.pt}
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '10px 20px',
            fontSize: '16px',
            color: '#aaa',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          shopbuilds.com
        </div>
      </div>
    ),
    { ...size }
  );
}
