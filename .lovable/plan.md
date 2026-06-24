## Objetivo

Refrescar para junho/2026 as informações-chave (spreads, depósito mín., alavancagem, ano de fundação/anos ativos, rating, regulações ativas) das 20 corretoras listadas em `/corretoras`, garantir que todas as 20 tenham página de detalhe funcional e atualizar todos os pontos do site que reflitam datas/dados defasados.

## Situação atual encontrada

- **Listagem `/corretoras`**: 20 corretoras.
- **Página de detalhe `/corretoras/:slug`**: só 14 corretoras possuem dados — as outras 6 caem em fallback para IG Group (bug silencioso).
- **Faltam dados**: `plus500`, `roboforex`, `hotforex-hfm`, `alpari`, `city-index`, `deriv`.
- Todos os `lastUpdate` estão em "Novembro de 2025" e `yearsActive` calculado para 2025.
- Ranking da home (`BrokerRanking.tsx`) e tabela `brokersComparisonData.ts` repetem os mesmos dados-chave e precisam ser sincronizados.

## Pesquisa

Para cada corretora, faço busca web focada em: spread mínimo EUR/USD, depósito mínimo da conta padrão, alavancagem máxima (varejo e profissional), número de licenças regulatórias ativas, plataformas oficiais e ano de fundação. Faço em paralelo, em lotes de 5 corretoras, via subagentes — total 4 lotes.

## Arquivos que serão modificados

1. **`src/pages/CorretoraDetalhe.tsx`** (principal)
   - Atualizar `lastUpdate: "Junho de 2026"` nas 14 existentes.
   - Recalcular `yearsActive` (founded → 2026).
   - Atualizar `rating`, `spread` e `depósito mínimo` nas `tradingConditions`, `metrics` (clientes ativos, lucro anual mais recente quando disponível) com base nos resultados da pesquisa.
   - **Adicionar 6 novas entradas completas** (`brokerData`, `regulations`, `globalPresence`, `metrics`, `platforms`, `instruments`, `tradingConditions`, `paymentMethods`) para plus500, roboforex, hotforex-hfm, alpari, city-index, deriv.

2. **`src/pages/Corretoras.tsx`** (listagem)
   - Sincronizar `regulation`, `spread`, `minDeposit`, `rating` com os números atualizados.

3. **`src/components/BrokerRanking.tsx`** (home — top 5)
   - Mesmas atualizações para IC Markets, Pepperstone, Exness, XM, FXTM.

4. **`src/data/brokersComparisonData.ts`** (comparador)
   - Refrescar todos os campos numéricos das corretoras presentes.

5. **Ajustes globais do site**
   - `index.html` / SEO: confirmar que descrições genéricas não citem ano fixo desatualizado.
   - Datas em textos institucionais (rodapé já usa `new Date().getFullYear()`, OK).
   - Quaisquer `2024/2025` em copys das páginas `/tecnologia`, `/estrategias`, `/seguranca`, `/traders`, blog — varredura via ripgrep e atualização pontual.

## O que NÃO será alterado (fora do escopo confirmado)

- Reescrita de copies longas, prós/contras, perguntas frequentes ou SEO title/meta por corretora (você marcou apenas "Dados-chave").
- Trocas de layout, design ou imagens.

## Resultado esperado

- 20 páginas `/corretoras/<slug>` funcionando com dados de junho/2026.
- Cards de listagem, ranking da home e comparador exibindo os mesmos números coerentes.
- Nenhuma referência defasada a 2024/2025 sobrando nos textos institucionais.

Posso seguir com a pesquisa e aplicar as atualizações?
