import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CalculatorsDialog, { CalculatorKey } from "@/components/calculators/CalculatorsDialog";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  DollarSign,
  LineChart,
  Target,
  Zap,
  AlertCircle,
  Clock,
  Percent,
  Coins,
  ArrowUpDown,
  FileSpreadsheet,
  Brain,
  Network,
  Shield,
} from "lucide-react";

const Ferramentas = () => {
  const [activeCalc, setActiveCalc] = useState<CalculatorKey | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculatorTools = [
    {
      icon: Calculator,
      title: "Calculadora de Position Size",
      description: "Calcule o tamanho ideal de posição baseado no seu capital, stop loss e tolerância ao risco",
      features: ["Gerenciamento de risco", "Múltiplas moedas", "Conversão automática"],
      category: "Essencial",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Calculadora de Lucro/Prejuízo",
      description: "Estime ganhos e perdas potenciais antes de abrir uma posição",
      features: ["Cálculo em tempo real", "Todas as moedas", "Níveis de stop/take profit"],
      category: "Essencial",
      color: "text-chart-2"
    },
    {
      icon: Percent,
      title: "Calculadora de Margem",
      description: "Calcule margem necessária e alavancagem ideal para suas operações",
      features: ["Múltiplas alavancagens", "Margem livre", "Margin call alert"],
      category: "Essencial",
      color: "text-chart-3"
    },
    {
      icon: Target,
      title: "Calculadora de Fibonacci",
      description: "Determine níveis automáticos de Fibonacci para retrações e extensões",
      features: ["Retração automática", "Extensões", "Confluências"],
      category: "Análise Técnica",
      color: "text-chart-4"
    },
    {
      icon: ArrowUpDown,
      title: "Calculadora de Pivot Points",
      description: "Calcule pontos de pivô clássicos, Woodie, Camarilla e Fibonacci",
      features: ["4 metodologias", "Múltiplos timeframes", "Alertas"],
      category: "Análise Técnica",
      color: "text-chart-5"
    },
    {
      icon: Coins,
      title: "Conversor de Moedas em Tempo Real",
      description: "Converta entre mais de 150 pares de moedas com taxas em tempo real",
      features: ["150+ moedas", "Taxas ao vivo", "Histórico de conversões"],
      category: "Utilidade",
      color: "text-primary"
    }
  ];

  const analysisTools = [
    {
      icon: BarChart3,
      title: "Análise de Correlação de Pares",
      description: "Visualize correlações entre pares de moedas para diversificar melhor seu portfólio",
      features: ["Heatmap de correlação", "Histórico customizável", "Alertas de correlação"],
      popularity: "Alta",
      users: "15k+"
    },
    {
      icon: Activity,
      title: "Scanner de Volatilidade",
      description: "Identifique pares com alta volatilidade para oportunidades de trading",
      features: ["ATR automático", "Ranking de volatilidade", "Filtros personalizados"],
      popularity: "Alta",
      users: "12k+"
    },
    {
      icon: PieChart,
      title: "Análise de Composição de Portfólio",
      description: "Visualize e otimize a distribuição do seu capital entre diferentes ativos",
      features: ["Gráficos interativos", "Rebalanceamento", "Diversificação"],
      popularity: "Média",
      users: "8k+"
    },
    {
      icon: LineChart,
      title: "Backtesting de Estratégias",
      description: "Teste suas estratégias com dados históricos antes de arriscar capital real",
      features: ["10+ anos de dados", "Métricas detalhadas", "Walk-forward analysis"],
      popularity: "Alta",
      users: "18k+"
    },
    {
      icon: Network,
      title: "Análise de Sentimento de Mercado",
      description: "Monitore o sentimento geral dos traders em pares específicos",
      features: ["Dados de corretoras", "Indicador contrário", "Tendências sociais"],
      popularity: "Média",
      users: "9k+"
    },
    {
      icon: Brain,
      title: "Detector de Padrões Gráficos",
      description: "IA identifica automaticamente padrões de candlestick e formações gráficas",
      features: ["30+ padrões", "Confiabilidade", "Alertas em tempo real"],
      popularity: "Alta",
      users: "14k+"
    }
  ];

  const monitoringTools = [
    {
      icon: Calendar,
      title: "Calendário Econômico Avançado",
      description: "Acompanhe eventos econômicos com impacto no mercado forex",
      features: ["Filtros por impacto", "Alertas personalizados", "Histórico de dados", "Previsões vs real"],
      premium: false
    },
    {
      icon: AlertCircle,
      title: "Sistema de Alertas de Preço",
      description: "Configure alertas customizados para níveis de preço e indicadores",
      features: ["Alertas SMS/Email/Push", "Múltiplos ativos", "Condições complexas", "Histórico"],
      premium: false
    },
    {
      icon: Clock,
      title: "Relógio de Sessões de Mercado",
      description: "Visualize horários de abertura e sobreposição de sessões globais",
      features: ["Fuso horário local", "Sobreposições", "Volume por sessão", "Volatilidade média"],
      premium: false
    },
    {
      icon: TrendingUp,
      title: "Monitor de Tendências Multi-Timeframe",
      description: "Análise de tendência simultânea em múltiplos timeframes",
      features: ["6 timeframes", "Força da tendência", "Confluências", "Divergências"],
      premium: true
    },
    {
      icon: Shield,
      title: "Painel de Gestão de Risco",
      description: "Dashboard completo para monitorar exposição e risco do portfólio",
      features: ["Risco total", "Exposição por par", "VaR (Value at Risk)", "Stress testing"],
      premium: true
    },
    {
      icon: Zap,
      title: "Sinais de Trading em Tempo Real",
      description: "Receba sinais baseados em estratégias comprovadas e análise técnica",
      features: ["Múltiplas estratégias", "Win rate histórico", "R:R favorável", "Confirmações"],
      premium: true
    }
  ];

  const spreadsheetTools = [
    {
      name: "Diário de Trading Profissional",
      description: "Template completo para registrar e analisar todas as suas operações",
      format: "Excel/Google Sheets",
      downloads: "23.4k"
    },
    {
      name: "Planilha de Gestão de Risco",
      description: "Calcule automaticamente position size, risco e retorno potencial",
      format: "Excel/Google Sheets",
      downloads: "18.9k"
    },
    {
      name: "Rastreador de Performance Mensal",
      description: "Acompanhe métricas-chave como win rate, payoff ratio e drawdown",
      format: "Excel/Google Sheets",
      downloads: "15.2k"
    },
    {
      name: "Calculadora Avançada de Fibonacci",
      description: "Identifique níveis de retração e extensão com precisão",
      format: "Excel",
      downloads: "11.7k"
    },
    {
      name: "Simulador de Compound Interest",
      description: "Projete crescimento de capital com reinvestimento de lucros",
      format: "Excel/Google Sheets",
      downloads: "19.8k"
    },
    {
      name: "Análise de Drawdown Histórico",
      description: "Visualize e analise períodos de drawdown do seu histórico",
      format: "Excel",
      downloads: "8.3k"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Ferramentas de Trading Forex - Calculadoras e Análise"
        description="Ferramentas profissionais para trading: calculadoras de lote, margem, Fibonacci e análise de mercado."
        canonicalPath="/ferramentas"
        keywords="calculadora forex, ferramentas trading, position size, margem, fibonacci, análise mercado"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-1.5">
                <Zap className="h-4 w-4 mr-2" />
                Suite Completa de Ferramentas
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Ferramentas Profissionais de
                <span className="text-gradient-bull"> Trading</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Calculadoras avançadas, ferramentas de análise e recursos para otimizar suas operações 
                e maximizar seus resultados no mercado forex.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "40+", label: "Ferramentas Ativas" },
                { value: "120k+", label: "Usuários Mensais" },
                { value: "2.5M+", label: "Cálculos Realizados" },
                { value: "99.9%", label: "Uptime Garantido" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-bull mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Tools */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calculadoras <span className="text-gradient-bull">Essenciais</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ferramentas de cálculo rápido e preciso para suas operações diárias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculatorTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${tool.color}`} />
                        </div>
                        <Badge variant="secondary">{tool.category}</Badge>
                      </div>
                      <CardTitle className="text-lg mb-2">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {tool.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full glow-bull">
                          <Calculator className="h-4 w-4 mr-2" />
                          Usar Calculadora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Analysis Tools */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ferramentas de <span className="text-gradient-bull">Análise</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Análise avançada de mercado e identificação de oportunidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-chart-2" />
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-1">{tool.popularity}</Badge>
                          <div className="text-xs text-muted-foreground">{tool.users} usuários</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="w-full">
                          <Activity className="h-4 w-4 mr-2" />
                          Acessar Ferramenta
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Monitoring Tools */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Monitoramento e <span className="text-gradient-bull">Alertas</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fique sempre informado sobre movimentos de mercado e oportunidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monitoringTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-chart-3" />
                        </div>
                        {tool.premium && (
                          <Badge className="bg-gradient-bull">Premium</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg mb-2">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-chart-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant={tool.premium ? "default" : "outline"} className={tool.premium ? "w-full glow-bull" : "w-full"}>
                          {tool.premium ? (
                            <>
                              <Zap className="h-4 w-4 mr-2" />
                              Ativar Premium
                            </>
                          ) : (
                            <>
                              <Clock className="h-4 w-4 mr-2" />
                              Usar Grátis
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spreadsheet Tools */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planilhas e <span className="text-gradient-bull">Templates</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ferramentas para download gratuito e uso offline
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {spreadsheetTools.map((tool, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                        <FileSpreadsheet className="h-6 w-6 text-chart-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base mb-1">{tool.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">{tool.format}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{tool.downloads}</span> downloads
                      </div>
                      <Button variant="outline" className="w-full">
                        <FileSpreadsheet className="h-4 w-4 mr-2" />
                        Baixar Planilha
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Potencialize Seu Trading com Nossas Ferramentas
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Acesse todas as ferramentas profissionais e leve suas operações para o próximo nível. 
                Comece gratuitamente e upgrade quando precisar de recursos premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="glow-bull">
                  <Zap className="h-5 w-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  <Calculator className="h-5 w-5 mr-2" />
                  Ver Todas as Ferramentas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ferramentas;
