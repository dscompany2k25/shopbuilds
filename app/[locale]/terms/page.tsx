export const dynamic = 'force-dynamic';
import Link from 'next/link';

const t: Record<string, { back: string; title: string; updated: string; sections: { h: string; b: string }[] }> = {
  pt: {
    back: '← Voltar', title: 'Termos de Serviço', updated: 'Última actualização: Maio 2026',
    sections: [
      { h: '1. Partes', b: 'O presente contrato é celebrado entre Lucas Breno Ferreira da Costa, NIF 315027371 ("Prestador"), e o cliente ("Cliente"), adquirente dos serviços de criação de landing pages através de shopbuilds.com.' },
      { h: '2. Descrição dos Serviços', b: 'O Prestador oferece serviços de criação de landing pages profissionais. Os planos disponíveis e respectivos preços constam da página de preços do website. Cada plano inclui as funcionalidades descritas na página de preços no momento da compra.' },
      { h: '3. Pagamento', b: 'O pagamento é efectuado antecipadamente, de forma segura através da Stripe. O Cliente recebe recibo por e-mail imediatamente após o pagamento. Os preços incluem IVA quando aplicável.' },
      { h: '4. Briefing e Processo de Trabalho', b: 'Após confirmação do pagamento, o Prestador envia ao Cliente um formulário de briefing. O Cliente dispõe de 30 dias para submeter o briefing. O prazo de entrega de 7 dias conta a partir da recepção do briefing completo.' },
      { h: '5. Revisões', b: 'Todos os planos incluem revisões ilimitadas. As revisões devem ser solicitadas por escrito (e-mail) e respondidas no prazo de 3 dias úteis. O projecto é considerado concluído quando o Cliente confirmar a sua aprovação por escrito.' },
      { h: '6. Propriedade Intelectual', b: 'Após pagamento integral e aprovação final, todos os direitos sobre o trabalho desenvolvido são transferidos para o Cliente. O Prestador reserva o direito de exibir o projecto em portfolio, salvo solicitação expressa de confidencialidade.' },
      { h: '7. Garantia de Reembolso', b: 'O Prestador oferece garantia de reembolso total caso o Cliente não fique satisfeito com a primeira versão entregue. O pedido de reembolso deve ser efectuado por e-mail para Lucasbreno@proton.me dentro de 14 dias após a entrega da primeira versão.' },
      { h: '8. Limitação de Responsabilidade', b: 'O Prestador não se responsabiliza por perdas de receita, perda de dados ou quaisquer danos indirectos resultantes da utilização dos serviços. A responsabilidade total do Prestador fica limitada ao valor pago pelo Cliente pelo serviço em questão.' },
      { h: '9. Rescisão', b: 'O Cliente pode cancelar antes do envio do briefing com reembolso total. Após início do trabalho, aplica-se a política de reembolso descrita na secção 7.' },
      { h: '10. Lei Aplicável', b: 'O presente contrato é regido pela lei portuguesa. Para resolução de litígios, as partes submetem-se à jurisdição dos tribunais portugueses, sem prejuízo do direito do consumidor de recorrer a mecanismos alternativos de resolução de litígios (RAL).' },
      { h: '11. Contacto', b: 'Para qualquer questão relativa a estes termos: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
  es: {
    back: '← Volver', title: 'Términos de Servicio', updated: 'Última actualización: Mayo 2026',
    sections: [
      { h: '1. Partes', b: 'Este contrato se celebra entre Lucas Breno Ferreira da Costa, NIF 315027371 ("Proveedor"), y el cliente ("Cliente"), adquirente de los servicios de creación de landing pages a través de shopbuilds.com.' },
      { h: '2. Descripción de los Servicios', b: 'El Proveedor ofrece servicios de creación de landing pages profesionales. Los planes disponibles y sus precios se encuentran en la página de precios del sitio web.' },
      { h: '3. Pago', b: 'El pago se realiza por adelantado de forma segura a través de Stripe. El Cliente recibe un recibo por correo electrónico inmediatamente después del pago.' },
      { h: '4. Briefing y Proceso de Trabajo', b: 'Tras la confirmación del pago, el Proveedor envía al Cliente un formulario de briefing. El plazo de entrega de 7 días se cuenta desde la recepción del briefing completo.' },
      { h: '5. Revisiones', b: 'Todos los planes incluyen revisiones ilimitadas. Las revisiones deben solicitarse por escrito y se responderán en 3 días hábiles.' },
      { h: '6. Propiedad Intelectual', b: 'Tras el pago íntegro y aprobación final, todos los derechos sobre el trabajo se transfieren al Cliente.' },
      { h: '7. Garantía de Reembolso', b: 'Se ofrece garantía de reembolso total si el Cliente no queda satisfecho con la primera versión entregada. La solicitud debe realizarse en Lucasbreno@proton.me dentro de los 14 días siguientes a la entrega.' },
      { h: '8. Limitación de Responsabilidad', b: 'La responsabilidad total del Proveedor queda limitada al valor pagado por el Cliente por el servicio en cuestión.' },
      { h: '9. Rescisión', b: 'El Cliente puede cancelar antes del envío del briefing con reembolso total. Tras el inicio del trabajo, se aplica la política de reembolso de la sección 7.' },
      { h: '10. Ley Aplicable', b: 'Este contrato se rige por la ley portuguesa. Las partes se someten a la jurisdicción de los tribunales portugueses.' },
      { h: '11. Contacto', b: 'Para cualquier consulta: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
  en: {
    back: '← Back', title: 'Terms of Service', updated: 'Last updated: May 2026',
    sections: [
      { h: '1. Parties', b: 'This agreement is entered into between Lucas Breno Ferreira da Costa, VAT 315027371 ("Provider"), and the client ("Client"), purchaser of landing page creation services through shopbuilds.com.' },
      { h: '2. Service Description', b: 'The Provider offers professional landing page creation services. Available plans and their prices are listed on the website pricing page at the time of purchase.' },
      { h: '3. Payment', b: 'Payment is made in advance, securely through Stripe. The Client receives a receipt by email immediately after payment. Prices include VAT where applicable.' },
      { h: '4. Briefing and Workflow', b: 'After payment confirmation, the Provider sends the Client a briefing form. The Client has 30 days to submit the briefing. The 7-day delivery period starts from receipt of the completed briefing.' },
      { h: '5. Revisions', b: 'All plans include unlimited revisions. Revisions must be requested in writing (email) and are addressed within 3 business days. The project is considered complete once the Client confirms approval in writing.' },
      { h: '6. Intellectual Property', b: 'After full payment and final approval, all rights to the developed work are transferred to the Client. The Provider reserves the right to display the project in their portfolio unless confidentiality is explicitly requested.' },
      { h: '7. Money-Back Guarantee', b: 'The Provider offers a full refund if the Client is not satisfied with the first delivered version. The refund request must be made by email to Lucasbreno@proton.me within 14 days of the first version delivery.' },
      { h: '8. Limitation of Liability', b: "The Provider's total liability is limited to the amount paid by the Client for the service in question. The Provider is not liable for indirect damages or loss of revenue." },
      { h: '9. Cancellation', b: 'The Client may cancel before submitting the briefing for a full refund. After work has begun, the refund policy in section 7 applies.' },
      { h: '10. Governing Law', b: 'This agreement is governed by Portuguese law. The parties submit to the jurisdiction of Portuguese courts.' },
      { h: '11. Contact', b: 'For any questions regarding these terms: Lucasbreno@proton.me | +351 243 302 900.' },
    ],
  },
};

export default function TermsPage({ params }: { params: { locale: string } }) {
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
