import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LegalSidebar from "@/components/LegalSidebar";
import { 
  Scale, 
  Clock, 
  FileText, 
  Shield, 
  Users, 
  Ban,
  UserPlus,
  FileLock,
  Settings,
  Power,
  RefreshCw,
  Globe,
  Gavel,
  AlertTriangle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermosDeUso = () => {
  useEffect(() => {
    document.title = "Termos de Uso - TradePar | Portal de Forex Trading";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leia os Termos de Uso do TradePar. Conheça as condições de utilização, direitos e obrigações para usar nosso portal de forex trading."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const sidebarItems = [
    { id: "section-1", num: 1, title: "Nossos Serviços" },
    { id: "section-2", num: 2, title: "Direitos de Propriedade Intelectual" },
    { id: "section-3", num: 3, title: "Representações do Usuário" },
    { id: "section-4", num: 4, title: "Atividades Proibidas" },
    { id: "section-5", num: 5, title: "Contribuições Geradas pelo Usuário" },
    { id: "section-6", num: 6, title: "Contribuição Licença" },
    { id: "section-7", num: 7, title: "Gestão de Serviços" },
    { id: "section-8", num: 8, title: "Vigência e Rescisão" },
    { id: "section-9", num: 9, title: "Modificações e Interrupções" },
    { id: "section-10", num: 10, title: "Lei Aplicável" },
    { id: "section-11", num: 11, title: "Resolução de Controvérsias" },
    { id: "section-12", num: 12, title: "Correções" },
    { id: "section-13", num: 13, title: "Isenção de Responsabilidade" },
    { id: "section-14", num: 14, title: "Limitações de Responsabilidade" },
    { id: "section-15", num: 15, title: "Indenização" },
    { id: "section-16", num: 16, title: "Dados do Usuário" },
    { id: "section-17", num: 17, title: "Comunicações Eletrônicas" },
    { id: "section-18", num: 18, title: "Diversos" },
    { id: "section-19", num: 19, title: "Contate-nos" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 mb-6 shadow-lg shadow-primary/10">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            TERMOS DE USO
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <p className="text-lg">Última atualização: 15 de junho de 2026</p>
          </div>
        </header>

        <div className="flex gap-8 max-w-7xl mx-auto">
          <LegalSidebar items={sidebarItems} />

          <div className="flex-1 max-w-4xl">
            {/* Aceitação dos Termos */}
            <Card className="mb-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">ACEITAÇÃO DOS NOSSOS TERMOS LEGAIS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Nós somos <strong className="text-primary">TradePar</strong> ("Empresa", "nós", "nosso").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Operamos o site{" "}
                  <a href="https://tradepar.com.br" className="text-primary hover:underline font-medium">
                    https://tradepar.com.br
                  </a>
                  , bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode entrar em contato conosco por e-mail para{" "}
                  <a href="mailto:contato@tradepar.com.br" className="text-primary hover:underline">
                    contato@tradepar.com.br
                  </a>{" "}
                  ou por correio para Av. Júlia Freire, 1200 – Expedicionários, João Pessoa – PB, CEP 58041-000.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, seja pessoalmente ou em nome de uma entidade ("você"), e TradePar. Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
                </p>

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">
                      CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Termos e condições suplementares ou documentos que possam ser publicados nos Serviços periodicamente são expressamente incorporados a este documento por referência. Reservamo-nos o direito, a nosso exclusivo critério, de fazer alterações ou modificações a estes Termos Legais a qualquer momento e por qualquer motivo, informando notificá-lo sobre quaisquer alterações atualizando o "Última atualização". A partir da data de publicação destes Termos Legais, você renuncia a qualquer direito de receber notificação específica de cada alteração.
                </p>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      É sua responsabilidade revisar periodicamente estes Termos Legais para se manter informado sobre as atualizações. Você estará sujeito às alterações contidas em quaisquer Termos Legais revisados e será considerado ciente e terá aceitado as alterações ao continuar utilizando os Serviços após a data de publicação dos Termos Legais revisados.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Recomendamos que imprima uma cópia destes Termos Legais para seus registros.
                </p>
              </CardContent>
            </Card>

            {/* Section 1 */}
            <Card id="section-1" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">1. NOSSOS SERVIÇOS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país. Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais, se e na medida em que estas forem aplicáveis.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card id="section-2" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">2. DIREITOS DE PROPRIEDADE INTELECTUAL</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Nossa propriedade intelectual</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nosso conteúdo e nossas marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                    <p className="text-muted-foreground italic">
                      O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços <strong className="text-foreground not-italic">"NO ESTADO EM QUE SE ENCONTRAM"</strong> para o seu uso pessoal, não comercial ou para fins comerciais internos apenas.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Seu uso de nossos Serviços</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, concedemos a você uma licença não exclusiva, intransferível e revogável para:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">acessar os Serviços; e</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada,</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    exclusivamente para seu uso pessoal, não comercial ou para fins comerciais internos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Exceto conforme estabelecido nesta seção ou em outras partes de nossos Termos Legais, nenhuma parte dos Serviços, Conteúdo ou Marcas pode ser copiada, reproduzida, agregada, republicada, carregada, publicada, exibida publicamente, codificada, traduzida, transmitida, distribuída, vendida, licenciada ou explorada de qualquer outra forma para qualquer finalidade comercial, sem nossa prévia autorização expressa por escrito.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Caso deseje utilizar os Serviços, o Conteúdo ou as Marcas de forma diferente da estabelecida nesta seção ou em qualquer outra parte dos nossos Termos Legais, envie sua solicitação para:{" "}
                    <a href="mailto:contato@tradepar.com.br" className="text-primary hover:underline">
                      contato@tradepar.com.br
                    </a>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Caso lhe concedamos permissão para publicar, reproduzir ou exibir publicamente qualquer parte dos nossos Serviços ou Conteúdo, você deverá nos identificar como proprietários ou licenciadores dos Serviços, Conteúdo ou Marcas e garantir que qualquer aviso de direitos autorais ou de propriedade intelectual apareça ou esteja visível ao publicar, reproduzir ou exibir nosso Conteúdo.
                  </p>
                </div>

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-foreground font-medium">
                    Qualquer violação destes Direitos de Propriedade Intelectual constituirá uma violação material dos nossos Termos Legais e o seu direito de utilizar os nossos Serviços será imediatamente rescindido.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Suas contribuições</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Por favor, revise a seção "ATIVIDADES PROIBIDAS" atentamente antes de usar nossos Serviços para entender os direitos que você nos concede e as obrigações que você tem ao publicar ou carregar qualquer conteúdo por meio dos Serviços.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Envio de informações:</strong> Envie-nos diretamente qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços ("Submissões"). Ao enviar este conteúdo, você concorda em nos ceder todos os direitos de propriedade intelectual relativos a ele. Você concorda que seremos proprietários deste conteúdo e teremos o direito de utilizá-lo e divulgá-lo irrestritamente para qualquer finalidade lícita, comercial ou não, sem qualquer obrigação de reconhecimento ou compensação para você.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Você é responsável pelo conteúdo que publica ou carrega:</strong> Ao nos enviar suas contribuições por meio de qualquer parte dos Serviços você:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Confirma que você leu e concorda com nossos termos "ATIVIDADES PROIBIDAS" e não publicará, enviará, divulgará, carregará ou transmitirá por meio dos Serviços qualquer Envio que seja ilegal, assediador, odioso, prejudicial, difamatório, obsceno, intimidatório, abusivo, discriminatório, ameaçador para qualquer pessoa ou grupo, sexualmente explícito, falso, impreciso, enganoso ou que induza ao erro;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Na medida permitida pela legislação aplicável, renuncia a todos e quaisquer direitos morais relativos a qualquer Submissão desse tipo;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Garante que qualquer Submissão desse tipo seja original ou você possui os direitos e licenças necessários para submetê-las e que você possui plena autoridade para nos conceder os direitos acima mencionados;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Garante e declara que suas Submissões não constituem informações confidenciais.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Você é o único responsável por suas Submissões e você concorda expressamente em nos reembolsar por todas e quaisquer perdas que possamos sofrer devido à sua violação de (a) esta seção, (b) quaisquer direitos de propriedade intelectual de terceiros ou (c) lei aplicável.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card id="section-3" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">3. REPRESENTAÇÕES DO USUÁRIO</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ao utilizar os Serviços, você declara e garante que:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">(1)</span>
                    <span className="text-muted-foreground">você tem capacidade legal e concorda em cumprir estes Termos Legais;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">(2)</span>
                    <span className="text-muted-foreground">você não é menor de idade na jurisdição em que reside;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">(3)</span>
                    <span className="text-muted-foreground">você não acessará os Serviços por meios automatizados ou não humanos, seja por meio de um bot, script ou de outra forma;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">(4)</span>
                    <span className="text-muted-foreground">você não usará os Serviços para qualquer finalidade ilegal ou não autorizada; e</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">(5)</span>
                    <span className="text-muted-foreground">seu uso dos Serviços não violará nenhuma lei ou regulamento aplicável.</span>
                  </li>
                </ul>
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mt-4">
                  <p className="text-muted-foreground">
                    Caso você forneça informações falsas, imprecisas, desatualizadas ou incompletas, temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card id="section-4" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <Ban className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl">4. ATIVIDADES PROIBIDAS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual os disponibilizamos. Os Serviços não podem ser usados em conexão com qualquer atividade comercial, exceto aquelas que sejam especificamente endossadas ou aprovadas por nós.
                </p>
                <p className="text-foreground font-medium">Como usuário dos Serviços, você concorda em não:</p>
                <ul className="space-y-3">
                  {[
                    "Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa autorização por escrito.",
                    "Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuário.",
                    "Contornar, desativar ou interferir de qualquer outra forma com os recursos de segurança dos Serviços, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou que impõem limitações ao uso dos Serviços e/ou do Conteúdo neles contido.",
                    "Desmerecer, difamar ou prejudicar de qualquer outra forma, em nossa opinião, a nós e/ou aos Serviços.",
                    "Utilizar qualquer informação obtida através dos Serviços para assediar, abusar ou prejudicar outra pessoa.",
                    "Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso ou má conduta.",
                    "Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis.",
                    "Envolver-se em enquadramento ou vinculação não autorizados aos Serviços.",
                    "Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outros materiais, incluindo o uso excessivo de letras maiúsculas e spam, que interfiram no uso e aproveitamento ininterrupto dos Serviços por qualquer pessoa.",
                    "Fazer qualquer uso automatizado do sistema, como o uso de scripts para enviar comentários ou mensagens, ou o uso de ferramentas de mineração de dados, robôs ou ferramentas similares de coleta e extração de dados.",
                    "Remover o aviso de direitos autorais ou outros avisos de direitos de propriedade de qualquer conteúdo.",
                    "Tentativa de se passar por outro usuário ou pessoa, ou usar o nome de usuário de outro usuário.",
                    "Carregar ou transmitir qualquer material que funcione como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo gifs transparentes, pixels 1x1, web bugs, cookies ou outros dispositivos semelhantes.",
                    "Interferir, interromper ou sobrecarregar indevidamente os Serviços ou as redes ou serviços conectados aos Serviços.",
                    "Assediar, incomodar, intimidar ou ameaçar qualquer um de nossos funcionários ou agentes envolvidos na prestação de qualquer parte dos Serviços a você.",
                    "Tentativa de contornar quaisquer medidas dos Serviços destinadas a impedir ou restringir o acesso aos Serviços.",
                    "Copiar ou adaptar o software dos Serviços, incluindo, entre outros, Flash, PHP, HTML, JavaScript ou outros códigos.",
                    "Decifrar, descompilar, desmontar ou realizar engenharia reversa de qualquer software que faça parte dos Serviços.",
                    "Utilizar um agente de compras para efetuar compras nos Serviços.",
                    "Fazer qualquer uso não autorizado dos Serviços, incluindo a coleta de nomes de usuário e/ou endereços de e-mail de usuários por meios eletrônicos.",
                    "Utilizar os Serviços como parte de qualquer esforço para competir conosco ou utilizar os Serviços e/ou o Conteúdo para qualquer fim que gere receita comercial.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card id="section-5" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">5. CONTRIBUIÇÕES GERADAS PELO USUÁRIO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Os serviços não oferecem aos usuários a opção de enviar ou publicar conteúdo. Podemos oferecer a você a oportunidade de criar, enviar, publicar, exibir, transmitir, executar, distribuir ou divulgar conteúdo e materiais para nós ou nos Serviços, incluindo, entre outros, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outros materiais (coletivamente, "Contribuições"). As contribuições podem ser visualizadas por outros usuários dos Serviços e por meio de sites de terceiros. Ao criar ou disponibilizar quaisquer Contribuições, você declara e garante que está em conformidade com estes Termos.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card id="section-6" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileLock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">6. CONTRIBUIÇÃO LICENÇA</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer e suas escolhas (incluindo configurações).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao enviar sugestões ou outros comentários sobre os Serviços, você concorda que podemos usar e compartilhar esses comentários para qualquer finalidade, sem qualquer compensação para você.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Não reivindicamos qualquer direito de propriedade sobre suas Contribuições. Você mantém a propriedade integral de todas as suas contribuições e de quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados a elas. Não nos responsabilizamos por quaisquer declarações ou representações contidas em suas contribuições fornecidas por você em qualquer área dos Serviços. Você é o único responsável por suas Contribuições aos Serviços e concorda expressamente em nos exonerar de toda e qualquer responsabilidade e em se abster de qualquer ação legal contra nós em relação às suas Contribuições.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card id="section-7" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">7. GESTÃO DE SERVIÇOS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar os Serviços em busca de violações destes Termos Legais; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos Legais, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desativar (na medida em que for tecnologicamente viável) quaisquer de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso prévio ou responsabilidade, remover dos Serviços ou desativar todos os arquivos e conteúdos que sejam excessivamente grandes ou que, de alguma forma, sobrecarregam nossos sistemas; e (5) gerenciar os Serviços de maneira a proteger nossos direitos e propriedade e facilitar o funcionamento adequado dos Serviços.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card id="section-8" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Power className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">8. VIGÊNCIA E RESCISÃO</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos Legais permanecerão em pleno vigor enquanto você utilizar os Serviços.
                </p>
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-foreground text-sm leading-relaxed">
                    SEM PREJUÍZO DE QUALQUER OUTRA DISPOSIÇÃO DESTES TERMOS LEGAIS, RESERVAMO-NOS O DIREITO DE, A NOSSO CRITÉRIO EXCLUSIVO E SEM AVISO PRÉVIO OU RESPONSABILIDADE, NEGAR O ACESSO E O USO DOS SERVIÇOS (INCLUINDO O BLOQUEIO DE DETERMINADOS ENDEREÇOS IP) A QUALQUER PESSOA, POR QUALQUER MOTIVO OU SEM MOTIVO ALGUM, INCLUINDO, SEM LIMITAÇÃO, POR VIOLAÇÃO DE QUALQUER DECLARAÇÃO, GARANTIA OU CLÁUSULA CONTIDA NESTES TERMOS LEGAIS OU DE QUALQUER LEI OU REGULAMENTO APLICÁVEL. PODEMOS ENCERRAR SEU USO OU PARTICIPAÇÃO NOS SERVIÇOS OU EXCLUIR SEUS DADOS OU QUALQUER CONTEÚDO QUE VOCÊ TENHA PUBLICADO, A QUALQUER MOMENTO, SEM AVISO PRÉVIO, A NOSSO CRITÉRIO EXCLUSIVO.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Caso sua conta seja encerrada ou suspensa por qualquer motivo, você fica proibido de se registrar e criar uma nova conta em seu nome, com um nome falso ou emprestado, ou em nome de terceiros, mesmo que esteja agindo em nome desses terceiros. Além do encerramento ou suspensão da sua conta, reservamo-nos o direito de tomar as medidas legais cabíveis, incluindo, entre outras, ações civis, criminais e cautelares.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card id="section-9" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">9. MODIFICAÇÕES E INTERRUPÇÕES</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento e por qualquer motivo, a nosso exclusivo critério, sem aviso prévio. No entanto, não temos a obrigação de atualizar qualquer informação em nossos Serviços. Não seremos responsáveis perante você ou terceiros por qualquer modificação, alteração de preço, suspensão ou descontinuidade dos Serviços.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenções relacionadas aos Serviços, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar os Serviços de qualquer outra forma, a qualquer momento e por qualquer motivo, sem aviso prévio.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Você concorda que não temos qualquer responsabilidade por quaisquer perdas, danos ou inconvenientes causados pela sua incapacidade de acessar ou usar os Serviços durante qualquer período de inatividade ou descontinuidade dos mesmos. Nada nestes Termos Legais será interpretado como uma obrigação nossa de manter e dar suporte aos Serviços ou de fornecer quaisquer correções, atualizações ou versões relacionadas a eles.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card id="section-10" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">10. LEI APLICÁVEL</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos Legais serão regidos e definidos de acordo com as leis do Brasil, em especial as leis da República Federativa do Brasil, e você consente irrevogavelmente que os tribunais da Comarca de João Pessoa, Estado da Paraíba, terão jurisdição exclusiva para resolver qualquer disputa que possa surgir em relação a estes Termos Legais.
                </p>
              </CardContent>
            </Card>

            {/* Section 11 */}
            <Card id="section-11" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Gavel className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">11. RESOLUÇÃO DE CONTROVÉRSIAS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Negociações informais</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Para agilizar a resolução e controlar os custos de qualquer disputa, controvérsia ou reclamação relacionada a estes Termos Legais (cada um deles "Disputa" e, coletivamente, as "Disputas") trazido por você ou por nós (individualmente, um "Parte" e, coletivamente, os "Partes"), as Partes concordam em primeiro tentar negociar informalmente qualquer Disputa (exceto aquelas Disputas expressamente previstas abaixo) por pelo menos 30 dias antes do início da arbitragem. Essas negociações informais começam mediante notificação por escrito de uma Parte à outra.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Arbitragem vinculativa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Qualquer disputa decorrente ou relacionada a estes Termos Legais, incluindo qualquer questão relativa à sua existência, validade ou rescisão, será submetida e resolvida definitivamente pelo Tribunal Internacional de Arbitragem Comercial da Câmara Europeia de Arbitragem (Bélgica, Bruxelas, Avenue Louise, 146), de acordo com as Regras deste Tribunal, que, por força desta referência, são consideradas parte integrante desta cláusula. O número de árbitros será 03. A sede, e foro, ou local de arbitragem será em João Pessoa. O idioma do processo será em Português. A lei aplicável a estes Termos Legais será a lei substantiva do Brasil.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Restrições</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As Partes concordam que qualquer arbitragem será limitada à disputa entre as Partes individualmente. Na máxima extensão permitida por lei, (a) nenhuma arbitragem será consolidada com qualquer outro processo; (b) não há direito ou autorização para que qualquer Disputa seja arbitrada em caráter coletivo ou em conjunto com outras partes utilizando procedimentos de ação coletiva; e (c) não há direito ou autoridade para que qualquer Disputa seja apresentada em uma suposta capacidade representativa em nome do público em geral ou de quaisquer outras pessoas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Exceções às negociações informais e à arbitragem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As Partes concordam que as seguintes Disputas não estão sujeitas às disposições acima referentes à arbitragem vinculativa em negociações informais: (a) quaisquer Disputas que visem fazer valer ou proteger, ou que digam respeito à validade de, quaisquer direitos de propriedade intelectual de uma Parte; (b) qualquer Disputa relacionada a, ou decorrente de, alegações de roubo, pirataria, invasão de privacidade ou uso não autorizado; e (c) qualquer pedido de medida cautelar. Se esta disposição for considerada ilegal ou inexequível, nenhuma das Partes optará pela arbitragem de qualquer Disputa abrangida pela parte desta disposição considerada ilegal ou inexequível, e tal Disputa será decidida por um tribunal de jurisdição competente dentre os tribunais listados acima, e as Partes concordam em se submeter à jurisdição pessoal desse tribunal.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 12 */}
            <Card id="section-12" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">12. CORREÇÕES</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e outras informações diversas. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
                </p>
              </CardContent>
            </Card>

            {/* Section 13 */}
            <Card id="section-13" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl">13. ISENÇÃO DE RESPONSABILIDADE</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONÍVEIS". VOCÊ CONCORDA QUE O USO DOS SERVIÇOS SERÁ POR SUA CONTA E RISCO. NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, ISENTANDO DE TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, RELATIVAS AOS SERVIÇOS E AO SEU USO, INCLUINDO, SEM LIMITAÇÃO, AS GARANTIAS IMPLÍCITAS DE COMERCIABILIDADE, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    NÃO OFERECEMOS GARANTIAS OU DECLARAÇÕES SOBRE A PRECISÃO OU INTEGRIDADE DO CONTEÚDO DOS SERVIÇOS OU DO CONTEÚDO DE QUAISQUER SITES OU APLICATIVOS MÓVEIS VINCULADOS AOS SERVIÇOS E NÃO ASSUMIMOS QUALQUER RESPONSABILIDADE POR QUAISQUER (1) ERROS, EQUÍVOCOS OU IMPRECISÕES DE CONTEÚDO E MATERIAIS, (2) LESÕES PESSOAIS OU DANOS MATERIAIS, DE QUALQUER NATUREZA, RESULTANTES DO SEU ACESSO E USO DOS SERVIÇOS, (3) QUAISQUER ACESSOS OU USO NÃO AUTORIZADOS DE NOSSOS SERVIDORES SEGUROS E/OU DE TODAS AS INFORMAÇÕES PESSOAIS E/OU FINANCEIRAS ARMAZENADAS NELES, (4) QUALQUER INTERRUPÇÃO OU CESSAÇÃO DE TRANSMISSÃO DE OU PARA OS SERVIÇOS, (5) QUAISQUER BUGS, VÍRUS, CAVALOS DE TRÓIA OU SIMILARES QUE POSSAM SER TRANSMITIDOS PARA OU ATRAVÉS DOS SERVIÇOS POR TERCEIROS, E/OU (6) QUAISQUER ERROS OU OMISSÕES EM QUALQUER CONTEÚDO E MATERIAIS OU POR QUALQUER PERDA OU DANO DE QUALQUER TIPO INCORRIDO COMO RESULTADO DO USO DE QUALQUER CONTEÚDO PUBLICADO, TRANSMITIDO OU DE OUTRA FORMA DISPONIBILIZADO ATRAVÉS DOS SERVIÇOS.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    NÃO GARANTIMOS, ENDOSSAMOS, AVALIZAMOS OU ASSUMIMOS RESPONSABILIDADE POR QUALQUER PRODUTO OU SERVIÇO ANUNCIADO OU OFERECIDO POR TERCEIROS ATRAVÉS DOS SERVIÇOS, DE QUALQUER SITE COM HYPERLINK OU DE QUALQUER SITE OU APLICATIVO MÓVEL EXIBIDO EM QUALQUER BANNER OU OUTRA PUBLICIDADE, E NÃO SEREMOS PARTE NEM SEREMOS RESPONSÁVEIS DE QUALQUER FORMA POR MONITORAR QUALQUER TRANSAÇÃO ENTRE VOCÊ E QUAISQUER FORNECEDORES TERCEIROS DE PRODUTOS OU SERVIÇOS. ASSIM COMO NA COMPRA DE UM PRODUTO OU SERVIÇO POR QUALQUER MEIO OU EM QUALQUER AMBIENTE, VOCÊ DEVE USAR SEU MELHOR JULGAMENTO E EXERÇA CAUTELA QUANDO APROPRIADO.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 14 */}
            <Card id="section-14" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">14. LIMITAÇÕES DE RESPONSABILIDADE</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS OU AGENTES SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS, INCLUINDO LUCROS CESSANTES, PERDA DE RECEITA, PERDA DE DADOS OU OUTROS DANOS DECORRENTES DO SEU USO DOS SERVIÇOS, MESMO QUE TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAIS DANOS. NÃO OBSTANTE QUALQUER DISPOSIÇÃO EM CONTRÁRIO CONTIDA NESTE DOCUMENTO, NOSSA RESPONSABILIDADE PERANTE VOCÊ, POR QUALQUER MOTIVO E INDEPENDENTEMENTE DA FORMA DA AÇÃO, ESTARÁ SEMPRE LIMITADA AO MENOR VALOR ENTRE O VALOR PAGO POR VOCÊ A NÓS, SE HOUVER.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    Certas leis estaduais dos EUA e leis internacionais não permitem limitações em garantias implícitas ou a exclusão ou limitação de certos danos. Se essas leis se aplicarem a você, algumas ou todas as isenções ou limitações acima podem não se aplicar a você, e você pode ter direitos adicionais.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 15 */}
            <Card id="section-15" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">15. INDENIZAÇÃO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Você concorda em nos defender, indenizar e isentar de responsabilidade, incluindo nossas subsidiárias, afiliadas e todos os nossos respectivos diretores, agentes, parceiros e funcionários, de quaisquer perdas, danos, responsabilidades, reclamações ou demandas, incluindo honorários advocatícios e despesas razoáveis, apresentadas por terceiros devido a ou decorrentes de: (1) uso dos Serviços; (2) violação destes Termos Legais; (3) qualquer violação de suas declarações e garantias estabelecidas nestes Termos Legais; (4) sua violação dos direitos de terceiros, incluindo, entre outros, direitos de propriedade intelectual; ou (5) qualquer ato prejudicial manifestado contra qualquer outro usuário dos Serviços com quem você se conectou por meio dos Serviços. Não obstante o exposto, reservamo-nos o direito, às suas custas, de assumir a defesa e o controle exclusivos de qualquer assunto pelo qual você seja obrigado a nos indenizar, e você concorda em cooperar, às suas custas, com a nossa defesa de tais reivindicações. Faremos todos os esforços razoáveis para notificá-lo de qualquer reivindicação, ação ou processo sujeito a esta indenização assim que tomarmos conhecimento do mesmo.
                </p>
              </CardContent>
            </Card>

            {/* Section 16 */}
            <Card id="section-16" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">16. DADOS DO USUÁRIO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Conservaremos determinados dados que você transmitir aos Serviços com o objetivo de gerenciar o desempenho dos mesmos, bem como dados relacionados ao seu uso dos Serviços. Embora realize backups de rotina regulares dos dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que você tenha realizado usando os Serviços. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de dados.
                </p>
              </CardContent>
            </Card>

            {/* Section 17 */}
            <Card id="section-17" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">17. COMUNICAÇÕES ELETRÔNICAS, TRANSAÇÕES E ASSINATURAS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ao visitar os Serviços, enviar-nos e-mails e preencher formulários online, você concorda em receber comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os contratos, avisos, divulgações e outras comunicações que lhe fornecemos eletronicamente, por e-mail e nos Serviços, satisfaçam qualquer exigência legal de que tal comunicação seja feita por escrito.
                </p>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-foreground font-medium text-sm">
                    VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS, BEM COMO COM A ENTREGA ELETRÔNICA DE AVISOS, POLÍTICAS E REGISTROS DE TRANSAÇÕES INICIADAS OU CONCLUÍDAS POR NÓS OU POR MEIO DOS SERVIÇOS.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Você renuncia a quaisquer direitos ou exigências previstos em quaisquer estatutos, regulamentos, normas, portarias ou outras leis em qualquer jurisdição que exijam uma assinatura original ou a entrega ou retenção de registros não eletrônicos, ou pagamentos ou concessão de créditos por qualquer meio que não seja eletrônico.
                </p>
              </CardContent>
            </Card>

            {/* Section 18 */}
            <Card id="section-18" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">18. DIVERSOS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou referentes aos Serviços constituem o acordo integral entre você e nós. Nossa omissão em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos Legais não constituirá uma renúncia a tal direito ou disposição. Estes Termos Legais vigoram na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou falha no cumprimento de nossas obrigações causado por qualquer motivo fora do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos Legais for considerada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos Legais e não afetará a validade e aplicabilidade das demais disposições. Não há relação de joint venture, parceria, emprego ou agência entre você e nós como resultado destes Termos Legais ou do uso dos Serviços. Você concorda que estes Termos Legais não serão interpretados contra nós pelo simples fato de termos sido nós a redigi-los. Você renuncia, por meio deste instrumento, a qualquer defesa que você possa ter baseada na forma eletrônica destes Termos Legais.
                </p>
              </CardContent>
            </Card>

            {/* Section 19 */}
            <Card id="section-19" className="mb-8 border-border bg-card scroll-mt-24">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">19. CONTATE-NOS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Para resolver uma reclamação sobre os Serviços ou para obter mais informações sobre o uso dos Serviços, entre em contato conosco:
                </p>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg">TradePar</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        Av. Júlia Freire, 1200 – Expedicionários, João Pessoa – PB, CEP 58041-000
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

export default TermosDeUso;
