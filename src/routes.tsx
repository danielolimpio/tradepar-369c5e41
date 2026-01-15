import { lazy } from "react";
import type { RouteRecord } from "vite-react-ssg";
import { brokersData } from "./data/brokersComparisonData";

// Lazy load das páginas para otimização
const Index = lazy(() => import("./pages/Index"));
const Corretoras = lazy(() => import("./pages/Corretoras"));
const CorretoraDetalhe = lazy(() => import("./pages/CorretoraDetalhe"));
const ComparacaoCorretoras = lazy(() => import("./pages/ComparacaoCorretoras"));
const Traders = lazy(() => import("./pages/Traders"));
const Tecnologia = lazy(() => import("./pages/Tecnologia"));
const Estrategias = lazy(() => import("./pages/Estrategias"));
const Seguranca = lazy(() => import("./pages/Seguranca"));
const TermosDeUso = lazy(() => import("./pages/TermosDeUso"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Blog = lazy(() => import("./pages/Blog"));
const EstrategiasHFT = lazy(() => import("./pages/blog/EstrategiasHFT"));
const ComoInvestirForex = lazy(() => import("./pages/blog/ComoInvestirForex"));
const Contato = lazy(() => import("./pages/Contato"));
const Tutoriais = lazy(() => import("./pages/Tutoriais"));
const Ferramentas = lazy(() => import("./pages/Ferramentas"));
const API = lazy(() => import("./pages/API"));
const Comunidade = lazy(() => import("./pages/Comunidade"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Gera rotas dinâmicas para todas as corretoras
const brokerRoutes: RouteRecord[] = brokersData.map((broker) => ({
  path: `/corretoras/${broker.slug}/`,
  element: <CorretoraDetalhe />,
  entry: `src/pages/CorretoraDetalhe.tsx`,
}));

export const routes: RouteRecord[] = [
  // Página Inicial
  {
    path: "/",
    element: <Index />,
    entry: "src/pages/Index.tsx",
  },
  
  // Corretoras
  {
    path: "/corretoras/",
    element: <Corretoras />,
    entry: "src/pages/Corretoras.tsx",
  },
  {
    path: "/corretoras/comparar/",
    element: <ComparacaoCorretoras />,
    entry: "src/pages/ComparacaoCorretoras.tsx",
  },
  // Rotas dinâmicas das corretoras individuais
  ...brokerRoutes,
  
  // Traders
  {
    path: "/traders/",
    element: <Traders />,
    entry: "src/pages/Traders.tsx",
  },
  
  // Tecnologia
  {
    path: "/tecnologia/",
    element: <Tecnologia />,
    entry: "src/pages/Tecnologia.tsx",
  },
  
  // Estratégias
  {
    path: "/estrategias/",
    element: <Estrategias />,
    entry: "src/pages/Estrategias.tsx",
  },
  
  // Segurança
  {
    path: "/seguranca/",
    element: <Seguranca />,
    entry: "src/pages/Seguranca.tsx",
  },
  
  // Páginas Legais
  {
    path: "/termos-de-uso/",
    element: <TermosDeUso />,
    entry: "src/pages/TermosDeUso.tsx",
  },
  {
    path: "/politica-privacidade/",
    element: <PoliticaPrivacidade />,
    entry: "src/pages/PoliticaPrivacidade.tsx",
  },
  {
    path: "/politica-cookies/",
    element: <PoliticaCookies />,
    entry: "src/pages/PoliticaCookies.tsx",
  },
  {
    path: "/disclaimer/",
    element: <Disclaimer />,
    entry: "src/pages/Disclaimer.tsx",
  },
  
  // Blog
  {
    path: "/blog/",
    element: <Blog />,
    entry: "src/pages/Blog.tsx",
  },
  {
    path: "/blog/estrategias/estrategias-avancadas-hft/",
    element: <EstrategiasHFT />,
    entry: "src/pages/blog/EstrategiasHFT.tsx",
  },
  
  // Artigos
  {
    path: "/artigo/como-investir-forex/",
    element: <ComoInvestirForex />,
    entry: "src/pages/blog/ComoInvestirForex.tsx",
  },
  
  // Outras Páginas
  {
    path: "/contato/",
    element: <Contato />,
    entry: "src/pages/Contato.tsx",
  },
  {
    path: "/tutoriais/",
    element: <Tutoriais />,
    entry: "src/pages/Tutoriais.tsx",
  },
  {
    path: "/ferramentas/",
    element: <Ferramentas />,
    entry: "src/pages/Ferramentas.tsx",
  },
  {
    path: "/api/",
    element: <API />,
    entry: "src/pages/API.tsx",
  },
  {
    path: "/comunidade/",
    element: <Comunidade />,
    entry: "src/pages/Comunidade.tsx",
  },
  
  // 404 - Deve ser a última rota
  {
    path: "*",
    element: <NotFound />,
  },
];
