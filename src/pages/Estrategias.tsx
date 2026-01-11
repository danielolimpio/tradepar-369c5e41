import { TrendingUp, Target, BarChart3, Clock, Shield, Zap, TrendingDown, Activity, LineChart, Crosshair, Timer, Layers } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const strategies = [
  {
    icon: Zap,
    title: "Scalping",
    description: "Operações rápidas para aproveitar pequenas variações de preço",
    timeframe: "M1 - M5",
    risk: "Alto",
    suitable: "Traders experientes",
    winRate: "60-70%",
    riskReward: "1:1 a 1:1.5",
    details: "Estratégia de alta frequência que busca lucros pequenos mas constantes. Requer disciplina extrema e execução rápida.",
    requirements: [
      "Spreads baixos",
      "Execução instantânea",
      "Alta concentração",
      "Gerenciamento rigoroso",
      "Tempo integral disponível",
      "Boa conexão de internet"
    ],
    indicators: ["EMA 9/21", "RSI", "Stochastic", "Volume"]
  },
  {
    icon: Target,
    title: "Day Trade",
    description: "Operações intradiárias sem carregar posições overnight",
    timeframe: "M15 - H1",
    risk: "Médio-Alto",
    suitable: "Traders intermediários",
    winRate: "55-65%",
    riskReward: "1:1.5 a 1:2",
    details: "Estratégia que aproveita movimentos intradiários significativos, encerrando todas posições antes do fechamento do mercado.",
    requirements: [
      "Disponibilidade durante pregão",
      "Análise técnica sólida",
      "Controle emocional",
      "Capital adequado",
      "Setup de trading profissional",
      "Plano de trading definido"
    ],
    indicators: ["MACD", "Bollinger Bands", "Volume Profile", "Pivot Points"]
  },
  {
    icon: TrendingUp,
    title: "Swing Trade",
    description: "Aproveita movimentos de médio prazo de 2 a 10 dias",
    timeframe: "H4 - D1",
    risk: "Médio",
    suitable: "Todos os níveis",
    winRate: "50-60%",
    riskReward: "1:2 a 1:3",
    details: "Estratégia que busca capturar swings significativos do mercado, ideal para quem não pode acompanhar o mercado em tempo integral.",
    requirements: [
      "Paciência para aguardar setups",
      "Análise técnica e fundamentalista",
      "Gerenciamento de risco",
      "Disciplina para stops",
      "Capital para margem overnight",
      "Controle de emoções"
    ],
    indicators: ["Moving Averages", "Fibonacci", "MACD", "RSI"]
  },
  {
    icon: Activity,
    title: "Position Trade",
    description: "Posições de longo prazo baseadas em tendências macro",
    timeframe: "D1 - W1",
    risk: "Baixo-Médio",
    suitable: "Investidores pacientes",
    winRate: "45-55%",
    riskReward: "1:3 a 1:5",
    details: "Estratégia de longo prazo que busca grandes movimentos baseados em fundamentos e tendências macroeconômicas.",
    requirements: [
      "Capital significativo",
      "Análise fundamentalista",
      "Paciência extrema",
      "Tolerância a drawdowns",
      "Visão de longo prazo",
      "Diversificação de portfólio"
    ],
    indicators: ["Moving Averages 50/200", "Ichimoku", "Trend Lines", "Fundamentals"]
  },
  {
    icon: Crosshair,
    title: "Price Action",
    description: "Análise pura de movimentos de preço sem indicadores",
    timeframe: "Todos",
    risk: "Médio",
    suitable: "Traders avançados",
    winRate: "55-65%",
    riskReward: "1:2 a 1:3",
    details: "Estratégia baseada puramente na leitura dos movimentos de preço, suportes, resistências e padrões candlestick.",
    requirements: [
      "Experiência em análise técnica",
      "Capacidade de leitura de mercado",
      "Disciplina rigorosa",
      "Controle emocional",
      "Paciência para setups perfeitos",
      "Entendimento de estrutura de mercado"
    ],
    indicators: ["Suporte/Resistência", "Candlestick Patterns", "Trend Lines", "Chart Patterns"]
  },
  {
    icon: LineChart,
    title: "Trend Following",
    description: "Segue a tendência dominante do mercado",
    timeframe: "H4 - D1",
    risk: "Médio",
    suitable: "Todos os níveis",
    winRate: "40-50%",
    riskReward: "1:3 a 1:5",
    details: "Estratégia que identifica e segue tendências estabelecidas, cortando perdas rapidamente e deixando lucros correrem.",
    requirements: [
      "Identificação de tendências",
      "Paciência para aguardar confirmações",
      "Disciplina para stops",
      "Não operar em lateralização",
      "Gerenciamento de posição",
      "Trailing stops eficientes"
    ],
    indicators: ["ADX", "Moving Averages", "Parabolic SAR", "Donchian Channels"]
  },
  {
    icon: Timer,
    title: "Breakout Trading",
    description: "Opera rompimentos de níveis-chave de suporte e resistência",
    timeframe: "M15 - H4",
    risk: "Médio-Alto",
    suitable: "Traders intermediários",
    winRate: "50-60%",
    riskReward: "1:2 a 1:3",
    details: "Estratégia que busca capturar movimentos explosivos após rompimentos de consolidações ou níveis importantes.",
    requirements: [
      "Identificação de consolidações",
      "Confirmação de volume",
      "Stops bem posicionados",
      "Paciência para setups",
      "Execução rápida",
      "Gestão de falsos rompimentos"
    ],
    indicators: ["Volume", "Bollinger Bands", "ATR", "Support/Resistance"]
  },
  {
    icon: TrendingDown,
    title: "Mean Reversion",
    description: "Opera retornos à média após movimentos exagerados",
    timeframe: "H1 - D1",
    risk: "Médio",
    suitable: "Traders experientes",
    winRate: "60-70%",
    riskReward: "1:1.5 a 1:2",
    details: "Estratégia que identifica extremos de preço e opera o retorno à média, aproveitando correções e reversões.",
    requirements: [
      "Identificação de extremos",
      "Paciência para aguardar retorno",
      "Stops bem definidos",
      "Não operar em tendências fortes",
      "Análise de volatilidade",
      "Confirmação de reversão"
    ],
    indicators: ["Bollinger Bands", "RSI", "Stochastic", "Standard Deviation"]
  },
  {
    icon: Layers,
    title: "Grid Trading",
    description: "Sistema de ordens em grid para capturar volatilidade",
    timeframe: "Todos",
    risk: "Alto",
    suitable: "Traders avançados",
    winRate: "70-80%",
    riskReward: "Variável",
    details: "Estratégia automatizada que coloca ordens de compra e venda em intervalos regulares, aproveitando a volatilidade do mercado.",
    requirements: [
      "Capital significativo",
      "Mercado com volatilidade",
      "Automação necessária",
      "Gestão rigorosa de risco",
      "Monitoramento constante",
      "Entendimento de margem"
    ],
    indicators: ["ATR", "Volatilidade", "Grid Levels", "Equity Management"]
  },
  {
    icon: BarChart3,
    title: "Smart Money Concepts",
    description: "Segue a movimentação do dinheiro institucional",
    timeframe: "H4 - D1",
    risk: "Médio",
    suitable: "Traders avançados",
    winRate: "55-65%",
    riskReward: "1:3 a 1:5",
    details: "Estratégia avançada que identifica zonas de interesse institucional, order blocks e liquidity grabs.",
    requirements: [
      "Entendimento profundo de mercado",
      "Identificação de order blocks",
      "Leitura de fluxo de ordens",
      "Análise de liquidez",
      "Paciência extrema",
      "Disciplina rigorosa"
    ],
    indicators: ["Order Blocks", "FVG", "Liquidity Zones", "Market Structure"]
  },
];

const timeframeCategories = [
  { name: "Scalping", timeframes: ["M1", "M5"], duration: "Segundos a minutos", trades: "50-100+ por dia" },
  { name: "Day Trade", timeframes: ["M15", "M30", "H1"], duration: "Minutos a horas", trades: "5-20 por dia" },
  { name: "Swing Trade", timeframes: ["H4", "D1"], duration: "Dias a semanas", trades: "2-10 por semana" },
  { name: "Position", timeframes: ["D1", "W1"], duration: "Semanas a meses", trades: "1-5 por mês" },
];

const riskManagementRules = [
  {
    title: "Regra do 1%",
    description: "Nunca arrisque mais de 1-2% do capital por operação",
    icon: Shield
  },
  {
    title: "Risk:Reward Mínimo",
    description: "Busque sempre no mínimo 1:2 de relação risco:retorno",
    icon: Target
  },
  {
    title: "Stop Loss Obrigatório",
    description: "Toda operação deve ter stop loss definido antes da entrada",
    icon: Crosshair
  },
  {
    title: "Diversificação",
    description: "Não concentre todo capital em um único par ou estratégia",
    icon: Layers
  },
];

const Estrategias = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estratégias de Trading Forex - Scalping, Day Trade, Swing"
        description="Aprenda estratégias profissionais de trading: scalping, day trade, swing trading e mais. Análise de risco e indicadores."
        canonicalPath="/estrategias"
        keywords="estratégias forex, scalping, day trade, swing trading, análise técnica, indicadores trading"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <Target className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Estratégias Profissionais</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Estratégias de <span className="text-gradient-bear">Trading</span> Comprovadas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore as principais estratégias utilizadas por traders profissionais. Cada estratégia inclui análise detalhada de risco, timeframes ideais, indicadores recomendados e requisitos para implementação.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catálogo Completo de <span className="text-gradient-bear">Estratégias</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              10 estratégias detalhadas para todos os perfis e estilos de trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              const riskColor = strategy.risk === "Alto" ? "destructive" : strategy.risk === "Médio" ? "primary" : "secondary";
              
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover-lift hover:border-primary/40 transition-all overflow-hidden"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20">
                        <Icon className="h-6 w-6 text-destructive" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">{strategy.timeframe}</Badge>
                        <Badge variant={riskColor === "destructive" ? "destructive" : "secondary"} className="text-xs">
                          {strategy.risk}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{strategy.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {strategy.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">
                      {strategy.details}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
                        <p className="font-semibold text-sm">{strategy.winRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Risk:Reward</p>
                        <p className="font-semibold text-sm">{strategy.riskReward}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Indicadores:</p>
                      <div className="flex flex-wrap gap-1">
                        {strategy.indicators.map((indicator, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {indicator}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Requisitos:</p>
                      <ul className="space-y-1">
                        {strategy.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Adequado para:</span> {strategy.suitable}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeframes Guide */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guia de <span className="text-gradient-bear">Timeframes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Entenda qual timeframe se adequa melhor ao seu perfil e disponibilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {timeframeCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover-lift transition-all">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.timeframes.map((tf, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{tf}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Duração</p>
                    <p className="text-sm font-semibold">{category.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Volume de trades</p>
                    <p className="text-sm font-semibold">{category.trades}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gestão de <span className="text-gradient-bear">Risco</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Regras fundamentais de gerenciamento de risco que todo trader deve seguir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {riskManagementRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <Card key={index} className="bg-card border-border hover-lift transition-all">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{rule.title}</CardTitle>
                    <CardDescription className="text-base">{rule.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-destructive/20 hover-lift transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 border border-destructive/20 mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-3xl mb-4">Backtests & Análise de Performance</CardTitle>
                <CardDescription className="text-lg">
                  Todas essas estratégias foram backtestadas com dados históricos reais. Acesse nossos estudos completos com resultados, drawdowns, sharpe ratio e análises estatísticas detalhadas.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold text-2xl mb-1 text-primary">5000+</h4>
                    <p className="text-sm text-muted-foreground">Trades Analisados</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold text-2xl mb-1 text-primary">10 Anos</h4>
                    <p className="text-sm text-muted-foreground">Dados Históricos</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold text-2xl mb-1 text-primary">99.9%</h4>
                    <p className="text-sm text-muted-foreground">Qualidade dos Dados</p>
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

export default Estrategias;
