export const dynamic = 'force-dynamic';
import Link from 'next/link';

const t: Record<string, { back: string; title: string; updated: string; sections: { h: string; b: string }[] }> = {
  pt: {
    back: '← Voltar', title: 'Política de Privacidade', updated: 'Última actualização: Maio 2026',
    sections: [
      { h: '1. Responsável pelo Tratamento', b: 'Lucas Breno Ferreira da Costa, NIF 315027371, Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal. Contacto: Lucasbreno@proton.me | +351 243 302 900.' },
      { h: '2. Dados Recolhidos', b: 'Recolhemos: nome, e-mail, telefone (opcional), informações de pagamento (processadas exclusivamente pela Stripe — não armazenamos dados de cartão), endereço IP e dados de navegação (via cookies analíticos, com consentimento).' },
      { h: '3. Finalidade do Tratamento', b: 'Os dados são tratados para: (a) execução do contrato de serviços; (b) faturação e obrigações fiscais; (c) comunicação sobre o projecto; (d) marketing, apenas com consentimento expresso.' },
      { h: '4. Base Legal', b: 'Execução do contrato (art. 6.º, n.º 1, al. b) RGPD); obrigação legal (al. c)); interesse legítimo (al. f)); consentimento para marketing (al. a)).' },
      { h: '5. Conservação dos Dados', b: 'Dados conservados enquanto necessário para a execução do contrato e, após término, pelo período legalmente exigido para fins fiscais (em regra, 10 anos).' },
      { h: '6. Partilha de Dados', b: 'Dados podem ser partilhados com: Stripe, Inc. (pagamentos); Vercel, Inc. (alojamento); Google Analytics (dados anonimizados). Não vendemos nem cedemos dados a terceiros para fins comerciais.' },
      { h: '7. Os Seus Direitos (RGPD)', b: 'Tem direito de acesso, rectificação, apagamento, limitação, portabilidade e oposição. Contacte Lucasbreno@proton.me. Pode reclamar junto da CNPD (cnpd.pt).' },
      { h: '8. Cookies', b: 'Usamos cookies essenciais (funcionamento do site) e analíticos (com consentimento). Pode gerir as preferências nas definições do browser.' },
      { h: '9. Segurança', b: 'Implementamos medidas técnicas e organizativas para proteger os seus dados contra acesso não autorizado, perda ou destruição.' },
      { h: '10. Transferências Internacionais', b: 'Os seus dados podem ser processados fora do EEE pelos nossos subcontratantes (Stripe, Vercel), que operam sob adequadas garantias de protecção.' },
    ],
  },
  es: {
    back: '← Volver', title: 'Política de Privacidad', updated: 'Última actualización: Mayo 2026',
    sections: [
      { h: '1. Responsable del Tratamiento', b: 'Lucas Breno Ferreira da Costa, NIF 315027371, Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal. Contacto: Lucasbreno@proton.me | +351 243 302 900.' },
      { h: '2. Datos Recogidos', b: 'Recogemos: nombre, correo electrónico, teléfono (opcional), información de pago (procesada exclusivamente por Stripe — no almacenamos datos de tarjeta), dirección IP y datos de navegación.' },
      { h: '3. Finalidad del Tratamiento', b: 'Los datos se tratan para: (a) ejecución del contrato; (b) facturación y obligaciones fiscales; (c) comunicación del proyecto; (d) marketing, solo con consentimiento expreso.' },
      { h: '4. Base Legal', b: 'Ejecución del contrato (art. 6.1.b RGPD); obligación legal (art. 6.1.c); interés legítimo (art. 6.1.f); consentimiento para marketing (art. 6.1.a).' },
      { h: '5. Conservación de Datos', b: 'Datos conservados durante el tiempo necesario para la ejecución del contrato y, tras su finalización, el período legalmente requerido (generalmente 10 años).' },
      { h: '6. Compartición de Datos', b: 'Datos pueden compartirse con: Stripe, Inc. (pagos); Vercel, Inc. (hosting); Google Analytics (datos anonimizados). No vendemos datos a terceros.' },
      { h: '7. Sus Derechos (RGPD)', b: 'Tiene derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición. Contacte Lucasbreno@proton.me.' },
      { h: '8. Cookies', b: 'Usamos cookies esenciales y analíticas (con consentimiento). Puede gestionar sus preferencias en la configuración del navegador.' },
      { h: '9. Seguridad', b: 'Implementamos medidas técnicas y organizativas para proteger sus datos contra el acceso no autorizado.' },
      { h: '10. Transferencias Internacionales', b: 'Sus datos pueden ser procesados fuera del EEE por nuestros subcontratistas (Stripe, Vercel), que operan bajo garantías adecuadas de protección.' },
    ],
  },
  en: {
    back: '← Back', title: 'Privacy Policy', updated: 'Last updated: May 2026',
    sections: [
      { h: '1. Data Controller', b: 'Lucas Breno Ferreira da Costa, VAT 315027371, Estrada de Mata Burros, Apt. 1, Quinta do Vale Bom, 2050-378, Portugal. Contact: Lucasbreno@proton.me | +351 243 302 900.' },
      { h: '2. Data Collected', b: 'We collect: name, email address, phone number (optional), payment information (processed exclusively by Stripe — we do not store card data), IP address and browsing data (via analytics cookies, with consent).' },
      { h: '3. Purpose of Processing', b: 'Data is processed for: (a) performance of the service contract; (b) invoicing and tax compliance; (c) project-related communication; (d) marketing, only with explicit consent.' },
      { h: '4. Legal Basis', b: 'Contract performance (Art. 6(1)(b) GDPR); legal obligation (Art. 6(1)(c)); legitimate interest (Art. 6(1)(f)); consent for marketing (Art. 6(1)(a)).' },
      { h: '5. Data Retention', b: 'Data is retained for as long as necessary for contract performance and, after termination, for the legally required period for tax purposes (generally 10 years).' },
      { h: '6. Data Sharing', b: 'Data may be shared with: Stripe, Inc. (payment processing); Vercel, Inc. (website hosting); Google Analytics (anonymised data). We do not sell data to third parties.' },
      { h: '7. Your Rights (GDPR)', b: 'You have the right to access, rectify, erase, restrict, port and object to processing. Contact Lucasbreno@proton.me.' },
      { h: '8. Cookies', b: 'We use essential cookies and analytics cookies (with consent). You can manage preferences in your browser settings.' },
      { h: '9. Security', b: 'We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss or destruction.' },
      { h: '10. International Transfers', b: 'Your data may be processed outside the EEA by our subprocessors (Stripe, Vercel), who operate under adequate protection guarantees.' },
    ],
  },
};

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const c = t[locale] ?? t.en;
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}`} className="text-[#444] hover:text-white text-xs transition-colors mb-12 inline-block">{c.back}</Link>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><span className="font-bold text-black text-xs">SB</span></div>
          <span className="font-bold text-white text-base">ShopBulds</span>
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
