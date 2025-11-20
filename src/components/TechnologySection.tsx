import { Monitor, Code, Cpu, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const platforms = [
  {
    icon: Monitor,
    title: "MetaTrader 4",
    description: "A plataforma mais popular do mercado forex",
    features: ["30+ indicadores", "EA compatível", "Multi-timeframe"],
    color: "primary",
  },
  {
    icon: Code,
    title: "MetaTrader 5",
    description: "Evolução do MT4 com recursos avançados",
    features: ["38 indicadores", "Mais timeframes", "Análise profunda"],
    color: "primary",
  },
  {
    icon: Cpu,
    title: "MQL5 & AutoTrade",
    description: "Automatize suas estratégias com Expert Advisors",
    features: ["Backtest preciso", "Otimização", "VPS integrado"],
    color: "destructive",
  },
  {
    icon: Zap,
    title: "Myfxbook",
    description: "Monitore e analise seu desempenho em tempo real",
    features: ["Análise de trades", "Comparação", "Social trading"],
    color: "destructive",
  },
];

const TechnologySection = () => {
  return (
    <section id="tecnologia" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <Cpu className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Tecnologia de Ponta</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-bear">Plataformas</span> & Ferramentas
          </h2>
          <p className="text-lg text-muted-foreground">
            Domine as principais plataformas de trading e ferramentas de automação do mercado.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isPrimary = platform.color === "primary";
            
            return (
              <Card
                key={index}
                className={`group bg-card border-border hover-lift hover:border-${platform.color}/40 transition-all overflow-hidden relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${platform.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <CardHeader className="p-4 sm:p-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${platform.color}/10 border border-${platform.color}/20 mb-3 sm:mb-4`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${platform.color}`} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{platform.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${platform.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-card border border-primary/20 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Aprenda MQL5 & Automação</h3>
              <p className="text-muted-foreground">
                Tutoriais completos para criar seus próprios Expert Advisors e automatizar suas estratégias de trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
