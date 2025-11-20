import { Shield, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fxtmLogo from "@/assets/fxtm.jpeg";
import igGroupLogo from "@/assets/ig-group.jpeg";
import saxoBankLogo from "@/assets/saxo-bank.jpeg";
import interactiveBrokersLogo from "@/assets/interactive-brokers.jpeg";
import cmcMarketsLogo from "@/assets/cmc-markets.jpeg";

const brokers = [
  {
    rank: 1,
    name: "IG Group",
    logo: igGroupLogo,
    regulation: "FCA, ASIC, CySEC, CFTC/NFA",
    spread: "0.0 pips",
    minDeposit: "£0",
    rating: 4.8,
    verified: true,
    highlight: "Day Traders e CFDs",
  },
  {
    rank: 2,
    name: "Saxo Bank",
    logo: saxoBankLogo,
    regulation: "FCA, ASIC, FINMA, CySEC",
    spread: "0.1 pips",
    minDeposit: "€10,000",
    rating: 4.9,
    verified: true,
    highlight: "Institucional Premium",
  },
  {
    rank: 3,
    name: "Interactive Brokers",
    logo: interactiveBrokersLogo,
    regulation: "FCA, SEC/CFTC, ASIC, SFC",
    spread: "0.0 pips",
    minDeposit: "$0",
    rating: 4.9,
    verified: true,
    highlight: "Traders Profissionais",
  },
  {
    rank: 4,
    name: "CMC Markets",
    logo: cmcMarketsLogo,
    regulation: "FCA, ASIC, MAS, CySEC",
    spread: "0.0 pips",
    minDeposit: "£0",
    rating: 4.7,
    verified: true,
    highlight: "Next Generation",
  },
];

const BrokerRanking = () => {
  return (
    <section id="corretoras" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Verificado & Confiável</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ranking de <span className="text-gradient-bull">Corretoras</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Análise completa das corretoras mais confiáveis do mercado, com regulamentação internacional
            e execução profissional.
          </p>
        </div>

        {/* Broker Cards */}
        <div className="max-w-5xl mx-auto space-y-4">
          {brokers.map((broker) => (
            <div key={broker.rank} className="flex items-start gap-2 sm:gap-4">
              {/* Rank Badge - Outside */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-background border-2 border-bull text-lg sm:text-xl font-bold text-bull">
                {broker.rank}º
              </div>
              
              {/* Broker Card */}
              <div className="flex-1 group bg-card border border-border rounded-xl p-4 sm:p-6 hover-lift hover:border-primary/40 transition-all">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <img 
                        src={broker.logo} 
                        alt={broker.name}
                        className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-lg"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-3 w-full">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold">{broker.name}</h3>
                        {broker.verified && (
                          <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            Verificada
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">{broker.highlight}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1 text-xs">Regulamentação</p>
                          <p className="font-medium text-xs sm:text-sm">{broker.regulation}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-xs">Spread Mín.</p>
                          <p className="font-medium text-primary text-xs sm:text-sm">{broker.spread}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-xs">Depósito Mín.</p>
                          <p className="font-medium text-xs sm:text-sm">{broker.minDeposit}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-xs">Avaliação</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
                            <span className="font-medium text-xs sm:text-sm">{broker.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" size="sm" className="w-full sm:w-auto group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    Ver Detalhes
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <Link to="/corretoras">
            <Button size="lg" variant="outline" className="border-border hover:bg-accent">
              Ver Todas as Corretoras
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrokerRanking;
