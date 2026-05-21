export const dynamic = 'force-dynamic';
import Link from 'next/link';

export default function RefundPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}`} className="text-[#444] hover:text-white text-xs transition-colors mb-12 inline-block">
          ← Voltar
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="font-display font-extrabold text-black text-sm">SB</span>
          </div>
          <span className="font-display font-bold text-white">ShopBuilds</span>
        </div>

        <h1 className="font-display font-extrabold text-white text-3xl mb-2">Política de Reembolso</h1>
        <p className="text-[#444] text-xs mb-12">Última actualização: Janeiro 2025</p>

        <div className="space-y-8 text-[#888] text-sm leading-relaxed">
          <section className="border border-[#1a1a1a] p-6">
            <h2 className="font-display font-bold text-white text-lg mb-3">Garantia de Satisfação Total</h2>
            <p>Acreditamos no trabalho que entregamos. Se não ficares satisfeito com o resultado, devolvemos 100% do valor pago. Sem perguntas, sem burocracia.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">1. Condições para Reembolso</h2>
            <p>Tens direito a reembolso total nas seguintes situações:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Não ficares satisfeito com a primeira versão da landing page entregue;',
                'A entrega ultrapassar o prazo de 7 dias úteis por razões imputáveis à Shop Builds;',
                'O projecto não corresponder ao briefing acordado.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#333] font-display font-bold">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">2. Como Solicitar</h2>
            <p>Envia um email para <a href="mailto:Lucasbreno@proton.me" className="text-[#666] hover:text-white transition-colors">Lucasbreno@proton.me</a> com o assunto "Reembolso" e o número da tua encomenda. Processamos o reembolso em até 5 dias úteis.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">3. Prazo para Solicitação</h2>
            <p>O pedido de reembolso deve ser efectuado até 14 dias após a entrega do projecto. Após aprovação das revisões e confirmação de satisfação pelo cliente, não é possível solicitar reembolso.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">4. Método de Devolução</h2>
            <p>O reembolso é efectuado pelo mesmo método de pagamento utilizado na compra, através da plataforma Stripe. O prazo de crédito na conta depende do banco do cliente (normalmente 5-10 dias úteis).</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">5. Contacto</h2>
            <p>Para qualquer questão: <a href="mailto:Lucasbreno@proton.me" className="text-[#666] hover:text-white transition-colors">Lucasbreno@proton.me</a> | +351 243 302 900</p>
          </section>
        </div>
      </div>
    </main>
  );
}
