import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 md:py-20 lg:py-32 relative border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Conteúdo Premium</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Insights do <span className="text-gradient-bull">Blog</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Análises aprofundadas, estratégias e tendências do mercado Forex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={article.link}
              className="group bg-card border border-border rounded-xl overflow-hidden hover-lift hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                  {article.category}
                </Badge>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-5 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold pt-4 border-t border-border/60">
                  Ler artigo
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/blog">
            <Button size="lg" variant="outline" className="border-border hover:bg-accent w-full sm:w-auto">
              Ver Todos os Artigos <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
