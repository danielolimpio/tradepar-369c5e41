import { Shield, Globe, TrendingUp, Users, Clock, DollarSign, CreditCard, HeadphonesIcon, Award, ChevronRight, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const CorretoraDetalhe = () => {
  const { brokerSlug } = useParams<{ brokerSlug: string }>();
  const currentSlug = brokerSlug || "ig-group";

  // Database de corretoras
  const brokersDatabase: Record<string, any> = {
    "ig-group": {
      brokerData: {
        name: "IG Group",
        fullName: "IG Group Holdings plc",
        founded: "1974",
        headquarters: "Londres, Reino Unido",
        ceo: "June Felix",
        stockCode: "LSE: IGG",
        website: "https://www.ig.com",
        email: "support@ig.com",
        languages: ["Português", "Inglês", "Espanhol", "Alemão", "Francês", "+15 idiomas"],
        rating: 4.8,
        verified: true,
        lastUpdate: "Novembro de 2025"
      },
      regulations: [
        { name: "FCA", country: "Reino Unido", license: "113942", status: "Ativa", compensation: "£85.000" },
        { name: "ASIC", country: "Austrália", license: "220440", status: "Ativa", compensation: "Não aplicável" },
        { name: "BaFin", country: "Alemanha", license: "148759", status: "Ativa", compensation: "€100.000" },
        { name: "MAS", country: "Cingapura", license: "CMS100896", status: "Ativa", compensation: "Não aplicável" },
      ],
      globalPresence: {
        offices: 15,
        countriesServed: 170,
        mainOffices: [
          "Londres (Sede Principal)",
          "Chicago (EUA)",
          "Cingapura",
          "Sydney (Austrália)",
          "Joanesburgo (África do Sul)"
        ]
      },
      metrics: {
        activeClients: "350.000+",
        monthlyVolume: "$2,8 trilhões USD",
        marketCap: "£3,2 bilhões",
        annualProfit: "£467 milhões (2024)",
        monthlyTraffic: "8,5 milhões de visitas",
        yearsActive: "51 anos"
      }
    },
    "saxo-bank": {
      brokerData: {
        name: "Saxo Bank",
        fullName: "Saxo Bank A/S",
        founded: "1992",
        headquarters: "Copenhague, Dinamarca",
        ceo: "Kim Fournais",
        stockCode: "Empresa Privada",
        website: "https://www.saxobank.com",
        email: "support@saxobank.com",
        languages: ["Português", "Inglês", "Dinamarquês", "Alemão", "Francês", "+20 idiomas"],
        rating: 4.7,
        verified: true,
        lastUpdate: "Novembro de 2025"
      },
      regulations: [
        { name: "FSA", country: "Dinamarca", license: "8171", status: "Ativa", compensation: "€20.000" },
        { name: "FCA", country: "Reino Unido", license: "551422", status: "Ativa", compensation: "£85.000" },
        { name: "ASIC", country: "Austrália", license: "398628", status: "Ativa", compensation: "Não aplicável" },
        { name: "MAS", country: "Cingapura", license: "CMS100747", status: "Ativa", compensation: "Não aplicável" },
      ],
      globalPresence: {
        offices: 15,
        countriesServed: 180,
        mainOffices: [
          "Copenhague (Sede Principal)",
          "Londres (Reino Unido)",
          "Paris (França)",
          "Singapura",
          "Zurique (Suíça)",
          "Hong Kong",
          "Tóquio (Japão)"
        ]
      },
      metrics: {
        activeClients: "1,2 milhões+",
        monthlyVolume: "$60 bilhões USD",
        marketCap: "Empresa Privada",
        annualProfit: "€320 milhões (2024)",
        monthlyTraffic: "4,5 milhões de visitas",
        yearsActive: "33 anos"
      }
    },
    "interactive-brokers": {
      brokerData: {
        name: "Interactive Brokers",
        fullName: "Interactive Brokers Group, Inc.",
        founded: "1978",
        headquarters: "Greenwich, Connecticut, EUA",
        ceo: "Thomas Peterffy (fundador e CEO desde 1978)",
        stockCode: "NASDAQ: IBKR",
        website: "https://www.interactivebrokers.com",
        email: "help@interactivebrokers.com",
        languages: ["Português", "Inglês", "Espanhol", "Alemão", "Francês", "Russo", "Chinês", "Japonês", "+12 idiomas"],
        rating: 4.6,
        verified: true,
        lastUpdate: "Novembro de 2025"
      },
      regulations: [
        { name: "SEC", country: "Estados Unidos", license: "8-47257", status: "Ativa", compensation: "$500.000" },
        { name: "FINRA", country: "Estados Unidos", license: "BD-36418", status: "Ativa", compensation: "$500.000" },
        { name: "FCA", country: "Reino Unido", license: "208159", status: "Ativa", compensation: "£85.000" },
        { name: "ASIC", country: "Austrália", license: "453554", status: "Ativa", compensation: "Não aplicável" },
      ],
      globalPresence: {
        offices: 20,
        countriesServed: 200,
        mainOffices: [
          "Greenwich, CT (Sede Principal)",
          "Chicago (EUA)",
          "Londres (Reino Unido)",
          "Hong Kong",
          "Singapura",
          "Sydney (Austrália)",
          "Frankfurt (Alemanha)"
        ]
      },
      metrics: {
        activeClients: "2,8 milhões+",
        monthlyVolume: "$1,2 trilhão USD (dia)",
        marketCap: "$50 bilhões USD",
        annualProfit: "$1,8 bilhão USD (2024)",
        monthlyTraffic: "8 milhões de visitas",
        yearsActive: "47 anos"
      }
    },
    "cmc-markets": {
      brokerData: {
        name: "CMC Markets",
        fullName: "CMC Markets plc",
        founded: "1989",
        headquarters: "Londres, Reino Unido",
        ceo: "Joe Healey",
        stockCode: "LSE: CMCX",
        website: "https://www.cmcmarkets.com",
        email: "support@cmcmarkets.com",
        languages: ["Português", "Inglês", "Alemão", "Francês", "Espanhol", "Russo", "Chinês", "Japonês", "Árabe", "+6 idiomas"],
        rating: 4.5,
        verified: true,
        lastUpdate: "Novembro de 2025"
      },
      regulations: [
        { name: "FCA", country: "Reino Unido", license: "173730", status: "Ativa", compensation: "£85.000" },
        { name: "ASIC", country: "Austrália", license: "238054", status: "Ativa", compensation: "Não aplicável" },
        { name: "BaFin", country: "Alemanha", license: "154814", status: "Ativa", compensation: "€100.000" },
        { name: "MAS", country: "Cingapura", license: "CMS100133", status: "Ativa", compensation: "Não aplicável" },
      ],
      globalPresence: {
        offices: 14,
        countriesServed: 175,
        mainOffices: [
          "Londres (Sede Principal)",
          "Sydney (Austrália)",
          "Frankfurt (Alemanha)",
          "Singapura",
          "Auckland (Nova Zelândia)",
          "Nova York (EUA)",
          "Hong Kong"
        ]
      },
      metrics: {
        activeClients: "180.000+",
        monthlyVolume: "$40 bilhões USD",
        marketCap: "£1,2 bilhões",
        annualProfit: "£285 milhões (2024)",
        monthlyTraffic: "4,2 milhões de visitas",
        yearsActive: "36 anos"
      }
    },
    "pepperstone": {
      brokerData: {
        name: "Pepperstone",
        fullName: "Pepperstone Group Limited",
        founded: "2010",
        headquarters: "Melbourne, Austrália",
        ceo: "Tamas Szabo",
        stockCode: "Empresa Privada",
        website: "https://www.pepperstone.com",
        email: "support@pepperstone.com",
        languages: ["Português", "Inglês", "Espanhol", "Alemão", "Francês", "+12 idiomas"],
        rating: 4.7,
        verified: true,
        lastUpdate: "Novembro de 2025"
      },
      regulations: [
        { name: "ASIC", country: "Austrália", license: "414530", status: "Ativa", compensation: "Não aplicável" },
        { name: "FCA", country: "Reino Unido", license: "684312", status: "Ativa", compensation: "£85.000" },
        { name: "CySEC", country: "Chipre", license: "388/20", status: "Ativa", compensation: "€20.000" },
        { name: "BaFin", country: "Alemanha", license: "151148", status: "Ativa", compensation: "€100.000" },
      ],
      globalPresence: {
        offices: 8,
        countriesServed: 170,
        mainOffices: [
          "Melbourne (Sede Principal)",
          "Londres (Reino Unido)",
          "Limassol (Chipre)",
          "Dubai (EAU)",
          "Nairóbi (Quênia)"
        ]
      },
      metrics: {
        activeClients: "400.000+",
        monthlyVolume: "$3,2 trilhões USD",
        marketCap: "Empresa Privada",
        annualProfit: "Não divulgado",
        monthlyTraffic: "7,5 milhões de visitas",
        yearsActive: "15 anos"
      }
    }
  };

  // Obter dados da corretora atual
  const currentBroker = brokersDatabase[currentSlug] || brokersDatabase["ig-group"];
  const brokerData = currentBroker.brokerData;
  let regulations = currentBroker.regulations;
  let globalPresence = currentBroker.globalPresence;
  let metrics = currentBroker.metrics;

  // Dados específicos de plataformas, instrumentos, condições por corretora
  const platformsDatabase: Record<string, any> = {
    "ig-group": {
      platforms: [
        { name: "Plataforma Própria IG", available: true },
        { name: "MetaTrader 4", available: true },
        { name: "ProRealTime", available: true },
        { name: "L2 Dealer", available: true },
        { name: "TradingView", available: true }
      ],
      instruments: [
        { type: "Forex", count: "80+ pares" },
        { type: "Ações", count: "17.000+" },
        { type: "Índices", count: "90+" },
        { type: "Commodities", count: "50+" },
        { type: "Criptomoedas", count: "15+" },
        { type: "ETFs", count: "3.000+" }
      ],
      tradingConditions: [
        { label: "Depósito Mínimo", value: "$0 (sem mínimo)" },
        { label: "Spread EUR/USD", value: "A partir de 0,6 pips" },
        { label: "Alavancagem Máxima", value: "1:30 (varejo) / 1:200 (profissional)" },
        { label: "Comissão", value: "A partir de $0 (depende do tipo de conta)" },
        { label: "Swap Overnight", value: "Variável (ver site)" },
        { label: "Lote Mínimo", value: "0,01 lotes (micro)" },
        { label: "Expert Advisors", value: "Sim (MT4)" },
        { label: "Scalping", value: "Permitido" }
      ],
      paymentMethods: [
        { method: "Cartão de Crédito/Débito", time: "Instantâneo", fees: "Gratuito", limits: "$250 - sem limite" },
        { method: "Transferência Bancária", time: "1-3 dias úteis", fees: "Gratuito", limits: "Sem limite" },
        { method: "PayPal", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" },
        { method: "Skrill", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" },
        { method: "Neteller", time: "Instantâneo", fees: "Gratuito", limits: "$100 - $10.000" }
      ]
    },
    "saxo-bank": {
      platforms: [
        { name: "SaxoTraderGO", available: true },
        { name: "SaxoTraderPRO", available: true },
        { name: "SaxoInvestor", available: true },
        { name: "TradingView", available: true },
        { name: "API Trading", available: true }
      ],
      instruments: [
        { type: "Forex", count: "185+ pares" },
        { type: "Ações", count: "19.000+" },
        { type: "Índices", count: "100+" },
        { type: "Commodities", count: "60+" },
        { type: "Criptomoedas", count: "20+" },
        { type: "Títulos", count: "3.500+" }
      ],
      tradingConditions: [
        { label: "Depósito Mínimo", value: "$2.000 (conta Classic)" },
        { label: "Spread EUR/USD", value: "A partir de 0,9 pips" },
        { label: "Alavancagem Máxima", value: "1:30 (varejo) / 1:200 (profissional)" },
        { label: "Comissão", value: "Varia por ativo. Para ações: a partir de $0,005 por ação. Para forex: sem comissão — apenas spread." },
        { label: "Swap Overnight", value: "Variável (competitivo)" },
        { label: "Lote Mínimo", value: "0,01 lotes (micro)" },
        { label: "Expert Advisors", value: "Sim — via OpenAPI" },
        { label: "Scalping", value: "Sim (sem restrição)" }
      ],
      paymentMethods: [
        { method: "Cartão de Crédito/Débito", time: "Instantâneo", fees: "$0", limits: "$2.000 - sem limite" },
        { method: "Transferência Bancária", time: "1-3 dias", fees: "$0", limits: "Sem limite" },
        { method: "Transferência Internacional (SWIFT)", time: "3-5 dias", fees: "$0", limits: "Sem limite" }
      ]
    },
    "interactive-brokers": {
      platforms: [
        { name: "TWS (Trader Workstation) — desktop", available: true },
        { name: "IBKR Mobile — iOS/Android", available: true },
        { name: "Client Portal — web", available: true },
        { name: "API Trading — Python, Java, C#", available: true },
        { name: "Integração com TradingView", available: true }
      ],
      instruments: [
        { type: "Forex", count: "105+ pares" },
        { type: "Ações", count: "150+ mercados globais" },
        { type: "Índices", count: "100+" },
        { type: "Futuros", count: "350+" },
        { type: "Opções", count: "1,2 milhões+" },
        { type: "Títulos", count: "1 milhão+" }
      ],
      tradingConditions: [
        { label: "Depósito Mínimo", value: "$0" },
        { label: "Spread EUR/USD", value: "A partir de 0,2 pips" },
        { label: "Alavancagem Máxima", value: "1:50 (EUA), 1:200 (UE), 1:30 (Austrália)" },
        { label: "Comissão", value: "A partir de $0,0005 por ação ou $0,20 por contrato" },
        { label: "Swap Overnight", value: "Sim (varia por ativo e região)" },
        { label: "Tamanho Mínimo", value: "Lotes fracionários para ações; 0,01 lote forex" },
        { label: "EA/Robôs", value: "Sim — via APIs (não MT4/MT5)" },
        { label: "Scalping", value: "Sim (sem restrição)" }
      ],
      paymentMethods: [
        { method: "Transferência ACH (EUA)", time: "1–2 dias", fees: "$0", limits: "Sem limite" },
        { method: "Transferência Bancária (SWIFT)", time: "3–5 dias", fees: "$0 (acima de $100); $10 (abaixo)", limits: "Sem limite" },
        { method: "Cheque (EUA)", time: "5–7 dias", fees: "$0", limits: "Sem limite" },
        { method: "Cartões (limitado)", time: "Imediato", fees: "Variável", limits: "$10.000/mês" }
      ]
    },
    "cmc-markets": {
      platforms: [
        { name: "Next Generation", available: true },
        { name: "MetaTrader 4", available: true },
        { name: "CMC Invest", available: true },
        { name: "TradingView", available: true },
        { name: "API Trading", available: true }
      ],
      instruments: [
        { type: "Forex", count: "330+ pares" },
        { type: "Ações", count: "12.000+" },
        { type: "Índices", count: "100+" },
        { type: "Commodities", count: "110+" },
        { type: "Criptomoedas", count: "25+" },
        { type: "Treasuries", count: "45+" }
      ],
      tradingConditions: [
        { label: "Depósito Mínimo", value: "$0 (sem mínimo)" },
        { label: "Spread EUR/USD", value: "A partir de 0,7 pips" },
        { label: "Alavancagem Máxima", value: "1:30 (varejo) / 1:500 (profissional)" },
        { label: "Comissão", value: "$0 em CFDs (spread incluso)" },
        { label: "Swap Overnight", value: "Variável (competitivo)" },
        { label: "Lote Mínimo", value: "0,01 lotes (micro)" },
        { label: "Expert Advisors", value: "Sim (MT4)" },
        { label: "Scalping", value: "Permitido" }
      ],
      paymentMethods: [
        { method: "Cartão de Crédito/Débito", time: "Instantâneo", fees: "Gratuito", limits: "$250 - sem limite" },
        { method: "Transferência Bancária", time: "1-3 dias úteis", fees: "Gratuito", limits: "Sem limite" },
        { method: "PayPal", time: "Instantâneo", fees: "Gratuito", limits: "$250 - $5.000" },
        { method: "ApplePay", time: "Instantâneo", fees: "Gratuito", limits: "$250 - $5.000" }
      ]
    },
    "pepperstone": {
      platforms: [
        { name: "MetaTrader 4", available: true },
        { name: "MetaTrader 5", available: true },
        { name: "cTrader", available: true },
        { name: "TradingView", available: true },
        { name: "API Trading", available: true }
      ],
      instruments: [
        { type: "Forex", count: "60+ pares" },
        { type: "Ações CFDs", count: "1.300+" },
        { type: "Índices", count: "25+" },
        { type: "Commodities", count: "22+" },
        { type: "Criptomoedas", count: "20+" },
        { type: "ETFs", count: "100+" }
      ],
      tradingConditions: [
        { label: "Depósito Mínimo", value: "$200" },
        { label: "Spread EUR/USD", value: "A partir de 0,6 pips (Standard)" },
        { label: "Alavancagem Máxima", value: "1:30 (varejo) / 1:500 (profissional)" },
        { label: "Comissão", value: "$0 (Standard) / $3,5 por lote (Razor)" },
        { label: "Swap Overnight", value: "Variável (ver site)" },
        { label: "Lote Mínimo", value: "0,01 lotes (micro)" },
        { label: "Expert Advisors", value: "Sim (MT4/MT5)" },
        { label: "Scalping", value: "Permitido" }
      ],
      paymentMethods: [
        { method: "Cartão de Crédito/Débito", time: "Instantâneo", fees: "Gratuito", limits: "$200 - sem limite" },
        { method: "Transferência Bancária", time: "1-3 dias úteis", fees: "Gratuito", limits: "Sem limite" },
        { method: "PayPal", time: "Instantâneo", fees: "Gratuito", limits: "$200 - $10.000" },
        { method: "Skrill", time: "Instantâneo", fees: "Gratuito", limits: "$200 - $10.000" },
        { method: "Neteller", time: "Instantâneo", fees: "Gratuito", limits: "$200 - $10.000" }
      ]
    }
  };

  const currentPlatformData = platformsDatabase[currentSlug] || platformsDatabase["ig-group"];
  const platforms = currentPlatformData.platforms;
  const instruments = currentPlatformData.instruments;
  const tradingConditions = currentPlatformData.tradingConditions;
  const paymentMethods = currentPlatformData.paymentMethods;

  const competitors = [
    { name: "IG Group", spread: "0,6", minDeposit: "$0", regulation: "FCA, ASIC, BaFin", rating: "4.8" },
    { name: "Saxo Bank", spread: "0,9", minDeposit: "$2.000", regulation: "FSA, FCA, ASIC", rating: "4.7" },
    { name: "Interactive Brokers", spread: "0,2", minDeposit: "$0", regulation: "SEC, FCA, ASIC", rating: "4.6" },
    { name: "CMC Markets", spread: "0,7", minDeposit: "$0", regulation: "FCA, ASIC", rating: "4.5" },
    { name: "Pepperstone", spread: "0,6", minDeposit: "$200", regulation: "FCA, ASIC, CySEC", rating: "4.7" }
  ];

  // Database de timelines e FAQs por corretora
  const timelineDatabase: Record<string, any> = {
    "ig-group": [
      { year: "1974", event: "Fundação da IG Index por Stuart Wheeler" },
      { year: "2000", event: "Lançamento da primeira plataforma online de trading" },
      { year: "2003", event: "Expansão internacional: abertura de escritório em Chicago" },
      { year: "2008", event: "Aquisição da corretora americana FuturesBetting" },
      { year: "2016", event: "Listagem na Bolsa de Londres (LSE: IGG)" },
      { year: "2019", event: "Aquisição da plataforma de investimentos Tastytrade" },
      { year: "2023", event: "Lançamento de trading de criptomoedas em 14 países" },
      { year: "2025", event: "Mais de 350.000 clientes ativos em 170+ países" }
    ],
    "saxo-bank": [
      { year: "1992", event: "Fundação em Copenhague por Lars Seier Christensen e Kim Fournais" },
      { year: "1998", event: "Lançamento da primeira plataforma de trading multi-ativo online" },
      { year: "2006", event: "Expansão para mercados asiáticos com escritório em Singapura" },
      { year: "2008", event: "Abertura de escritórios em Londres e Paris" },
      { year: "2012", event: "Lançamento do SaxoTraderGO, plataforma de próxima geração" },
      { year: "2017", event: "Parceria estratégica com Geely Group da China" },
      { year: "2021", event: "Lançamento de trading de criptomoedas e ETFs temáticos" },
      { year: "2025", event: "Mais de 1,2 milhões de clientes em 180+ países" }
    ],
    "interactive-brokers": [
      { year: "1978", event: "Fundação como Timber Hill por Thomas Peterffy" },
      { year: "1990", event: "Desenvolvimento de sistema automatizado de negociação de opções" },
      { year: "1993", event: "Lançamento da primeira plataforma eletrônica de trading (TWS)" },
      { year: "2001", event: "Expansão internacional com escritórios na Europa e Ásia" },
      { year: "2007", event: "IPO na NASDAQ (IBKR)" },
      { year: "2015", event: "Lançamento do IBKR Lite com comissões zero" },
      { year: "2021", event: "Adição de trading de criptomoedas" },
      { year: "2025", event: "Mais de 2,8 milhões de clientes e $430 bilhões em ativos sob custódia" }
    ],
    "cmc-markets": [
      { year: "1989", event: "Fundação em Londres por Peter Cruddas como CMC (Currency Management Corporation)" },
      { year: "1996", event: "Lançamento da primeira plataforma de trading online para CFDs" },
      { year: "2000", event: "Expansão internacional: escritórios na Austrália e Alemanha" },
      { year: "2005", event: "Lançamento da plataforma Next Generation" },
      { year: "2016", event: "IPO na Bolsa de Londres (LSE: CMCX)" },
      { year: "2019", event: "Lançamento do CMC Invest para investimento em ações reais" },
      { year: "2022", event: "Integração com TradingView e expansão de criptomoedas" },
      { year: "2025", event: "Mais de 180.000 clientes ativos globalmente" }
    ],
    "pepperstone": [
      { year: "2010", event: "Fundação em Melbourne, Austrália, por Owen Kerr e Joe Davenport" },
      { year: "2012", event: "Licenciamento pela ASIC e expansão para mercados europeus" },
      { year: "2015", event: "Lançamento da plataforma cTrader para traders profissionais" },
      { year: "2017", event: "Abertura de escritório em Londres e licenciamento pela FCA" },
      { year: "2020", event: "Licenciamento pela CySEC e BaFin na Europa" },
      { year: "2021", event: "Lançamento de trading de criptomoedas e ações CFDs" },
      { year: "2024", event: "Parceria estratégica com TradingView" },
      { year: "2025", event: "Mais de 400.000 clientes ativos em 170+ países" }
    ]
  };

  const faqsDatabase: Record<string, any> = {
    "ig-group": [
      {
        question: "A IG Group é segura?",
        answer: "Sim, a IG Group é uma das corretoras mais seguras do mundo. Está regulada pela FCA (Reino Unido), ASIC (Austrália), BaFin (Alemanha) e outras autoridades importantes. A empresa é listada na Bolsa de Londres desde 2016 e oferece segregação de fundos, garantindo que o dinheiro dos clientes seja mantido separado dos fundos operacionais da empresa."
      },
      {
        question: "Posso abrir conta no Brasil?",
        answer: "Sim, a IG Group aceita clientes brasileiros. O processo de abertura de conta é 100% online e pode ser feito em português. É necessário ter mais de 18 anos e fornecer documentos de identificação válidos (RG ou CNH e comprovante de residência)."
      },
      {
        question: "Como faço para sacar meus lucros?",
        answer: "Os saques podem ser solicitados a qualquer momento através da área de cliente. A IG Group processa saques para a mesma conta/método usado no depósito. Saques por cartão e carteiras eletrônicas são processados em até 2 horas úteis, enquanto transferências bancárias levam 1-3 dias úteis. Não há taxas de saque."
      },
      {
        question: "A IG Group oferece conta demo?",
        answer: "Sim, a IG Group oferece conta demo gratuita com $20.000 virtuais, válida por tempo ilimitado. A conta demo replica todas as funcionalidades da conta real, permitindo que você teste estratégias sem risco antes de investir dinheiro real."
      },
      {
        question: "Qual é o depósito mínimo?",
        answer: "A IG Group não exige depósito mínimo para abrir conta. No entanto, para começar a negociar, é recomendado ter pelo menos $250-$500 para gerenciar adequadamente o risco e aproveitar as oportunidades do mercado."
      },
      {
        question: "Existe risco de perder mais do que eu investi?",
        answer: "Para contas de varejo na Europa e Austrália, a IG Group oferece proteção de saldo negativo, garantindo que você não possa perder mais do que o saldo da sua conta. No entanto, é importante lembrar que 75% dos clientes perdem dinheiro ao negociar CFDs. Negocie com responsabilidade."
      }
    ],
    "saxo-bank": [
      {
        question: "A Saxo Bank é segura?",
        answer: "Sim. É regulamentada por autoridades de nível 1 (FSA, FCA, ASIC) e mantém fundos segregados. Além disso, oferece proteção de saldo negativo para clientes europeus e australianos."
      },
      {
        question: "Qual é o depósito mínimo na Saxo Bank?",
        answer: "O depósito mínimo é de $2.000 para contas Classic. Para contas Professional, o depósito mínimo é de $10.000."
      },
      {
        question: "Brasileiros podem abrir conta na Saxo Bank?",
        answer: "Sim. Brasileiros podem abrir conta internacional diretamente no site oficial. Não há escritório local, mas o suporte em português está disponível via e-mail e telefone."
      },
      {
        question: "Quais plataformas de trading a Saxo Bank oferece?",
        answer: "SaxoTraderGO, SaxoTraderPRO, SaxoInvestor e TradingView (integração)."
      },
      {
        question: "A Saxo Bank oferece conta demo?",
        answer: "Sim. A conta demo gratuita permite testar todas as funcionalidades da plataforma SaxoTraderGO por 30 dias."
      },
      {
        question: "Quais são as taxas e comissões?",
        answer: "Comissões variáveis por ativo. Para ações, a partir de $0,005 por ação. Para forex, sem comissão — apenas spread."
      }
    ],
    "interactive-brokers": [
      {
        question: "A Interactive Brokers é segura?",
        answer: "Sim. É regulamentada por autoridades de nível 1 (SEC, FINRA, FCA, ASIC) e mantém fundos segregados. Além disso, oferece proteção de saldo negativo para clientes europeus e australianos. Com mais de $430 bilhões em ativos de clientes e 47 anos de história, oferece compensação de até $500.000 por conta nos EUA (incluindo $250.000 em dinheiro via SIPC)."
      },
      {
        question: "Brasileiros podem investir pela Interactive Brokers?",
        answer: "Sim. Brasileiros podem abrir conta internacional diretamente no site oficial. Não há escritório local, mas o suporte em português está disponível via e-mail e telefone. É necessário ter CPF, documentos válidos e conhecimento sobre investimentos internacionais e declaração no Imposto de Renda."
      },
      {
        question: "Quais mercados posso acessar?",
        answer: "Mais de 150 mercados globais, incluindo ações, forex, futuros, opções, títulos e criptomoedas. Você pode negociar nas principais bolsas mundiais (NYSE, NASDAQ, LSE, Euronext, TSE, HKEX, etc). É a maior variedade de mercados entre todas as corretoras."
      },
      {
        question: "Como funcionam as comissões?",
        answer: "Comissões a partir de $0,0005 por ação ou $0,20 por contrato de futuro. Para forex, sem comissão — apenas spread. A Interactive Brokers oferece dois planos: IBKR Lite (sem comissões para ações e ETFs dos EUA) e IBKR Pro (comissões ultra baixas com acesso total a todos os mercados)."
      },
      {
        question: "Existe conta demo?",
        answer: "Sim. A conta demo gratuita permite testar todas as funcionalidades da plataforma TWS por 30 dias. A conta demo (Paper Trading) oferece $1.000.000 virtuais, com dados de mercado em tempo real e acesso a todos os instrumentos."
      }
    ],
    "cmc-markets": [
      {
        question: "A CMC Markets é segura?",
        answer: "Sim. É regulamentada por autoridades de nível 1 (FCA, ASIC, BaFin) e mantém fundos segregados. Além disso, oferece proteção de saldo negativo para clientes europeus e australianos."
      },
      {
        question: "Qual é o depósito mínimo na CMC Markets?",
        answer: "O depósito mínimo é de $0 — você pode começar a negociar com qualquer valor."
      },
      {
        question: "Brasileiros podem abrir conta na CMC Markets?",
        answer: "Sim. Brasileiros podem abrir conta internacional diretamente no site oficial. Não há escritório local, mas o suporte em português está disponível via e-mail e telefone."
      },
      {
        question: "Quais plataformas de trading a CMC Markets oferece?",
        answer: "Next Generation, MetaTrader 4, CMC Invest e TradingView (integração)."
      },
      {
        question: "A CMC Markets oferece conta demo?",
        answer: "Sim. A conta demo gratuita permite testar todas as funcionalidades da plataforma Next Generation por 30 dias."
      },
      {
        question: "Quais são as taxas e comissões?",
        answer: "Para CFDs, não há comissão — apenas spread. Para ações reais (via CMC Invest), a comissão é a partir de $0,005 por ação."
      }
    ],
    "pepperstone": [
      {
        question: "A Pepperstone é confiável e segura?",
        answer: "Sim, a Pepperstone é altamente confiável. É regulada pela ASIC (Austrália), FCA (Reino Unido), CySEC (Chipre) e BaFin (Alemanha). Com mais de 15 anos de operação e 400.000 clientes ativos, oferece segregação de fundos em bancos tier-1 e compensação de até £85.000 (Reino Unido) e €20.000 (Chipre). É uma das corretoras forex mais populares globalmente."
      },
      {
        question: "Qual é o depósito mínimo?",
        answer: "O depósito mínimo na Pepperstone é de $200 USD (ou equivalente em outras moedas). Este valor é acessível para traders iniciantes, mas é recomendado ter pelo menos $500-$1.000 para gerenciar adequadamente o risco e aproveitar as oportunidades do mercado forex e CFDs."
      },
      {
        question: "Brasileiros podem abrir conta?",
        answer: "Sim, a Pepperstone aceita clientes brasileiros através de sua entidade europeia (Chipre) ou australiana. O processo de abertura é 100% online, disponível em português. É necessário ter mais de 18 anos, CPF, documento de identificação válido (RG ou CNH) e comprovante de residência recente."
      },
      {
        question: "Qual a diferença entre conta Standard e Razor?",
        answer: "A conta Standard tem spreads a partir de 1,0 pip no EUR/USD e não cobra comissão. A conta Razor oferece spreads crus (raw) a partir de 0,0 pips, mas cobra comissão de $3,50 por lote negociado (ida e volta). A Razor é ideal para traders de volume médio/alto e scalpers. Ambas oferecem as mesmas plataformas e instrumentos."
      },
      {
        question: "Existe conta demo?",
        answer: "Sim, a Pepperstone oferece conta demo gratuita com $50.000 virtuais, sem limite de tempo. A conta demo está disponível para MT4, MT5 e cTrader, replicando todas as funcionalidades da conta real, incluindo spreads reais, dados de mercado e execução. É perfeita para testar estratégias sem risco."
      },
      {
        question: "Quais plataformas de trading estão disponíveis?",
        answer: "A Pepperstone oferece MetaTrader 4 (MT4), MetaTrader 5 (MT5), cTrader e integração com TradingView. Todas as plataformas estão disponíveis em versões desktop, web e mobile. A escolha depende do seu estilo: MT4/MT5 para EAs e análise técnica avançada, cTrader para execução institucional e interface moderna."
      }
    ]
  };

  const timeline = timelineDatabase[currentSlug] || timelineDatabase["ig-group"];
  const faqs = faqsDatabase[currentSlug] || faqsDatabase["ig-group"];

  return (
    <>
      <Helmet>
        <title>{`${brokerData.name} — Perfil Completo 2025 | Spreads, Depósito Mínimo e Avaliação | TradePar`}</title>
        <meta
          name="description"
          content={`Descubra tudo sobre ${brokerData.name} em 2025: regulamentação, spreads, depósito mínimo, segurança e avaliações reais. Guia completo para traders brasileiros.`}
        />
        <meta
          name="keywords"
          content={`${brokerData.name}, corretora forex, trading, spreads, depósito mínimo, regulamentação, avaliação ${brokerData.name}, melhor corretora forex`}
        />
        <link
          rel="canonical"
          href={`https://tradepar.com.br/corretoras/${brokerSlug || "ig-group"}`}
        />

        <meta
          property="og:title"
          content={`${brokerData.name} — Perfil Completo 2025 | Análise Detalhada`}
        />
        <meta
          property="og:description"
          content={`Análise completa da ${brokerData.name}: fundada em ${brokerData.founded}, regulada por autoridades globais e com condições competitivas.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://tradepar.com.br/corretoras/${brokerSlug || "ig-group"}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "FinancialService",
              name: brokerData.name,
              description: `Corretora de Forex e CFDs regulamentada internacionalmente: ${brokerData.fullName}`,
              url: brokerData.website,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: brokerData.rating.toString(),
              bestRating: "5",
            },
            author: {
              "@type": "Organization",
              name: "TradePar",
            },
            datePublished: "2025-11-20",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                {brokerData.verified && <CheckCircle className="w-4 h-4 mr-1" />}
                Corretora Verificada
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {brokerData.name}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Perfil Completo — Tudo sobre regulamentação, spreads, depósito mínimo e avaliações
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="outline" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Avaliação: {brokerData.rating}/5
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Fundada: {brokerData.founded}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  {globalPresence.countriesServed}+ Países
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground">
                Atualizado em {brokerData.lastUpdate}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-bull">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Abrir Conta Gratuitamente
                </Button>
                <Button size="lg" variant="outline">
                  Conta Demo Gratuita
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-4 bg-destructive/10 border-y border-destructive/20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-start gap-3 text-sm">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Aviso de Risco:</strong> CFDs são instrumentos complexos e apresentam alto risco de perda rápida devido à alavancagem. <strong className="text-destructive">75% das contas de investidores de varejo perdem dinheiro</strong> ao negociar CFDs com este provedor. Considere se compreende como funcionam os CFDs e se pode correr o risco de perder seu dinheiro.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-16 space-y-16">
          
          {/* Basic Information */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Informações Básicas</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Nome Oficial</p>
                      <p className="text-lg font-semibold">{brokerData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data de Fundação</p>
                      <p className="text-lg font-semibold">{brokerData.founded}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sede Principal</p>
                      <p className="text-lg font-semibold">{brokerData.headquarters}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CEO Atual</p>
                      <p className="text-lg font-semibold">{brokerData.ceo}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Código de Bolsa</p>
                      <p className="text-lg font-semibold">{brokerData.stockCode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Site Oficial</p>
                      <a href={brokerData.website} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline flex items-center gap-2">
                        {brokerData.website.replace('https://', '')}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail de Suporte</p>
                      <p className="text-lg font-semibold">{brokerData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Idiomas Suportados</p>
                      <p className="text-lg font-semibold">{brokerData.languages.slice(0, 3).join(", ")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Regulation & Security */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Regulamentação & Segurança</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Múltiplas Regulamentações de Nível 1</h3>
                      <p className="text-muted-foreground text-sm">
                        A {brokerData.name} é regulamentada pelas autoridades financeiras mais rigorosas do mundo, garantindo os mais altos padrões de proteção ao investidor.
                      </p>
                    </div>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Regulador</TableHead>
                        <TableHead>País/Região</TableHead>
                        <TableHead>Licença</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Compensação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {regulations.map((reg) => (
                        <TableRow key={reg.license}>
                          <TableCell className="font-semibold">{reg.name}</TableCell>
                          <TableCell>{reg.country}</TableCell>
                          <TableCell className="font-mono text-sm">{reg.license}</TableCell>
                          <TableCell>
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              {reg.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{reg.compensation}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Segregação de Fundos
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Todo o dinheiro dos clientes é mantido em contas bancárias segregadas, separado dos fundos operacionais da empresa.
                      </p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Proteção de Saldo Negativo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Disponível para clientes de varejo na Europa e Austrália, garantindo que você não possa perder mais do que investiu.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Global Presence */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Presença Global</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Escritórios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{globalPresence.offices}</p>
                  <p className="text-sm text-muted-foreground mt-2">Escritórios físicos em mercados principais</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Países Atendidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{globalPresence.countriesServed}+</p>
                  <p className="text-sm text-muted-foreground mt-2">Clientes em todos os continentes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Anos no Mercado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{metrics.yearsActive}</p>
                  <p className="text-sm text-muted-foreground mt-2">Décadas de experiência e confiança</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Principais Escritórios</CardTitle>
                <CardDescription>Centros de operação e atendimento ao redor do mundo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {globalPresence.mainOffices.map((office, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{office}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Business Metrics */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Métricas Empresariais (2025)</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.activeClients}</p>
                  <p className="text-sm text-muted-foreground mt-2">Clientes Ativos</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.monthlyVolume}</p>
                  <p className="text-sm text-muted-foreground mt-2">Volume Mensal</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.marketCap}</p>
                  <p className="text-sm text-muted-foreground mt-2">Valor de Mercado</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.annualProfit}</p>
                  <p className="text-sm text-muted-foreground mt-2">Lucro Anual</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.monthlyTraffic}</p>
                  <p className="text-sm text-muted-foreground mt-2">Tráfego Mensal</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{metrics.yearsActive}</p>
                  <p className="text-sm text-muted-foreground mt-2">Anos de Mercado</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Platforms & Products */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Plataformas & Produtos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plataformas de Trading</CardTitle>
                  <CardDescription>Múltiplas opções para todos os estilos de trading</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="font-medium">{platform.name}</span>
                        {platform.available && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Disponível
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  {currentSlug === "ig-group" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Copy Trading:</strong> Sim, através da plataforma própria IG
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong className="text-foreground">Auto Trading:</strong> Suporte a Expert Advisors (EAs) no MT4
                      </p>
                    </div>
                  )}
                  {currentSlug === "saxo-bank" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Copy Trading:</strong> Não disponível
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong className="text-foreground">Auto Trading:</strong> Suporte via OpenAPI para algoritmos personalizados
                      </p>
                    </div>
                  )}
                  {currentSlug === "interactive-brokers" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Copy Trading:</strong> Não disponível
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong className="text-foreground">Auto Trading:</strong> Suporte completo via API (Python, Java, C++)
                      </p>
                    </div>
                  )}
                  {currentSlug === "cmc-markets" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Copy Trading:</strong> Não disponível
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong className="text-foreground">Auto Trading:</strong> Suporte a Expert Advisors (EAs) no MT4
                      </p>
                    </div>
                  )}
                  {currentSlug === "pepperstone" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Copy Trading:</strong> Disponível via TradingView e cTrader Copy
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong className="text-foreground">Auto Trading:</strong> Suporte a Expert Advisors em MT4, MT5 e cTrader
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instrumentos Disponíveis</CardTitle>
                  <CardDescription>Ampla variedade de instrumentos para diversificar seu portfólio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {instruments.map((instrument, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <span className="font-medium">{instrument.type}</span>
                        <span className="text-primary font-semibold">{instrument.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm font-semibold mb-2">Tipos de Conta:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Standard</Badge>
                      <Badge variant="outline">Professional</Badge>
                      <Badge variant="outline">Islamic (Swap-Free)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Trading Conditions */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Condições de Negociação</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {tradingConditions.map((condition, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{condition.label}</p>
                        <p className="text-lg font-semibold mt-1">{condition.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Payment Methods */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Métodos de Depósito e Retirada</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Método</TableHead>
                      <TableHead>Tempo Médio</TableHead>
                      <TableHead>Taxas</TableHead>
                      <TableHead>Limites</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentMethods.map((method, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-primary" />
                            <span className="font-medium">{method.method}</span>
                          </div>
                        </TableCell>
                        <TableCell>{method.time}</TableCell>
                        <TableCell>
                          <Badge variant={method.fees === "Gratuito" ? "default" : "outline"} className={method.fees === "Gratuito" ? "bg-primary/20 text-primary border-primary/30" : ""}>
                            {method.fees}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{method.limits}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Nota Importante:</strong> Os saques devem ser feitos para a mesma conta/método usado no depósito inicial, conforme regulamentações anti-lavagem de dinheiro (AML). Não há taxas de processamento cobradas pela {brokerData.name}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Customer Support */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Suporte ao Cliente</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Chat ao Vivo</p>
                      <p className="text-sm text-muted-foreground">Disponível 24/5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-sm text-muted-foreground">+44 20 7896 0011 (Reino Unido)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-sm text-muted-foreground">{brokerData.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos Educacionais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Centro educacional (cursos gratuitos)</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Webinars semanais ao vivo</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Centro de análise de mercado</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>E-books e guias em PDF</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Reviews & Reputation */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Avaliações & Reputação</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.5/5</div>
                  <p className="text-sm text-muted-foreground mb-1">Trustpilot</p>
                  <p className="text-xs text-muted-foreground">Baseado em 12.000+ avaliações</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.8/5</div>
                  <p className="text-sm text-muted-foreground mb-1">ForexBrokers.com</p>
                  <p className="text-xs text-muted-foreground">Análise profissional detalhada</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">4.6/5</div>
                  <p className="text-sm text-muted-foreground mb-1">Investopedia</p>
                  <p className="text-xs text-muted-foreground">Melhor para iniciantes (2025)</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>O que os traders dizem</CardTitle>
                <CardDescription>Avaliações reais de usuários verificados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">— Maria S., Brasil • 15/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "Uso a {brokerData.name} há 3 anos e nunca tive problemas. Plataforma estável, spreads competitivos e saques sempre dentro do prazo. O suporte em português é excelente."
                  </p>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">— João P., Portugal • 08/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "A variedade de instrumentos é impressionante. Além de forex, negocio ações e índices na mesma conta. A regulamentação FCA me dá muita segurança."
                  </p>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                      <Award className="w-4 h-4 text-muted" />
                    </div>
                    <span className="text-sm text-muted-foreground">— Carlos M., Brasil • 02/11/2025</span>
                  </div>
                  <p className="text-sm">
                    "Boa corretora, mas os spreads poderiam ser menores em horários de baixa liquidez. Fora isso, é muito confiável e profissional."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Company History */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">História da Empresa</h2>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Linha do Tempo: {brokerData.founded} - 2025</CardTitle>
                <CardDescription>{metrics.yearsActive} de inovação e crescimento no mercado financeiro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-mono">{item.year}</Badge>
                        </div>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Missão e Visão</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Missão:</strong> Proporcionar acesso transparente e democrático aos mercados financeiros globais, com tecnologia de ponta e educação de qualidade.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Visão:</strong> Ser a corretora de referência mundial em confiabilidade, inovação e experiência do cliente, mantendo os mais altos padrões éticos e regulatórios.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Comparison Table */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Comparativo com Concorrentes</h2>
            </div>
            
            <Card>
              <CardContent className="p-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Corretora</TableHead>
                      <TableHead>Spread EUR/USD</TableHead>
                      <TableHead>Depósito Mínimo</TableHead>
                      <TableHead>Regulamentação Principal</TableHead>
                      <TableHead>Avaliação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {competitors.map((competitor, index) => (
                      <TableRow key={index} className={competitor.name === brokerData.name ? "bg-primary/10" : ""}>
                        <TableCell className="font-semibold">
                          {competitor.name}
                          {competitor.name === brokerData.name && (
                            <Badge className="ml-2 bg-primary/20 text-primary border-primary/30">
                              Esta Corretora
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{competitor.spread} pips</TableCell>
                        <TableCell>{competitor.minDeposit}</TableCell>
                        <TableCell className="text-sm">{competitor.regulation}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-primary fill-primary" />
                            <span className="font-semibold">{competitor.rating}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Por que escolher a {brokerData.name}?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>{metrics.yearsActive} de história:</strong> Experiência comprovada no mercado financeiro global</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Variedade de instrumentos:</strong> Amplo acesso a ativos globais para diversificação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Regulamentação Tier-1:</strong> {regulations.map(r => r.name).join(", ")} e outras autoridades de prestígio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Plataformas avançadas:</strong> Tecnologia de ponta para todos os estilos de trading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Suporte multilíngue:</strong> Atendimento em português e {brokerData.languages.length - 1}+ idiomas</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold">Perguntas Frequentes (FAQ)</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-background">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Abra uma conta demo gratuita ou comece a negociar com dinheiro real. Junte-se a {metrics.activeClients} traders em todo o mundo que confiam na {brokerData.name}.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 glow-bull">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Abrir Conta Real
                  </Button>
                  <Button size="lg" variant="outline">
                    Experimentar Conta Demo
                  </Button>
                </div>

                <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Site Oficial <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Central de Ajuda <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Relatórios Anuais <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline flex items-center justify-center gap-1">
                    Regulamentação <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default CorretoraDetalhe;