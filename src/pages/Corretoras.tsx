import { Shield, Star, ArrowUpRight, ArrowLeft, Scale, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fxtmLogo from "@/assets/fxtm.jpeg";
import igGroupLogo from "@/assets/ig-group.jpeg";
import saxoBankLogo from "@/assets/saxo-bank.jpeg";
import interactiveBrokersLogo from "@/assets/interactive-brokers.jpeg";
import cmcMarketsLogo from "@/assets/cmc-markets.jpeg";
import fpMarketsLogo from "@/assets/fp-markets.jpeg";
import avatradeLogo from "@/assets/avatrade.jpeg";
import octafxLogo from "@/assets/octafx.jpeg";
import tickmillLogo from "@/assets/tickmill.jpeg";
import plus500Logo from "@/assets/plus500.jpeg";
import exnessLogo from "@/assets/exness.jpeg";
import admiralsLogo from "@/assets/admirals.jpeg";
import roboforexLogo from "@/assets/roboforex.jpeg";
import hotforexLogo from "@/assets/hotforex.jpeg";
import alpariLogo from "@/assets/alpari.jpeg";
import cityIndexLogo from "@/assets/city-index.jpeg";
import derivLogo from "@/assets/deriv.jpeg";

const allBrokers = [
  {
    rank: 1,
    name: "IG Group",
    slug: "ig-group",
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
    slug: "saxo-bank",
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
    slug: "interactive-brokers",
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
    slug: "cmc-markets",
    logo: cmcMarketsLogo,
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
    slug: "pepperstone",
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
    slug: "ic-markets",
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
    slug: "fp-markets",
    logo: fpMarketsLogo,
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
    slug: "xm-group",
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
    slug: "avatrade",
    logo: avatradeLogo,
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
    slug: "octafx",
    logo: octafxLogo,
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
    slug: "tickmill",
    logo: tickmillLogo,
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
    slug: "plus500",
    logo: plus500Logo,
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
    slug: "exness",
    logo: exnessLogo,
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
    slug: "fxtm",
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
    slug: "admirals",
    logo: admiralsLogo,
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
    slug: "roboforex",
    logo: roboforexLogo,
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
    slug: "hotforex-hfm",
    logo: hotforexLogo,
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
    slug: "alpari",
    logo: alpariLogo,
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
    slug: "city-index",
    logo: cityIndexLogo,
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
    slug: "deriv",
    logo: derivLogo,
    regulation: "MFSA, FSC, FSA",
    spread: "0.0 pips",
    minDeposit: "$5",
    rating: 4.1,
    verified: true,
    highlight: "Deriv X",
  },
];

const getRankBadgeStyle = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-0";
  if (rank === 2) return "bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0";
  if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700 text-white border-0";
  return "bg-muted text-muted-foreground";
};

const Corretoras = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead 
        title="Melhores Corretoras de Forex 2026 - Ranking Completo"
        description="Ranking das 20 melhores corretoras de Forex regulamentadas. Compare spreads, regulamentação, depósito mínimo e avaliações de traders reais."
        canonicalPath="/corretoras"
        keywords="corretoras forex, melhores corretoras, forex Brasil, corretoras regulamentadas, IC Markets, Pepperstone, XM"
      />
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <section className="py-8 sm:py-12 md:py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Início
              </Link>
              
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">20 Corretoras Verificadas</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                Todas as <span className="text-gradient-bull">Corretoras de Forex</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                Ranking completo das melhores corretoras regulamentadas globalmente,
                com análise detalhada de spreads, regulamentação e avaliações.
              </p>
              
              <Link to="/corretoras/comparar">
                <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
                  <Scale className="h-4 w-4 mr-2" />
                  Comparar Corretoras
                </Button>
              </Link>
            </div>

            {/* Mobile Cards Layout */}
            <div className="block lg:hidden space-y-4 max-w-2xl mx-auto">
              {allBrokers.map((broker) => (
                <div
                  key={broker.rank}
                  className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Header with Rank and Logo */}
                  <div className="flex items-start gap-3 mb-4">
                    <Badge className={`${getRankBadgeStyle(broker.rank)} text-sm font-bold min-w-[2.5rem] justify-center`}>
                      #{broker.rank}
                    </Badge>
                    <div className="flex-1 flex items-center gap-3">
                      <img
                        src={broker.logo}
                        alt={broker.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-contain border border-border bg-white p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">{broker.name}</h3>
                          {broker.verified && (
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          )}
                        </div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {broker.highlight}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs sm:text-sm">
                    <div className="bg-muted/50 rounded-lg p-2 sm:p-3">
                      <p className="text-muted-foreground text-xs">Regulação</p>
                      <p className="font-medium text-foreground truncate text-xs sm:text-sm">{broker.regulation}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2 sm:p-3">
                      <p className="text-muted-foreground text-xs">Spread</p>
                      <p className="font-medium text-primary text-xs sm:text-sm">{broker.spread}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2 sm:p-3">
                      <p className="text-muted-foreground text-xs">Depósito Mín.</p>
                      <p className="font-medium text-foreground text-xs sm:text-sm">{broker.minDeposit}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2 sm:p-3">
                      <p className="text-muted-foreground text-xs">Avaliação</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium text-foreground text-xs sm:text-sm">{broker.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/corretoras/${broker.slug}/`} className="block">
                    <Button className="w-full gap-2" size="sm">
                      <ArrowUpRight className="w-4 h-4" />
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block max-w-5xl mx-auto space-y-6">
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
                      <Link to={`/corretoras/${broker.slug}/`}>
                        <Button variant="outline" className="group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                          Ver Detalhes
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Footer */}
            <div className="max-w-5xl mx-auto mt-8 sm:mt-12 p-4 sm:p-6 bg-card border border-border rounded-xl">
              <h3 className="text-base sm:text-lg font-bold mb-2">Metodologia de Avaliação</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
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
