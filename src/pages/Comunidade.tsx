import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Award,
  Calendar,
  Video,
  BookOpen,
  Trophy,
  Heart,
  Star,
  Lightbulb,
  Target,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  Share2
} from "lucide-react";

const Comunidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityStats = [
    { value: "45k+", label: "Membros Ativos", icon: Users },
    { value: "1.2M+", label: "Mensagens Trocadas", icon: MessageSquare },
    { value: "850+", label: "Estratégias Compartilhadas", icon: TrendingUp },
    { value: "200+", label: "Eventos Realizados", icon: Calendar }
  ];

  const forumCategories = [
    {
      icon: TrendingUp,
      title: "Análises de Mercado",
      description: "Compartilhe e discuta análises técnicas e fundamentalistas",
      posts: "12.5k",
      members: "8.9k",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Lightbulb,
      title: "Estratégias e Sistemas",
      description: "Troque ideias sobre estratégias de trading e sistemas automatizados",
      posts: "9.8k",
      members: "11.2k",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10"
    },
    {
      icon: BookOpen,
      title: "Educação e Aprendizado",
      description: "Perguntas, tutoriais e recursos educacionais",
      posts: "15.3k",
      members: "18.7k",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10"
    },
    {
      icon: Award,
      title: "Brokers e Plataformas",
      description: "Reviews, comparações e dicas sobre corretoras",
      posts: "7.2k",
      members: "9.5k",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10"
    },
    {
      icon: MessageSquare,
      title: "Discussões Gerais",
      description: "Networking, experiências e conversas sobre trading",
      posts: "18.9k",
      members: "22.1k",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10"
    },
    {
      icon: Zap,
      title: "Trading Algorítmico",
      description: "Bots, algoritmos, backtesting e automação",
      posts: "5.6k",
      members: "6.8k",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const topContributors = [
    {
      name: "Alexandre Silva",
      avatar: "/placeholder.svg",
      title: "Trader Profissional",
      contributions: 1247,
      reputation: 9850,
      specialties: ["Scalping", "Price Action"]
    },
    {
      name: "Marina Costa",
      avatar: "/placeholder.svg",
      title: "Analista Técnico",
      contributions: 982,
      reputation: 8320,
      specialties: ["Análise Técnica", "Swing Trading"]
    },
    {
      name: "Roberto Lima",
      avatar: "/placeholder.svg",
      title: "Quantitative Trader",
      contributions: 856,
      reputation: 7890,
      specialties: ["Algoritmos", "Python"]
    },
    {
      name: "Juliana Martins",
      avatar: "/placeholder.svg",
      title: "Day Trader",
      contributions: 734,
      reputation: 6950,
      specialties: ["Day Trading", "Gestão de Risco"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Webinar: Outlook do Forex no 2º semestre de 2026",
      date: "08 Jul 2026",
      time: "19:00 BRT",
      speaker: "Carlos Mendes",
      attendees: 412,
      type: "Webinar"
    },
    {
      title: "Workshop: Trading Algorítmico com Python",
      date: "16 Jul 2026",
      time: "14:00 BRT",
      speaker: "Ana Rodrigues",
      attendees: 218,
      type: "Workshop"
    },
    {
      title: "Live Trading Session: Análise de Mercado",
      date: "23 Jul 2026",
      time: "10:00 BRT",
      speaker: "Pedro Santos",
      attendees: 687,
      type: "Live Trading"
    },
    {
      title: "Masterclass: Psicologia do Trading",
      date: "30 Jul 2026",
      time: "20:00 BRT",
      speaker: "Lucia Fernandes",
      attendees: 524,
      type: "Masterclass"
    }
  ];

  const recentDiscussions = [
    {
      title: "Melhor timeframe para scalping no EURUSD?",
      author: "João Pereira",
      category: "Estratégias",
      replies: 43,
      views: 1250,
      lastActivity: "5 min atrás"
    },
    {
      title: "Como lidar com drawdowns prolongados?",
      author: "Fernanda Souza",
      category: "Psicologia",
      replies: 28,
      views: 892,
      lastActivity: "15 min atrás"
    },
    {
      title: "Review completo: IC Markets vs Pepperstone",
      author: "Marcos Silva",
      category: "Brokers",
      replies: 67,
      views: 2340,
      lastActivity: "32 min atrás"
    },
    {
      title: "Backtest de estratégia RSI + MACD - Resultados",
      author: "Patricia Lima",
      category: "Análise Técnica",
      replies: 51,
      views: 1780,
      lastActivity: "1h atrás"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Networking Profissional",
      description: "Conecte-se com traders de todos os níveis ao redor do mundo"
    },
    {
      icon: Lightbulb,
      title: "Troca de Conhecimento",
      description: "Aprenda com experiências reais e compartilhe seu conhecimento"
    },
    {
      icon: Target,
      title: "Mentorias Exclusivas",
      description: "Acesso a mentores experientes e traders profissionais"
    },
    {
      icon: Trophy,
      title: "Competições e Desafios",
      description: "Participe de competições mensais com prêmios em dinheiro"
    },
    {
      icon: Video,
      title: "Eventos ao Vivo",
      description: "Webinars, workshops e sessões de trading ao vivo semanais"
    },
    {
      icon: Heart,
      title: "Suporte da Comunidade",
      description: "Receba ajuda e motivação em sua jornada de trading"
    }
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
                <Users className="h-4 w-4 mr-2" />
                45.000+ Traders Ativos
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Comunidade de Traders
                <span className="text-gradient-bull"> Tradepar</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Junte-se à maior comunidade brasileira de forex. Compartilhe estratégias, 
                aprenda com os melhores e evolua como trader com suporte de milhares de membros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-bull">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Participar Gratuitamente
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="h-5 w-5 mr-2" />
                  Explorar Fórum
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-gradient-bull mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Forum Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Categorias do <span className="text-gradient-bull">Fórum</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore discussões organizadas por temas relevantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forumCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {category.posts} posts
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {category.members} membros
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discussões <span className="text-gradient-bull">Recentes</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja o que a comunidade está discutindo agora
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span>por {discussion.author}</span>
                          <Badge variant="outline" className="text-xs">{discussion.category}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {discussion.replies} respostas
                          </span>
                          <span>{discussion.views} visualizações</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver Todas as Discussões
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Top Contributors */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Principais <span className="text-gradient-bull">Contribuidores</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça os membros mais ativos e influentes da nossa comunidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {topContributors.map((contributor, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all text-center">
                  <CardHeader>
                    <div className="relative inline-block mb-4">
                      <Avatar className="h-20 w-20 mx-auto">
                        <AvatarImage src={contributor.avatar} />
                        <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-bull flex items-center justify-center border-2 border-background">
                        <Trophy className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-1">{contributor.name}</CardTitle>
                    <CardDescription className="text-sm">{contributor.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Contribuições</span>
                        <span className="font-semibold">{contributor.contributions}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Reputação</span>
                        <span className="font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {contributor.reputation}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {contributor.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Próximos <span className="text-gradient-bull">Eventos</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Participe de eventos exclusivos e aprenda com especialistas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{event.type}</Badge>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{event.date}</div>
                        <div className="text-xs text-muted-foreground">{event.time}</div>
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                    <CardDescription>
                      Com {event.speaker}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} inscritos</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Participar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que Participar da <span className="text-gradient-bull">Comunidade</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Benefícios exclusivos para membros da nossa comunidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Junte-se a 45.000+ Traders Hoje
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Faça parte da maior comunidade brasileira de forex. Compartilhe conhecimento, 
                faça networking e acelere sua evolução como trader.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="glow-bull">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Criar Conta Gratuita
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  <Share2 className="h-5 w-5 mr-2" />
                  Explorar Comunidade
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

export default Comunidade;
