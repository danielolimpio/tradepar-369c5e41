import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrokerRanking from "@/components/BrokerRanking";
import TechnologySection from "@/components/TechnologySection";
import StrategiesSection from "@/components/StrategiesSection";
import TradersRanking from "@/components/TradersRanking";
import SecurityGuide from "@/components/SecurityGuide";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BrokerRanking />
      <TechnologySection />
      <StrategiesSection />
      <TradersRanking />
      <SecurityGuide />
      <Footer />
    </div>
  );
};

export default Index;
