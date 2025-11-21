import { Shield, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fpMarketsLogo from "@/assets/fp-markets.jpeg";
import igGroupLogo from "@/assets/ig-group.jpeg";
import saxoBankLogo from "@/assets/saxo-bank.jpeg";
import interactiveBrokersLogo from "@/assets/interactive-brokers.jpeg";
import cmcMarketsLogo from "@/assets/cmc-markets.jpeg";
import avatradeLogo from "@/assets/avatrade.jpeg";
import octafxLogo from "@/assets/octafx.jpeg";

const brokers = [
  {
    rank: 1,
    name: "IG Group",
    slug: "ig-group",
    logo: igGroupLogo,
    regulation: "FCA, ASIC, CySEC, CFTC/NFA",
    spread: "0.6 pips",
    minDeposit: "$0",
    rating: 4.8,
    verified: true,
    highlight: "Day Traders e CFDs",
  },
  {
    rank: 2,
    name: "Saxo Bank",
    slug: "saxo-bank",
    logo: saxoBankLogo,
    regulation: "FSA, FCA, ASIC, MAS",
    spread: "0.9 pips",
    minDeposit: "$2.000",
    rating: 4.7,
    verified: true,
    highlight: "Institucional Premium",
  },
  {
    rank: 3,
    name: "Interactive Brokers",
    slug: "interactive-brokers",
    logo: interactiveBrokersLogo,
    regulation: "SEC, FINRA, FCA, ASIC",
    spread: "0.2 pips",
    minDeposit: "$0",
    rating: 4.6,
    verified: true,
    highlight: "Traders Profissionais",
  },
  {
    rank: 4,
    name: "CMC Markets",
    slug: "cmc-markets",
    logo: cmcMarketsLogo,
    regulation: "FCA, ASIC, BaFin, MAS",
    spread: "0.7 pips",
    minDeposit: "$0",
    rating: 4.5,
    verified: true,
    highlight: "Next Generation",
  },
  {
    rank: 5,
    name: "Pepperstone",
    slug: "pepperstone",
    logo: pepperstoneLogo,
    regulation: "ASIC, FCA, CySEC, BaFin",
    spread: "0.6 pips",
    minDeposit: "$200",
    rating: 4.7,
    verified: true,
    highlight: "Spreads Baixos",
  },
  {
    rank: 6,
    name: "IC Markets",
    slug: "ic-markets",
    logo: icMarketsLogo,
    regulation: "ASIC, CySEC, FSA, SCB",
    spread: "0.0 pips",
    minDeposit: "$200",
    rating: 4.8,
    verified: true,
    highlight: "Raw Spread",
  },
  {
    rank: 7,
    name: "FP Markets",
    slug: "fp-markets",
    logo: fpMarketsLogo,
    regulation: "ASIC, CySEC, FSCA",
    spread: "0.0 pips",
    minDeposit: "$50",
    rating: 4.7,
    verified: true,
    highlight: "Baixo Depósito",
  },
  {
    rank: 8,
    name: "XM Group",
    slug: "xm-group",
    logo: xmLogo,
    regulation: "CySEC, ASIC, IFSC, DFSA",
    spread: "0.6 pips",
    minDeposit: "$5",
    rating: 4.6,
    verified: true,
    highlight: "10M+ Clientes",
  },
  {
    rank: 9,
    name: "AvaTrade",
    slug: "avatrade",
    logo: avatradeLogo,
    regulation: "Central Bank IE, ASIC, FSA JP",
    spread: "0.9 pips",
    minDeposit: "$100",
    rating: 4.5,
    verified: true,
    highlight: "Copy Trading",
  },
  {
    rank: 10,
    name: "OctaFX",
    slug: "octafx",
    logo: octafxLogo,
    regulation: "FSC, CySEC, FCA",
    spread: "0.6 pips",
    minDeposit: "$25",
    rating: 4.4,
    verified: true,
    highlight: "12M+ Registros",
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
            <div key={broker.rank} className="flex items-center gap-4">
              {/* Rank Badge - Outside */}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-background border-2 border-primary text-xl font-bold text-primary">
                {broker.rank}º
              </div>
              
              {/* Broker Card */}
              <div className="flex-1 group bg-card border border-border rounded-xl p-6 hover-lift hover:border-primary/40 transition-all">
                <div className="flex items-center gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={broker.logo} 
                      alt={broker.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold">{broker.name}</h3>
                      {broker.verified && (
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verificada
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">{broker.highlight}</Badge>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-6">
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Regulamentação</p>
                        <p className="font-medium text-sm">{broker.regulation}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Spread Mín.</p>
                        <p className="font-medium text-primary text-sm">{broker.spread}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Depósito Mín.</p>
                        <p className="font-medium text-sm">{broker.minDeposit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Avaliação</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium text-sm">{broker.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={`/corretoras/${broker.slug}`}>
                    <Button variant="outline" size="sm" className="flex-shrink-0 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      Ver Detalhes
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
