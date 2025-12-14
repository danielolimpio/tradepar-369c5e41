import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Eye, 
  Database, 
  UserCheck, 
  Lock, 
  Globe, 
  FileText, 
  Users, 
  Mail, 
  AlertTriangle,
  CheckCircle,
  Info,
  Scale,
  Share2,
  ExternalLink,
  Clock,
  Baby,
  Gavel,
  MapPin,
  RefreshCw,
  Phone,
  Settings,
  ToggleRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade - TradePar | Proteção de Dados";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aviso de Privacidade do TradePar. Saiba como coletamos, usamos e protegemos suas informações pessoais."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 mb-6 shadow-lg shadow-primary/10">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              POLÍTICA DE PRIVACIDADE
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <p className="text-lg">Última atualização: 14 de dezembro de 2025</p>
            </div>
          </header>

          {/* Intro */}
          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-6 md:p-8">
              <p className="text-foreground leading-relaxed text-lg">
                Este Aviso de Privacidade para <strong className="text-primary">TradePar</strong> ("nós", "nós" ou "nosso"), descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processo") suas informações pessoais quando você usa nossos serviços ("Serviços"), inclusive quando você:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Visite nosso site em{" "}
                    <a href="https://tradepar.com.br" className="text-primary hover:underline font-medium">
                      https://tradepar.com.br
                    </a>{" "}
                    ou qualquer site nosso que contenha um link para este Aviso de Privacidade.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Interaja conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium mb-2">Tem dúvidas ou preocupações?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço:{" "}
                      <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                        privacidade@tradepar.com.br
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resumo dos Pontos Principais */}
          <Card className="mb-8 border-border bg-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">RESUMO DOS PONTOS PRINCIPAIS</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Este resumo apresenta os pontos principais do nosso Aviso de Privacidade, mas você pode obter mais detalhes sobre qualquer um desses tópicos clicando no link após cada ponto principal ou usando nosso índice abaixo para encontrar a seção desejada.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Que informações pessoais processamos?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você interage conosco com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa.{" "}
                    <button onClick={() => scrollToSection('section-1')} className="text-primary hover:underline font-medium">
                      Saiba mais sobre as informações pessoais que você nos divulga.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    Processamos informações pessoais sensíveis?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Algumas dessas informações podem ser consideradas sensíveis. "especial" ou "sensível" Em certas jurisdições, por exemplo, sua origem racial ou étnica, orientação sexual e crenças religiosas. <strong className="text-foreground">Não processamos informações pessoais sensíveis.</strong>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Coletamos informações de terceiros?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong className="text-foreground">Não coletamos nenhuma informação de terceiros.</strong>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" />
                    Como processamos suas informações?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei. Também podemos processar suas informações para outros fins com o seu consentimento. Processamos suas informações somente quando temos uma base legal válida para fazê-lo.{" "}
                    <button onClick={() => scrollToSection('section-2')} className="text-primary hover:underline font-medium">
                      Saiba mais sobre como processamos suas informações.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" />
                    Em que situações e com quem compartilhamos informações pessoais?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Podemos compartilhar informações em situações específicas e com partes específicas de terceiros.{" "}
                    <button onClick={() => scrollToSection('section-4')} className="text-primary hover:underline font-medium">
                      Saiba mais sobre quando e com quem compartilhamos suas informações pessoais.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Como protegemos suas informações?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Temos medidas adequadas de segurança organizacionais, processos e procedimentos técnicos implementados para proteger suas informações pessoais. No entanto, nenhuma transmissão eletrônica pela internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura, portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros não consigam acessar ou acessar suas informações não autorizadas.{" "}
                    <button onClick={() => scrollToSection('section-7')} className="text-primary hover:underline font-medium">
                      Saiba mais sobre como proteger suas informações.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-primary" />
                    Quais são os seus direitos?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode lhe conferir certos direitos em relação às suas informações pessoais.{" "}
                    <button onClick={() => scrollToSection('section-9')} className="text-primary hover:underline font-medium">
                      Saiba mais sobre seus direitos de privacidade.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-primary" />
                    Como você exerce seus direitos?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A maneira mais fácil de exercer seus direitos é através de submeter uma solicitação de acesso do titular dos dados ou entrando em contato conosco. Analisaremos e tomaremos as medidas cabíveis em relação a qualquer solicitação, em conformidade com as leis de proteção de dados aplicáveis.
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-foreground font-medium">
                    Deseja saber mais sobre o que fazemos com as informações que coletamos? Leia o Aviso de Privacidade na íntegra.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Índice */}
          <Card className="mb-8 border-border bg-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">ÍNDICE</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="grid md:grid-cols-2 gap-2">
                {[
                  { num: 1, title: "QUE INFORMAÇÕES COLETAMOS?" },
                  { num: 2, title: "COMO PROCESSAMOS SUAS INFORMAÇÕES?" },
                  { num: 3, title: "Em que bases legais nos apoiamos para processar suas informações pessoais?" },
                  { num: 4, title: "QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?" },
                  { num: 5, title: "QUAL É A NOSSA POSIÇÃO EM RELAÇÃO A SITES DE TERCEIROS?" },
                  { num: 6, title: "Por quanto tempo guardamos suas informações?" },
                  { num: 7, title: "COMO MANTEMOS SUAS INFORMAÇÕES SEGURAS?" },
                  { num: 8, title: "Coletamos informações de menores de idade?" },
                  { num: 9, title: "QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?" },
                  { num: 10, title: "CONTROLES PARA RECURSOS DE NÃO RASTREAR" },
                  { num: 11, title: "OS RESIDENTES DOS ESTADOS UNIDOS TÊM DIREITOS ESPECÍFICOS DE PRIVACIDADE?" },
                  { num: 12, title: "OUTRAS REGIÕES POSSUEM DIREITOS DE PRIVACIDADE ESPECÍFICOS?" },
                  { num: 13, title: "ATUALIZAMOS ESTE AVISO?" },
                  { num: 14, title: "COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?" },
                  { num: 15, title: "Como você pode revisar, atualizar ou excluir os dados que coletamos de você?" },
                ].map((item) => (
                  <button
                    key={item.num}
                    onClick={() => scrollToSection(`section-${item.num}`)}
                    className="text-left p-3 rounded-lg hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-primary flex items-start gap-2"
                  >
                    <span className="text-primary font-bold">{item.num}.</span>
                    <span>{item.title}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Section 1 */}
          <Card id="section-1" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">1. QUE INFORMAÇÕES COLETAMOS?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Informações pessoais que você nos divulga</h3>
                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary mb-4">
                  <p className="text-muted-foreground italic">
                    <strong className="text-foreground not-italic">Resumindo:</strong> Coletamos informações pessoais que você nos fornece.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coletamos informações pessoais que você nos fornece voluntariamente quando você Ao participar de atividades nos Serviços ou ao entrar em contato conosco, você demonstra interesse em obter informações sobre nós, nossos produtos e serviços.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Informações pessoais fornecidas por você.</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As informações pessoais que coletamos dependem do contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você utiliza. As informações pessoais que coletamos podem incluir o seguinte:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    endereços de e-mail
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-foreground font-medium flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Informação sensível. Não processamos informações sensíveis.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve nos notificar sobre quaisquer alterações nessas informações pessoais.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card id="section-2" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">2. COMO PROCESSAMOS SUAS INFORMAÇÕES?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei. Processamos as informações pessoais para os seguintes fins listados abaixo. Também podemos processar suas informações para outros fins, somente com sua prévia autorização explícita/sentimento.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos Serviços, incluindo:
              </p>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Para salvaguardar ou proteger os interesses vitais de um indivíduo.</p>
                    <p className="text-muted-foreground text-sm">
                      Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses vitais de um indivíduo, como, por exemplo, para prevenir danos.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card id="section-3" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">3. Em que bases legais nos apoiamos para processar suas informações?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Só processamos as suas informações pessoais quando acreditamos ser necessário e temos uma razão legal válida (ou seja, uma justificativa legal), fundamento jurídico) para fazê-lo de acordo com a legislação aplicável, como com o seu consentimento, para cumprir as leis, para lhe prestar serviços ou para celebrar um contrato ou completar nossas obrigações contratuais, para proteger seus direitos, ou para completar nossos legítimos interesses comerciais.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Se você estiver localizado na UE ou no Reino Unido, esta seção se aplica a você.
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O Regulamento Geral de Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas em que nos apoiamos para processar as suas informações pessoais. Assim, podemos nos basear nas seguintes bases legais para processar as suas informações pessoais:
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h5 className="font-semibold text-foreground mb-2">Consentimento.</h5>
                  <p className="text-muted-foreground text-sm">
                    Podemos processar suas informações se você nos tiver dado permissão (ou seja, Consentimento) para usar suas informações pessoais para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento.{" "}
                    <button onClick={() => scrollToSection('section-9')} className="text-primary hover:underline">
                      Saiba mais sobre como retirar seu consentimento.
                    </button>
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h5 className="font-semibold text-foreground mb-2">Obrigações Legais.</h5>
                  <p className="text-muted-foreground text-sm">
                    Podemos processar suas informações quando acreditamos ser necessário para cumprir nossas obrigações legais, como cooperar com um órgão de aplicação da lei ou agência reguladora, exercer ou defender nossos direitos legais ou divulgar suas informações como prova em litígios nos quais estejamos envolvidos.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                  <h5 className="font-semibold text-foreground mb-2">Interesses vitais.</h5>
                  <p className="text-muted-foreground text-sm">
                    Podemos processar suas informações quando acreditamos ser necessário para proteger seus interesses vitais ou os interesses vitais de terceiros, como em situações que envolvam ameaças potenciais à segurança de qualquer pessoa.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Se você estiver localizado no Canadá, esta seção se aplica a você.
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Podemos processar as suas informações se nos tiver dado permissão específica (ou seja, consentimento expresso) para usar suas informações pessoais para uma finalidade específica ou em situações em que sua permissão possa ser inferida (ou seja, consentimento implícito). Você pode retirar seu consentimento a qualquer momento.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Em alguns casos excepcionais, podemos estar legalmente autorizados, de acordo com a legislação aplicável, a processar suas informações sem o seu consentimento, incluindo, por exemplo:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se a coleta for claramente do interesse de um indivíduo e o consentimento não puder ser obtido em tempo hábil
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Para investigações, detecção e prevenção de fraudes.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Para transações comerciais, desde que determinadas condições sejam atendidas.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se estiver contido em uma declaração de testemunha e a coleta for necessária para avaliar, processar ou liquidar uma reclamação de seguro
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Para identificar pessoas feridas, doentes ou falecidas e comunicar com os familiares.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se tivermos motivos razoáveis para acreditar que um indivíduo foi, é ou pode ser vítima de abuso financeiro.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se for razoável esperar que a coleta e o uso com consentimento comprometam a disponibilidade ou a precisão das informações, e se a coleta for razoável para fins relacionados à investigação de uma violação de um acordo ou de uma contravenção das leis do Canadá ou de uma província
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Caso a divulgação seja necessária para cumprir uma intimação, mandado, ordem judicial ou normas do tribunal relativas à produção de registros.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Foi produzido por um indivíduo no exercício de suas funções, negócios ou profissão, e a coleta é compatível com os propósitos para os quais a informação foi produzida.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se a coleção se destina exclusivamente a fins jornalísticos, artísticos ou literários.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Se a informação for de domínio público e estiver especificada nos regulamentos.
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm mt-3">
                  Podemos divulgar informações anonimizadas para projetos de pesquisa ou estatística aprovados, sujeitos à supervisão ética e a compromissos de confidencialidade.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card id="section-4" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Share2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">4. QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Podemos compartilhar informações em situações específicas descritas nesta seção e/ou com os seguintes terceiros.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Nós Poderemos precisar compartilhar suas informações pessoais nas seguintes situações:
              </p>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Transferências de Negócios.
                </h5>
                <p className="text-muted-foreground text-sm">
                  Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte de nossa empresa por outra empresa.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card id="section-5" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">5. QUAL É A NOSSA POSIÇÃO EM RELAÇÃO A SITES DE TERCEIROS?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Não nos responsabilizamos pela segurança de quaisquer informações que você compartilhe com terceiros aos quais possamos fornecer links ou que anunciem em nossos Serviços, mas que não sejam filiados a eles.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Os Nossos Serviços podem conter links para sites, serviços online ou aplicativos móveis de terceiros e/ou anúncios de terceiros não afiliados a nós, que podem direcionar para outros sites, serviços ou aplicativos. Portanto, não oferecemos nenhuma garantia em relação a esses terceiros e não nos responsabilizamos por quaisquer perdas ou danos causados pelo uso de tais sites, serviços ou aplicativos de terceiros. A inclusão de um link para um site, serviço ou aplicativo de terceiros não implica em endosso de nossa parte. Não podemos garantir a segurança e a privacidade dos dados que você fornece a sites de terceiros. Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade. Não nos responsabilizamos pelo conteúdo, pelas práticas de privacidade e segurança ou pelas políticas de terceiros, incluindo outros sites, serviços ou aplicativos que possam estar vinculados aos Serviços. Você deve revisar as políticas desses terceiros e contatá-los diretamente para esclarecer suas dúvidas.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card id="section-6" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">6. Por quanto tempo guardamos suas informações?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas neste Aviso de Privacidade, a menos que a lei exija o contrário.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Manteremos suas informações pessoais apenas pelo tempo necessário para as finalidades estabelecidas neste Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (como para fins fiscais, contábeis ou outros requisitos legais).
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, excluiremos ou anonimizados essas informações ou, se isso não for possível (por exemplo, porque suas informações pessoais foram armazenadas em backups), armazenamos suas informações pessoais com segurança e as isolarmos de qualquer processamento adicional até que a exclusão seja possível.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card id="section-7" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">7. COMO PROTEGEMOS SUAS INFORMAÇÕES?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Nosso objetivo é proteger suas informações pessoais por meio de um sistema de medidas de segurança organizacionais e técnicas.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas e razoáveis, projetadas para proteger a segurança de quaisquer informações pessoais que processamos. No entanto, apesar de nossas salvaguardas e esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura. Portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros terceiros não autorizados não consigam burlar nossa segurança e coletar, acessar, roubar ou modificar suas informações indevidamente. Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e para nossos Serviços é de sua inteira responsabilidade. Você deve acessar os Serviços somente em um ambiente seguro.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card id="section-8" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Baby className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">8. Coletamos informações de menores de idade?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Não coletamos dados de pessoas intencionalmente descritivas nem realizamos marketing direcionado a crianças menores de 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, de forma consciente ou a idade equivalente conforme especificado por lei em sua jurisdição. Nem vendemos intencionalmente essas informações pessoais. Ao usar os Serviços, você declara ter pelo menos 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição ou que você é o pai ou responsável legal de um menor de idade e consente com o uso dos Serviços por esse menor. Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, ou a idade equivalente conforme especificado por lei em sua jurisdição. Caso tenhamos coletado esses dados, desativaremos a conta e tomaremos as medidas cabíveis para excluí-los prontamente de nossos registros. Se você tomar conhecimento de quaisquer dados que possamos ter coletado de crianças menores de 18 anos ou a idade equivalente conforme especificado por lei em sua jurisdição, entre em contato conosco em{" "}
                <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                  privacidade@tradepar.com.br
                </a>.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card id="section-9" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">9. QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Dependendo do seu estado de residência nos EUA ou em algumas regiões, como Espaço Econômico Europeu (EEE), Reino Unido (RU), Suíça e Canadá Você possui direitos que lhe permitem maior acesso e controle sobre suas informações pessoais. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Em algumas regiões (como o Espaço Econômico Europeu, o Reino Unido, a Suíça e o Canadá), você tem certos direitos de acordo com as leis de proteção de dados aplicáveis. Esses direitos podem incluir:
              </p>

              <ul className="space-y-2">
                {[
                  "(i) o direito de solicitar acesso e obter uma cópia de suas informações pessoais;",
                  "(ii) o direito de solicitar a retificação ou o apagamento;",
                  "(iii) o direito de restringir o processamento de suas informações pessoais;",
                  "(iv) se aplicável, o direito à portabilidade dos dados; e",
                  "(v) o direito de não ser submetido a decisões automatizadas."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Se uma decisão que produza efeitos legais ou similares for tomada exclusivamente por meios automatizados, nós o informaremos, explicaremos os principais fatores e ofereceremos uma maneira simples de solicitar uma revisão humana. Em determinadas circunstâncias, você também pode ter o direito de se opor ao processamento de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco por meio das informações de contato fornecidas na seção{" "}
                <button onClick={() => scrollToSection('section-14')} className="text-primary hover:underline font-medium">
                  "COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?"
                </button>{" "}
                abaixo.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Analisaremos e tomaremos as medidas cabíveis em relação a qualquer solicitação, de acordo com as leis de proteção de dados aplicáveis.
              </p>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground text-sm">
                  Se você estiver localizado no EEE ou no Reino Unido e acreditar que estamos processando suas informações pessoais de forma ilegal, você também tem o direito de apresentar uma reclamação à autoridade de proteção de dados do seu Estado-Membro ou à autoridade de proteção de dados do Reino Unido.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground text-sm">
                  Se você estiver localizado na Suíça, poderá entrar em contato com o Comissário Federal de Proteção de Dados e Informação.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-foreground mb-3">Retirada do seu consentimento:</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Se estivermos dependendo do seu consentimento para processar suas informações pessoais, que pode ser consentimento expresso e/ou implícito, dependendo da legislação aplicável. Você tem o direito de retirar seu consentimento a qualquer momento. Você pode retirar seu consentimento a qualquer momento entrando em contato conosco através dos dados de contato fornecidos na seção{" "}
                  <button onClick={() => scrollToSection('section-14')} className="text-primary hover:underline">
                    "Como você pode entrar em contato conosco sobre este aviso?"
                  </button>{" "}
                  abaixo.
                </p>
                <p className="text-muted-foreground text-sm mt-3">
                  No entanto, observe que isso não afetará a legalidade do processamento antes de sua retirada, nem, quando a legislação aplicável o permitir, isso afetará o processamento de suas informações pessoais realizado com base em fundamentos legais de processamento que não sejam o consentimento.
                </p>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2">Cancelamento do recebimento de comunicações de marketing e promocionais:</h5>
                <p className="text-muted-foreground text-sm">
                  Você pode cancelar a assinatura de nossas comunicações de marketing e promocionais a qualquer momento clicando no link de cancelamento de inscrição nos e-mails que enviamos, ou entrando em contato conosco através dos dados fornecidos na seção{" "}
                  <button onClick={() => scrollToSection('section-14')} className="text-primary hover:underline">
                    "Como você pode entrar em contato conosco sobre este aviso?"
                  </button>{" "}
                  abaixo. Você será então removido das listas de marketing. No entanto, ainda poderemos entrar em contato com você — por exemplo, para enviar mensagens relacionadas ao serviço que sejam necessárias para a administração e uso da sua conta, para responder a solicitações de serviço ou para outros fins não relacionados a marketing.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para{" "}
                <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                  privacidade@tradepar.com.br
                </a>.
              </p>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card id="section-10" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ToggleRight className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">10. CONTROLES PARA RECURSOS DE NÃO RASTREAR</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A maioria dos navegadores da web e alguns sistemas operacionais móveis e aplicativos móveis incluem um recurso "Não rastrear" (Do-Not-Track). "DNT") recurso ou configuração que você pode ativar para sinalizar sua preferência de privacidade de não ter seus dados sobre suas atividades de navegação online monitorados e coletados. Nesta fase, não existe um padrão tecnológico uniforme para conhecendo a implementação de sinais DNT tem sido finalizado, sendo assim, atualmente não respondemos a sinais DNT (Do Not Track) do navegador ou a qualquer outro mecanismo que comunique automaticamente sua escolha de não ser rastreado online. Caso seja adotado um padrão para rastreamento online que devamos seguir no futuro, informaremos a você sobre essa prática em uma versão revisada deste Aviso de Privacidade.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A legislação da Califórnia exige que informemos como respondemos aos sinais "Não Rastrear" (DNT) dos navegadores da web. Isso ocorre porque atualmente não existe um padrão legal ou da indústria para reconhecer e homenagear Não respondemos a sinais DNT (Do Not Track) neste momento.
              </p>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Controle Global de Privacidade:
                </h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um navegador ou extensão que oferece suporte ao GPC, trataremos isso como uma solicitação válida para optar por não permitir a venda ou o compartilhamento de suas informações pessoais para fins de publicidade direcionada, conforme as leis de privacidade estaduais aplicáveis, incluindo a Lei de Privacidade do Consumidor da Califórnia (CCPA). Quando detectarmos um sinal do GPC em seu navegador, aplicamos automaticamente sua preferência de não participação, sem exigir que você tome qualquer ação adicional. Para obter mais informações sobre o GPC e como ativá-lo, visite o{" "}
                  <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                    Global Privacy Control.org
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card id="section-11" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">11. OS RESIDENTES DOS ESTADOS UNIDOS TÊM DIREITOS ESPECÍFICOS DE PRIVACIDADE?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic text-sm">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Se você reside em Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah e Virgínia. Você pode ter o direito de solicitar acesso e receber detalhes sobre as informações pessoais que mantemos a seu respeito e como as processamos, corrigir imprecisões, obter uma cópia ou excluir suas informações pessoais. Você também pode ter o direito de revogar seu consentimento para o processamento de suas informações pessoais. Esses direitos podem ser limitados em algumas circunstâncias pela legislação aplicável. Mais informações são fornecidas abaixo.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Categorias de informações pessoais que coletamos</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A tabela abaixo mostra as categorias de informações pessoais que coletamos nos últimos doze (12) meses. A tabela inclui exemplos ilustrativos de cada categoria e não reflete as informações pessoais que coletamos de você. Para obter um inventário completo de todas as informações pessoais que processamos, consulte a seção{" "}
                  <button onClick={() => scrollToSection('section-1')} className="text-primary hover:underline">
                    "QUE INFORMAÇÕES COLETAMOS?"
                  </button>
                </p>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="p-3 text-left font-semibold text-foreground border-b border-border">Categoria</th>
                      <th className="p-3 text-left font-semibold text-foreground border-b border-border">Exemplos</th>
                      <th className="p-3 text-center font-semibold text-foreground border-b border-border">Coletado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: "A. Identificadores", ex: "Dados de contato, como nome verdadeiro, pseudônimo, endereço postal, número de telefone fixo ou celular, identificador pessoal único, identificador online, endereço IP, endereço de e-mail e nome da conta.", col: "NÃO" },
                      { cat: "B. Informações pessoais, conforme definidas na legislação de registros de clientes da Califórnia.", ex: "Name, contact information, education, employment, employment history, and financial information", col: "NO" },
                      { cat: "C. Protected classification characteristics under state or federal law", ex: "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data", col: "NO" },
                      { cat: "D. Commercial information", ex: "Transaction information, purchase history, financial details, and payment information", col: "NO" },
                      { cat: "E. Biometric information", ex: "Fingerprints and voiceprints", col: "NO" },
                      { cat: "F. Atividade na Internet ou em outras redes similares", ex: "Histórico de navegação, histórico de pesquisa, online comportamento, dados de interesse e interações com nossos sites, aplicativos, sistemas e anúncios, bem como com os de terceiros.", col: "NÃO" },
                      { cat: "G. Dados de geolocalização", ex: "Localização do dispositivo", col: "NÃO" },
                      { cat: "H. Informações de áudio, eletrônicas, sensoriais ou similares", ex: "Imagens e gravações de áudio, vídeo ou chamadas criadas em conexão com nossas atividades comerciais.", col: "NÃO" },
                      { cat: "I. Informações profissionais ou relacionadas ao emprego", ex: "Informações de contato comercial para que possamos lhe fornecer nossos serviços em nível empresarial, ou cargo, histórico profissional e qualificações, caso você se candidate a uma vaga conosco.", col: "NÃO" },
                      { cat: "J. Informações sobre educação", ex: "Registros de alunos e informações de diretório", col: "NÃO" },
                      { cat: "K. Inferências extraídas de informações pessoais coletadas", ex: "Inferências extraídas de qualquer uma das informações pessoais coletadas listadas acima para criar um perfil ou resumo sobre, por exemplo, as preferências e características de um indivíduo.", col: "NÃO" },
                      { cat: "L. Informações pessoais sensíveis", ex: "", col: "NÃO" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="p-3 text-foreground font-medium align-top">{row.cat}</td>
                        <td className="p-3 text-muted-foreground">{row.ex || "—"}</td>
                        <td className="p-3 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${row.col === "NÃO" || row.col === "NO" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
                            {row.col}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Também podemos coletar outras informações pessoais fora dessas categorias por meio de interações suas conosco pessoalmente, online, por telefone ou por correio, no contexto de:
              </p>

              <ul className="space-y-2">
                {[
                  "Receber ajuda através dos nossos canais de apoio ao cliente;",
                  "Participação em pesquisas ou concursos com clientes; e",
                  "Facilitar a prestação dos nossos serviços e responder às suas solicitações."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Fontes de informações pessoais</h4>
                <p className="text-muted-foreground">
                  Saiba mais sobre as fontes de informações pessoais que coletamos em{" "}
                  <button onClick={() => scrollToSection('section-1')} className="text-primary hover:underline">
                    "QUE INFORMAÇÕES COLETAMOS?"
                  </button>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Como usamos e compartilhamos informações pessoais</h4>
                <p className="text-muted-foreground">
                  Saiba mais sobre como utilizamos suas informações pessoais na seção{" "}
                  <button onClick={() => scrollToSection('section-2')} className="text-primary hover:underline">
                    "Como processamos suas informações?"
                  </button>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Suas informações serão compartilhadas com mais alguém?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos divulgar suas informações pessoais aos nossos prestadores de serviços de acordo com um contrato escrito entre nós e cada prestador de serviços. Saiba mais sobre como divulgamos informações pessoais na seção{" "}
                  <button onClick={() => scrollToSection('section-4')} className="text-primary hover:underline">
                    "Quando e com quem compartilhamos suas informações pessoais?"
                  </button>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos usar suas informações pessoais para nossos próprios fins comerciais, como para realizar pesquisas internas para desenvolvimento e demonstração tecnológica. Isso não é considerado como "vendendo" das suas informações pessoais.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Não divulgamos, vendemos ou compartilhamos quaisquer informações pessoais a terceiros para fins comerciais ou empresariais nos últimos doze (12) meses. Não venderemos nem compartilharemos informações pessoais de visitantes, usuários e outros consumidores do site no futuro.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Seus direitos</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Você possui direitos assegurados por certas leis de proteção de dados estaduais dos EUA. No entanto, esses direitos não são absolutos e, em alguns casos, podemos recusar sua solicitação, conforme permitido por lei. Esses direitos incluem:
                </p>
                <ul className="space-y-2">
                  {[
                    "Direito de saber se estamos ou não processando seus dados pessoais",
                    "Direito de acessar seus dados pessoais",
                    "Direito de corrigir imprecisões em seus dados pessoais",
                    "Direito de solicitar a exclusão de seus dados pessoais",
                    "Direito de obter uma cópia dos dados pessoais que você compartilhou conosco anteriormente",
                    "Direito à não discriminação pelo exercício de seus direitos",
                    'Direito de optar por não permitir o processamento de seus dados pessoais se eles forem usados para publicidade direcionada (ou compartilhamento, conforme definido pela lei de privacidade da Califórnia), venda de dados pessoais ou criação de perfis para fins de decisões que produzam efeitos legais ou similares significativos ("criação de perfis")'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Dependendo do estado onde você reside, você também pode ter os seguintes direitos:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Direito de acesso às categorias de dados pessoais que estão sendo processados (conforme permitido pela legislação aplicável, incluindo a lei de privacidade de Minnesota).",
                    "Direito de obter uma lista das categorias de terceiros aos quais divulgamos dados pessoais (conforme permitido pela legislação aplicável, incluindo a lei de privacidade na Califórnia, Delaware e Maryland).",
                    "Direito de obter uma lista de terceiros específicos aos quais divulgamos dados pessoais (conforme permitido pela legislação aplicável, incluindo a lei de privacidade local Minnesota e Oregon)",
                    "Direito de obter uma lista de terceiros aos quais venderemos dados pessoais (conforme permitido pela legislação aplicável, incluindo a lei de privacidade de Connecticut).",
                    "Direito de revisar, compreender, questionar e, dependendo de onde você mora, corrigir a forma como os dados pessoais foram criados (conforme permitido pela legislação aplicável, incluindo a lei de privacidade em Connecticut e Minnesota)",
                    "Direito de limitar uso e a divulgação de dados pessoais sensíveis (conforme permitido pela legislação aplicável, incluindo a lei de privacidade da Califórnia)",
                    "Direito de optar por não permitir a coleta de dados sensíveis e dados pessoais coletados por meio da operação de um recurso de reconhecimento de voz ou facial (conforme permitido pela legislação aplicável, incluindo a lei de privacidade da Flórida)."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Como exercer seus direitos</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer esses direitos, você pode entrar em contato conosco mediante o envio de uma solicitação de acesso do titular dos dados, enviando-nos um e-mail para{" "}
                  <a href="mailto:contato@tradepar.com.br" className="text-primary hover:underline font-medium">
                    contato@tradepar.com.br
                  </a>, visitando{" "}
                  <a href="https://tradepar.com.br/contato" className="text-primary hover:underline font-medium">
                    https://tradepar.com.br/contato
                  </a>, ou consultando os detalhes de contato na parte inferior deste documento.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vamos honrar suas preferências de desativação, caso você ative o sinal de desativação do Controle Global de Privacidade (GPC) em seu navegador.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De acordo com certas leis de proteção de dados estaduais dos EUA, você pode designar um autorizado/um agente para fazer uma solicitação em seu nome. Podemos negar uma solicitação de um autorizado/um agente que não apresentou comprovante de que foi devidamente autorizado. Agir em seu nome de acordo com as leis aplicáveis.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Solicitar verificação</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ao recebermos sua solicitação, precisaremos verificar sua identidade para confirmar se você é a mesma pessoa sobre a qual temos informações em nosso sistema. Usaremos as informações pessoais fornecidas em sua solicitação apenas para verificar sua identidade ou sua autoridade para fazer a solicitação. No entanto, se não pudermos verificar sua identidade com base nas informações que já mantemos, poderemos solicitar que forneça informações adicionais para fins de verificação de identidade e para fins de segurança ou prevenção de fraudes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Se você enviar a solicitação por meio de um agente autorizado, poderemos precisar coletar informações adicionais para verificar sua identidade antes de processar sua solicitação, e o agente precisará fornecer comprovante de sua autorização para agir em seu nome. Forneça uma autorização por escrito para que seu agente envie uma solicitação em seu nome e nos permita processar sua solicitação.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Apelações</h4>
                <p className="text-muted-foreground leading-relaxed">
                  De acordo com certas leis de proteção de dados estaduais dos EUA, se nos recusarmos a atender à sua solicitação, você poderá recorrer da nossa decisão enviando um e-mail para{" "}
                  <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                    privacidade@tradepar.com.br
                  </a>. Informaremos você por escrito sobre qualquer ação tomada ou não tomada em resposta ao seu recurso, incluindo uma explicação por escrito dos motivos das decisões. Caso seu recurso seja negado, você poderá apresentar uma reclamação ao procurador-geral do seu estado.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-foreground mb-3">California "Brilhe a Luz" Lei</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seção 1798.83 do Código Civil da Califórnia, também conhecida como "Brilhe a Luz". De acordo com a lei, nossos usuários residentes na Califórnia podem solicitar e obter de nós, uma vez por ano e gratuitamente, informações sobre as categorias de informações pessoais (se houver) que divulgamos a terceiros para fins de marketing direto, bem como os nomes e endereços de todos os terceiros com os quais compartilhamos informações pessoais no ano civil imediatamente anterior. Se você reside na Califórnia e deseja fazer essa solicitação, envie-a por escrito utilizando as informações de contato fornecidas na seção{" "}
                  <button onClick={() => scrollToSection('section-14')} className="text-primary hover:underline">
                    "Como você pode entrar em contato conosco sobre este aviso?"
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 12 */}
          <Card id="section-12" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">12. OUTRAS REGIÕES POSSUEM DIREITOS DE PRIVACIDADE ESPECÍFICOS?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Você pode ter direitos adicionais dependendo do país em que reside.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Austrália e Nova Zelândia</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Coletamos e processamos suas informações pessoais de acordo com as obrigações e condições estabelecidas por Lei de Privacidade da Austrália de 1988 e Lei de Privacidade da Nova Zelândia de 2020 (Lei de Privacidade).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Este Aviso de Privacidade atende aos requisitos de notificação definidos em ambas as Leis de Privacidade, em particular: quais informações pessoais coletamos de você, de quais fontes, para quais finalidades e outros destinatários de suas informações pessoais.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Caso não deseje fornecer as informações pessoais necessárias para operar a finalidade aplicável, isso pode afetar nossa capacidade de fornecer nossos serviços, em particular:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    oferecer produtos ou serviços que você deseja
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    responder ou ajudar com suas solicitações
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  A qualquer momento, você tem o direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção{" "}
                  <button onClick={() => scrollToSection('section-15')} className="text-primary hover:underline">
                    "Como você pode revisar, atualizar ou excluir os dados que coletamos de você?"
                  </button>
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Se você acredita que estamos processando suas informações pessoais de forma ilegal, você tem o direito de apresentar uma reclamação sobre uma violação dos Princípios Australianos de Privacidade ao Gabinete do Comissário de Informação Australiano e uma violação dos Princípios de Privacidade da Nova Zelândia ao Gabinete do Comissário de Privacidade da Nova Zelândia.
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">República da África do Sul</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  A qualquer momento, você tem o direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção{" "}
                  <button onClick={() => scrollToSection('section-15')} className="text-primary hover:underline">
                    "Como você pode revisar, atualizar ou excluir os dados que coletamos de você?"
                  </button>
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Caso esteja insatisfeito com a forma como tratamos qualquer reclamação relativa ao nosso processamento de informações pessoais, pode contactar a entidade reguladora, cujos dados de contacto são os seguintes:
                </p>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm mb-2">Regulador de Informação (África do Sul)</p>
                  <p className="text-muted-foreground text-xs">
                    Para informações gerais:{" "}
                    <a href="mailto:enquires@inforegulator.org.za" className="text-primary hover:underline">
                      enquires@inforegulator.org.za
                    </a>
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Reclamações (Preenche o formulário 5 da POPIA/PAIA):{" "}
                    <a href="mailto:PAIAClaimts@inforegulator.org.za" className="text-primary hover:underline">
                      PAIAClaimts@inforegulator.org.za
                    </a>{" "}
                    e{" "}
                    <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">
                      POPIAComplaints@inforegulator.org.za
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 13 */}
          <Card id="section-13" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">13. ATUALIZAMOS ESTE AVISO?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground italic">
                  <strong className="text-foreground not-italic">Resumindo:</strong> Sim, atualizaremos este aviso conforme necessário para imprimi-lo as leis aplicáveis.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada por um novo aviso: "Revisado" A data está no topo deste Aviso de Privacidade. Caso façamos alterações substanciais a este Aviso de Privacidade, podemos notificá-lo publicando um aviso dessas alterações em local visível ou enviando uma notificação diretamente a você. Recomendamos que você revise este Aviso de Privacidade com frequência para se manter informado sobre como protegemos suas informações.
              </p>
            </CardContent>
          </Card>

          {/* Section 14 */}
          <Card id="section-14" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">14. COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas ou comentários sobre este aviso, pode entrar em contato conosco. Envie-nos um e-mail para{" "}
                <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                  privacidade@tradepar.com.br
                </a>{" "}
                ou entre em contato pelo correio no seguinte endereço:
              </p>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-foreground text-lg">TradePar</h4>
                </div>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:privacidade@tradepar.com.br" className="text-primary hover:underline font-medium">
                    privacidade@tradepar.com.br
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 15 */}
          <Card id="section-15" className="mb-8 border-border bg-card scroll-mt-24">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">15. Como você pode revisar, atualizar ou excluir os dados que coletamos de você?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Com base nas leis aplicáveis do seu país, você pode ter o direito de solicitar acesso às informações pessoais que coletamos sobre você, alterar essas informações ou excluí-las. Para solicitar a revisão, atualização ou exclusão de suas informações pessoais, visite:{" "}
                <a href="https://tradepar.com.br/contato" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                  https://tradepar.com.br/contato
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
