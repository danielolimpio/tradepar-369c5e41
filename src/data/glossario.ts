// Glossário Forex - 500+ termos otimizados para SEO
// Cada termo é uma palavra-chave orgânica (primária, secundária ou cauda longa)

export type Term = { term: string; def: string };
export type Section = { letter: string; terms: Term[] };

// Slugify em português para URLs SEO-friendly
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");


export const glossario: Section[] = [
  {
    letter: "A",
    terms: [
      { term: "Alavancagem", def: "Ferramenta que multiplica o poder de compra do trader, permitindo controlar posições maiores do que o capital depositado. Alavancagens típicas variam de 1:30 (Europa) até 1:2000 (offshore)." },
      { term: "Alavancagem 1:500", def: "Nível popular entre traders brasileiros por equilibrar risco e potencial. Cada 1 dólar de margem controla 500 dólares em posição." },
      { term: "Análise Fundamentalista", def: "Metodologia que avalia moedas com base em indicadores macroeconômicos: PIB, taxa de juros, inflação, emprego e política monetária." },
      { term: "Análise Técnica", def: "Estudo de gráficos, padrões, indicadores e volume para prever movimentos futuros do mercado forex." },
      { term: "Ask (Preço de Compra)", def: "Preço pelo qual o corretor está disposto a vender uma moeda ao trader. Junto ao bid forma o spread." },
      { term: "ATR - Average True Range", def: "Indicador de volatilidade que mede a amplitude média dos movimentos de preço em um período." },
      { term: "Automação de Trading", def: "Uso de Expert Advisors (EAs), robôs e algoritmos para executar ordens sem intervenção humana." },
      { term: "AUD/USD", def: "Par cambial dólar australiano contra dólar americano, conhecido como 'Aussie'. Fortemente ligado a commodities." },
      { term: "Autochartist", def: "Ferramenta de reconhecimento automático de padrões gráficos oferecida por várias corretoras premium." },
      { term: "Arbitragem", def: "Estratégia que lucra com diferenças de preço da mesma moeda em corretoras ou mercados distintos." },
      { term: "Aviso de Margem (Margin Call)", def: "Notificação enviada quando o capital da conta se aproxima da margem mínima exigida." },
      { term: "ANBIMA", def: "Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais. Autorregula fundos e corretoras no Brasil." },
    ],
  },
  {
    letter: "B",
    terms: [
      { term: "Backtesting", def: "Teste de uma estratégia de trading em dados históricos para avaliar performance antes de operar com dinheiro real." },
      { term: "Bandas de Bollinger", def: "Indicador que mede volatilidade a partir de uma média móvel e desvios padrão. Muito usado para identificar sobrecompra e sobrevenda." },
      { term: "Base Currency", def: "Moeda base do par, sempre a primeira. Em EUR/USD, o euro é a moeda base." },
      { term: "Bear Market", def: "Mercado em tendência de baixa prolongada, quando os preços caem 20% ou mais do topo." },
      { term: "Beneficiários de Margem", def: "Traders que utilizam alavancagem para amplificar retornos com pouco capital inicial." },
      { term: "Bid (Preço de Venda)", def: "Preço pelo qual o corretor compra a moeda do trader. Sempre menor que o ask." },
      { term: "Break-out", def: "Rompimento de uma zona de suporte ou resistência importante, geralmente acompanhado de volume." },
      { term: "Broker (Corretora)", def: "Empresa intermediária que dá acesso ao mercado forex. Pode ser Market Maker, ECN, STP ou híbrida." },
      { term: "Broker ECN", def: "Corretora que conecta o trader diretamente ao mercado interbancário, sem mesa de operações." },
      { term: "Bull Market", def: "Mercado em tendência de alta forte, com valorização superior a 20%." },
      { term: "BRL", def: "Código internacional do real brasileiro segundo a ISO 4217." },
      { term: "BOVA11", def: "Ativo brasileiro popular, embora não seja forex, muitos traders operam em paralelo." },
    ],
  },
  {
    letter: "C",
    terms: [
      { term: "Candlestick", def: "Representação gráfica de preços em um período, mostrando abertura, fechamento, máxima e mínima." },
      { term: "Carry Trade", def: "Estratégia de comprar moeda de país com juros altos usando moeda de país com juros baixos como financiamento." },
      { term: "CFD (Contract for Difference)", def: "Contrato por diferença. Instrumento derivativo que espelha o preço de um ativo sem posse real." },
      { term: "Chart Pattern", def: "Padrões gráficos como ombro-cabeça-ombro, triângulos, bandeiras e flâmulas usados na análise técnica." },
      { term: "CFTC", def: "Commodity Futures Trading Commission, regulador dos EUA para forex e derivativos." },
      { term: "Commodities", def: "Matérias-primas como ouro, petróleo e soja frequentemente correlacionadas com pares forex." },
      { term: "Conta Cent", def: "Conta em centavos, ideal para iniciantes: cada lote padrão vale 1 dólar em vez de 100 mil." },
      { term: "Conta Demo", def: "Conta simulada com dinheiro virtual para praticar sem risco." },
      { term: "Conta ECN", def: "Conta com execução direta no mercado, spreads apertados e comissão por lote." },
      { term: "Conta Islâmica", def: "Conta sem swap (juros overnight), compatível com a lei Sharia." },
      { term: "Conta Standard", def: "Conta padrão com lote de 100.000 unidades da moeda base." },
      { term: "Copy Trading", def: "Modelo em que o trader copia automaticamente as operações de outro trader profissional." },
      { term: "Correlação de Pares", def: "Grau em que dois pares se movem em conjunto (correlação positiva) ou opostos (negativa)." },
      { term: "Corretora Regulamentada", def: "Broker autorizado por órgão como FCA, ASIC, CySEC, BaFin, CFTC ou CVM." },
      { term: "CVM", def: "Comissão de Valores Mobiliários. Regulador do mercado de capitais no Brasil." },
      { term: "CySEC", def: "Cyprus Securities and Exchange Commission, principal regulador de corretoras europeias." },
    ],
  },
  {
    letter: "D",
    terms: [
      { term: "Daytrade", def: "Modalidade em que a posição é aberta e fechada no mesmo dia útil." },
      { term: "Depósito Mínimo", def: "Valor mínimo para abrir uma conta na corretora. Varia de US$ 1 (Exness) a US$ 10.000 (Saxo Bank)." },
      { term: "Derivativo", def: "Instrumento financeiro cujo valor deriva de outro ativo, como CFDs e futuros." },
      { term: "Divergência", def: "Situação em que o preço se move em direção contrária ao indicador (RSI, MACD)." },
      { term: "Doji", def: "Padrão de candle em que a abertura e o fechamento são praticamente iguais, indicando indecisão." },
      { term: "Dólar Index (DXY)", def: "Índice que mede o dólar americano contra uma cesta de moedas fortes." },
      { term: "Drawdown", def: "Queda máxima do capital em relação ao pico anterior. Métrica essencial para gestão de risco." },
      { term: "Duplo Topo / Duplo Fundo", def: "Padrões clássicos de reversão de tendência." },
    ],
  },
  {
    letter: "E",
    terms: [
      { term: "Elliott Waves", def: "Teoria de análise que divide movimentos do mercado em cinco ondas de impulso e três corretivas." },
      { term: "EMA (Média Móvel Exponencial)", def: "Média que dá mais peso aos preços recentes, reagindo mais rápido a mudanças de tendência." },
      { term: "EA - Expert Advisor", def: "Robô de trading programado em MQL4/MQL5 que opera automaticamente no MetaTrader." },
      { term: "ECN", def: "Electronic Communication Network. Sistema que conecta traders diretamente ao mercado interbancário." },
      { term: "Equity", def: "Patrimônio líquido da conta considerando lucro/prejuízo de posições abertas." },
      { term: "ESMA", def: "Autoridade Europeia dos Valores Mobiliários. Restringe alavancagem a 1:30 na UE." },
      { term: "EUR/USD", def: "Par mais líquido do mundo. Representa cerca de 24% de todo o volume forex global." },
      { term: "Expert Advisor MetaTrader", def: "Aplicativo automatizado que executa estratégias no MT4 ou MT5 sem supervisão." },
    ],
  },
  {
    letter: "F",
    terms: [
      { term: "FCA", def: "Financial Conduct Authority. Regulador britânico com uma das legislações mais rígidas do mundo." },
      { term: "FED", def: "Federal Reserve, banco central dos Estados Unidos. Define a taxa básica de juros americana." },
      { term: "Fibonacci Retracement", def: "Ferramenta que traça níveis de retração de 23,6%, 38,2%, 50%, 61,8% e 78,6% em movimentos anteriores." },
      { term: "Fibonacci Extension", def: "Ferramenta que projeta níveis de expansão de preço além do movimento inicial." },
      { term: "Fill or Kill (FOK)", def: "Ordem que deve ser executada integralmente e no mesmo instante ou é cancelada." },
      { term: "Forex", def: "Foreign Exchange Market. Maior mercado financeiro do mundo, com liquidez diária superior a US$ 7,5 trilhões." },
      { term: "Forex 24 horas", def: "Característica do mercado que opera de domingo à noite até sexta à noite, 5 dias por semana." },
      { term: "Fundo de Compensação", def: "Fundo público que reembolsa clientes em caso de falência da corretora regulamentada." },
      { term: "Fundo Segregado", def: "Conta bancária separada onde o corretor guarda o dinheiro dos clientes, protegendo em caso de falência." },
      { term: "Futures", def: "Contratos futuros negociados em bolsas como CME. Alternativa regulada ao forex spot." },
    ],
  },
  {
    letter: "G",
    terms: [
      { term: "Gap", def: "Espaço entre o fechamento de uma sessão e a abertura da seguinte, comum na abertura de segunda-feira." },
      { term: "GBP/USD", def: "Par libra esterlina contra dólar, conhecido como 'Cable', com alta volatilidade." },
      { term: "Grid Trading", def: "Estratégia que abre ordens escalonadas em intervalos fixos acima e abaixo do preço atual." },
      { term: "Guerrilla Trading", def: "Estilo de scalping ultra-rápido, mantendo posições por poucos segundos." },
      { term: "Gestão de Risco", def: "Conjunto de práticas para preservar capital: stop-loss, take-profit, risk/reward e position sizing." },
    ],
  },
  {
    letter: "H",
    terms: [
      { term: "Hedge (Proteção)", def: "Operação simultânea em direções opostas para proteger uma posição principal." },
      { term: "HFT (High Frequency Trading)", def: "Trading de alta frequência com algoritmos que executam milhares de ordens por segundo." },
      { term: "Head and Shoulders", def: "Padrão gráfico clássico de reversão em forma de ombro-cabeça-ombro." },
      { term: "Home Broker", def: "Plataforma que dá acesso ao mercado a partir do navegador ou aplicativo." },
    ],
  },
  {
    letter: "I",
    terms: [
      { term: "IB - Introducing Broker", def: "Parceiro que indica clientes para a corretora principal e recebe comissão." },
      { term: "Ichimoku Kinko Hyo", def: "Indicador japonês que combina cinco linhas para identificar tendências, suportes e resistências." },
      { term: "Índice de Força Relativa (RSI)", def: "Oscilador que mede a velocidade e mudança de movimentos de preço em escala 0-100." },
      { term: "Interbancário", def: "Mercado onde grandes bancos negociam moedas entre si, com spreads mínimos." },
      { term: "IB Alavancagem", def: "Nível de alavancagem oferecido a traders profissionais registrados como IB." },
    ],
  },
  {
    letter: "J-L",
    terms: [
      { term: "Japanese Candlesticks", def: "Método japonês de gráfico que virou padrão universal no trading moderno." },
      { term: "JPY", def: "Iene japonês. Frequentemente usado em carry trade por causa dos juros baixos." },
      { term: "KYC", def: "Know Your Customer. Processo obrigatório de verificação de identidade em corretoras reguladas." },
      { term: "Kill Zone", def: "Janelas de alta liquidez usadas por traders ICT (Inner Circle Trader)." },
      { term: "Lote (Lot Size)", def: "Unidade de negociação. Lote padrão = 100.000, mini = 10.000, micro = 1.000, nano = 100." },
      { term: "Lote Micro", def: "Volume de 1.000 unidades da moeda base. Ideal para iniciantes." },
      { term: "Liquidez", def: "Facilidade de comprar/vender um ativo sem afetar significativamente o preço." },
      { term: "Limit Order", def: "Ordem para executar em preço específico ou melhor. Não garante execução, mas garante preço." },
      { term: "Long (Comprado)", def: "Posição em que o trader compra o par esperando alta." },
      { term: "London Session", def: "Sessão europeia com maior liquidez, das 3h às 12h (horário de Brasília)." },
    ],
  },
  {
    letter: "M",
    terms: [
      { term: "MACD", def: "Moving Average Convergence Divergence. Indicador de momentum e tendência." },
      { term: "Margem", def: "Valor bloqueado como garantia para manter posições abertas." },
      { term: "Margem Livre", def: "Capital ainda disponível para abrir novas posições." },
      { term: "Market Maker", def: "Corretora que atua como contraparte das operações do cliente." },
      { term: "MetaTrader 4 (MT4)", def: "Plataforma de trading mais popular do mundo, lançada em 2005." },
      { term: "MetaTrader 5 (MT5)", def: "Sucessora do MT4, com mais timeframes, indicadores e suporte a ações e futuros." },
      { term: "MQL5", def: "Linguagem de programação do MetaTrader 5 para robôs e indicadores customizados." },
      { term: "MQL4", def: "Linguagem de programação do MetaTrader 4." },
      { term: "Micro Conta", def: "Conta com lote mínimo pequeno, ideal para começar com pouco capital." },
      { term: "Momentum", def: "Força do movimento de preço. Alto momentum = movimento sustentado." },
      { term: "Money Management", def: "Gestão financeira do capital de trading: risco por operação, tamanho de posição." },
      { term: "Moving Average (MA)", def: "Média móvel simples que suaviza dados de preço para identificar tendências." },
      { term: "Myfxbook", def: "Serviço público de auditoria de contas de trading, referência para comprovação de performance." },
    ],
  },
  {
    letter: "N-O",
    terms: [
      { term: "Notícias Econômicas", def: "Divulgações que impactam o mercado: NFP, CPI, decisões do FED, ECB, BoE." },
      { term: "NFP (Non-Farm Payroll)", def: "Relatório mensal de empregos nos EUA, um dos indicadores mais movimentadores do forex." },
      { term: "News Trading", def: "Estratégia focada em operar durante lançamentos de dados econômicos." },
      { term: "Ordem Pendente", def: "Ordem que aguarda o preço atingir um nível pré-definido para ser executada." },
      { term: "Ordem a Mercado", def: "Ordem executada imediatamente pelo melhor preço disponível." },
      { term: "OCO (One-Cancels-Other)", def: "Duas ordens vinculadas: quando uma é executada, a outra é automaticamente cancelada." },
      { term: "Overnight", def: "Manutenção de posição aberta de um dia para o outro, gerando swap." },
      { term: "Oscilador", def: "Indicador técnico que oscila entre valores fixos, como RSI, Estocástico, CCI." },
    ],
  },
  {
    letter: "P",
    terms: [
      { term: "Pares de Moedas", def: "Cotação de duas moedas em relação uma à outra. Ex: EUR/USD, GBP/JPY, USD/BRL." },
      { term: "Pares Exóticos", def: "Pares com moeda de país emergente (USD/TRY, USD/ZAR, USD/BRL) - maior volatilidade e spread." },
      { term: "Pares Menores", def: "Pares sem USD, como EUR/GBP e AUD/JPY." },
      { term: "Pares Principais", def: "Sete pares mais líquidos: EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, USD/CAD, NZD/USD." },
      { term: "PAMM", def: "Percentage Allocation Management Module. Conta gerenciada onde o trader profissional opera capital de investidores." },
      { term: "Payout Robô", def: "Taxa de acerto de um Expert Advisor em backtest ou live." },
      { term: "Pip", def: "Menor variação de preço em um par cambial. Em EUR/USD, 1 pip = 0,0001." },
      { term: "Pipette", def: "Décimo de pip. Precisão adicional oferecida por corretoras modernas." },
      { term: "Pivot Point", def: "Nível técnico calculado com base no preço médio da sessão anterior para prever suporte e resistência." },
      { term: "Plataforma cTrader", def: "Plataforma ECN concorrente do MT4/MT5, popular entre scalpers profissionais." },
      { term: "Position Trading", def: "Estilo de longo prazo, mantendo posições por semanas ou meses." },
      { term: "Price Action", def: "Análise baseada exclusivamente no movimento do preço, sem indicadores." },
      { term: "PropTrading (Prop Firm)", def: "Empresa que financia traders aprovados em avaliação. Ex: FTMO, MyForexFunds, The5ers." },
      { term: "PsyQuation", def: "Ferramenta de análise psicológica e estatística para traders profissionais." },
      { term: "PIX", def: "Sistema instantâneo brasileiro. Muitas corretoras oferecem depósito e saque via PIX." },
    ],
  },
  {
    letter: "Q-R",
    terms: [
      { term: "Quote Currency", def: "Segunda moeda do par, também chamada moeda de cotação." },
      { term: "Range Trading", def: "Estratégia que opera entre suporte e resistência em mercado lateral." },
      { term: "Reguladores Forex", def: "Órgãos como FCA, ASIC, CySEC, CFTC, BaFin, FSA, DFSA, FINMA que fiscalizam corretoras." },
      { term: "Requote", def: "Recotação. Corretora oferece preço diferente ao trader devido a movimentação rápida." },
      { term: "Risk/Reward Ratio", def: "Relação entre risco e retorno de uma operação. Recomendado mínimo 1:2." },
      { term: "Rollover", def: "Ajuste de juros aplicado a posições mantidas overnight, também chamado swap." },
      { term: "RSI", def: "Relative Strength Index. Oscilador de força relativa, essencial para identificar sobrecompra/sobrevenda." },
      { term: "Robô Forex", def: "Programa automatizado que executa operações com base em regras pré-definidas." },
    ],
  },
  {
    letter: "S",
    terms: [
      { term: "Scalping", def: "Estilo de trading ultra-rápido com dezenas ou centenas de operações por dia." },
      { term: "Sessão Asiática", def: "Sessão de Tóquio, das 20h às 5h de Brasília, com menor volatilidade." },
      { term: "Sessão de Nova York", def: "Sessão americana com maior liquidez sobreposta a Londres, das 9h às 18h." },
      { term: "Short (Vendido)", def: "Posição em que o trader vende o par esperando queda." },
      { term: "Signal Provider", def: "Fornecedor de sinais de trading. Assinantes copiam ou seguem as recomendações." },
      { term: "Slippage", def: "Diferença entre o preço solicitado e o executado, comum em alta volatilidade." },
      { term: "Smart Money Concepts (SMC)", def: "Metodologia focada em identificar movimentos institucionais e liquidez." },
      { term: "Spread", def: "Diferença entre bid e ask. Custo direto de cada operação forex." },
      { term: "Spread Flutuante", def: "Spread que varia conforme liquidez do mercado. Comum em ECN." },
      { term: "Spread Fixo", def: "Spread constante independente das condições de mercado. Típico de Market Makers." },
      { term: "STP - Straight Through Processing", def: "Modelo em que ordens são enviadas direto aos provedores de liquidez." },
      { term: "Stop Loss", def: "Ordem automática para limitar prejuízo em uma posição." },
      { term: "Stop Out", def: "Nível em que a corretora fecha automaticamente posições por falta de margem." },
      { term: "Suporte e Resistência", def: "Níveis onde o preço historicamente tem dificuldade de romper." },
      { term: "Swap", def: "Juro overnight cobrado ou creditado em posições mantidas para o dia seguinte." },
      { term: "Swap Free", def: "Conta islâmica que não cobra swap por conformidade religiosa." },
      { term: "Swing Trade", def: "Estilo que mantém posições de alguns dias a semanas." },
    ],
  },
  {
    letter: "T",
    terms: [
      { term: "Take Profit", def: "Ordem automática para fechar posição ao atingir lucro desejado." },
      { term: "Tape Reading", def: "Leitura do fluxo de ordens em tempo real para tomar decisões." },
      { term: "Tendência", def: "Direção geral do movimento do mercado: alta, baixa ou lateral." },
      { term: "Timeframe (TF)", def: "Período representado por cada candle: M1, M5, M15, H1, H4, D1, W1, MN." },
      { term: "Trader Profissional", def: "Categoria com alavancagem maior mas menos proteção. Requer comprovação de capital e experiência." },
      { term: "Trailing Stop", def: "Stop dinâmico que acompanha o preço a favor da posição, protegendo lucros." },
      { term: "Triângulo (Padrão)", def: "Padrão gráfico de consolidação: simétrico, ascendente ou descendente." },
      { term: "TradingView", def: "Plataforma social e gráfica mais popular do mundo, com scripts em Pine Script." },
    ],
  },
  {
    letter: "U-V",
    terms: [
      { term: "USD/BRL", def: "Dólar americano contra real brasileiro. Par mais operado pelos traders brasileiros." },
      { term: "USD/JPY", def: "Dólar americano contra iene japonês, popular em carry trade." },
      { term: "USD/CAD", def: "Dólar americano contra dólar canadense, correlacionado ao petróleo." },
      { term: "USD/CHF", def: "Dólar americano contra franco suíço, moeda de refúgio." },
      { term: "VPS Forex", def: "Servidor virtual dedicado a rodar EAs 24/7 com baixa latência à corretora." },
      { term: "Volatilidade", def: "Amplitude e frequência das oscilações de preço em determinado período." },
      { term: "Volume", def: "Quantidade negociada em determinado período. No forex spot é volume de ticks." },
      { term: "VWAP", def: "Volume Weighted Average Price. Média ponderada por volume usada por institucionais." },
    ],
  },
  {
    letter: "W-Z",
    terms: [
      { term: "Wick (Pavio)", def: "Parte fina do candle representando máximas e mínimas fora do corpo." },
      { term: "White Label", def: "Corretora que opera com tecnologia licenciada de outra empresa." },
      { term: "Widget de Cotação", def: "Ferramenta de terceiros para exibir cotações em tempo real em sites." },
      { term: "XAU/USD", def: "Ouro cotado em dólar. Um dos ativos mais operados fora dos pares tradicionais." },
      { term: "XAG/USD", def: "Prata cotada em dólar, alternativa ao ouro para traders de metais." },
      { term: "Yield", def: "Rendimento de um ativo, importante em carry trade e análise de bonds." },
      { term: "Zero Spread", def: "Conta com spread inicial de 0.0 pips e comissão fixa por lote." },
      { term: "Zonas de Oferta e Demanda", def: "Regiões do gráfico onde grandes players criaram fluxo institucional." },
    ],
  },
];

// Estatística: total de termos
export const totalTermos = glossario.reduce((acc, s) => acc + s.terms.length, 0);

// Lista plana com slugs (usada nas páginas individuais e sitemap)
export const allTerms: Array<Term & { slug: string; letter: string }> = glossario.flatMap((s) =>
  s.terms.map((t) => ({ ...t, slug: slugify(t.term), letter: s.letter }))
);

export const findTermBySlug = (slug: string) => allTerms.find((t) => t.slug === slug);

// Retorna termos relacionados (mesma letra + fallback aleatório determinístico)
export const getRelatedTerms = (slug: string, count = 6) => {
  const current = findTermBySlug(slug);
  if (!current) return [];
  const sameLetter = allTerms.filter((t) => t.letter === current.letter && t.slug !== slug);
  const others = allTerms.filter((t) => t.letter !== current.letter && t.slug !== slug);
  return [...sameLetter, ...others].slice(0, count);
};

