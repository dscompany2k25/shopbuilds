export const dynamic = 'force-dynamic';
import Link from 'next/link';

const t: Record<string, { back: string; title: string; updated: string; sections: { h: string; b: string }[] }> = {
  pt: {
    back: '← Voltar', title: 'Política de Cookies', updated: 'Última actualização: Maio 2026',
    sections: [
      { h: '1. O que são cookies?', b: 'Cookies são pequenos ficheiros de texto armazenados no teu dispositivo quando visitas um website. Permitem que o site se lembre das tuas preferências e melhore a tua experiência de navegação.' },
      { h: '2. Cookies que utilizamos', b: 'Utilizamos dois tipos de cookies: (a) Cookies essenciais — necessários para o funcionamento do website (ex: preferência de idioma, sessão). Não podem ser desactivados. (b) Cookies analíticos — utilizados com o teu consentimento para medir o tráfego e comportamento dos utilizadores (Google Analytics, com anonimização de IP activada).' },
      { h: '3. Cookies essenciais', b: 'Estes cookies são estritamente necessários para o funcionamento do site. Incluem: preferência de idioma (1 ano), consentimento de cookies (1 ano), dados de sessão (sessão). Não requerem consentimento.' },
      { h: '4. Cookies analíticos (Google Analytics)', b: 'Com o teu consentimento, utilizamos o Google Analytics para perceber como os visitantes utilizam o site. Os dados são anonimizados e não identificam pessoalmente nenhum utilizador. Cookie: _ga (2 anos), _gid (24 horas). Podes optar por não participar em analytics.google.com/analytics/optout.' },
      { h: '5. Cookies de terceiros', b: 'O nosso processador de pagamentos, Stripe, pode definir cookies necessários para o processamento seguro de pagamentos. Consulta a política de privacidade da Stripe em stripe.com/privacy.' },
      { h: '6. Como gerir os teus cookies', b: 'Podes aceitar ou recusar cookies analíticos através do banner de cookies no nosso site. Podes também gerir ou apagar cookies directamente nas definições do teu browser: Chrome, Firefox, Safari, Edge. Nota: desactivar cookies essenciais pode afectar o funcionamento do site.' },
      { h: '7. Actualizações', b: 'Podemos actualizar esta política periodicamente. A data da última actualização está indicada no início deste documento.' },
      { h: '8. Contacto', b: 'Para questões sobre cookies e privacidade: Lucasbreno@proton.me' },
    ],
  },
  es: {
    back: '← Volver', title: 'Política de Cookies', updated: 'Última actualización: Mayo 2026',
    sections: [
      { h: '1. ¿Qué son las cookies?', b: 'Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias y mejore tu experiencia de navegación.' },
      { h: '2. Cookies que utilizamos', b: 'Utilizamos dos tipos de cookies: (a) Cookies esenciales — necesarias para el funcionamiento del sitio web. No pueden desactivarse. (b) Cookies analíticas — utilizadas con tu consentimiento para medir el tráfico (Google Analytics, con anonimización de IP activada).' },
      { h: '3. Cookies esenciales', b: 'Incluyen: preferencia de idioma (1 año), consentimiento de cookies (1 año), datos de sesión. No requieren consentimiento.' },
      { h: '4. Cookies analíticas (Google Analytics)', b: 'Con tu consentimiento, usamos Google Analytics para entender cómo los visitantes usan el sitio. Los datos son anonimizados. Cookie: _ga (2 años), _gid (24 horas). Puedes optar por no participar en analytics.google.com/analytics/optout.' },
      { h: '5. Cookies de terceros', b: 'Stripe puede establecer cookies necesarias para el procesamiento seguro de pagos. Consulta stripe.com/privacy.' },
      { h: '6. Cómo gestionar tus cookies', b: 'Puedes aceptar o rechazar cookies analíticas a través del banner de cookies. También puedes gestionar cookies directamente en la configuración de tu navegador.' },
      { h: '7. Actualizaciones', b: 'Podemos actualizar esta política periódicamente. La fecha de la última actualización se indica al inicio de este documento.' },
      { h: '8. Contacto', b: 'Para preguntas sobre cookies y privacidad: Lucasbreno@proton.me' },
    ],
  },
  en: {
    back: '← Back', title: 'Cookie Policy', updated: 'Last updated: May 2026',
    sections: [
      { h: '1. What are cookies?', b: 'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and improve your browsing experience.' },
      { h: '2. Cookies we use', b: 'We use two types of cookies: (a) Essential cookies — required for the website to function (e.g., language preference, session). Cannot be disabled. (b) Analytics cookies — used with your consent to measure traffic and user behaviour (Google Analytics, with IP anonymisation enabled).' },
      { h: '3. Essential cookies', b: 'These include: language preference (1 year), cookie consent (1 year), session data (session). These do not require consent.' },
      { h: '4. Analytics cookies (Google Analytics)', b: 'With your consent, we use Google Analytics to understand how visitors use the site. Data is anonymised and does not personally identify any user. Cookies: _ga (2 years), _gid (24 hours). You can opt out at analytics.google.com/analytics/optout.' },
      { h: '5. Third-party cookies', b: 'Our payment processor, Stripe, may set cookies required for secure payment processing. See stripe.com/privacy.' },
      { h: '6. How to manage your cookies', b: 'You can accept or reject analytics cookies via the cookie banner on our site. You can also manage or delete cookies directly in your browser settings.' },
      { h: '7. Updates', b: 'We may update this policy periodically. The date of the last update is shown at the top of this document.' },
      { h: '8. Contact', b: 'For questions about cookies and privacy: Lucasbreno@proton.me' },
    ],
  },
};

export default function CookiesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const c = t[locale] ?? t.en;
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}`} className="text-[#444] hover:text-white text-xs transition-colors mb-12 inline-block">{c.back}</Link>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><span className="font-bold text-black text-xs">SB</span></div>
          <span className="font-bold text-white text-base">ShopBuilds</span>
        </div>
        <h1 className="font-display font-extrabold text-white text-3xl mb-2">{c.title}</h1>
        <p className="text-[#444] text-xs mb-12">{c.updated}</p>
        <div className="space-y-8 text-[#888] text-sm leading-relaxed">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display font-bold text-white text-base mb-2">{s.h}</h2>
              <p>{s.b}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
