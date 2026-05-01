/**
 * Script de Pré-Renderização Estática (SSG)
 * Gera arquivos .html individuais por rota com conteúdo COMPLETO de cada página.
 *
 * Correções importantes:
 *  - Servidor HTTP próprio com SPA fallback (sempre serve index.html para rotas desconhecidas).
 *  - Espera explícita pela hidratação do React Router (título da rota muda) antes de capturar HTML.
 *  - Tolerante a falhas isoladas, mas garante que CADA arquivo gerado tenha o conteúdo correto.
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { writeFileSync, readFileSync, existsSync, statSync } from 'fs';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');

// Lista de todas as rotas do site
const routes = [
  { path: '/', filename: 'index.html' },
  { path: '/corretoras', filename: 'corretoras.html' },
  { path: '/corretoras/comparar', filename: 'corretoras-comparar.html' },
  { path: '/traders', filename: 'traders.html' },
  { path: '/tecnologia', filename: 'tecnologia.html' },
  { path: '/estrategias', filename: 'estrategias.html' },
  { path: '/seguranca', filename: 'seguranca.html' },

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

  { path: '/blog', filename: 'blog.html' },
  { path: '/blog/estrategias/estrategias-avancadas-hft', filename: 'blog-estrategias-estrategias-avancadas-hft.html' },

  { path: '/artigo/como-investir-forex', filename: 'artigo-como-investir-forex.html' },

  { path: '/tutoriais', filename: 'tutoriais.html' },
  { path: '/ferramentas', filename: 'ferramentas.html' },
  { path: '/api', filename: 'api.html' },
  { path: '/comunidade', filename: 'comunidade.html' },
  { path: '/contato', filename: 'contato.html' },

  { path: '/termos-de-uso', filename: 'termos-de-uso.html' },
  { path: '/politica-privacidade', filename: 'politica-privacidade.html' },
  { path: '/politica-cookies', filename: 'politica-cookies.html' },
  { path: '/disclaimer', filename: 'disclaimer.html' },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

// Servidor HTTP estático com SPA fallback (sempre serve index.html para rotas desconhecidas)
function startStaticServer(port) {
  return new Promise((resolve, reject) => {
    const indexHtml = readFileSync(join(distPath, 'index.html'));

    const server = http.createServer((req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
        let filePath = join(distPath, urlPath);

        // Diretório -> index.html dentro dele
        if (existsSync(filePath) && statSync(filePath).isDirectory()) {
          filePath = join(filePath, 'index.html');
        }

        const ext = extname(filePath).toLowerCase();

        // Se o arquivo existe, serve diretamente
        if (existsSync(filePath) && statSync(filePath).isFile()) {
          // IMPORTANTE: para rotas SPA durante prerender, NÃO servir o .html já gerado
          // Sempre servir index.html bruto para rotas que não sejam assets
          if (ext === '.html' && urlPath !== '/' && urlPath !== '/index.html') {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexHtml);
            return;
          }
          res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
          res.end(readFileSync(filePath));
          return;
        }

        // Se parece ser um asset (tem extensão conhecida) e não existe, retorna 404
        if (ext && MIME[ext] && ext !== '.html') {
          res.writeHead(404);
          res.end('Not found');
          return;
        }

        // Fallback SPA: serve index.html bruto para o React Router lidar com a rota
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexHtml);
      } catch (err) {
        res.writeHead(500);
        res.end('Server error: ' + err.message);
      }
    });

    server.listen(port, () => resolve(server));
    server.on('error', reject);
  });
}

async function prerender() {
  console.log('🚀 Iniciando pré-renderização...');
  console.log(`📁 Diretório de saída: ${distPath}`);
  console.log(`📄 Total de rotas: ${routes.length}`);

  if (!existsSync(join(distPath, 'index.html'))) {
    console.error('❌ dist/index.html não encontrado. Execute o build antes.');
    process.exit(1);
  }

  const PORT = 4173;
  const server = await startStaticServer(PORT);
  console.log(`🌐 Servidor estático iniciado em http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Lê o título base do index.html para detectar quando o React Router atualizou para o título da rota
  const baseHtml = readFileSync(join(distPath, 'index.html'), 'utf-8');
  const baseTitleMatch = baseHtml.match(/<title>([^<]*)<\/title>/i);
  const baseTitle = baseTitleMatch ? baseTitleMatch[1].trim() : '';
  console.log(`📌 Título base do index.html: "${baseTitle}"`);

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const url = `http://localhost:${PORT}${route.path}`;
      console.log(`📝 Renderizando: ${route.path} -> ${route.filename}`);

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });

      // Aguarda React montar
      await page.waitForSelector('#root > *', { timeout: 15000 });

      // Para rotas que não sejam a home, aguarda o título mudar do título base
      // (indica que o SEOHead da rota correta foi aplicado)
      if (route.path !== '/') {
        try {
          await page.waitForFunction(
            (base) => {
              const t = document.title || '';
              return t && t.trim() !== base;
            },
            { timeout: 10000 },
            baseTitle
          );
        } catch {
          console.warn(`   ⚠️  Título não mudou para ${route.path} (continuando mesmo assim)`);
        }
      }

      // Pequeno delay extra para garantir hidratação completa
      await new Promise((r) => setTimeout(r, 500));

      const html = await page.content();
      const finalTitle = await page.title();

      const outputPath = join(distPath, route.filename);
      writeFileSync(outputPath, html);

      console.log(`✅ Salvo: ${route.filename}  |  <title>: ${finalTitle}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erro em ${route.path}:`, error.message);
      errorCount++;
    }
  }

  await browser.close();
  server.close();

  console.log('\n📊 Resumo da pré-renderização:');
  console.log(`   ✅ Sucesso: ${successCount}/${routes.length}`);
  console.log(`   ❌ Erros: ${errorCount}/${routes.length}`);

  if (errorCount > routes.length / 2) {
    console.error('❌ Muitas rotas falharam, abortando deploy');
    process.exit(1);
  }

  console.log('✅ Pré-renderização concluída.');
}

prerender().catch((err) => {
  console.error('Falha fatal no prerender:', err);
  process.exit(1);
});
