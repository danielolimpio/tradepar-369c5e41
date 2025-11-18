import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog Tradepar - Análises, Estratégias e Notícias Forex";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Blog do Tradepar com análises de mercado, estratégias de trading forex, notícias financeiras e tutoriais para traders iniciantes e avançados."
      );
    }
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

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-background to-background border border-border group hover-lift">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    ARTIGO DESTACADO
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient-bull transition-colors">
                    Estratégias Avançadas para Trading de Alta Frequência
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Descubra técnicas profissionais de HFT, algoritmos de market making e como 
                    aproveitar microestruturas de mercado para maximizar seus ganhos no forex.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <span>12 min de leitura</span>
                    <span>•</span>
                    <span>15 Jan 2025</span>
                    <span>•</span>
                    <span>Avançado</span>
                  </div>
                  <Button className="w-fit gap-2 glow-bull">
                    Ler Artigo Completo
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
                <div className="relative aspect-video md:aspect-square rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Últimos Artigos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <article
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover-lift cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-background border-b border-border relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold border border-border">
                        Estratégias
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      Como Otimizar Suas Estratégias de Day Trading
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      Aprenda técnicas comprovadas para melhorar sua taxa de acerto e gerenciar 
                      riscos de forma eficiente em operações de curto prazo.
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>8 min de leitura</span>
                      <span>14 Jan 2025</span>
                    </div>
                  </div>
                </article>
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