import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lock, Eye, Database, UserCheck } from "lucide-react";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade - Tradepar | Proteção de Dados";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Política de Privacidade do Tradepar. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD."
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
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">1. Introdução</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O Tradepar está comprometido em proteger sua privacidade e seus dados pessoais. Esta Política 
                    de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                    quando você utiliza nosso portal. Estamos em conformidade com a Lei Geral de Proteção de 
                    Dados (LGPD - Lei 13.709/2018) e demais legislações aplicáveis sobre proteção de dados.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">2. Dados Coletados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6">2.1. Dados Fornecidos Diretamente</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Nome completo e email ao se inscrever em newsletters</li>
                    <li>Informações de contato em formulários de comunicação</li>
                    <li>Preferências de trading e interesses em corretoras</li>
                    <li>Comentários e feedbacks sobre conteúdo</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">2.2. Dados Coletados Automaticamente</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Endereço IP e localização geográfica aproximada</li>
                    <li>Tipo de navegador e dispositivo utilizado</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Origem do acesso (links de referência)</li>
                    <li>Interações com conteúdo e cliques em links</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">2.3. Cookies e Tecnologias Similares</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos cookies essenciais, analíticos e de marketing para melhorar sua experiência. 
                    Você pode gerenciar suas preferências de cookies através das configurações do navegador.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">3. Como Usamos Seus Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos suas informações para os seguintes propósitos legítimos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Fornecer e melhorar nossos serviços de informação sobre forex trading</li>
                  <li>Personalizar sua experiência e apresentar conteúdo relevante</li>
                  <li>Enviar newsletters e atualizações sobre rankings de corretoras (com seu consentimento)</li>
                  <li>Responder suas dúvidas e solicitações de suporte</li>
                  <li>Analisar padrões de uso para otimizar o portal</li>
                  <li>Detectar e prevenir fraudes ou atividades maliciosas</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Realizar pesquisas e análises de mercado</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">4. Base Legal para Processamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Processamos seus dados pessoais com base nas seguintes bases legais previstas na LGPD:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Consentimento:</strong> Para envio de newsletters e comunicações de marketing</li>
                  <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e segurança</li>
                  <li><strong>Cumprimento de Obrigação Legal:</strong> Quando exigido por lei</li>
                  <li><strong>Execução de Contrato:</strong> Para fornecer os serviços solicitados</li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">5. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Não vendemos seus dados pessoais. Podemos compartilhar informações limitadas com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Parceiros de Análise:</strong> Google Analytics para entender o uso do site</li>
                  <li><strong>Provedores de Serviço:</strong> Empresas que nos auxiliam em hospedagem e email</li>
                  <li><strong>Corretoras Parceiras:</strong> Quando você clica em links de afiliados (dados mínimos)</li>
                  <li><strong>Autoridades:</strong> Quando legalmente obrigados ou para proteger direitos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Todos os parceiros são cuidadosamente selecionados e obrigados a manter a confidencialidade 
                  e segurança de seus dados.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-start gap-4 mb-6 p-6 bg-card border border-border rounded-lg">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">6. Seus Direitos (LGPD)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Confirmação e Acesso:</strong> Confirmar se processamos seus dados e acessá-los</li>
                    <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                    <li><strong>Anonimização ou Exclusão:</strong> Solicitar anonimização ou exclusão de dados</li>
                    <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                    <li><strong>Revogação de Consentimento:</strong> Retirar consentimento a qualquer momento</li>
                    <li><strong>Oposição:</strong> Opor-se ao processamento em certas circunstâncias</li>
                    <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Para exercer seus direitos, entre em contato através do email: privacidade@tradepar.com
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">7. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra 
                  acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia SSL/TLS, 
                  firewalls, controles de acesso rigorosos e monitoramento contínuo. No entanto, nenhum método 
                  de transmissão pela internet é 100% seguro, e não podemos garantir segurança absoluta.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">8. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, salvo se um período de retenção maior for exigido ou permitido 
                  por lei. Após esse período, seus dados serão excluídos ou anonimizados de forma segura.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">9. Transferência Internacional</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alguns de nossos provedores de serviço podem estar localizados fora do Brasil. Quando 
                  transferimos dados internacionalmente, garantimos que medidas adequadas de proteção estejam 
                  em vigor, em conformidade com a LGPD.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">10. Menores de Idade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente 
                  dados de menores. Se você acredita que coletamos dados de um menor, entre em contato 
                  imediatamente para que possamos removê-los.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-3">11. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                  alterações significativas através de um aviso destacado em nosso portal ou por email. 
                  Recomendamos revisar esta política regularmente.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-3">12. Encarregado de Dados (DPO)</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Para questões relacionadas à proteção de dados, entre em contato com nosso Encarregado:
                </p>
                <p className="text-foreground font-medium">
                  Email: dpo@tradepar.com<br />
                  Ou através da nossa página de contato
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

export default PoliticaPrivacidade;