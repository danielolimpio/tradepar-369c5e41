import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Trading Setup"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Portal Verificado & Confiável</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight px-4">
            O Portal Definitivo de{" "}
            <span className="text-gradient-bull">Forex</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Rankings de corretoras verificadas, estratégias profissionais e tecnologia de ponta.
            Seu guia completo para operar com confiança no mercado forex.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto glow-bull group" asChild>
              <a href="/corretoras">
                Explorar Corretoras
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-accent" asChild>
              <a href="#estrategias">
                Ver Estratégias
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-12 px-4">
            <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/50 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-bold text-gradient-bull">50+</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Corretoras Analisadas</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/50 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
                <span className="text-2xl sm:text-3xl font-bold text-gradient-bear">100+</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Estratégias Testadas</p>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/50 hover-lift">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-bold">24/7</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Monitoramento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
