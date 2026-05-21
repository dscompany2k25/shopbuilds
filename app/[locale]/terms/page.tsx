export const dynamic = 'force-dynamic';
import Link from 'next/link';

export default function TermsPage({ params }: { params: { locale: string } }) {
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

        <h1 className="font-display font-extrabold text-white text-3xl mb-2">Termos de Serviço</h1>
        <p className="text-[#444] text-xs mb-12">Última actualização: Janeiro 2025</p>

        <div className="space-y-8 text-[#888] text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">1. Partes</h2>
            <p>O presente contrato é celebrado entre Lucas Breno Ferreira da Costa (NIF 315027371), prestador de serviços, e o cliente, adquirente dos serviços de criação de landing pages através do website shopbulds.com.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">2. Serviços Prestados</h2>
            <p>A Shop Builds presta serviços de design e desenvolvimento de landing pages. Os serviços específicos de cada plano estão descritos na página de preços. O âmbito exacto é confirmado através do formulário de briefing enviado após o pagamento.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">3. Processo e Prazos</h2>
            <p>3.1. Após o pagamento, o cliente recebe um formulário de briefing em até 1 hora.</p>
            <p className="mt-2">3.2. O prazo de 7 dias úteis conta a partir da recepção do briefing devidamente preenchido.</p>
            <p className="mt-2">3.3. Atrasos causados por falta de resposta do cliente não são imputáveis à Shop Builds.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">4. Revisões</h2>
            <p>Todos os planos incluem revisões ilimitadas. Uma revisão é definida como um conjunto de alterações solicitadas numa única comunicação. Alterações estruturais que impliquem reconstrução total do projecto estão fora do âmbito das revisões.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">5. Pagamento</h2>
            <p>O pagamento é efectuado integralmente no momento da encomenda, através da plataforma Stripe. Todos os preços incluem IVA quando aplicável.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">6. Propriedade Intelectual</h2>
            <p>Após liquidação total, o cliente adquire todos os direitos sobre o trabalho desenvolvido. A Shop Builds reserva o direito de incluir o projecto no seu portfólio, salvo pedido expresso de confidencialidade.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">7. Garantia e Reembolso</h2>
            <p>Ver Política de Reembolso completa em <Link href={`/${locale}/refund`} className="text-[#666] hover:text-white transition-colors">/refund</Link>.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">8. Limitação de Responsabilidade</h2>
            <p>A Shop Builds não se responsabiliza por perdas indirectas, lucros cessantes ou danos consequentes resultantes do uso ou impossibilidade de uso da landing page entregue. A responsabilidade total está limitada ao valor pago pelo serviço.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">9. Lei Aplicável</h2>
            <p>O presente contrato é regido pela lei portuguesa. Em caso de litígio, as partes acordam submeter-se à competência dos tribunais portugueses.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">10. Contacto</h2>
            <p>Lucasbreno@proton.me | +351 243 302 900</p>
          </section>
        </div>
      </div>
    </main>
  );
}
