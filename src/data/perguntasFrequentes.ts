// Perguntas Frequentes sobre Forex - hub SEO cauda longa
// Cada pergunta é uma busca real de alto volume no Google

export type FAQItem = { q: string; a: string; slug: string };
export type FAQCategory = { category: string; items: FAQItem[] };

export const faqData: FAQCategory[] = [
  {
    category: "Começando no Forex",
    items: [
      { slug: "o-que-e-forex", q: "O que é Forex e como funciona?", a: "Forex (Foreign Exchange) é o mercado global de câmbio onde moedas são negociadas em pares. Com liquidez diária superior a US$ 7,5 trilhões, funciona 24 horas por dia, 5 dias por semana, e é acessado por bancos, instituições e traders individuais via corretoras online." },
      { slug: "como-comecar-forex-brasil", q: "Como começar a operar Forex no Brasil?", a: "Escolha uma corretora regulamentada (FCA, ASIC, CySEC), abra uma conta demo, estude análise técnica e fundamentalista, deposite capital que possa perder, comece com micro lotes e use gestão de risco rigorosa (máximo 1-2% por operação)." },
      { slug: "forex-e-legalizado-brasil", q: "Forex é legalizado no Brasil?", a: "Operar Forex via corretoras estrangeiras regulamentadas é legal para pessoa física. A CVM apenas restringe intermediários locais oferecerem forex sem autorização. Declare o dinheiro enviado no IRPF e ganhos como renda variável." },
      { slug: "quanto-preciso-para-comecar-forex", q: "Quanto dinheiro preciso para começar no Forex?", a: "É possível começar com US$ 10 em corretoras como Exness ou XM em contas cent. Para operar profissionalmente, o recomendado é US$ 500 a US$ 2.000, permitindo diversificação e stops sensatos." },
      { slug: "conta-demo-forex", q: "Vale a pena usar conta demo Forex?", a: "Sim. Toda corretora séria oferece conta demo gratuita com dinheiro virtual. Use por 30 a 90 dias para testar estratégias, dominar a plataforma e criar disciplina emocional antes de operar real." },
      { slug: "melhor-corretora-forex-iniciante", q: "Qual a melhor corretora Forex para iniciantes em 2026?", a: "Para iniciantes brasileiros, XM Group, Exness e FBS destacam-se por depósitos mínimos baixos, conta cent, suporte em português e regulação internacional (FCA, CySEC, ASIC)." },
    ],
  },
  {
    category: "Corretoras e Regulação",
    items: [
      { slug: "corretora-forex-regulamentada", q: "O que significa corretora Forex regulamentada?", a: "É uma corretora autorizada por órgão regulador nacional (FCA no Reino Unido, ASIC na Austrália, CySEC em Chipre, CFTC nos EUA). A regulação obriga fundos segregados, capital mínimo, auditoria e proteção ao investidor via fundos de compensação." },
      { slug: "diferenca-market-maker-ecn", q: "Qual a diferença entre Market Maker e ECN?", a: "Market Maker atua como contraparte do trader (spread fixo, sem comissão, possível conflito de interesse). ECN conecta o trader diretamente à liquidez interbancária (spread flutuante baixo, comissão por lote, execução transparente)." },
      { slug: "ic-markets-e-confiavel", q: "IC Markets é confiável?", a: "Sim. IC Markets é regulamentada por ASIC (Austrália), CySEC (Chipre) e FSA (Seychelles), com fundos segregados e execução ECN de baixíssima latência. Referência mundial em scalping e HFT desde 2007." },
      { slug: "xm-e-confiavel", q: "A corretora XM é confiável?", a: "Sim. XM Group opera sob CySEC, ASIC, DFSA e FSC, com mais de 15 anos de operação e milhões de clientes ativos. Oferece proteção contra saldo negativo e depósito mínimo de US$ 5." },
      { slug: "exness-e-confiavel", q: "Exness é uma corretora segura?", a: "Sim. Exness é regulamentada por FCA, CySEC, FSA e CBCS, com auditoria mensal pela KPMG e mais de 700 mil clientes ativos. Destaca-se por saques instantâneos e alavancagem ilimitada em contas Pro." },
      { slug: "avatrade-e-confiavel", q: "AvaTrade é confiável em 2026?", a: "Sim. AvaTrade é regulamentada em 9 jurisdições incluindo Central Bank of Ireland, ASIC, FSCA, FSA Japão e ADGM. Opera desde 2006 com mais de 400 mil clientes globais." },
      { slug: "melhores-corretoras-forex-2026", q: "Quais são as melhores corretoras Forex de 2026?", a: "Top 5 globais em 2026: IC Markets, Pepperstone, Exness, XM Group e AvaTrade. Critérios: regulação múltipla, spreads ECN abaixo de 0,3 pip, execução em milissegundos e proteção contra saldo negativo." },
      { slug: "corretora-forex-com-pix", q: "Existe corretora Forex que aceita PIX?", a: "Sim. Exness, XM, HFM, Octafx e FBS aceitam PIX para depósitos e saques em real brasileiro, com processamento em minutos e taxas zero na maioria dos casos." },
    ],
  },
  {
    category: "Estratégias e Análise",
    items: [
      { slug: "melhor-estrategia-forex-iniciante", q: "Qual a melhor estratégia Forex para iniciantes?", a: "Estratégia de médias móveis com confirmação por RSI é a mais didática. Compre quando EMA 20 cruza acima EMA 50 e RSI está entre 40-60; venda no cruzamento oposto. Sempre use stop-loss de 30-50 pips." },
      { slug: "como-fazer-scalping", q: "Como fazer scalping no Forex?", a: "Scalping requer corretora ECN com spread abaixo de 0,3 pip, VPS de baixa latência, timeframe M1 ou M5, e disciplina para fechar posições em segundos. Foque em EUR/USD nos horários de Londres e NY." },
      { slug: "estrategia-price-action", q: "O que é Price Action e como usar?", a: "Price Action é análise pura do movimento do preço via candles, suportes, resistências e padrões, sem indicadores. Estude pin bars, engulfing, inside bars e opere apenas em zonas-chave." },
      { slug: "smart-money-concepts", q: "O que são Smart Money Concepts (SMC)?", a: "SMC é metodologia que identifica movimentos institucionais via liquidity pools, order blocks, fair value gaps e break of structure. Popularizada por ICT (Inner Circle Trader)." },
      { slug: "melhores-indicadores-forex", q: "Quais os melhores indicadores Forex?", a: "Os cinco essenciais: EMA (tendência), RSI (força), MACD (momentum), Bandas de Bollinger (volatilidade) e Fibonacci (retrações). Combine no máximo 2-3 para evitar sinais conflitantes." },
      { slug: "como-usar-fibonacci-forex", q: "Como usar Fibonacci no Forex?", a: "Trace do topo ao fundo de um impulso. Níveis 38,2%, 50% e 61,8% são zonas comuns de retração. Opere reversões nesses níveis com stop além do 78,6% e alvo na extensão 161,8%." },
      { slug: "elliott-waves-forex", q: "Como aplicar Ondas de Elliott no Forex?", a: "Identifique cinco ondas de impulso (1, 2, 3, 4, 5) seguidas de três corretivas (A, B, C). A onda 3 costuma ser a mais longa. Combine com Fibonacci para projetar alvos precisos." },
    ],
  },
  {
    category: "Tecnologia e Plataformas",
    items: [
      { slug: "diferenca-mt4-mt5", q: "Qual a diferença entre MT4 e MT5?", a: "MT5 tem mais timeframes (21 vs 9), suporta ações e futuros além de forex, book de ofertas nativo, MQL5 mais poderoso e é 64-bit. MT4 continua sendo padrão para EAs legados e scalping puro." },
      { slug: "melhor-vps-forex", q: "Qual o melhor VPS para Forex em 2026?", a: "Beeks Financial, ForexVPS e Chocoping são as principais, com latência inferior a 1ms para servidores de Nova York, Londres e Tóquio. Custo médio de US$ 25 a US$ 60/mês." },
      { slug: "como-programar-expert-advisor", q: "Como programar um Expert Advisor?", a: "Aprenda MQL4 (MT4) ou MQL5 (MT5). Estude no MetaEditor, faça backtest no Strategy Tester e valide em conta demo por 3 meses antes de operar real. Cursos gratuitos disponíveis em MQL5.com." },
      { slug: "trading-view-e-melhor-que-metatrader", q: "TradingView é melhor que MetaTrader?", a: "TradingView é superior para análise gráfica e Pine Script; MetaTrader é imbatível para execução automatizada via EAs. O ideal é usar TradingView para análise e MT4/MT5 para execução." },
      { slug: "api-forex", q: "Como usar API de corretora Forex?", a: "Corretoras como IC Markets, Interactive Brokers e cTrader oferecem APIs REST e FIX 4.4 para automação profissional em Python, C++ e Java. Ideal para hedge funds e trading algorítmico." },
    ],
  },
  {
    category: "Gestão de Risco e Psicologia",
    items: [
      { slug: "gestao-risco-forex", q: "Como fazer gestão de risco no Forex?", a: "Nunca arrisque mais que 1-2% do capital por operação. Use sempre stop-loss, mantenha risk/reward mínimo de 1:2, diversifique pares e evite operar durante notícias de alto impacto." },
      { slug: "psicologia-trader", q: "Como controlar as emoções no trading?", a: "Crie plano detalhado, siga checklist antes de cada operação, escreva diário de trades, defina limites diários de perda (3-5%) e faça pausa após 3 stops consecutivos. Meditação e sono adequado são fundamentais." },
      { slug: "quanto-alavancagem-usar", q: "Qual alavancagem ideal para o Forex?", a: "Para iniciantes, 1:30 a 1:100 é seguro. Traders experientes podem usar 1:200 a 1:500 com gestão rigorosa. Acima de 1:500 aumenta risco de stop-out sem melhoria significativa no potencial." },
    ],
  },
  {
    category: "Tributação e Legal",
    items: [
      { slug: "como-declarar-forex-imposto-renda", q: "Como declarar Forex no Imposto de Renda?", a: "Ganhos em Forex são renda variável tributada em 15% (day trade: 20%). Declare mensalmente via DARF código 6015 e informe saldos em corretora estrangeira acima de US$ 100.000 na declaração anual (ficha Bens no Exterior)." },
      { slug: "declarar-conta-forex-exterior", q: "Preciso declarar conta Forex no exterior?", a: "Sim, se o saldo total em contas fora do Brasil ultrapassar US$ 100.000 em 31/12 é obrigatória a Declaração de Capitais Brasileiros no Exterior (DCBE) ao Banco Central e ficha Bens e Direitos no IR." },
    ],
  },
];

export const allFAQs = faqData.flatMap((c) => c.items);
