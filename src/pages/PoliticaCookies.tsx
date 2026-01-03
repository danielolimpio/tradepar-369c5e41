import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LegalSidebar from "@/components/LegalSidebar";
import { 
  Cookie, 
  Clock, 
  HelpCircle,
  Settings,
  Target,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Info,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoliticaCookies = () => {
  useEffect(() => {
    document.title = "Política de Cookies - TradePar | Portal de Forex Trading";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Política de Cookies do TradePar. Saiba como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const sidebarItems = [
    { id: "section-1", num: 1, title: "O que são cookies?" },
    { id: "section-2", num: 2, title: "Por que usamos cookies?" },
    { id: "section-3", num: 3, title: "Como posso controlar os cookies?" },
    { id: "section-4", num: 4, title: "Cookies no navegador" },
    { id: "section-5", num: 5, title: "Outras tecnologias de rastreamento" },
    { id: "section-6", num: 6, title: "Flash Cookies" },
    { id: "section-7", num: 7, title: "Publicidade direcionada" },
    { id: "section-8", num: 8, title: "Atualizações desta política" },
    { id: "section-9", num: 9, title: "Mais informações" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 mb-6 shadow-lg shadow-primary/10">
            <Cookie className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            POLÍTICA DE COOKIES
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <p className="text-lg">Última atualização: 14 de dezembro de 2025</p>
          </div>
        </header>

        <div className="flex gap-8 max-w-7xl mx-auto">
          <LegalSidebar items={sidebarItems} />

          <div className="flex-1 max-w-4xl">
            {/* Intro */}
            <Card className="mb-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6 md:p-8">
                <p className="text-foreground leading-relaxed text-lg">
                  Esta Política de Cookies explica como <strong className="text-primary">TradePar</strong> ("Empresa", "nós", "nos" e "nossos") utiliza cookies e tecnologias semelhantes para reconhecê-lo quando você visita nosso site em{" "}
                  <a href="https://tradepar.com.br" className="text-primary hover:underline font-medium">
                    https://tradepar.com.br
                  </a>{" "}
                  ("Site"). Ela explica o que são essas tecnologias e por que as usamos, bem como seus direitos de controlar nosso uso delas.
                </p>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Em alguns casos, podemos usar cookies para coletar informações pessoais, ou essas informações podem se tornar pessoais se as combinarmos com outras informações.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <Card id="section-1" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">1. O QUE SÃO COOKIES?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Os cookies são pequenos arquivos de dados que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para que seus sites funcionem ou funcionem de forma mais eficiente, além de fornecerem informações para relatórios.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Cookies próprios
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Cookies definidos pelo proprietário do site (neste caso, TradePar) são chamados de "cookies primários".
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      Cookies de terceiros
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Os cookies definidos por terceiros que não o proprietário do site são chamados de "cookies de terceiros". Eles permitem que recursos ou funcionalidades de terceiros sejam fornecidos no site ou por meio dele (por exemplo, publicidade, conteúdo interativo e análises).
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Os terceiros que definem esses cookies podem reconhecer seu computador tanto quando ele visita o site em questão quanto quando visita outros sites.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card id="section-2" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">2. POR QUE USAMOS COOKIES?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Usamos cookies próprios e de terceiros por diversos motivos. Alguns cookies são necessários por razões técnicas para que nosso site funcione, e nos referimos a eles como cookies "essenciais" ou "estritamente necessários".
                </p>
                
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Cookies essenciais</h4>
                    <p className="text-muted-foreground text-sm">
                      Necessários para o funcionamento básico do site. Não podem ser desativados.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Cookies de análise</h4>
                    <p className="text-muted-foreground text-sm">
                      Permitem rastrear e direcionar os interesses de nossos usuários para aprimorar a experiência.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Cookies de terceiros</h4>
                    <p className="text-muted-foreground text-sm">
                      Utilizados para fins de publicidade, análise e outros propósitos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card id="section-3" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">3. COMO POSSO CONTROLAR OS COOKIES?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer seus direitos relacionados a cookies definindo suas preferências no Gerenciador de Consentimento de Cookies.
                </p>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-foreground font-medium mb-2">Gerenciador de Consentimento de Cookies</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Permite que você selecione quais categorias de cookies aceita ou rejeita. Cookies essenciais não podem ser rejeitados, pois são estritamente necessários para fornecer os serviços.
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  O Gerenciador de Consentimento de Cookies pode ser encontrado no banner de notificação e em nosso site. Se você optar por rejeitar os cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do site possa ser restrito.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Você também pode configurar ou alterar as opções do seu navegador para aceitar ou recusar cookies.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card id="section-4" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">4. COMO POSSO CONTROLAR OS COOKIES NO MEU NAVEGADOR?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Como os métodos para recusar cookies através das configurações do seu navegador variam de navegador para navegador, recomendamos que você consulte o menu de ajuda do seu navegador para obter mais informações. A seguir, informações sobre como gerenciar cookies nos navegadores mais populares:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Chrome", "Internet Explorer", "Firefox", "Safari", "Edge", "Opera"].map((browser) => (
                    <div key={browser} className="p-3 bg-muted/30 rounded-lg border border-border/50 text-center">
                      <span className="text-foreground font-medium text-sm">{browser}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Além disso, a maioria das redes de publicidade oferecem uma maneira de desativar a publicidade direcionada. Para obter mais informações, visite:
                </p>
                
                <div className="space-y-2">
                  <a href="https://digitaladvertisingalliance.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink className="w-4 h-4" />
                    Aliança de Publicidade Digital
                  </a>
                  <a href="https://youradchoices.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink className="w-4 h-4" />
                    Aliança de Publicidade Digital do Canadá
                  </a>
                  <a href="https://edaa.eu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink className="w-4 h-4" />
                    Aliança Europeia de Publicidade Digital Interativa
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card id="section-5" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">5. E QUANTO A OUTRAS TECNOLOGIAS DE RASTREAMENTO, COMO OS WEB BEACONS?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Os cookies não são a única forma de reconhecer ou rastrear visitantes de um site. Podemos usar outras tecnologias semelhantes de tempos em tempos, como web beacons (às vezes chamados de "pixels de rastreamento" ou "gifs transparentes").
                </p>
                
                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                  <p className="text-muted-foreground italic">
                    Esses são pequenos arquivos gráficos que contêm um identificador exclusivo que nos permite reconhecer quando alguém visitou nosso site ou abriu um e-mail que os incluímos.
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Isso nos permite, por exemplo, monitorar os padrões de tráfego de usuários de uma página para outra dentro de um site, enviar ou interagir com cookies, entender se você chegou ao site por meio de um anúncio online exibido em um site de terceiros, melhorar o desempenho do site e medir o sucesso de campanhas de marketing por e-mail.
                </p>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Em muitos casos, essas tecnologias dependem de cookies para funcionar corretamente, portanto, recusar cookies prejudica seu funcionamento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card id="section-6" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">6. VOCÊ USA COOKIES FLASH OU OBJETOS COMPARTILHADOS LOCAIS?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Os sites também podem usar os chamados "Flash Cookies" (também conhecidos como Objetos Compartilhados Locais ou "LSOs") para, entre outras coisas, coletar e armazenar informações sobre o seu uso de nossos serviços, prevenção de fraudes e para outras operações do site.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Se você não deseja que cookies Flash sejam armazenados em seu computador, pode ajustar as configurações do seu Flash Player para bloquear o armazenamento de cookies Flash usando as ferramentas contidas no Painel de Configurações de Armazenamento do Site.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Você também pode controlar os cookies Flash acessando o Painel de Configurações de Armazenamento Global e seguindo as instruções (que podem incluir instruções que explicam, por exemplo, como excluir cookies Flash existentes, como impedir que objetos locais compartilhados (LSOs) do Flash sejam colocados em seu computador sem sua permissão e como bloquear cookies Flash que não sejam enviados pelo operador da página que você está visitando no momento).
                </p>
                
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-muted-foreground text-sm">
                    Observe que configurar o Flash Player para restringir ou limitar a aceitação de cookies Flash pode reduzir ou impedir a funcionalidade de alguns aplicativos Flash, incluindo, potencialmente, aplicativos Flash usados em conexão com nossos serviços ou conteúdo online.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card id="section-7" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">7. VOCÊ VEICULA PUBLICIDADE DIRECIONADA?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Terceiros podem instalar cookies no seu computador ou dispositivo móvel para exibir anúncios através do nosso site. Essas empresas podem usar informações sobre suas visitas a este e outros sites para fornecer anúncios relevantes sobre produtos e serviços que possam ser do seu interesse.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Elas também podem usar tecnologia para medir a eficácia dos anúncios. Isso pode ser feito por meio de cookies ou web beacons, que coletam informações sobre suas visitas a este e outros sites para exibir anúncios relevantes sobre produtos e serviços que possam ser do seu interesse.
                </p>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As informações coletadas por meio desse processo não permitem que nós ou terceiros identifiquemos seu nome, dados de contato ou outras informações que o identifiquem diretamente, a menos que você opte por fornecê-las.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card id="section-8" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">8. COM QUE FREQUÊNCIA VOCÊ ATUALIZA ESTA POLÍTICA DE COOKIES?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que utilizamos ou por outros motivos operacionais, legais ou regulamentares.
                </p>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Portanto, visite esta Política de Cookies regularmente para se manter informado sobre o nosso uso de cookies e tecnologias relacionadas.
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card id="section-9" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">9. ONDE POSSO OBTER MAIS INFORMAÇÕES?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Se você tiver alguma dúvida sobre o nosso uso de cookies ou outras tecnologias, por favor, entre em contato conosco:
                </p>
                
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Cookie className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg">TradePar</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        Av. Júlia Freire, 1200 – Expedicionários, João Pessoa – PB, CEP 58041-000, Brasil
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="mailto:contato@tradepar.com.br" className="text-primary hover:underline font-medium">
                        contato@tradepar.com.br
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">(+55) 12 98251-9116</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
