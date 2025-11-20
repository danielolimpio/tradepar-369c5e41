import { Shield, AlertTriangle, CheckCircle, Lock } from "lucide-react";

const securityChecks = [
  {
    title: "Regulamentação Verificada",
    description: "Sempre verifique se a corretora possui licença de autoridades reconhecidas (CySEC, FCA, ASIC)",
    icon: CheckCircle,
    type: "good",
  },
  {
    title: "Segregação de Fundos",
    description: "Seus depósitos devem estar separados do capital operacional da corretora",
    icon: Lock,
    type: "good",
  },
  {
    title: "Promessas Irreais",
    description: "Desconfie de garantias de lucro ou retornos absurdos sem risco",
    icon: AlertTriangle,
    type: "warning",
  },
  {
    title: "Falta de Transparência",
    description: "Evite corretoras que não divulgam spreads, comissões ou termos claramente",
    icon: AlertTriangle,
    type: "warning",
  },
];

const SecurityGuide = () => {
  return (
    <section id="seguranca" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Proteção do Trader</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Guia de <span className="text-gradient-bull">Segurança</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aprenda a identificar corretoras confiáveis e proteger seu capital no mercado forex.
          </p>
        </div>

        {/* Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {securityChecks.map((check, index) => {
            const Icon = check.icon;
            const isGood = check.type === "good";
            
            return (
              <div
                key={index}
                className={`group bg-card border rounded-xl p-4 sm:p-6 hover-lift transition-all ${
                  isGood 
                    ? "border-primary/20 hover:border-primary/40" 
                    : "border-destructive/20 hover:border-destructive/40"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border ${
                    isGood
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-destructive/10 border-destructive/20 text-destructive"
                  }`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold mb-2">{check.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {check.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checklist Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Checklist do Trader Consciente</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Antes de depositar em qualquer corretora, certifique-se de:
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Verificar regulamentação em sites oficiais (não confie apenas no site da corretora)",
                "Pesquisar reviews independentes e reclamações de outros traders",
                "Testar a plataforma com conta demo antes de depositar",
                "Ler atentamente os termos de saque e políticas de bônus",
                "Confirmar que a corretora oferece suporte em português",
                "Validar métodos de pagamento e tempo de processamento",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Dúvidas sobre segurança? Consulte nosso guia completo.
                </p>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors glow-bull whitespace-nowrap">
                  Baixar Guia Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityGuide;
