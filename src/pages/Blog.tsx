import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BookOpen, TrendingUp, Search, Filter, Zap, Clock, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroHFT from "@/assets/blog/estrategias-hft.jpg";
import heroForex from "@/assets/blog/como-investir-forex.jpg";
import heroIA from "@/assets/blog/ia-forex-hero.jpg";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "Todos",
    "Análises de Mercado",
    "Estratégias",
    "Tutoriais",
    "Corretoras",
    "Tecnologia",
    "Notícias"
  ];

  const articles = [
    {
      title: "Inteligência Artificial no Forex 2026: Como Traders Brasileiros Estão Usando IA para Operar",
      description: "Robôs com IA, análise preditiva e machine learning estão mudando o jogo. Descubra o que funciona, o que é marketing e como aplicar com segurança em 2026.",
      image: heroIA,
      category: "Tecnologia",
      readTime: "16 min de leitura",
      date: "27 Jun 2026",
      link: "/artigo/inteligencia-artificial-forex-2026",
      level: "Intermediário"
    },
    {
      title: "Como Investir em Forex: Guia Completo para Iniciantes em 2026",
      description: "Aprenda como começar no Forex com segurança, estratégias e dicas práticas para evitar os erros mais comuns de novos traders.",
      image: heroForex,
      category: "Tutoriais",
      readTime: "18 min de leitura",
      date: "05 Jan 2026",
      link: "/artigo/como-investir-forex",
      level: "Iniciante"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Blog Tradepar - Análises, Estratégias e Notícias Forex"
        description="Blog do Tradepar com análises de mercado, estratégias de trading forex, notícias financeiras e tutoriais para traders iniciantes e avançados."
        canonicalPath="/blog"
        keywords="blog forex, análise forex, estratégias trading, notícias forex, tutoriais trading"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-6 glow-bull">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Blog <span className="text-gradient-bull">Tradepar</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Análises profissionais, estratégias avançadas e insights exclusivos do mercado forex 
            para elevar seu trading ao próximo nível
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar artigos, estratégias, análises..." 
                  className="pl-10 h-12 bg-card border-border"
                />
              </div>
              <Button variant="outline" className="h-12 gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover-lift ${
                    category === "Todos"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Em Destaque
            </h2>
            <Link to="/blog/estrategias/estrategias-avancadas-hft" className="block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-background to-background border border-border group hover-lift cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                      <Zap className="w-4 h-4" />
                      ARTIGO DESTACADO
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient-bull transition-colors">
                      Estratégias Avançadas para Trading de Alta Frequência
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Descubra técnicas profissionais de HFT, algoritmos de market making e como 
                      aproveitar microestruturas de mercado para maximizar seus ganhos no forex.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        15 min de leitura
                      </span>
                      <span>•</span>
                      <span>20 Dez 2024</span>
                      <span>•</span>
                      <span className="px-2 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                        Avançado
                      </span>
                    </div>
                    <Button className="w-fit gap-2 glow-bull">
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden border border-primary/20">
                    <img 
                      src={heroHFT} 
                      alt="Trader analisando gráficos de trading de alta frequência" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Últimos Artigos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Link to={article.link} key={index}>
                  <article className="group bg-card border border-border rounded-xl overflow-hidden hover-lift cursor-pointer h-full">
                    <div className="aspect-video relative overflow-hidden border-b border-border">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold border border-border">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                          article.level === "Iniciante" 
                            ? "bg-primary/20 text-primary border border-primary/30" 
                            : "bg-destructive/20 text-destructive border border-destructive/30"
                        }`}>
                          <GraduationCap className="w-3 h-3" />
                          {article.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.readTime}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Receba Análises Exclusivas no Seu Email
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Inscreva-se na nossa newsletter e receba análises de mercado, estratégias avançadas 
                e notícias importantes diretamente na sua caixa de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="h-12 bg-background border-border"
                />
                <Button className="h-12 glow-bull whitespace-nowrap">
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Sem spam. Cancele a qualquer momento.
              </p>
            </div>
          </div>
        </section>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2">
            Carregar Mais Artigos
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
