export const dynamic = 'force-dynamic';
import Link from 'next/link';

const t: Record<string, {
  back: string; title: string; subtitle: string; updated: string;
  sections: { h: string; b: string | string[] }[];
  contact: { title: string; email: string; phone: string; hours: string; response: string };
}> = {
  pt: {
    back: '← Voltar',
    title: 'Atendimento ao Cliente',
    subtitle: 'Estamos aqui para ajudar. Resposta garantida em até 24 horas.',
    updated: 'Última actualização: Maio 2026',
    contact: {
      title: 'Contacto Directo',
      email: 'Lucasbreno@proton.me',
      phone: '+351 243 302 900',
      hours: 'Segunda a Sexta, 9h–18h (GMT+1)',
      response: 'Tempo médio de resposta: até 24 horas úteis',
    },
    sections: [
      {
        h: 'Como podemos ajudar?',
        b: 'Se tens dúvidas sobre o teu pedido, precisas de acompanhamento do teu projecto ou queres solicitar uma alteração, entra em contacto directamente por e-mail ou telefone. A nossa equipa responde em até 24 horas úteis.',
      },
      {
        h: 'Acompanhamento do Pedido',
        b: 'Após o pagamento, receberás um e-mail de confirmação com os próximos passos. O briefing será enviado por e-mail e o teu projecto fica com acompanhamento directo até à entrega final.',
      },
      {
        h: 'Revisões e Alterações',
        b: 'Todos os planos incluem revisões ilimitadas sem custo adicional. Para solicitar alterações, envia um e-mail para Lucasbreno@proton.me com o assunto "Revisão — [teu nome]" e descreve as alterações pretendidas. Respondemos em até 24 horas úteis.',
      },
      {
        h: 'Pedido de Reembolso',
        b: [
          'Oferecemos garantia de reembolso total. Para solicitar reembolso:',
          '1. Envia um e-mail para Lucasbreno@proton.me com o assunto "Pedido de Reembolso"',
          '2. Inclui o número do teu pedido Stripe (encontras no recibo por e-mail)',
          '3. Receberás confirmação em até 24 horas',
          '4. O reembolso é processado pela Stripe em 5–10 dias úteis para o método de pagamento original',
        ],
      },
      {
        h: 'Contestação de Cobranças',
        b: 'Se identificares uma cobrança que não reconheces, contacta-nos imediatamente antes de abrir uma contestação junto ao banco. Na maioria dos casos resolvemos o problema diretamente de forma mais rápida. A descrição no extrato do teu cartão aparecerá como SHOPBULDS.COM.',
      },
      {
        h: 'Cancelamento',
        b: 'Podes cancelar o teu pedido sem custo a qualquer momento antes de submeteres o briefing. Após o início do trabalho, aplica-se a nossa política de reembolso. Para cancelar, envia um e-mail para Lucasbreno@proton.me com o assunto "Cancelamento — [teu nome]".',
      },
      {
        h: 'Privacidade e Dados',
        b: 'Para exercer os teus direitos RGPD (acesso, rectificação, apagamento de dados), consulta a nossa Política de Privacidade ou envia um e-mail para Lucasbreno@proton.me.',
      },
      {
        h: 'Resolução de Litígios',
        b: 'Em caso de litígio não resolvido directamente, podes recorrer à plataforma europeia de resolução de litígios online: ec.europa.eu/consumers/odr/. Em Portugal, podes também contactar o CNIACC (cniacc.pt) ou o CIMAAL (cimaal.pt).',
      },
    ],
  },
  es: {
    back: '← Volver',
    title: 'Atención al Cliente',
    subtitle: 'Estamos aquí para ayudarte. Respuesta garantizada en 24 horas.',
    updated: 'Última actualización: Mayo 2026',
    contact: {
      title: 'Contacto Directo',
      email: 'Lucasbreno@proton.me',
      phone: '+351 243 302 900',
      hours: 'Lunes a Viernes, 9h–18h (GMT+1)',
      response: 'Tiempo medio de respuesta: hasta 24 horas hábiles',
    },
    sections: [
      {
        h: '¿Cómo podemos ayudarte?',
        b: 'Si tienes preguntas sobre tu pedido, necesitas seguimiento de tu proyecto o quieres solicitar un cambio, contáctanos directamente por email o teléfono. Nuestro equipo responde en un máximo de 24 horas hábiles.',
      },
      {
        h: 'Seguimiento del Pedido',
        b: 'Tras el pago, recibirás un email de confirmación con los próximos pasos. El briefing se enviará por email y tu proyecto tendrá seguimiento directo hasta la entrega final.',
      },
      {
        h: 'Revisiones y Cambios',
        b: 'Todos los planes incluyen revisiones ilimitadas sin coste adicional. Para solicitar cambios, envía un email a Lucasbreno@proton.me con el asunto "Revisión — [tu nombre]" y describe los cambios deseados.',
      },
      {
        h: 'Solicitud de Reembolso',
        b: [
          'Ofrecemos garantía de reembolso total. Para solicitarlo:',
          '1. Envía un email a Lucasbreno@proton.me con el asunto "Solicitud de Reembolso"',
          '2. Incluye el número de tu pedido Stripe (lo encontrarás en el recibo por email)',
          '3. Recibirás confirmación en 24 horas',
          '4. El reembolso se procesa vía Stripe en 5–10 días hábiles al método de pago original',
        ],
      },
      {
        h: 'Disputa de Cargos',
        b: 'Si identificas un cargo que no reconoces, contáctanos antes de abrir una disputa con tu banco. La descripción en tu extracto aparecerá como SHOPBULDS.COM.',
      },
      {
        h: 'Cancelación',
        b: 'Puedes cancelar tu pedido sin coste en cualquier momento antes de enviar el briefing. Para cancelar, envía un email a Lucasbreno@proton.me con el asunto "Cancelación — [tu nombre]".',
      },
      {
        h: 'Privacidad y Datos',
        b: 'Para ejercer tus derechos RGPD, consulta nuestra Política de Privacidad o envía un email a Lucasbreno@proton.me.',
      },
      {
        h: 'Resolución de Disputas',
        b: 'En caso de litigio no resuelto directamente, puedes recurrir a la plataforma europea de resolución de litigios online: ec.europa.eu/consumers/odr/.',
      },
    ],
  },
  en: {
    back: '← Back',
    title: 'Customer Support',
    subtitle: 'We are here to help. Guaranteed response within 24 hours.',
    updated: 'Last updated: May 2026',
    contact: {
      title: 'Direct Contact',
      email: 'Lucasbreno@proton.me',
      phone: '+351 243 302 900',
      hours: 'Monday to Friday, 9am–6pm (GMT+1)',
      response: 'Average response time: within 24 business hours',
    },
    sections: [
      {
        h: 'How can we help?',
        b: 'If you have questions about your order, need project follow-up, or want to request changes, contact us directly by email or phone. Our team responds within 24 business hours.',
      },
      {
        h: 'Order Tracking',
        b: 'After payment, you will receive a confirmation email with the next steps. The briefing form will be sent by email and your project will have direct follow-up through to final delivery.',
      },
      {
        h: 'Revisions and Changes',
        b: 'All plans include unlimited revisions at no extra cost. To request changes, email Lucasbreno@proton.me with the subject "Revision — [your name]" and describe the changes you want.',
      },
      {
        h: 'Refund Request',
        b: [
          'We offer a full money-back guarantee. To request a refund:',
          '1. Email Lucasbreno@proton.me with the subject "Refund Request"',
          '2. Include your Stripe order number (found in your receipt email)',
          '3. You will receive confirmation within 24 hours',
          '4. The refund is processed by Stripe within 5–10 business days to your original payment method',
        ],
      },
      {
        h: 'Charge Dispute',
        b: 'If you identify a charge you do not recognise, please contact us before opening a dispute with your bank. The description on your card statement will appear as SHOPBULDS.COM.',
      },
      {
        h: 'Cancellation',
        b: 'You may cancel your order at no cost at any time before submitting the briefing. To cancel, email Lucasbreno@proton.me with the subject "Cancellation — [your name]".',
      },
      {
        h: 'Privacy and Data',
        b: 'To exercise your GDPR rights, see our Privacy Policy or email Lucasbreno@proton.me.',
      },
      {
        h: 'Dispute Resolution',
        b: 'If a dispute cannot be resolved directly, you may use the EU Online Dispute Resolution platform: ec.europa.eu/consumers/odr/.',
      },
    ],
  },
};

export default function SupportPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const c = t[locale] ?? t.en;

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}`} className="text-[#444] hover:text-white text-xs transition-colors mb-12 inline-block">
          {c.back}
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-black text-xs">SB</span>
          </div>
          <span className="font-bold text-white text-base">ShopBulds</span>
        </div>

        <h1 className="font-display font-extrabold text-white text-3xl mb-3">{c.title}</h1>
        <p className="text-[#888] text-sm mb-2">{c.subtitle}</p>
        <p className="text-[#444] text-xs mb-10">{c.updated}</p>

        {/* Contact card */}
        <div className="border border-white/10 rounded-2xl p-6 mb-12 bg-white/[0.03]">
          <p className="text-[#555] text-xs uppercase tracking-widest mb-4">{c.contact.title}</p>
          <div className="space-y-2">
            <a href={`mailto:${c.contact.email}`} className="flex items-center gap-3 text-white text-sm hover:text-[#ccc] transition-colors">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c.contact.email}
            </a>
            <a href={`tel:${c.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white text-sm hover:text-[#ccc] transition-colors">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.27 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c.contact.phone}
            </a>
            <p className="flex items-center gap-3 text-[#666] text-xs">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {c.contact.hours}
            </p>
            <p className="text-[#555] text-xs pl-[22px]">{c.contact.response}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-[#888] text-sm leading-relaxed">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display font-bold text-white text-base mb-3">{s.h}</h2>
              {Array.isArray(s.b) ? (
                <ul className="space-y-1.5">
                  {s.b.map((line, j) => (
                    <li key={j} className={j === 0 ? 'mb-2' : 'pl-2'}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{s.b}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
