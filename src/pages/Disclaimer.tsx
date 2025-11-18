import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertTriangle, TrendingDown, Info, DollarSign } from "lucide-react";

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Disclaimer e Avisos - Tradepar | Aviso de Riscos Forex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Disclaimer do Tradepar. Avisos importantes sobre riscos de trading forex, CFDs e instrumentos financeiros. Leia antes de operar no mercado."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 border-2 border-destructive/20 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer e Avisos Importantes</h1>
            <p className="text-muted-foreground text-lg">
              Leia atentamente antes de utilizar informações do Tradepar
            </p>
          </header>

          {/* Critical Warning */}
          <div className="mb-10 p-6 bg-destructive/10 border-2 border-destructive rounded-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-destructive mb-3">Aviso de Risco Crítico</h2>
                <p className="text-foreground leading-relaxed font-medium">
                  Trading de forex, CFDs e outros instrumentos financeiros de margem envolve alto risco de 
                  perda e pode não ser adequado para todos os investidores. Você pode perder todo o capital 
                  investido. Não invista dinheiro que você não pode perder.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">1. Natureza do Conteúdo</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Tradepar é um portal informativo e educacional sobre forex trading. Todo o conteúdo 
                    fornecido, incluindo artigos, análises, rankings de corretoras, estratégias e ferramentas:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>É destinado apenas para fins informativos e educacionais</li>
                    <li>Não constitui aconselhamento financeiro, de investimento ou recomendação personalizada</li>
                    <li>Não deve ser considerado uma oferta ou solicitação para comprar ou vender instrumentos financeiros</li>
                    <li>Reflete opiniões e análises no momento da publicação, que podem mudar sem aviso prévio</li>
                    <li>Pode conter imprecisões ou estar desatualizado</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <TrendingDown className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">2. Riscos do Trading Forex</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O trading de forex e CFDs apresenta riscos significativos que você deve compreender:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6">Risco de Alavancagem</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A alavancagem pode amplificar tanto ganhos quanto perdas. Você pode perder mais do que 
                    seu depósito inicial. A alta alavancagem aumenta exponencialmente o risco de perdas rápidas.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Volatilidade do Mercado</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O mercado forex é extremamente volátil. Movimentos de preço podem ser rápidos e imprevisíveis, 
                    especialmente durante notícias econômicas importantes ou eventos geopolíticos.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Risco de Contraparte</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Existe o risco de que sua corretora enfrente dificuldades financeiras ou falência. 
                    Sempre escolha corretoras regulamentadas e verifique seus esquemas de proteção ao cliente.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Outros Riscos</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Risco de liquidez em condições de mercado extremas</li>
                    <li>Risco de execução e slippage</li>
                    <li>Risco tecnológico de plataformas e conectividade</li>
                    <li>Risco de gapping em abertura de mercado</li>
                    <li>Risco cambial e de taxa de juros</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">3. Desempenho Passado</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qualquer referência a desempenho passado, projeções, previsões ou simulações não é 
                  indicativo confiável de resultados futuros. Estatísticas históricas e backtests não 
                  garantem desempenho futuro. Condições de mercado mudam constantemente, e resultados 
                  passados podem não se repetir. Estratégias que funcionaram no passado podem falhar no futuro.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">4. Rankings e Avaliações de Corretoras</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os rankings de corretoras apresentados no Tradepar:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>São baseados em critérios objetivos e análise independente</li>
                  <li>Podem estar desatualizados e não refletir mudanças recentes</li>
                  <li>Não constituem endosso ou recomendação de qualquer corretora específica</li>
                  <li>Devem ser usados como ponto de partida para sua própria pesquisa</li>
                  <li>Podem incluir corretoras com as quais temos relacionamento de afiliação</li>
                  <li>Não garantem a adequação de uma corretora às suas necessidades específicas</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Você deve realizar sua própria due diligence completa antes de escolher uma corretora, 
                  incluindo verificação de regulamentação, leitura de termos e condições, e teste de contas demo.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">5. Divulgação de Afiliações</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Tradepar pode receber compensação financeira de algumas corretoras e serviços listados 
                    em nosso portal através de programas de afiliação. Isso significa que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Podemos receber comissões quando você clica em certos links ou se registra em corretoras</li>
                    <li>Esta compensação pode influenciar o posicionamento de alguns produtos</li>
                    <li>No entanto, mantemos padrões editoriais independentes</li>
                    <li>Nossas avaliações são baseadas em análise objetiva e critérios transparentes</li>
                    <li>Sempre divulgamos relações de afiliação onde aplicável</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    A compensação recebida não afeta nossa análise imparcial e recomendamos apenas produtos 
                    e serviços que consideramos de qualidade.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">6. Estratégias e Expert Advisors (EAs)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estratégias de trading e Expert Advisors mencionados no portal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>São compartilhados apenas para fins educacionais</li>
                  <li>Não garantem lucros ou resultados específicos</li>
                  <li>Podem causar perdas significativas se usados incorretamente</li>
                  <li>Devem ser testados extensivamente em conta demo antes de uso real</li>
                  <li>Requerem entendimento profundo de gestão de risco</li>
                  <li>Podem deixar de funcionar devido a mudanças nas condições de mercado</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nunca use uma estratégia ou EA sem compreendê-la completamente e sem testar em condições 
                  reais de mercado em conta demo.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">7. Responsabilidade e Isenção</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O Tradepar e seus colaboradores:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Não são responsáveis por perdas financeiras resultantes do uso de informações do portal</li>
                  <li>Não garantem a precisão, completude ou atualidade das informações</li>
                  <li>Não são responsáveis por ações ou omissões de corretoras listadas</li>
                  <li>Não oferecem serviços de consultoria financeira ou de investimento</li>
                  <li>Não são responsáveis por problemas técnicos ou indisponibilidade do portal</li>
                  <li>Recomendam fortemente consultar um consultor financeiro qualificado</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">8. Regulamentação e Conformidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Tradepar não é uma instituição financeira regulada. Não oferecemos serviços de corretagem, 
                  consultoria de investimentos ou gestão de ativos. Sempre verifique se as corretoras que você 
                  escolher estão devidamente regulamentadas pelas autoridades competentes em sua jurisdição, 
                  como CVM no Brasil, FCA no Reino Unido, ASIC na Austrália, etc.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">9. Adequação do Trading</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Antes de começar a operar forex ou CFDs, considere cuidadosamente:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Seus objetivos de investimento e horizonte temporal</li>
                  <li>Sua experiência e conhecimento em trading</li>
                  <li>Sua tolerância ao risco e capacidade financeira</li>
                  <li>Se você pode suportar perdas significativas</li>
                  <li>Se você entende completamente os riscos envolvidos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Trading não é adequado para todos. Consulte um consultor financeiro independente se tiver dúvidas.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">10. Atualizações e Precisão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Embora nos esforcemos para manter informações precisas e atualizadas, o Tradepar não garante 
                  que todo o conteúdo esteja sempre correto, completo ou atual. Mercados financeiros mudam 
                  rapidamente, e informações podem se tornar obsoletas. É sua responsabilidade verificar 
                  informações críticas diretamente com as fontes originais.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-3 text-destructive">11. Decisões de Trading</h2>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Todas as decisões de trading são de sua exclusiva responsabilidade. Você é totalmente 
                  responsável por avaliar os méritos e riscos de qualquer informação encontrada no Tradepar. 
                  Recomendamos fortemente buscar aconselhamento independente de profissionais qualificados 
                  antes de tomar decisões financeiras.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-3">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre este disclaimer ou sobre qualquer aspecto do Tradepar, 
                  entre em contato conosco através da página de contato ou pelo email: contato@tradepar.com
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;