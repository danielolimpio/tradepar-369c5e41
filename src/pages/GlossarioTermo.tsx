import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, BookOpen, Lightbulb, Target, HelpCircle, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { findTermBySlug, getRelatedTerms, slugify } from "@/data/glossario";

const GlossarioTermo = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const term = findTermBySlug(slug);

  if (!term) return <Navigate to="/glossario-forex" replace />;

  const related = getRelatedTerms(slug, 8);
  const canonicalPath = `/glossario-forex/${term.slug}`;

  // Perguntas frequentes cauda longa (auto-geradas por termo)
  const faqs = [
    {
      q: `O que é ${term.term} no Forex?`,
      a: term.def,
    },
    {
      q: `Como funciona ${term.term} na prática do trading?`,
      a: `${term.term} é um conceito fundamental que traders brasileiros aplicam diariamente em suas operações no mercado de câmbio. ${term.def} Compreender esse termo é essencial para tomar decisões informadas em plataformas como MetaTrader 4, MetaTrader 5 e cTrader.`,
    },
    {
      q: `Por que ${term.term} é importante para traders iniciantes em 2026?`,
      a: `Em 2026, com o crescimento do mercado Forex no Brasil e a popularização de corretoras regulamentadas, dominar conceitos como "${term.term}" ajuda o iniciante a evitar erros comuns, gerenciar risco de forma profissional e desenvolver estratégias consistentes de longo prazo.`,
    },
    {
      q: `Qual a relação de ${term.term} com corretoras Forex regulamentadas?`,
      a: `Corretoras regulamentadas pela FCA, CySEC, ASIC e outros órgãos internacionais oferecem transparência total sobre "${term.term}" em suas plataformas. Traders brasileiros devem sempre verificar como cada broker aplica esse conceito antes de abrir uma conta real.`,
    },
  ];

  const jsonLdTerm = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.def,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossário Forex Tradepar",
      url: "https://tradepar.lovable.app/glossario-forex",
    },
    url: `https://tradepar.lovable.app${canonicalPath}`,
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://tradepar.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Glossário Forex", item: "https://tradepar.lovable.app/glossario-forex" },
      { "@type": "ListItem", position: 3, name: term.term, item: `https://tradepar.lovable.app${canonicalPath}` },
    ],
  };

  const keywords = `${term.term.toLowerCase()}, o que é ${term.term.toLowerCase()}, ${term.term.toLowerCase()} forex, ${term.term.toLowerCase()} trading, ${term.term.toLowerCase()} significado, ${term.term.toLowerCase()} como funciona, ${term.term.toLowerCase()} exemplo, glossário forex, dicionário trader, forex 2026`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${term.term}: O Que É e Como Funciona no Forex 2026`}
        description={`${term.def.slice(0, 155)}`}
        canonicalPath={canonicalPath}
        keywords={keywords}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdTerm)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      <Navigation />

      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link to="/glossario-forex" className="hover:text-primary">Glossário Forex</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{term.term}</span>
        </nav>

        <Link to="/glossario-forex" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Glossário
        </Link>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Glossário Forex · Letra {term.letter}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            {term.term}: <span className="text-gradient-bull">Guia Completo</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {term.def}
          </p>
        </header>

        {/* Definição expandida */}
        <section className="mb-10 p-6 md:p-8 bg-card border border-border rounded-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Target className="w-6 h-6 text-primary" />
            O que significa {term.term}?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No mercado de <strong className="text-foreground">Forex (Foreign Exchange)</strong>, o termo{" "}
            <strong className="text-foreground">"{term.term}"</strong> é utilizado por traders profissionais,
            corretoras regulamentadas e analistas financeiros no Brasil e no mundo. {term.def}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Este conceito faz parte do vocabulário essencial de quem opera no maior mercado financeiro do planeta,
            que movimenta mais de <strong className="text-foreground">US$ 7,5 trilhões diariamente</strong> segundo
            o Banco de Compensações Internacionais (BIS). Dominar termos como <em>{term.term.toLowerCase()}</em>{" "}
            é o primeiro passo para operar com segurança em plataformas como MetaTrader 4, MetaTrader 5 e cTrader.
          </p>
        </section>

        {/* Aplicação prática */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            Como aplicar {term.term} no seu trading
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Traders brasileiros que buscam consistência em 2026 utilizam o conceito de{" "}
              <strong className="text-foreground">{term.term.toLowerCase()}</strong> em conjunto com outras ferramentas
              de análise técnica e fundamentalista. A aplicação prática envolve entender o contexto do mercado,
              a volatilidade dos pares operados e o próprio perfil de risco do trader.
            </p>
            <p>
              Corretoras regulamentadas por <Link to="/seguranca" className="text-primary hover:underline">órgãos como FCA, CySEC e ASIC</Link>{" "}
              fornecem materiais educativos completos sobre este termo, além de contas demo gratuitas para praticar
              antes de operar com dinheiro real. Antes de aplicar qualquer conceito, recomendamos que o iniciante
              estude nossas <Link to="/estrategias" className="text-primary hover:underline">estratégias validadas</Link>{" "}
              e conheça as <Link to="/corretoras" className="text-primary hover:underline">melhores corretoras Forex de 2026</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-primary" />
            Perguntas Frequentes sobre {term.term}
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Termos relacionados */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Termos Relacionados no Glossário Forex</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/glossario-forex/${r.slug}`}
                  className="group p-4 bg-card border border-border rounded-lg hover:border-primary/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {r.term}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.def}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Pronto para começar sua jornada no Forex?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Compare as 20 melhores corretoras Forex regulamentadas de 2026 e escolha a mais adequada ao seu perfil.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/corretoras" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90">
              Ver Corretoras
            </Link>
            <Link to="/glossario-forex" className="px-6 py-3 border border-border rounded-md font-semibold hover:bg-card">
              Voltar ao Glossário
            </Link>
            <Link to="/perguntas-frequentes" className="px-6 py-3 border border-border rounded-md font-semibold hover:bg-card">
              Perguntas Frequentes
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default GlossarioTermo;
