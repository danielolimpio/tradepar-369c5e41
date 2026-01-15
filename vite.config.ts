import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Lista de slugs das corretoras para SSG
const brokerSlugs = [
  "ig-group",
  "saxo-bank",
  "interactive-brokers",
  "cmc-markets",
  "pepperstone",
  "ic-markets",
  "fp-markets",
  "xm-group",
  "avatrade",
  "octafx",
  "tickmill",
  "plus500",
  "exness",
  "fxtm",
  "admirals",
  "roboforex",
  "hotforex-hfm",
  "alpari",
  "city-index",
  "deriv",
];

// Todas as rotas estáticas
const staticRoutes = [
  "/",
  "/corretoras/",
  "/corretoras/comparar/",
  "/traders/",
  "/tecnologia/",
  "/estrategias/",
  "/seguranca/",
  "/blog/",
  "/blog/estrategias/estrategias-avancadas-hft/",
  "/artigo/como-investir-forex/",
  "/tutoriais/",
  "/ferramentas/",
  "/api/",
  "/comunidade/",
  "/contato/",
  "/termos-de-uso/",
  "/politica-privacidade/",
  "/politica-cookies/",
  "/disclaimer/",
];

// Rotas das corretoras individuais
const brokerRoutes = brokerSlugs.map((slug) => `/corretoras/${slug}/`);

// Todas as rotas para pré-renderização
const allRoutes = [...staticRoutes, ...brokerRoutes];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false,
    },
    dirStyle: "nested",
    includedRoutes: () => allRoutes,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
