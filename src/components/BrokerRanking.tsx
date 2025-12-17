import { Shield, Star, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import exnessLogo from "@/assets/exness.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fxtmLogo from "@/assets/fxtm.jpeg";

const brokers = [
  { rank: 1, name: "IC Markets", slug: "ic-markets", logo: icMarketsLogo, regulation: "ASIC, CySEC, FSA", spread: "0.0 pips", minDeposit: "$200", rating: 4.9, verified: true, highlight: "Melhor Spread" },
  { rank: 2, name: "Pepperstone", slug: "pepperstone", logo: pepperstoneLogo, regulation: "ASIC, FCA, CySEC", spread: "0.0 pips", minDeposit: "$200", rating: 4.8, verified: true, highlight: "Melhor Execução" },
  { rank: 3, name: "Exness", slug: "exness", logo: exnessLogo, regulation: "FCA, CySEC, FSA", spread: "0.1 pips", minDeposit: "$10", rating: 4.8, verified: true, highlight: "Menor Depósito" },
  { rank: 4, name: "XM", slug: "xm", logo: xmLogo, regulation: "ASIC, CySEC, FSC", spread: "0.6 pips", minDeposit: "$5", rating: 4.7, verified: true, highlight: "Bônus de Depósito" },
  { rank: 5, name: "FXTM", slug: "fxtm", logo: fxtmLogo, regulation: "FCA, CySEC, FSC", spread: "0.1 pips", minDeposit: "$10", rating: 4.7, verified: true, highlight: "Copy Trading" },
];

const BrokerRanking = () => {
  return (
    <section id="corretoras" className="py-12 md:py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Verificado & Confiável</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Ranking de <span className="text-gradient-bull">Corretoras</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Análise completa das corretoras mais confiáveis do mercado.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          {brokers.map((broker) => (
            <div key={broker.rank} className="flex items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-background border-2 border-primary text-sm sm:text-lg md:text-xl font-bold text-primary">
                {broker.rank}º
              </div>
              
              <div className="flex-1 min-w-0 group bg-card border border-border rounded-xl p-3 sm:p-4 md:p-6 hover-lift hover:border-primary/40 transition-all">
                <div className="flex flex-col sm:hidden gap-3">
                  <div className="flex items-center gap-3">
                    <img src={broker.logo} alt={broker.name} className="w-12 h-12 object-contain rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-base font-bold truncate">{broker.name}</h3>
                        {broker.verified && <Shield className="h-3.5 w-3.5 text-primary flex-shrink-0" />}
                      </div>
                      <Badge variant="secondary" className="text-xs mt-1">{broker.highlight}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-muted-foreground">Spread</p>
                      <p className="font-semibold text-primary">{broker.spread}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-muted-foreground">Depósito</p>
                      <p className="font-semibold">{broker.minDeposit}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-muted-foreground">Regulação</p>
                      <p className="font-semibold truncate">{broker.regulation}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-muted-foreground">Avaliação</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="font-semibold">{broker.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/corretoras/${broker.slug}`} className="w-full">
                    <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      Ver Detalhes <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="hidden sm:flex items-center gap-4 md:gap-6">
                  <img src={broker.logo} alt={broker.name} className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 object-contain rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 md:mb-4 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold">{broker.name}</h3>
                      {broker.verified && (
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          <Shield className="h-3 w-3 mr-1" />Verificada
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">{broker.highlight}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Regulamentação</p><p className="font-medium text-xs md:text-sm truncate">{broker.regulation}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Spread Mín.</p><p className="font-medium text-primary text-xs md:text-sm">{broker.spread}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Depósito Mín.</p><p className="font-medium text-xs md:text-sm">{broker.minDeposit}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Avaliação</p><div className="flex items-center gap-1"><Star className="h-3 w-3 md:h-4 md:w-4 fill-primary text-primary" /><span className="font-medium text-xs md:text-sm">{broker.rating}</span></div></div>
                    </div>
                  </div>
                  <Link to={`/corretoras/${broker.slug}`}>
                    <Button variant="outline" size="sm" className="flex-shrink-0 border-primary/30 hover:bg-primary hover:text-primary-foreground whitespace-nowrap">
                      Ver Detalhes <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/corretoras">
            <Button size="lg" variant="outline" className="border-border hover:bg-accent w-full sm:w-auto">
              Ver Todas as Corretoras <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrokerRanking;
