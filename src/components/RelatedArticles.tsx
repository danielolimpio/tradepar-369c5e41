import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { getRelated } from "@/data/articles";

type Props = { currentSlug: string; count?: number };

const RelatedArticles = ({ currentSlug, count = 2 }: Props) => {
  const items = getRelated(currentSlug, count);
  if (items.length === 0) return null;

  return (
    <section className="mb-16">
      <h3 className="text-xl font-bold mb-6">Artigos Relacionados</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((a) => (
          <Link
            key={a.slug}
            to={a.link}
            className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
          >
            <div className="aspect-video overflow-hidden border-b border-border">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {a.category}
              </span>
              <h4 className="font-bold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {a.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {a.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {a.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
