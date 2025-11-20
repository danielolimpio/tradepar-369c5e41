import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Video, 
  FileText, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Code, 
  Zap,
  Clock,
  CheckCircle2,
  Star,
  Download,
  PlayCircle,
  Lightbulb
} from "lucide-react";

const Tutoriais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tutorialCategories = [
    {
      icon: TrendingUp,
      title: "Iniciantes",
      description: "Fundamentos essenciais para começar no trading",
      color: "text-primary",
      bgColor: "bg-primary/10",
      tutorials: [
        {
          title: "Introdução ao Forex Trading",
          duration: "45 min",
          difficulty: "Iniciante",
          rating: 4.9,
          students: "12.5k",
          topics: ["Conceitos básicos", "Pares de moedas", "Tipos de ordens", "Gerenciamento de risco"]
        },
        {
          title: "Como Escolher uma Corretora Confiável",
          duration: "30 min",
          difficulty: "Iniciante",
          rating: 4.8,
          students: "8.3k",
          topics: ["Regulamentação", "Spreads", "Plataformas", "Segurança"]
        },
        {
          title: "Configurando sua Primeira Conta de Trading",
          duration: "35 min",
          difficulty: "Iniciante",
          rating: 4.7,
          students: "10.2k",
          topics: ["Verificação", "Depósito", "Configurações", "Demo account"]
        },
        {
          title: "Leitura de Gráficos e Candlesticks",
          duration: "50 min",
          difficulty: "Iniciante",
          rating: 4.9,
          students: "15.7k",
          topics: ["Candlesticks", "Timeframes", "Padrões", "Volume"]
        }
      ]
    },
    {
      icon: BarChart3,
      title: "Análise Técnica",
      description: "Domine indicadores e padrões gráficos",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      tutorials: [
        {
          title: "Indicadores Técnicos Essenciais",
          duration: "60 min",
          difficulty: "Intermediário",
          rating: 4.8,
          students: "9.8k",
          topics: ["Médias móveis", "RSI", "MACD", "Bollinger Bands"]
        },
        {
          title: "Suporte e Resistência Avançados",
          duration: "55 min",
          difficulty: "Intermediário",
          rating: 4.9,
          students: "7.5k",
          topics: ["Níveis-chave", "Fibonacci", "Linhas de tendência", "Zonas de preço"]
        },
        {
          title: "Padrões de Candlestick para Trading",
          duration: "70 min",
          difficulty: "Intermediário",
          rating: 4.7,
          students: "11.2k",
          topics: ["Reversão", "Continuação", "Confirmação", "Contexto"]
        },
        {
          title: "Análise de Volume e Fluxo de Ordens",
          duration: "65 min",
          difficulty: "Avançado",
          rating: 4.8,
          students: "5.9k",
          topics: ["Volume profile", "Order flow", "Market depth", "Liquidez"]
        }
      ]
    },
    {
      icon: Lightbulb,
      title: "Estratégias",
      description: "Sistemas completos de trading testados",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      tutorials: [
        {
          title: "Scalping: Lucros Rápidos no Intraday",
          duration: "80 min",
          difficulty: "Avançado",
          rating: 4.9,
          students: "6.8k",
          topics: ["Setups rápidos", "Gestão de risco", "Timing", "Execução"]
        },
        {
          title: "Swing Trading: Capturando Tendências",
          duration: "75 min",
          difficulty: "Intermediário",
          rating: 4.8,
          students: "8.9k",
          topics: ["Identificação de tendências", "Pontos de entrada", "Stop loss", "Take profit"]
        },
        {
          title: "Day Trading: Estratégias Intraday",
          duration: "90 min",
          difficulty: "Avançado",
          rating: 4.9,
          students: "10.5k",
          topics: ["Price action", "Breakouts", "Reversões", "Sessões de mercado"]
        },
        {
          title: "Position Trading: Investimento de Longo Prazo",
          duration: "60 min",
          difficulty: "Intermediário",
          rating: 4.7,
          students: "4.3k",
          topics: ["Análise fundamental", "Macro economia", "Carry trade", "Hedging"]
        }
      ]
    },
    {
      icon: Shield,
      title: "Gestão de Risco",
      description: "Proteja seu capital e maximize ganhos",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      tutorials: [
        {
          title: "Fundamentos do Risk Management",
          duration: "55 min",
          difficulty: "Iniciante",
          rating: 4.9,
          students: "13.2k",
          topics: ["Position sizing", "Stop loss", "Risco/recompensa", "Preservação de capital"]
        },
        {
          title: "Psicologia do Trading",
          duration: "70 min",
          difficulty: "Intermediário",
          rating: 4.8,
          students: "9.1k",
          topics: ["Controle emocional", "Disciplina", "Vieses cognitivos", "Mentalidade vencedora"]
        },
        {
          title: "Diversificação e Correlação de Ativos",
          duration: "50 min",
          difficulty: "Intermediário",
          rating: 4.7,
          students: "5.7k",
          topics: ["Portfolio balanceado", "Correlações", "Hedging", "Exposição ao risco"]
        },
        {
          title: "Gestão Avançada de Capital",
          duration: "85 min",
          difficulty: "Avançado",
          rating: 4.9,
          students: "4.8k",
          topics: ["Kelly Criterion", "Martingale", "Anti-martingale", "Compound interest"]
        }
      ]
    },
    {
      icon: Code,
      title: "Trading Automatizado",
      description: "Algoritmos e bots de trading",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      tutorials: [
        {
          title: "Introdução aos Expert Advisors (EAs)",
          duration: "60 min",
          difficulty: "Intermediário",
          rating: 4.8,
          students: "6.5k",
          topics: ["MQL4/MQL5", "Backtesting", "Otimização", "Deploy"]
        },
        {
          title: "Criando Seu Primeiro Robô de Trading",
          duration: "90 min",
          difficulty: "Avançado",
          rating: 4.7,
          students: "4.9k",
          topics: ["Lógica de programação", "Indicadores customizados", "Gestão de ordens", "Debugging"]
        },
        {
          title: "Python para Trading Algorítmico",
          duration: "120 min",
          difficulty: "Avançado",
          rating: 4.9,
          students: "7.8k",
          topics: ["APIs de corretoras", "Pandas", "Backtesting.py", "Machine Learning"]
        },
        {
          title: "Backtesting e Otimização de Estratégias",
          duration: "75 min",
          difficulty: "Avançado",
          rating: 4.8,
          students: "5.2k",
          topics: ["Dados históricos", "Walk-forward analysis", "Overfitting", "Métricas de performance"]
        }
      ]
    },
    {
      icon: Zap,
      title: "Plataformas",
      description: "Domine as principais ferramentas",
      color: "text-primary",
      bgColor: "bg-primary/10",
      tutorials: [
        {
          title: "MetaTrader 4: Guia Completo",
          duration: "65 min",
          difficulty: "Iniciante",
          rating: 4.9,
          students: "14.3k",
          topics: ["Interface", "Gráficos", "Indicadores", "Ordens", "Scripts"]
        },
        {
          title: "MetaTrader 5: Recursos Avançados",
          duration: "70 min",
          difficulty: "Intermediário",
          rating: 4.8,
          students: "8.7k",
          topics: ["Multi-ativos", "Profundidade de mercado", "Economic calendar", "Signals"]
        },
        {
          title: "TradingView: Análise Profissional",
          duration: "55 min",
          difficulty: "Iniciante",
          rating: 4.9,
          students: "11.9k",
          topics: ["Pine Script", "Alerts", "Screeners", "Social trading"]
        },
        {
          title: "cTrader: Trading de Alta Performance",
          duration: "50 min",
          difficulty: "Intermediário",
          rating: 4.7,
          students: "4.6k",
          topics: ["Execução rápida", "cBots", "Detached charts", "Copy trading"]
        }
      ]
    }
  ];

  const videoSeries = [
    {
      title: "Série: Zero ao Profissional",
      episodes: 24,
      duration: "18 horas",
      level: "Todos os níveis",
      description: "Curso completo que leva você do absoluto zero até estratégias avançadas de trading profissional"
    },
    {
      title: "Série: Análise Técnica Masterclass",
      episodes: 16,
      duration: "12 horas",
      level: "Intermediário",
      description: "Mergulho profundo em análise técnica com foco em price action e indicadores avançados"
    },
    {
      title: "Série: Trading Algorítmico",
      episodes: 20,
      duration: "15 horas",
      level: "Avançado",
      description: "Aprenda a criar, testar e otimizar seus próprios robôs de trading automatizado"
    }
  ];

  const downloadableResources = [
    { title: "Guia Completo de Forex Trading (PDF)", size: "15 MB", downloads: "23.5k" },
    { title: "Planilha de Gestão de Risco", size: "2 MB", downloads: "18.2k" },
    { title: "Checklist do Trader Profissional", size: "1 MB", downloads: "31.7k" },
    { title: "Template de Diário de Trading", size: "3 MB", downloads: "14.9k" },
    { title: "E-book: Psicologia do Trading", size: "8 MB", downloads: "19.8k" },
    { title: "Biblioteca de Indicadores Customizados", size: "25 MB", downloads: "12.4k" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-1.5">
                <BookOpen className="h-4 w-4 mr-2" />
                Biblioteca de Conhecimento
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Tutoriais Completos de
                <span className="text-gradient-bull"> Trading</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Aprenda do zero ao avançado com nossos tutoriais em vídeo, guias escritos e recursos 
                para download. Conteúdo criado por traders profissionais para acelerar sua curva de aprendizado.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "Tutoriais em Vídeo" },
                { value: "80+", label: "Guias Escritos" },
                { value: "45k+", label: "Alunos Ativos" },
                { value: "4.8★", label: "Avaliação Média" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-bull mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Categorias de <span className="text-gradient-bull">Tutoriais</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore nossa biblioteca organizada por temas e níveis de dificuldade
              </p>
            </div>

            <div className="space-y-12">
              {tutorialCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {category.tutorials.map((tutorial, tutorialIndex) => (
                        <Card key={tutorialIndex} className="hover-lift hover:border-primary/40 transition-all">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                              <Badge variant="outline" className="ml-2">{tutorial.difficulty}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {tutorial.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                {tutorial.rating}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {tutorial.students} alunos
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-2">
                                {tutorial.topics.map((topic, topicIndex) => (
                                  <Badge key={topicIndex} variant="secondary" className="text-xs">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                              <Button className="w-full glow-bull">
                                <PlayCircle className="h-4 w-4 mr-2" />
                                Assistir Tutorial
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Series */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Séries em <span className="text-gradient-bull">Vídeo</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cursos estruturados completos para um aprendizado progressivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {videoSeries.map((series, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="w-full h-40 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <Video className="h-16 w-16 text-primary-foreground" />
                    </div>
                    <CardTitle>{series.title}</CardTitle>
                    <CardDescription>{series.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{series.episodes} episódios</span>
                        <span>{series.duration}</span>
                      </div>
                      <Badge variant="outline" className="w-full justify-center">{series.level}</Badge>
                      <Button className="w-full glow-bull">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Começar Série
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recursos para <span className="text-gradient-bull">Download</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                E-books, planilhas, templates e ferramentas gratuitas para download
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base mb-2">{resource.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{resource.size}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.downloads}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Grátis
                    </Button>
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
                Comece Sua Jornada de Aprendizado Hoje
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Acesse todos os tutoriais, séries em vídeo e recursos premium. 
                Aprenda no seu ritmo com suporte da nossa comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="glow-bull">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Ver Todos os Cursos
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

export default Tutoriais;
