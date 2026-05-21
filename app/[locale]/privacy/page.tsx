export const dynamic = 'force-dynamic';
import Link from 'next/link';

export default function PrivacyPage({ params }: { params: { locale: string } }) {
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

        <h1 className="font-display font-extrabold text-white text-3xl mb-2">Política de Privacidade</h1>
        <p className="text-[#444] text-xs mb-12">Última actualização: Janeiro 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#888]">
          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">1. Responsável pelo Tratamento</h2>
            <p>Lucas Breno Ferreira da Costa, NIF 315027371, com sede em Estrada de Mata Burros, Apartamento 1, Quinta do Vale Bom, 2050-378, Portugal. Contacto: Lucasbreno@proton.me | +351 243 302 900.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">2. Dados Recolhidos</h2>
            <p>Recolhemos os seguintes dados pessoais no momento da compra: nome completo, endereço de email, informações de faturação (morada, país) e dados de pagamento processados de forma segura pelo Stripe.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">3. Finalidade do Tratamento</h2>
            <p>Os seus dados são utilizados exclusivamente para: (a) processamento e cumprimento da sua encomenda; (b) comunicação relativa ao projecto contratado; (c) emissão de documentos fiscais; (d) cumprimento de obrigações legais.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">4. Base Legal</h2>
            <p>O tratamento baseia-se na execução do contrato de prestação de serviços celebrado com o titular dos dados (Art. 6.º, n.º 1, alínea b) do RGPD).</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">5. Partilha de Dados</h2>
            <p>Os seus dados são partilhados com a Stripe, Inc. (processador de pagamentos) para execução da transacção. Não partilhamos dados com terceiros para fins comerciais ou de marketing.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">6. Conservação</h2>
            <p>Os dados são conservados pelo período mínimo necessário para cumprimento das obrigações contratuais e fiscais, no mínimo 10 anos conforme legislação fiscal portuguesa.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">7. Direitos do Titular</h2>
            <p>Tem direito de acesso, rectificação, apagamento, portabilidade e oposição ao tratamento dos seus dados. Para exercer estes direitos, contacte-nos através de Lucasbreno@proton.me.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">8. Transferências Internacionais</h2>
            <p>O Stripe pode processar dados fora do Espaço Económico Europeu. Esta transferência é efectuada com garantias adequadas nos termos do RGPD.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">9. Cookies</h2>
            <p>Este website não utiliza cookies de rastreamento ou publicidade. Apenas são utilizados cookies técnicos essenciais para o funcionamento do site.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-white text-lg mb-3">10. Contacto</h2>
            <p>Para qualquer questão relacionada com privacidade: Lucasbreno@proton.me</p>
          </section>
        </div>
      </div>
    </main>
  );
}
