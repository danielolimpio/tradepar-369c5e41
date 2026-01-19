/**
 * Script de Pré-Renderização Estática
 * Gera arquivos .html individuais para cada rota do site
 * Compatível com deploy na Hostinger via GitHub Actions
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');

// Lista de todas as rotas do site
const routes = [
  // Páginas principais
  { path: '/', filename: 'index.html' },
  { path: '/corretoras', filename: 'corretoras.html' },
  { path: '/corretoras/comparar', filename: 'corretoras-comparar.html' },
  { path: '/traders', filename: 'traders.html' },
  { path: '/tecnologia', filename: 'tecnologia.html' },
  { path: '/estrategias', filename: 'estrategias.html' },
  { path: '/seguranca', filename: 'seguranca.html' },
  
  // Corretoras individuais
  { path: '/corretoras/ig-group', filename: 'corretoras-ig-group.html' },
  { path: '/corretoras/saxo-bank', filename: 'corretoras-saxo-bank.html' },
  { path: '/corretoras/interactive-brokers', filename: 'corretoras-interactive-brokers.html' },
  { path: '/corretoras/cmc-markets', filename: 'corretoras-cmc-markets.html' },
  { path: '/corretoras/pepperstone', filename: 'corretoras-pepperstone.html' },
  { path: '/corretoras/ic-markets', filename: 'corretoras-ic-markets.html' },
  { path: '/corretoras/fp-markets', filename: 'corretoras-fp-markets.html' },
  { path: '/corretoras/xm-group', filename: 'corretoras-xm-group.html' },
  { path: '/corretoras/avatrade', filename: 'corretoras-avatrade.html' },
  { path: '/corretoras/octafx', filename: 'corretoras-octafx.html' },
  { path: '/corretoras/tickmill', filename: 'corretoras-tickmill.html' },
  { path: '/corretoras/plus500', filename: 'corretoras-plus500.html' },
  { path: '/corretoras/exness', filename: 'corretoras-exness.html' },
  { path: '/corretoras/fxtm', filename: 'corretoras-fxtm.html' },
  { path: '/corretoras/admirals', filename: 'corretoras-admirals.html' },
  { path: '/corretoras/roboforex', filename: 'corretoras-roboforex.html' },
  { path: '/corretoras/hotforex-hfm', filename: 'corretoras-hotforex-hfm.html' },
  { path: '/corretoras/alpari', filename: 'corretoras-alpari.html' },
  { path: '/corretoras/city-index', filename: 'corretoras-city-index.html' },
  { path: '/corretoras/deriv', filename: 'corretoras-deriv.html' },
  
  // Blog
  { path: '/blog', filename: 'blog.html' },
  { path: '/blog/estrategias/estrategias-avancadas-hft', filename: 'blog-estrategias-estrategias-avancadas-hft.html' },
  
  // Artigos
  { path: '/artigo/como-investir-forex', filename: 'artigo-como-investir-forex.html' },
  
  // Recursos
  { path: '/tutoriais', filename: 'tutoriais.html' },
  { path: '/ferramentas', filename: 'ferramentas.html' },
  { path: '/api', filename: 'api.html' },
  { path: '/comunidade', filename: 'comunidade.html' },
  { path: '/contato', filename: 'contato.html' },
  
  // Páginas legais
  { path: '/termos-de-uso', filename: 'termos-de-uso.html' },
  { path: '/politica-privacidade', filename: 'politica-privacidade.html' },
  { path: '/politica-cookies', filename: 'politica-cookies.html' },
  { path: '/disclaimer', filename: 'disclaimer.html' },
];

async function prerender() {
  console.log('🚀 Iniciando pré-renderização...');
  console.log(`📁 Diretório de saída: ${distPath}`);
  console.log(`📄 Total de rotas: ${routes.length}`);

  // Inicia servidor Vite em modo preview
  const server = await createServer({
    root: distPath,
    server: { port: 4173 },
    preview: { port: 4173 }
  });
  
  await server.listen();
  console.log('🌐 Servidor de preview iniciado em http://localhost:4173');

  // Inicia Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const url = `http://localhost:4173${route.path}`;
      console.log(`📝 Renderizando: ${route.path} -> ${route.filename}`);
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Aguarda React renderizar completamente
      await page.waitForSelector('#root > *', { timeout: 10000 });
      
      // Obtém o HTML renderizado
      const html = await page.content();
      
      // Salva o arquivo HTML
      const outputPath = join(distPath, route.filename);
      writeFileSync(outputPath, html);
      
      console.log(`✅ Salvo: ${route.filename}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erro em ${route.path}:`, error.message);
      errorCount++;
    }
  }

  await browser.close();
  await server.close();

  console.log('\n📊 Resumo da pré-renderização:');
  console.log(`   ✅ Sucesso: ${successCount}/${routes.length}`);
  console.log(`   ❌ Erros: ${errorCount}/${routes.length}`);
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender().catch(console.error);
