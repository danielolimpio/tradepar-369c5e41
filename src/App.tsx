import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Contato from "./pages/Contato";
import Tutoriais from "./pages/Tutoriais";
import Ferramentas from "./pages/Ferramentas";
import API from "./pages/API";
import Comunidade from "./pages/Comunidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Componente para redirecionar rotas sem trailing slash para com trailing slash
const TrailingSlashRedirect = ({ to }: { to: string }) => {
  return <Navigate to={to} replace />;
};

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
          
          {/* Corretoras - com e sem trailing slash */}
          <Route path="/corretoras" element={<TrailingSlashRedirect to="/corretoras/" />} />
          <Route path="/corretoras/" element={<Corretoras />} />
          <Route path="/corretoras/comparar" element={<TrailingSlashRedirect to="/corretoras/comparar/" />} />
          <Route path="/corretoras/comparar/" element={<ComparacaoCorretoras />} />
          <Route path="/corretoras/:brokerSlug" element={<CorretoraDetalhe />} />
          <Route path="/corretoras/:brokerSlug/" element={<CorretoraDetalhe />} />
          
          {/* Traders */}
          <Route path="/traders" element={<TrailingSlashRedirect to="/traders/" />} />
          <Route path="/traders/" element={<Traders />} />
          
          {/* Tecnologia */}
          <Route path="/tecnologia" element={<TrailingSlashRedirect to="/tecnologia/" />} />
          <Route path="/tecnologia/" element={<Tecnologia />} />
          
          {/* Estratégias */}
          <Route path="/estrategias" element={<TrailingSlashRedirect to="/estrategias/" />} />
          <Route path="/estrategias/" element={<Estrategias />} />
          
          {/* Segurança */}
          <Route path="/seguranca" element={<TrailingSlashRedirect to="/seguranca/" />} />
          <Route path="/seguranca/" element={<Seguranca />} />
          
          {/* Páginas Legais */}
          <Route path="/termos-de-uso" element={<TrailingSlashRedirect to="/termos-de-uso/" />} />
          <Route path="/termos-de-uso/" element={<TermosDeUso />} />
          <Route path="/politica-privacidade" element={<TrailingSlashRedirect to="/politica-privacidade/" />} />
          <Route path="/politica-privacidade/" element={<PoliticaPrivacidade />} />
          <Route path="/politica-cookies" element={<TrailingSlashRedirect to="/politica-cookies/" />} />
          <Route path="/politica-cookies/" element={<PoliticaCookies />} />
          <Route path="/disclaimer" element={<TrailingSlashRedirect to="/disclaimer/" />} />
          <Route path="/disclaimer/" element={<Disclaimer />} />
          
          {/* Blog */}
          <Route path="/blog" element={<TrailingSlashRedirect to="/blog/" />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/estrategias/estrategias-avancadas-hft" element={<TrailingSlashRedirect to="/blog/estrategias/estrategias-avancadas-hft/" />} />
          <Route path="/blog/estrategias/estrategias-avancadas-hft/" element={<EstrategiasHFT />} />
          
          {/* Artigos */}
          <Route path="/artigo/como-investir-forex" element={<TrailingSlashRedirect to="/artigo/como-investir-forex/" />} />
          <Route path="/artigo/como-investir-forex/" element={<ComoInvestirForex />} />
          
          {/* Outras Páginas */}
          <Route path="/contato" element={<TrailingSlashRedirect to="/contato/" />} />
          <Route path="/contato/" element={<Contato />} />
          <Route path="/tutoriais" element={<TrailingSlashRedirect to="/tutoriais/" />} />
          <Route path="/tutoriais/" element={<Tutoriais />} />
          <Route path="/ferramentas" element={<TrailingSlashRedirect to="/ferramentas/" />} />
          <Route path="/ferramentas/" element={<Ferramentas />} />
          <Route path="/api" element={<TrailingSlashRedirect to="/api/" />} />
          <Route path="/api/" element={<API />} />
          <Route path="/comunidade" element={<TrailingSlashRedirect to="/comunidade/" />} />
          <Route path="/comunidade/" element={<Comunidade />} />
          
          {/* 404 - Deve ser a última rota */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
