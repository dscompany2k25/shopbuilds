export const dynamic = 'force-dynamic';
import Link from 'next/link';

export default function SuccessPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { plan?: string };
}) {
  const planMessages: Record<string, Record<string, string>> = {
    pt: {
      starter: 'Starter — 49€',
      growth: 'Growth — 99€',
      pro: 'Pro — 299€',
    },
    es: {
      starter: 'Starter — 49€',
      growth: 'Growth — 99€',
      pro: 'Pro — 299€',
    },
    en: {
      starter: 'Starter — €49',
      growth: 'Growth — €99',
      pro: 'Pro — €299',
    },
  };

  const locale = params.locale;
  const plan = searchParams.plan || 'growth';
  const planLabel = planMessages[locale]?.[plan] || planMessages.pt.growth;

  const content: Record<string, { title: string; sub: string; step1: string; step2: string; back: string }> = {
    pt: {
      title: 'Pagamento confirmado.',
      sub: `Encomenda recebida: ${planLabel}`,
      step1: 'Em menos de 1 hora receberás um email com o formulário de briefing.',
      step2: 'Assim que o preenchermos, arrancamos com a tua landing page. Estamos prontos.',
      back: 'Voltar ao início',
    },
    es: {
      title: 'Pago confirmado.',
      sub: `Pedido recibido: ${planLabel}`,
      step1: 'En menos de 1 hora recibirás un email con el formulario de briefing.',
      step2: 'Una vez que lo completes, empezamos con tu landing page. Estamos listos.',
      back: 'Volver al inicio',
    },
    en: {
      title: 'Payment confirmed.',
      sub: `Order received: ${planLabel}`,
      step1: 'Within 1 hour you will receive an email with the briefing form.',
      step2: 'Once you fill it in, we start on your landing page. We are ready.',
      back: 'Back to home',
    },
  };

  const c = content[locale] || content.pt;

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        {/* Check mark */}
        <div className="w-16 h-16 border border-[#2a2a2a] flex items-center justify-center mx-auto mb-8">
          <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="font-display font-extrabold text-white text-3xl mb-3">{c.title}</h1>
        <p className="text-[#888] text-sm mb-10">{c.sub}</p>

        <div className="border border-[#1a1a1a] p-6 text-left space-y-4 mb-10">
          <div className="flex gap-3">
            <span className="text-[#333] font-display font-bold text-lg">01</span>
            <p className="text-[#888] text-sm leading-relaxed">{c.step1}</p>
          </div>
          <div className="h-px bg-[#111]" />
          <div className="flex gap-3">
            <span className="text-[#333] font-display font-bold text-lg">02</span>
            <p className="text-[#888] text-sm leading-relaxed">{c.step2}</p>
          </div>
        </div>

        <p className="text-[#444] text-xs mb-6">
          Dúvidas? <a href="mailto:Lucasbreno@proton.me" className="text-[#666] hover:text-white transition-colors">Lucasbreno@proton.me</a>
        </p>

        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#666] hover:text-white hover:border-[#444] px-6 py-3 text-sm transition-colors duration-200"
        >
          ← {c.back}
        </Link>
      </div>
    </main>
  );
}
