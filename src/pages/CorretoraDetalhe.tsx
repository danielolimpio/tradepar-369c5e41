import { Shield, Globe, TrendingUp, Users, Clock, DollarSign, CreditCard, HeadphonesIcon, Award, ChevronRight, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const CorretoraDetalhe = () => {
  const { brokerSlug } = useParams<{ brokerSlug: string }>();
  const currentSlug = brokerSlug || "ig-group";

  const brokerData = {
    name: "IG Group",
    fullName: "IG Group Holdings plc",
    founded: "1974",
    headquarters: "Londres, Reino Unido",
    ceo: "June Felix",
    stockCode: "LSE: IGG",
    website: "https://www.ig.com",
    email: "support@ig.com",
    languages: ["Português", "Inglês", "Espanhol", "Alemão", "Francês", "+15 idiomas"],
    rating: 4.8,
    verified: true,
    lastUpdate: "Novembro de 2025"
  };

  let regulations = [
    { name: "FCA", country: "Reino Unido", license: "113942", status: "Ativa", compensation: "£85.000" },
    { name: "ASIC", country: "Austrália", license: "220440", status: "Ativa", compensation: "Não aplicável" },
    { name: "BaFin", country: "Alemanha", license: "148759", status: "Ativa", compensation: "€100.000" },
    { name: "MAS", country: "Cingapura", license: "CMS100896", status: "Ativa", compensation: "Não aplicável" },
  ];

  let globalPresence = {
    offices: 15,
    countriesServed: 170,
    mainOffices: [
      "Londres (Sede Principal)",
      "Chicago (EUA)",
      "Cingapura",
      "Sydney (Austrália)",
      "Joanesburgo (África do Sul)"
    ]
  };

  let metrics = {
    activeClients: "350.000+",
    monthlyVolume: "$2,8 trilhões USD",
    marketCap: "£3,2 bilhões",
    annualProfit: "£467 milhões (2024)",
    monthlyTraffic: "8,5 milhões de visitas",
    yearsActive: "51 anos"
  };

  const platforms = [
    { name: "Plataforma Própria IG", available: true },
    { name: "MetaTrader 4", available: true },
    { name: "ProRealTime", available: true },
    { name: "L2 Dealer", available: true },
    { name: "TradingView", available: true }
  ];

  const instruments = [
    { type: "Forex", count: "80+ pares" },
    { type: "Ações", count: "17.000+" },
    { type: "Índices", count: "90+" },
    { type: "Commodities", count: "50+" },
    { type: "Criptomoedas", count: "15+" },
    { type: "ETFs", count: "3.000+" }
  ];

  const tradingConditions = [
    { label: "Depósito Mínimo", value: "$0 (sem mínimo)" },
    { label: "Spread EUR/USD", value: "A partir de 0,6 pips" },
    { label: "Alavancagem Máxima", value: "1:30 (varejo) / 1:200 (profissional)" },
    { label: "Comissão", value: "A partir de $0 (depende do tipo de conta)" },
    { label: "Swap Overnight", value: "Variável (ver site)" },
    { label: "Lote Mínimo", value: "0,01 lotes (micro)" },
    { label: "Expert Advisors", value: "Sim (MT4)" },
    { label: "Scalping", value: "Permitido" }
  ];

  const paymentMethods = [
    { method: "Cartão de Crédito/Débito", time: "Instantâneo", fees: "Gratuito", limits: "$250 - sem limite" },
    { method: "Transferência Bancária", time: "1-3 dias úteis", fees: "Gratuito", limits: "Sem limite" },
    { method: "PayPal", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" },
    { method: "Skrill", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" },
    { method: "Neteller", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" }
  ];

  const competitors = [
    { name: "IG Group", spread: "0,6", minDeposit: "$0", regulation: "FCA, ASIC, BaFin", rating: "4.8" },
    { name: "Saxo Bank", spread: "0,9", minDeposit: "$2.000", regulation: "FSA, FCA, ASIC", rating: "4.7" },
    { name: "Interactive Brokers", spread: "0,2", minDeposit: "$0", regulation: "SEC, FCA, ASIC", rating: "4.6" },
    { name: "CMC Markets", spread: "0,7", minDeposit: "$0", regulation: "FCA, ASIC", rating: "4.5" },
    { name: "Pepperstone", spread: "0,6", minDeposit: "$200", regulation: "FCA, ASIC, CySEC", rating: "4.7" }
  ];

  const timeline = [
    { year: "1974", event: "Fundação da IG Index por Stuart Wheeler" },
    { year: "2000", event: "Lançamento da primeira plataforma online de trading" },
    { year: "2003", event: "Expansão internacional: abertura de escritório em Chicago" },
    { year: "2008", event: "Aquisição da corretora americana FuturesBetting" },
    { year: "2016", event: "Listagem na Bolsa de Londres (LSE: IGG)" },
    { year: "2019", event: "Aquisição da plataforma de investimentos Tastytrade" },
    { year: "2023", event: "Lançamento de trading de criptomoedas em 14 países" },
    { year: "2025", event: "Mais de 350.000 clientes ativos em 170+ países" }
  ];

  const faqs = [
    {
      question: "A IG Group é segura?",
      answer: "Sim, a IG Group é uma das corretoras mais seguras do mundo. Está regulada pela FCA (Reino Unido), ASIC (Austrália), BaFin (Alemanha) e outras autoridades importantes. A empresa é listada na Bolsa de Londres desde 2016 e oferece segregação de fundos, garantindo que o dinheiro dos clientes seja mantido separado dos fundos operacionais da empresa."
    },
    {
      question: "Posso abrir conta no Brasil?",
      answer: "Sim, a IG Group aceita clientes brasileiros. O processo de abertura de conta é 100% online e pode ser feito em português. É necessário ter mais de 18 anos e fornecer documentos de identificação válidos (RG ou CNH e comprovante de residência)."
    },
    {
      question: "Como faço para sacar meus lucros?",
      answer: "Os saques podem ser solicitados a qualquer momento através da área de cliente. A IG Group processa saques para a mesma conta/método usado no depósito. Saques por cartão e carteiras eletrônicas são processados em até 2 horas úteis, enquanto transferências bancárias levam 1-3 dias úteis. Não há taxas de saque."
    },
    {
      question: "A IG Group oferece conta demo?",
      answer: "Sim, a IG Group oferece conta demo gratuita com $20.000 virtuais, válida por tempo ilimitado. A conta demo replica todas as funcionalidades da conta real, permitindo que você teste estratégias sem risco antes de investir dinheiro real."
    },
    {
      question: "Qual é o depósito mínimo?",
      answer: "A IG Group não exige depósito mínimo para abrir conta. No entanto, para começar a negociar, é recomendado ter pelo menos $250-$500 para gerenciar adequadamente o risco e aproveitar as oportunidades do mercado."
    },
    {
      question: "Existe risco de perder mais do que eu investi?",
      answer: "Para contas de varejo na Europa e Austrália, a IG Group oferece proteção de saldo negativo, garantindo que você não possa perder mais do que o saldo da sua conta. No entanto, é importante lembrar que 75% dos clientes perdem dinheiro ao negociar CFDs. Negocie com responsabilidade."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${brokerData.name} — Perfil Completo 2025 | Spreads, Depósito Mínimo e Avaliação | TradePar`}</title>
        <meta
          name="description"
          content={`Descubra tudo sobre ${brokerData.name} em 2025: regulamentação, spreads, depósito mínimo, segurança e avaliações reais. Guia completo para traders brasileiros.`}
        />
        <meta
          name="keywords"
          content={`${brokerData.name}, corretora forex, trading, spreads, depósito mínimo, regulamentação, avaliação ${brokerData.name}, melhor corretora forex`}
        />
        <link
          rel="canonical"
          href={`https://tradepar.com.br/corretoras/${brokerSlug || "ig-group"}`}
        />

        <meta
          property="og:title"
          content={`${brokerData.name} — Perfil Completo 2025 | Análise Detalhada`}
        />
        <meta
          property="og:description"
          content={`Análise completa da ${brokerData.name}: fundada em ${brokerData.founded}, regulada por autoridades globais e com condições competitivas.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://tradepar.com.br/corretoras/${brokerSlug || "ig-group"}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "FinancialService",
              name: brokerData.name,
              description: `Corretora de Forex e CFDs regulamentada internacionalmente: ${brokerData.fullName}`,
              url: brokerData.website,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: brokerData.rating.toString(),
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "TradePar",
            },
            datePublished: "2025-11-20",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                {brokerData.verified && <CheckCircle className="w-4 h-4 mr-1" />}
                Corretora Verificada
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {brokerData.name}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Perfil Completo — Tudo sobre regulamentação, spreads, depósito mínimo e avaliações
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="outline" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Avaliação: {brokerData.rating}/5
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Fundada: {brokerData.founded}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  {globalPresence.countriesServed}+ Países
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground">
                Atualizado em {brokerData.lastUpdate}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-bull">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Abrir Conta Gratuitamente
                </Button>
                <Button size="lg" variant="outline">
                  Conta Demo Gratuita
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-4 bg-destructive/10 border-y border-destructive/20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-start gap-3 text-sm">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Aviso de Risco:</strong> CFDs são instrumentos complexos e apresentam alto risco de perda rápida devido à alavancagem. <strong className="text-destructive">75% das contas de investidores de varejo perdem dinheiro</strong> ao negociar CFDs com este provedor. Considere se compreende como funcionam os CFDs e se pode correr o risco de perder seu dinheiro.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-16 space-y-16">
          
          {/* Basic Information */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Informações Básicas</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Nome Oficial</p>
                      <p className="text-lg font-semibold">{brokerData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data de Fundação</p>
                      <p className="text-lg font-semibold">{brokerData.founded}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sede Principal</p>
                      <p className="text-lg font-semibold">{brokerData.headquarters}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CEO Atual</p>
                      <p className="text-lg font-semibold">{brokerData.ceo}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Código de Bolsa</p>
                      <p className="text-lg font-semibold">{brokerData.stockCode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Site Oficial</p>
                      <a href={brokerData.website} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline flex items-center gap-2">
                        {brokerData.website.replace('https://', '')}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail de Suporte</p>
                      <p className="text-lg font-semibold">{brokerData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Idiomas Suportados</p>
                      <p className="text-lg font-semibold">{brokerData.languages.slice(0, 3).join(", ")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Regulation & Security */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Regulamentação & Segurança</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Múltiplas Regulamentações de Nível 1</h3>
                      <p className="text-muted-foreground text-sm">
                        A IG Group é regulamentada pelas autoridades financeiras mais rigorosas do mundo, garantindo os mais altos padrões de proteção ao investidor.
                      </p>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Regulador</TableHead>
                        <TableHead>País/Região</TableHead>
                        <TableHead>Licença</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Compensação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {regulations.map((reg) => (
                        <TableRow key={reg.license}>
                          <TableCell className="font-semibold">{reg.name}</TableCell>
                          <TableCell>{reg.country}</TableCell>
                          <TableCell className="font-mono text-sm">{reg.license}</TableCell>
                          <TableCell>
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              {reg.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{reg.compensation}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Segregação de Fundos
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Todo o dinheiro dos clientes é mantido em contas bancárias segregadas, separado dos fundos operacionais da empresa.
                      </p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Proteção de Saldo Negativo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Disponível para clientes de varejo na Europa e Austrália, garantindo que você não possa perder mais do que investiu.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Global Presence */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Presença Global</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Escritórios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{globalPresence.offices}</p>
                  <p className="text-sm text-muted-foreground mt-2">Escritórios físicos em mercados principais</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Países Atendidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{globalPresence.countriesServed}+</p>
                  <p className="text-sm text-muted-foreground mt-2">Clientes em todos os continentes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Anos no Mercado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">51</p>
                  <p className="text-sm text-muted-foreground mt-2">Décadas de experiência e confiança</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Principais Escritórios</CardTitle>
                <CardDescription>Centros de operação e atendimento ao redor do mundo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {globalPresence.mainOffices.map((office, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{office}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Business Metrics */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Métricas Empresariais (2025)</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.activeClients}</p>
                  <p className="text-sm text-muted-foreground mt-2">Clientes Ativos</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.monthlyVolume}</p>
                  <p className="text-sm text-muted-foreground mt-2">Volume Mensal</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.marketCap}</p>
                  <p className="text-sm text-muted-foreground mt-2">Valor de Mercado</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.annualProfit}</p>
                  <p className="text-sm text-muted-foreground mt-2">Lucro Anual</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.monthlyTraffic}</p>
                  <p className="text-sm text-muted-foreground mt-2">Tráfego Mensal</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.yearsActive}</p>
                  <p className="text-sm text-muted-foreground mt-2">Anos de Mercado</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Platforms & Products */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Plataformas & Produtos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plataformas de Trading</CardTitle>
                  <CardDescription>Múltiplas opções para todos os estilos de trading</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="font-medium">{platform.name}</span>
                        {platform.available && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Disponível
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Copy Trading:</strong> Sim, através da plataforma própria IG
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong className="text-foreground">Auto Trading:</strong> Suporte a Expert Advisors (EAs) no MT4
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instrumentos Disponíveis</CardTitle>
                  <CardDescription>Mais de 17.000 instrumentos para diversificar seu portfólio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {instruments.map((instrument, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="font-medium">{instrument.type}</span>
                        <span className="text-primary font-semibold">{instrument.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm font-semibold mb-2">Tipos de Conta:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Standard</Badge>
                      <Badge variant="outline">Professional</Badge>
                      <Badge variant="outline">Islamic (Swap-Free)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Trading Conditions */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Condições de Negociação</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {tradingConditions.map((condition, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{condition.label}</p>
                        <p className="text-lg font-semibold mt-1">{condition.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Payment Methods */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Métodos de Depósito e Retirada</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Método</TableHead>
                      <TableHead>Tempo Médio</TableHead>
                      <TableHead>Taxas</TableHead>
                      <TableHead>Limites</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentMethods.map((method, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-primary" />
                            <span className="font-medium">{method.method}</span>
                          </div>
                        </TableCell>
                        <TableCell>{method.time}</TableCell>
                        <TableCell>
                          <Badge variant={method.fees === "Gratuito" ? "default" : "outline"} className={method.fees === "Gratuito" ? "bg-primary/20 text-primary border-primary/30" : ""}>
                            {method.fees}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{method.limits}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Nota Importante:</strong> Os saques devem ser feitos para a mesma conta/método usado no depósito inicial, conforme regulamentações anti-lavagem de dinheiro (AML). Não há taxas de processamento cobradas pela IG Group.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Customer Support */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Suporte ao Cliente</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Chat ao Vivo</p>
                      <p className="text-sm text-muted-foreground">Disponível 24/5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-sm text-muted-foreground">+44 20 7896 0011 (Reino Unido)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-sm text-muted-foreground">support@ig.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos Educacionais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Academia IG (cursos gratuitos)</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Webinars semanais ao vivo</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Centro de análise de mercado</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>E-books e guias em PDF</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Reviews & Reputation */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Avaliações & Reputação</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.5/5</div>
                  <p className="text-sm text-muted-foreground mb-1">Trustpilot</p>
                  <p className="text-xs text-muted-foreground">Baseado em 12.000+ avaliações</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.8/5</div>
                  <p className="text-sm text-muted-foreground mb-1">ForexBrokers.com</p>
                  <p className="text-xs text-muted-foreground">Análise profissional detalhada</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.6/5</div>
                  <p className="text-sm text-muted-foreground mb-1">Investopedia</p>
                  <p className="text-xs text-muted-foreground">Melhor para iniciantes (2025)</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>O que os traders dizem</CardTitle>
                <CardDescription>Avaliações reais de usuários verificados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">— Maria S., Brasil • 15/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "Uso a IG há 3 anos e nunca tive problemas. Plataforma estável, spreads competitivos e saques sempre dentro do prazo. O suporte em português é excelente."
                  </p>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">— João P., Portugal • 08/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "A variedade de instrumentos é impressionante. Além de forex, negocio ações e índices na mesma conta. A regulamentação FCA me dá muita segurança."
                  </p>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                      <Award className="w-4 h-4 text-muted" />
                    </div>
                    <span className="text-sm text-muted-foreground">— Carlos M., Brasil • 02/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "Boa corretora, mas os spreads poderiam ser menores em horários de baixa liquidez. Fora isso, é muito confiável e profissional."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Company History */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">História da Empresa</h2>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Linha do Tempo: 1974 - 2025</CardTitle>
                <CardDescription>51 anos de inovação e crescimento no mercado financeiro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-mono">{item.year}</Badge>
                        </div>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Missão e Visão</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Missão:</strong> Proporcionar acesso transparente e democrático aos mercados financeiros globais, com tecnologia de ponta e educação de qualidade.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Visão:</strong> Ser a corretora de referência mundial em confiabilidade, inovação e experiência do cliente, mantendo os mais altos padrões éticos e regulatórios.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Comparison Table */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Comparativo com Concorrentes</h2>
            </div>
            
            <Card>
              <CardContent className="p-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Corretora</TableHead>
                      <TableHead>Spread EUR/USD</TableHead>
                      <TableHead>Depósito Mínimo</TableHead>
                      <TableHead>Regulamentação Principal</TableHead>
                      <TableHead>Avaliação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {competitors.map((competitor, index) => (
                      <TableRow key={index} className={competitor.name === "IG Group" ? "bg-primary/10" : ""}>
                        <TableCell className="font-semibold">
                          {competitor.name}
                          {competitor.name === "IG Group" && (
                            <Badge className="ml-2 bg-primary/20 text-primary border-primary/30">
                              Esta Corretora
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{competitor.spread} pips</TableCell>
                        <TableCell>{competitor.minDeposit}</TableCell>
                        <TableCell className="text-sm">{competitor.regulation}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-primary fill-primary" />
                            <span className="font-semibold">{competitor.rating}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Por que escolher a IG Group?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>51 anos de história:</strong> Uma das corretoras mais antigas e confiáveis do mundo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>17.000+ instrumentos:</strong> A maior variedade de ativos para diversificação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Regulamentação Tier-1:</strong> FCA, ASIC, BaFin e outras autoridades de prestígio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Sem depósito mínimo:</strong> Comece a investir com o valor que desejar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Educação gratuita:</strong> Academia IG com cursos, webinars e materiais exclusivos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Perguntas Frequentes (FAQ)</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Abra uma conta demo gratuita ou comece a negociar com dinheiro real. Junte-se a mais de 350.000 traders em todo o mundo que confiam na IG Group.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 glow-bull">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Abrir Conta Real
                  </Button>
                  <Button size="lg" variant="outline">
                    Experimentar Conta Demo
                  </Button>
                </div>

                <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Site Oficial <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Central de Ajuda <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Relatórios Anuais <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Regulamentação <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default CorretoraDetalhe;