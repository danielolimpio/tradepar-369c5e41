import { Brain, Target, LineChart, Rocket } from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Scalping",
    description: "Operações rápidas em timeframes baixos",
    timeframe: "M1 - M5",
    risk: "Alto",
    suitable: "Experientes",
  },
  {
    icon: LineChart,
    title: "Day Trading",
    description: "Posições intradiárias com análise técnica",
    timeframe: "M15 - H1",
    risk: "Médio",
    suitable: "Intermediários",
  },
  {
    icon: Brain,
    title: "Swing Trading",
    description: "Captura tendências de médio prazo",
    timeframe: "H4 - D1",
    risk: "Médio",
    suitable: "Todos",
  },
  {
    icon: Rocket,
    title: "Automação (EA)",
    description: "Trading algorítmico 24/7",
    timeframe: "Variável",
    risk: "Controlado",
    suitable: "Todos",
  },
];

const StrategiesSection = () => {
  return (
    <section id="estrategias" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Estratégias Testadas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Estratégias <span className="text-gradient-bull">Profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Metodologias comprovadas para diferentes perfis de traders e objetivos de retorno.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-4 sm:p-6 hover-lift hover:border-primary/40 transition-all relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 group-hover:glow-bull transition-all">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{strategy.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 sm:pt-4 border-t border-border">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Timeframe</span>
                      <span className="font-medium">{strategy.timeframe}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Risco</span>
                      <span className={`font-medium ${
                        strategy.risk === "Alto" ? "text-destructive" : 
                        strategy.risk === "Médio" ? "text-yellow-500" : 
                        "text-primary"
                      }`}>
                        {strategy.risk}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Para</span>
                      <span className="font-medium">{strategy.suitable}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Biblioteca de Estratégias Completa
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Acesse análises detalhadas, backtests reais e casos de sucesso de traders que aplicam essas metodologias no mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors glow-bull">
              Explorar Estratégias
            </button>
            <button className="px-6 py-3 bg-transparent border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Ver Backtests
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategiesSection;
