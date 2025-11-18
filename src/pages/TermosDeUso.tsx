import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Scale, Shield } from "lucide-react";

const TermosDeUso = () => {
  useEffect(() => {
    document.title = "Termos de Uso - Tradepar | Portal de Forex Trading";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leia os Termos de Uso do Tradepar. Conheça as condições de utilização, direitos e obrigações para usar nosso portal de forex trading e rankings de corretoras."
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">1. Aceitação dos Termos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar e utilizar o portal Tradepar, você concorda integralmente com estes Termos de Uso. 
                    Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços. 
                    O Tradepar é um portal informativo dedicado a fornecer rankings de corretoras forex, estratégias 
                    de trading, análises de mercado e conteúdo educacional para traders de todos os níveis.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">2. Uso do Serviço</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Tradepar fornece informações sobre corretoras de forex, estratégias de trading, ferramentas 
                    tecnológicas e conteúdo educacional. Você concorda em:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Utilizar o portal apenas para fins legais e de acordo com estes termos</li>
                    <li>Não reproduzir, duplicar ou copiar conteúdo sem autorização prévia por escrito</li>
                    <li>Não utilizar o serviço de forma que possa danificar, desabilitar ou sobrecarregar o portal</li>
                    <li>Não tentar obter acesso não autorizado a qualquer parte do portal</li>
                    <li>Fornecer informações verdadeiras e atualizadas quando necessário</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">3. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todo o conteúdo disponível no Tradepar, incluindo mas não limitado a textos, gráficos, logos, 
                  ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade 
                  exclusiva do Tradepar ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A compilação de todo o conteúdo neste site é propriedade exclusiva do Tradepar e protegida por 
                  leis de direitos autorais. Você não pode modificar, publicar, transmitir, participar da 
                  transferência ou venda, criar trabalhos derivados ou de qualquer forma explorar qualquer 
                  conteúdo do site sem permissão expressa por escrito.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">4. Rankings e Avaliações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os rankings de corretoras apresentados no Tradepar são baseados em critérios objetivos 
                  incluindo regulamentação, spreads, plataformas disponíveis, suporte ao cliente e outros 
                  fatores relevantes. No entanto, você reconhece que:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Rankings são atualizados periodicamente e podem mudar</li>
                  <li>As avaliações refletem nossa análise independente no momento da publicação</li>
                  <li>Você deve realizar sua própria due diligence antes de escolher uma corretora</li>
                  <li>O Tradepar pode receber comissões de afiliados de algumas corretoras listadas</li>
                  <li>Rankings não constituem recomendação de investimento personalizada</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">5. Links para Terceiros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Tradepar pode conter links para sites de terceiros, incluindo corretoras forex e outros 
                  serviços financeiros. Estes links são fornecidos apenas para sua conveniência. O Tradepar 
                  não tem controle sobre o conteúdo desses sites e não assume responsabilidade por eles. 
                  A inclusão de qualquer link não implica endosso pelo Tradepar do site vinculado.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">6. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Em nenhuma hipótese o Tradepar, seus diretores, funcionários ou afiliados serão responsáveis 
                  por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos 
                  resultantes de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Seu uso ou incapacidade de usar o serviço</li>
                  <li>Qualquer erro ou omissão no conteúdo</li>
                  <li>Perdas financeiras resultantes de decisões de trading</li>
                  <li>Acesso não autorizado ou alteração de suas transmissões ou dados</li>
                  <li>Declarações ou conduta de terceiros no serviço</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">7. Modificações dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Tradepar reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
                  Alterações entrarão em vigor imediatamente após a publicação no portal. É sua 
                  responsabilidade revisar periodicamente estes termos. Seu uso continuado do portal após 
                  quaisquer alterações constitui aceitação dessas mudanças.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">8. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Quaisquer disputas relacionadas 
                  a estes termos serão submetidas à jurisdição exclusiva dos tribunais brasileiros.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-3 text-destructive">9. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da 
                  nossa página de contato ou pelo email: contato@tradepar.com
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

export default TermosDeUso;