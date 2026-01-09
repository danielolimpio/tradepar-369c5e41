import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin para copiar páginas HTML estáticas para o build
function staticPagesPlugin() {
  return {
    name: 'static-pages-plugin',
    closeBundle() {
      // Lista de todas as rotas estáticas do site
      const staticRoutes = [
        'corretoras',
        'corretoras/comparar',
        'traders',
        'tecnologia',
        'estrategias',
        'seguranca',
        'termos-de-uso',
        'politica-privacidade',
        'politica-cookies',
        'disclaimer',
        'blog',
        'blog/estrategias/estrategias-avancadas-hft',
        'artigo/como-investir-forex',
        'contato',
        'tutoriais',
        'ferramentas',
        'api',
        'comunidade'
      ];

      // Lê o index.html gerado pelo build
      const distPath = path.resolve(__dirname, 'dist');
      const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

      // Cria pastas e copia index.html para cada rota
      staticRoutes.forEach(route => {
        const routePath = path.join(distPath, route);
        fs.mkdirSync(routePath, { recursive: true });
        fs.writeFileSync(path.join(routePath, 'index.html'), indexHtml);
      });

      console.log(`✅ Páginas estáticas criadas para ${staticRoutes.length} rotas`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && staticPagesPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
