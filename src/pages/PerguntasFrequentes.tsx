import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { faqData, allFAQs } from "@/data/perguntasFrequentes";
import { Link } from "react-router-dom";

const PerguntasFrequentes = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Perguntas Frequentes sobre Forex: Guia Completo 2026"
        description="Respostas para as principais dúvidas sobre Forex: como começar, melhores corretoras, estratégias, tributação, MetaTrader, análise técnica e muito mais."
        canonicalPath="/perguntas-frequentes"
        keywords="perguntas frequentes forex, dúvidas forex, como funciona forex, forex é seguro, forex legal brasil, melhor corretora forex, quanto ganha trader forex"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Perguntas <span className="text-gradient-bull">Frequentes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Respostas técnicas para as <strong>{allFAQs.length} perguntas mais buscadas</strong> sobre Forex,
            corretoras, estratégias, tributação e tecnologia de trading em 2026.
          </p>
        </header>

        <div className="space-y-12">
          {faqData.map((cat) => (
            <section key={cat.category}>
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-2">{cat.category}</h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <article key={item.slug} id={item.slug} className="p-6 bg-card border border-border rounded-lg">
                    <h3 className="text-lg font-bold mb-3">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Ainda tem dúvidas?</h2>
          <p className="text-muted-foreground mb-6">
            Consulte nosso <Link to="/glossario-forex" className="text-primary underline">Glossário</Link>, o{" "}
            <Link to="/blog" className="text-primary underline">Blog</Link> ou{" "}
            <Link to="/contato" className="text-primary underline">fale conosco</Link>.
          </p>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default PerguntasFrequentes;
