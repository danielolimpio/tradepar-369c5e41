import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Corretoras from "./pages/Corretoras";
import CorretoraDetalhe from "./pages/CorretoraDetalhe";
import ComparacaoCorretoras from "./pages/ComparacaoCorretoras";
import Traders from "./pages/Traders";
import Tecnologia from "./pages/Tecnologia";
import Estrategias from "./pages/Estrategias";
import Seguranca from "./pages/Seguranca";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaCookies from "./pages/PoliticaCookies";
import Disclaimer from "./pages/Disclaimer";
import Blog from "./pages/Blog";
import EstrategiasHFT from "./pages/blog/EstrategiasHFT";
import ComoInvestirForex from "./pages/blog/ComoInvestirForex";
import IAForex2026 from "./pages/blog/IAForex2026";
import Contato from "./pages/Contato";
import Tutoriais from "./pages/Tutoriais";
import Ferramentas from "./pages/Ferramentas";
import API from "./pages/API";
import Comunidade from "./pages/Comunidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Página Inicial */}
          <Route path="/" element={<Index />} />
          
          {/* Corretoras */}
          <Route path="/corretoras" element={<Corretoras />} />
          <Route path="/corretoras/comparar" element={<ComparacaoCorretoras />} />
          <Route path="/corretoras/:brokerSlug" element={<CorretoraDetalhe />} />
          
          {/* Traders */}
          <Route path="/traders" element={<Traders />} />
          
          {/* Tecnologia */}
          <Route path="/tecnologia" element={<Tecnologia />} />
          
          {/* Estratégias */}
          <Route path="/estrategias" element={<Estrategias />} />
          
          {/* Segurança */}
          <Route path="/seguranca" element={<Seguranca />} />
          
          {/* Páginas Legais */}
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/estrategias/estrategias-avancadas-hft" element={<EstrategiasHFT />} />
          
          {/* Artigos */}
          <Route path="/artigo/como-investir-forex" element={<ComoInvestirForex />} />
          <Route path="/artigo/inteligencia-artificial-forex-2026" element={<IAForex2026 />} />
          
          {/* Outras Páginas */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/tutoriais" element={<Tutoriais />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/api" element={<API />} />
          <Route path="/comunidade" element={<Comunidade />} />
          
          {/* 404 - Deve ser a última rota */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
