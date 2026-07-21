import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrokerRanking from "@/components/BrokerRanking";
import BlogSection from "@/components/BlogSection";
import TechnologySection from "@/components/TechnologySection";
import StrategiesSection from "@/components/StrategiesSection";
import TradersRanking from "@/components/TradersRanking";
import SecurityGuide from "@/components/SecurityGuide";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Tradepar - Portal Definitivo de Forex & Trading"
        description="O portal de referência em forex: rankings de corretoras verificadas, estratégias profissionais, tecnologia MT4/MT5 e guia completo de segurança para traders."
        canonicalPath="/"
        keywords="forex, trading, corretoras, MT4, MT5, estratégias, automação, EA, Expert Advisor, análise técnica, mercado financeiro"
      />
      <Navigation />
      <Hero />
      <BrokerRanking />
      <BlogSection />
      <TechnologySection />
      <StrategiesSection />
      <TradersRanking />
      <SecurityGuide />
      <Footer />
    </div>
  );
};

export default Index;
