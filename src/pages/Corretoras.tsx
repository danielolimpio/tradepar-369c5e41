import { Shield, Star, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fxtmLogo from "@/assets/fxtm.jpeg";

const allBrokers = [
  {
    rank: 1,
    name: "IG Group",
    logo: icMarketsLogo,
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
    logo: pepperstoneLogo,
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
    logo: xmLogo,
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
    logo: fxtmLogo,
    regulation: "FCA, ASIC, MAS, CySEC",
    spread: "0.0 pips",
    minDeposit: "£0",
    rating: 4.7,
    verified: true,
    highlight: "Next Generation",
  },
  {
    rank: 5,
    name: "Pepperstone",
    logo: pepperstoneLogo,
    regulation: "ASIC, FCA, CySEC, DFSA",
    spread: "0.0 pips",
    minDeposit: "$200",
    rating: 4.8,
    verified: true,
    highlight: "Scalpers",
  },
  {
    rank: 6,
    name: "IC Markets",
    logo: icMarketsLogo,
    regulation: "ASIC, CySEC, FSA",
    spread: "0.0 pips",
    minDeposit: "$200",
    rating: 4.8,
    verified: true,
    highlight: "Execução ECN",
  },
  {
    rank: 7,
    name: "FP Markets",
    logo: fxtmLogo,
    regulation: "ASIC, CySEC, FSCA",
    spread: "0.0 pips",
    minDeposit: "$100",
    rating: 4.7,
    verified: true,
    highlight: "MT4/MT5 e cTrader",
  },
  {
    rank: 8,
    name: "XM Group",
    logo: xmLogo,
    regulation: "CySEC, ASIC, FSCA",
    spread: "0.6 pips",
    minDeposit: "$5",
    rating: 4.6,
    verified: true,
    highlight: "Suporte em Português",
  },
  {
    rank: 9,
    name: "AvaTrade",
    logo: icMarketsLogo,
    regulation: "ASIC, CySEC, FSA, FSCA",
    spread: "0.9 pips",
    minDeposit: "$100",
    rating: 4.5,
    verified: true,
    highlight: "Multilíngue",
  },
  {
    rank: 10,
    name: "OctaFX",
    logo: pepperstoneLogo,
    regulation: "FSA, FSCA, FSC",
    spread: "0.1 pips",
    minDeposit: "$25",
    rating: 4.6,
    verified: true,
    highlight: "América Latina",
  },
  {
    rank: 11,
    name: "Tickmill",
    logo: fxtmLogo,
    regulation: "FCA, CySEC, FSA",
    spread: "0.0 pips",
    minDeposit: "$100",
    rating: 4.8,
    verified: true,
    highlight: "Sem Requotes",
  },
  {
    rank: 12,
    name: "Plus500",
    logo: xmLogo,
    regulation: "FCA, ASIC, CySEC, FSC",
    spread: "0.6 pips",
    minDeposit: "$100",
    rating: 4.3,
    verified: true,
    highlight: "Iniciantes",
  },
  {
    rank: 13,
    name: "Exness",
    logo: icMarketsLogo,
    regulation: "FCA, CySEC, FSA, FSCA",
    spread: "0.0 pips",
    minDeposit: "$10",
    rating: 4.7,
    verified: true,
    highlight: "Retiradas Rápidas",
  },
  {
    rank: 14,
    name: "FXTM",
    logo: fxtmLogo,
    regulation: "FCA, CySEC, FSCA, FSC",
    spread: "0.8 pips",
    minDeposit: "$10",
    rating: 4.5,
    verified: true,
    highlight: "Baixo Capital",
  },
  {
    rank: 15,
    name: "Admirals",
    logo: pepperstoneLogo,
    regulation: "FCA, CySEC, ASIC",
    spread: "0.1 pips",
    minDeposit: "$100",
    rating: 4.7,
    verified: true,
    highlight: "Análise Avançada",
  },
  {
    rank: 16,
    name: "RoboForex",
    logo: xmLogo,
    regulation: "IFSC, CySEC, FSCA",
    spread: "0.0 pips",
    minDeposit: "$10",
    rating: 4.4,
    verified: true,
    highlight: "Muitos Tipos de Contas",
  },
  {
    rank: 17,
    name: "HotForex (HFM)",
    logo: icMarketsLogo,
    regulation: "FCA, CySEC, FSCA, ASIC",
    spread: "0.1 pips",
    minDeposit: "$5",
    rating: 4.5,
    verified: true,
    highlight: "Baixo Depósito",
  },
  {
    rank: 18,
    name: "Alpari",
    logo: fxtmLogo,
    regulation: "FCA, CySEC, FSC",
    spread: "0.3 pips",
    minDeposit: "$5",
    rating: 4.2,
    verified: true,
    highlight: "História Longa",
  },
  {
    rank: 19,
    name: "City Index",
    logo: pepperstoneLogo,
    regulation: "FCA, ASIC, MAS",
    spread: "0.5 pips",
    minDeposit: "$0",
    rating: 4.6,
    verified: true,
    highlight: "StoneX Group",
  },
  {
    rank: 20,
    name: "Deriv",
    logo: xmLogo,
    regulation: "MFSA, FSC, FSA",
    spread: "0.0 pips",
    minDeposit: "$5",
    rating: 4.1,
    verified: true,
    highlight: "Deriv X",
  },
];

const Corretoras = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <section className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Início
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">20 Corretoras Verificadas</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Todas as <span className="text-gradient-bull">Corretoras de Forex</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ranking completo das melhores corretoras regulamentadas globalmente,
                com análise detalhada de spreads, regulamentação e avaliações.
              </p>
            </div>

            {/* Broker Cards */}
            <div className="max-w-5xl mx-auto space-y-6">
              {allBrokers.map((broker) => (
                <div key={broker.rank} className="flex items-center gap-4">
                  {/* Rank Badge - Outside */}
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-background border-2 border-bull text-xl font-bold text-bull">
                    {broker.rank}º
                  </div>
                  
                  {/* Broker Card */}
                  <div className="flex-1 group bg-card border border-border rounded-xl p-6 hover-lift hover:border-primary/40 transition-all">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <img 
                          src={broker.logo} 
                          alt={broker.name}
                          className="w-24 h-24 object-contain rounded-lg"
                        />
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
                </div>
              ))}
            </div>

            {/* Info Footer */}
            <div className="max-w-5xl mx-auto mt-12 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">Metodologia de Avaliação</h3>
              <p className="text-muted-foreground">
                Nosso ranking é baseado em análises verificadas de Trustpilot, Sitejabber, 
                registros oficiais de reguladores como FCA, ASIC, CySEC, e relatórios 
                atualizados da ESMA. Todas as corretoras listadas possuem regulamentação 
                internacional ativa.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Corretoras;
