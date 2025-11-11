import { Shield, TrendingUp, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const brokers = [
  {
    rank: 1,
    name: "IC Markets",
    logo: "🏆",
    regulation: "CySEC, ASIC",
    spread: "0.0 pips",
    minDeposit: "$200",
    rating: 4.9,
    verified: true,
    highlight: "Melhor Execução",
  },
  {
    rank: 2,
    name: "Pepperstone",
    logo: "⚡",
    regulation: "FCA, ASIC, CySEC",
    spread: "0.1 pips",
    minDeposit: "$0",
    rating: 4.8,
    verified: true,
    highlight: "Spread Baixo",
  },
  {
    rank: 3,
    name: "XM Global",
    logo: "🌟",
    regulation: "CySEC, ASIC",
    spread: "0.6 pips",
    minDeposit: "$5",
    rating: 4.7,
    verified: true,
    highlight: "Iniciantes",
  },
  {
    rank: 4,
    name: "FXTM",
    logo: "💎",
    regulation: "FCA, CySEC",
    spread: "0.8 pips",
    minDeposit: "$10",
    rating: 4.6,
    verified: true,
    highlight: "Melhor Suporte",
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
            <div
              key={broker.rank}
              className="group bg-card border border-border rounded-xl p-6 hover-lift hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Rank */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-2xl font-bold text-primary border border-primary/20">
                    {broker.rank}
                  </div>
                  <div className="text-4xl">{broker.logo}</div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold">{broker.name}</h3>
                    {broker.verified && (
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        <Shield className="h-3 w-3 mr-1" />
                        Verificada
                      </Badge>
                    )}
                    <Badge variant="secondary">{broker.highlight}</Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Regulamentação</p>
                      <p className="font-medium">{broker.regulation}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Spread Mín.</p>
                      <p className="font-medium text-primary">{broker.spread}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Depósito Mín.</p>
                      <p className="font-medium">{broker.minDeposit}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Avaliação</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{broker.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  Ver Detalhes
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-border hover:bg-accent">
            Ver Todas as Corretoras
            <TrendingUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrokerRanking;
