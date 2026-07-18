import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { glossario, totalTermos } from "@/data/glossario";
import { Link } from "react-router-dom";

const GlossarioForex = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário Forex Completo Tradepar",
    description: `Dicionário com ${totalTermos} termos técnicos de Forex, trading, corretoras e análise financeira em português.`,
    hasDefinedTerm: glossario.flatMap((s) =>
      s.terms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.def,
        inDefinedTermSet: "https://tradepar.com.br/glossario-forex",
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Glossário Forex 2026: Dicionário Completo de Termos de Trading"
        description={`Dicionário Forex com ${totalTermos}+ termos essenciais: alavancagem, spread, pip, scalping, MetaTrader, análise técnica e muito mais. Guia completo em português.`}
        canonicalPath="/glossario-forex"
        keywords="glossário forex, dicionário forex, termos de trading, o que é pip, o que é spread, o que é alavancagem, o que é forex, análise técnica termos, metatrader termos, dicionário trader"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Glossário Forex <span className="text-gradient-bull">Completo</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Dicionário definitivo com <strong>{totalTermos}+ termos técnicos</strong> de Forex, trading, corretoras,
            análise técnica, análise fundamentalista, plataformas e automação. Atualizado para junho de 2026.
          </p>
        </header>

        {/* Índice alfabético */}
        <nav aria-label="Índice alfabético" className="flex flex-wrap justify-center gap-2 mb-10 p-4 bg-card rounded-lg border border-border">
          {glossario.map((s) => (
            <a
              key={s.letter}
              href={`#letra-${s.letter}`}
              className="px-3 py-1.5 text-sm font-semibold bg-background border border-border rounded hover:border-primary hover:text-primary transition-colors"
            >
              {s.letter}
            </a>
          ))}
        </nav>

        {/* Termos */}
        <div className="space-y-12">
          {glossario.map((section) => (
            <section key={section.letter} id={`letra-${section.letter}`}>
              <h2 className="text-2xl md:text-3xl font-bold border-b border-border pb-2 mb-6 text-primary">
                {section.letter}
              </h2>
              <dl className="grid gap-4 md:grid-cols-2">
                {section.terms.map((t) => (
                  <div key={t.term} className="p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <dt className="font-bold text-foreground mb-2">{t.term}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{t.def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Pronto para aplicar esse conhecimento?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Compare as 20 melhores corretoras Forex de 2026 e escolha a mais adequada para seu perfil.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/corretoras" className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90">
              Ver Corretoras
            </Link>
            <Link to="/perguntas-frequentes" className="px-6 py-3 border border-border rounded-md font-semibold hover:bg-card">
              Perguntas Frequentes
            </Link>
            <Link to="/estrategias" className="px-6 py-3 border border-border rounded-md font-semibold hover:bg-card">
              Estratégias
            </Link>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default GlossarioForex;
