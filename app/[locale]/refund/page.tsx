export const dynamic = 'force-dynamic';
import Link from 'next/link';

const t: Record<string, { back: string; title: string; updated: string; guarantee: string; sections: { h: string; b: string }[] }> = {
  pt: {
    back: '← Voltar', title: 'Política de Reembolso', updated: 'Última actualização: Maio 2026',
    guarantee: 'Garantia de Satisfação Total — Reembolso de 100% se não ficares satisfeito.',
    sections: [
      { h: 'Âmbito de Aplicação', b: 'Esta política aplica-se a todos os serviços adquiridos em shopbulds.com por Lucas Breno Ferreira da Costa (NIF 315027371).' },
      { h: 'Direito de Reembolso Total', b: 'Garantimos reembolso total do valor pago se não ficares satisfeito com a primeira versão da tua landing page. O pedido deve ser efectuado por e-mail (Lucasbreno@proton.me) dentro de 14 dias após a entrega da primeira versão.' },
      { h: 'Cancelamento antes do Início do Trabalho', b: 'Se cancelares antes de submeter o briefing, reembolsamos 100% do valor pago, sem questões. O reembolso é processado em 5-10 dias úteis, para o método de pagamento original.' },
      { h: 'Cancelamento após Início do Trabalho', b: 'Após submissão do briefing e início do desenvolvimento, aplica-se a garantia de satisfação: se a primeira entrega não corresponder às expectativas, reembolsamos integralmente.' },
      { h: 'Processo de Reembolso', b: 'Para solicitar reembolso: (1) Envia e-mail para Lucasbreno@proton.me com o assunto "Pedido de Reembolso" e o número do teu pedido Stripe; (2) Responderemos em 24 horas; (3) O reembolso é processado via Stripe e aparece na tua conta em 5-10 dias úteis.' },
      { h: 'Excepções', b: 'Não se aplica reembolso em: (a) projectos em que o Cliente aprovou a versão final por escrito; (b) pedidos de reembolso efectuados após 14 dias da primeira entrega; (c) serviços adicionais (domínios, alojamento de terceiros) já adquiridos.' },
      { h: 'Direitos do Consumidor', b: 'Nos termos do Decreto-Lei n.º 24/2014, de 14 de Fevereiro, o consumidor tem direito de livre resolução no prazo de 14 dias após a celebração do contrato, com reembolso total. Este direito pode ser afastado por solicitação expressa do consumidor de início imediato da prestação de serviços.' },
      { h: 'Contacto', b: 'Para questões sobre reembolsos: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
  es: {
    back: '← Volver', title: 'Política de Reembolso', updated: 'Última actualización: Mayo 2026',
    guarantee: 'Garantía de Satisfacción Total — Reembolso del 100% si no quedas satisfecho.',
    sections: [
      { h: 'Ámbito de Aplicación', b: 'Esta política se aplica a todos los servicios adquiridos en shopbulds.com por Lucas Breno Ferreira da Costa (NIF 315027371).' },
      { h: 'Derecho de Reembolso Total', b: 'Garantizamos el reembolso total del importe pagado si no quedas satisfecho con la primera versión de tu landing page. La solicitud debe realizarse por email (Lucasbreno@proton.me) dentro de los 14 días siguientes a la entrega.' },
      { h: 'Cancelación antes del Inicio', b: 'Si cancelas antes de enviar el briefing, reembolsamos el 100% del importe pagado, sin preguntas. El reembolso se procesa en 5-10 días hábiles.' },
      { h: 'Cancelación tras el Inicio', b: 'Tras el envío del briefing e inicio del desarrollo, se aplica la garantía de satisfacción: si la primera entrega no cumple las expectativas, reembolsamos íntegramente.' },
      { h: 'Proceso de Reembolso', b: 'Para solicitar reembolso: (1) Envía un email a Lucasbreno@proton.me con el asunto "Solicitud de Reembolso" y tu número de pedido Stripe; (2) Responderemos en 24 horas; (3) El reembolso se procesa vía Stripe en 5-10 días hábiles.' },
      { h: 'Excepciones', b: 'No se aplica reembolso en: (a) proyectos en los que el Cliente aprobó la versión final por escrito; (b) solicitudes de reembolso realizadas tras 14 días desde la primera entrega; (c) servicios adicionales ya adquiridos.' },
      { h: 'Contacto', b: 'Para consultas sobre reembolsos: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
  en: {
    back: '← Back', title: 'Refund Policy', updated: 'Last updated: May 2026',
    guarantee: '100% Money-Back Guarantee — Full refund if you are not satisfied.',
    sections: [
      { h: 'Scope', b: 'This policy applies to all services purchased at shopbulds.com by Lucas Breno Ferreira da Costa (VAT 315027371).' },
      { h: 'Full Refund Guarantee', b: "We guarantee a full refund if you are not satisfied with the first version of your landing page. The request must be made by email to Lucasbreno@proton.me within 14 days of the first version's delivery." },
      { h: 'Cancellation Before Work Starts', b: 'If you cancel before submitting the briefing, we refund 100% of the amount paid, no questions asked. The refund is processed within 5–10 business days to the original payment method.' },
      { h: 'Cancellation After Work Starts', b: 'After briefing submission and development start, the satisfaction guarantee applies: if the first delivery does not meet your expectations, we will refund in full.' },
      { h: 'Refund Process', b: 'To request a refund: (1) Email Lucasbreno@proton.me with subject "Refund Request" and your Stripe order number; (2) We will respond within 24 hours; (3) Refund is processed via Stripe and appears in your account within 5–10 business days.' },
      { h: 'Exceptions', b: 'No refund applies to: (a) projects where the Client approved the final version in writing; (b) refund requests made more than 14 days after first delivery; (c) third-party add-ons already purchased (domains, hosting).' },
      { h: 'Consumer Rights', b: 'EU consumers have the right to withdraw from the contract within 14 days under the Consumer Rights Directive. This right may be waived by explicit request for immediate service commencement.' },
      { h: 'Contact', b: 'For refund enquiries: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
};

export default function RefundPage({ params }: { params: { locale: string } }) {
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
        <p className="text-[#444] text-xs mb-6">{c.updated}</p>
        <div className="border border-white/10 rounded-2xl p-5 mb-12 text-sm font-semibold text-white bg-white/[0.04]">
          {c.guarantee}
        </div>
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
