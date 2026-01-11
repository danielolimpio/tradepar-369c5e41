import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// Lista de todas as rotas do site para pré-renderização
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

// Slugs de todas as corretoras para gerar páginas individuais
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

// Adiciona rotas de corretoras individuais
const brokerRoutes = brokerSlugs.map(slug => `/corretoras/${slug}/`);
const allRoutes = [...staticRoutes, ...brokerRoutes];

// Instância do renderer Puppeteer
const Renderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      // Diretório de saída do build
      staticDir: path.join(__dirname, "dist"),
      // Rotas para pré-renderizar
      routes: allRoutes,
      // Renderer Puppeteer com configurações
      renderer: new Renderer({
        maxConcurrentRoutes: 4,
        renderAfterTime: 500,
        headless: true,
      }),
      // Pós-processamento do HTML
      postProcess(renderedRoute: { route: string; originalRoute: string; html: string; outputPath: string }) {
        // Garante que o HTML tenha lang="pt-BR"
        renderedRoute.html = renderedRoute.html.replace(
          /<html lang="en">/,
          '<html lang="pt-BR">'
        );
        // Mantém a rota original (ignora redirecionamentos)
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      },
      // Minificação do HTML
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
