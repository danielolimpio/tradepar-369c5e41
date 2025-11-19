import { Monitor, Code, Cpu, Zap, TrendingUp, Database, Shield, Cloud, Terminal, GitBranch, Blocks, Workflow } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const platforms = [
  {
    icon: Monitor,
    title: "MetaTrader 4",
    description: "A plataforma mais popular e confiável do mercado forex mundial",
    features: [
      "30+ indicadores técnicos integrados",
      "Expert Advisors (EA) compatível",
      "Análise multi-timeframe completa",
      "Execução rápida de ordens",
      "Gráficos personalizáveis",
      "Trading algorítmico avançado"
    ],
    specs: {
      timeframes: "9 timeframes",
      orders: "4 tipos de ordens",
      languages: "MQL4"
    },
    color: "primary",
  },
  {
    icon: Code,
    title: "MetaTrader 5",
    description: "Evolução do MT4 com recursos avançados e maior versatilidade",
    features: [
      "38 indicadores técnicos",
      "21 timeframes disponíveis",
      "Análise de profundidade de mercado",
      "Calendário econômico integrado",
      "Sistema de hedge",
      "Backtesting multi-moeda"
    ],
    specs: {
      timeframes: "21 timeframes",
      orders: "6 tipos de ordens",
      languages: "MQL5"
    },
    color: "primary",
  },
  {
    icon: Database,
    title: "TradingView",
    description: "Plataforma web moderna com análise técnica profissional",
    features: [
      "100+ indicadores técnicos",
      "Gráficos avançados em tempo real",
      "Alertas personalizados",
      "Rede social de traders",
      "Pine Script para indicadores customizados",
      "Multi-device sincronizado"
    ],
    specs: {
      timeframes: "Todos os timeframes",
      orders: "Integração com brokers",
      languages: "Pine Script"
    },
    color: "primary",
  },
  {
    icon: Cpu,
    title: "cTrader",
    description: "Interface intuitiva com execução ultrarrápida e transparente",
    features: [
      "Execução ECN direta",
      "Profundidade de mercado Nível II",
      "Backtesting preciso",
      "cBots para automação",
      "Interface moderna e clean",
      "Copy trading integrado"
    ],
    specs: {
      timeframes: "26 timeframes",
      orders: "Execução instantânea",
      languages: "C#"
    },
    color: "primary",
  },
];

const automationTools = [
  {
    icon: Zap,
    title: "Expert Advisors (EA)",
    description: "Automatize suas estratégias de trading 24/7",
    features: [
      "Trading automatizado completo",
      "Backtesting histórico preciso",
      "Otimização de parâmetros",
      "Gerenciamento de risco integrado",
      "Multi-par simultâneo",
      "Notificações em tempo real"
    ]
  },
  {
    icon: Terminal,
    title: "Myfxbook",
    description: "Monitore e analise seu desempenho em tempo real",
    features: [
      "Análise completa de trades",
      "Comparação com outros traders",
      "Social trading avançado",
      "AutoTrade para copiar estratégias",
      "Estatísticas detalhadas",
      "Alertas de performance"
    ]
  },
  {
    icon: Cloud,
    title: "VPS Trading",
    description: "Servidor virtual para trading 24/7 sem interrupções",
    features: [
      "Uptime de 99.9%",
      "Latência ultra-baixa",
      "Segurança máxima",
      "Backup automático",
      "Acesso remoto",
      "Suporte técnico 24/7"
    ]
  },
  {
    icon: GitBranch,
    title: "Signal Copier",
    description: "Copie trades de traders profissionais automaticamente",
    features: [
      "Cópia instantânea de sinais",
      "Gerenciamento de lote customizado",
      "Filtros de risco",
      "Múltiplas contas",
      "Estatísticas de performance",
      "Controle total de posições"
    ]
  },
];

const indicators = [
  { name: "Moving Average (MA)", category: "Tendência", description: "Identifica direção do mercado" },
  { name: "RSI (Relative Strength Index)", category: "Momentum", description: "Mede força dos movimentos" },
  { name: "MACD", category: "Tendência", description: "Convergência e divergência de médias" },
  { name: "Bollinger Bands", category: "Volatilidade", description: "Mede volatilidade do mercado" },
  { name: "Fibonacci Retracement", category: "Suporte/Resistência", description: "Níveis de retração" },
  { name: "Stochastic Oscillator", category: "Momentum", description: "Identifica sobrecompra/sobrevenda" },
  { name: "ATR (Average True Range)", category: "Volatilidade", description: "Mede volatilidade do ativo" },
  { name: "Ichimoku Cloud", category: "Tendência", description: "Sistema completo de análise" },
  { name: "Volume Profile", category: "Volume", description: "Análise de volume por preço" },
  { name: "Parabolic SAR", category: "Tendência", description: "Stop and Reverse system" },
  { name: "ADX (Average Directional Index)", category: "Tendência", description: "Força da tendência" },
  { name: "Williams %R", category: "Momentum", description: "Oscilador de momentum" },
];

const tradingApis = [
  {
    name: "MetaTrader API",
    description: "Integração completa com MT4/MT5",
    features: ["REST API", "WebSocket", "Python/C++/C#"]
  },
  {
    name: "FIX Protocol",
    description: "Protocolo institucional de trading",
    features: ["Execução rápida", "Multi-broker", "Baixa latência"]
  },
  {
    name: "REST APIs",
    description: "Integração via HTTP requests",
    features: ["JSON format", "OAuth 2.0", "Rate limiting"]
  },
  {
    name: "WebSocket",
    description: "Streaming de dados em tempo real",
    features: ["Real-time", "Bi-direcional", "Low overhead"]
  },
];

const Tecnologia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tecnologia de Ponta</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-bull">Plataformas</span> & Ferramentas de Trading
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Domine as principais plataformas, ferramentas de automação e tecnologias que os traders profissionais utilizam para maximizar seus resultados no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Platforms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plataformas de <span className="text-gradient-bear">Trading</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare as principais plataformas e escolha a ideal para seu estilo de trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover-lift hover:border-primary/40 transition-all overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{platform.specs.timeframes}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{platform.title}</CardTitle>
                    <CardDescription className="text-base">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {platform.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border flex gap-4 text-xs text-muted-foreground">
                        <span>{platform.specs.orders}</span>
                        <span>•</span>
                        <span>{platform.specs.languages}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ferramentas de <span className="text-gradient-bear">Automação</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Automatize suas estratégias e opere 24/7 sem intervenção manual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {automationTools.map((tool, index) => {
              const Icon = tool.icon;
              
              return (
                <Card key={index} className="bg-card border-border hover-lift transition-all">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20 mb-4">
                      <Icon className="h-6 w-6 text-destructive" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indicators & Tools */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Indicadores <span className="text-gradient-bear">Técnicos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Principais indicadores utilizados pelos traders profissionais
            </p>
          </div>

          <Tabs defaultValue="todos" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="tendencia">Tendência</TabsTrigger>
              <TabsTrigger value="momentum">Momentum</TabsTrigger>
              <TabsTrigger value="volatilidade">Volatilidade</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicators.map((indicator, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">{indicator.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{indicator.category}</Badge>
                      </div>
                      <CardDescription className="text-sm">{indicator.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tendencia" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicators.filter(i => i.category === "Tendência").map((indicator, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-base">{indicator.name}</CardTitle>
                      <CardDescription className="text-sm">{indicator.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="momentum" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicators.filter(i => i.category === "Momentum").map((indicator, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-base">{indicator.name}</CardTitle>
                      <CardDescription className="text-sm">{indicator.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="volatilidade" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicators.filter(i => i.category === "Volatilidade").map((indicator, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-base">{indicator.name}</CardTitle>
                      <CardDescription className="text-sm">{indicator.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* APIs & Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              APIs & <span className="text-gradient-bear">Integração</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Integre suas estratégias com as principais APIs de trading do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tradingApis.map((api, index) => (
              <Card key={index} className="bg-card border-border hover-lift transition-all">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <Blocks className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{api.name}</CardTitle>
                  <CardDescription className="text-sm">{api.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {api.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-primary/20 hover-lift transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">Aprenda MQL5 & Automação Completa</CardTitle>
                <CardDescription className="text-lg">
                  Tutoriais completos para criar seus próprios Expert Advisors, indicadores customizados e automatizar completamente suas estratégias de trading profissional.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold mb-2">MQL4/MQL5</h4>
                    <p className="text-sm text-muted-foreground">Programação para MetaTrader</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold mb-2">Pine Script</h4>
                    <p className="text-sm text-muted-foreground">Indicadores para TradingView</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold mb-2">Python Trading</h4>
                    <p className="text-sm text-muted-foreground">Bots e automação avançada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tecnologia;
