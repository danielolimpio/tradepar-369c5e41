import { useState, useRef } from "react";
import { Star, ArrowLeft, Check, X, Scale, Download, Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import icMarketsLogo from "@/assets/ic-markets.jpeg";
import pepperstoneLogo from "@/assets/pepperstone.jpeg";
import xmLogo from "@/assets/xm.jpeg";
import fxtmLogo from "@/assets/fxtm.jpeg";
import igGroupLogo from "@/assets/ig-group.jpeg";
import saxoBankLogo from "@/assets/saxo-bank.jpeg";
import interactiveBrokersLogo from "@/assets/interactive-brokers.jpeg";
import cmcMarketsLogo from "@/assets/cmc-markets.jpeg";
import fpMarketsLogo from "@/assets/fp-markets.jpeg";
import avatradeLogo from "@/assets/avatrade.jpeg";
import octafxLogo from "@/assets/octafx.jpeg";
import tickmillLogo from "@/assets/tickmill.jpeg";
import plus500Logo from "@/assets/plus500.jpeg";
import exnessLogo from "@/assets/exness.jpeg";
import admiralsLogo from "@/assets/admirals.jpeg";
import roboforexLogo from "@/assets/roboforex.jpeg";
import hotforexLogo from "@/assets/hotforex.jpeg";
import alpariLogo from "@/assets/alpari.jpeg";
import cityIndexLogo from "@/assets/city-index.jpeg";
import derivLogo from "@/assets/deriv.jpeg";

interface BrokerComparison {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  founded: string;
  headquarters: string;
  regulation: string[];
  minDeposit: string;
  spreadMin: string;
  leverage: string;
  platforms: string[];
  instruments: string;
  accountTypes: string[];
  deposit: string[];
  withdrawal: string[];
  support: string[];
  education: boolean;
  demoAccount: boolean;
  copyTrading: boolean;
  islamicAccount: boolean;
  negativeBalanceProtection: boolean;
  segregatedFunds: boolean;
  executionSpeed: string;
  commission: string;
  inactivityFee: string;
  withdrawalFee: string;
}

const brokersData: BrokerComparison[] = [
  {
    slug: "ig-group",
    name: "IG Group",
    logo: igGroupLogo,
    rating: 4.8,
    founded: "1974",
    headquarters: "Londres, Reino Unido",
    regulation: ["FCA", "ASIC", "CySEC", "CFTC/NFA"],
    minDeposit: "£0",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:222 (profissional)",
    platforms: ["ProRealTime", "MT4", "L2 Dealer", "IG Platform"],
    instruments: "17.000+ mercados",
    accountTypes: ["Standard", "Professional", "Limited Risk"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill"],
    withdrawal: ["Cartão", "Transferência", "PayPal"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "14ms média",
    commission: "$0 (spread-only) ou $3.50/lote",
    inactivityFee: "£12/mês após 24 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "saxo-bank",
    name: "Saxo Bank",
    logo: saxoBankLogo,
    rating: 4.7,
    founded: "1992",
    headquarters: "Copenhague, Dinamarca",
    regulation: ["FSA", "FCA", "ASIC", "MAS"],
    minDeposit: "€10.000",
    spreadMin: "0.1 pips",
    leverage: "1:30 (varejo) / 1:66 (profissional)",
    platforms: ["SaxoTraderGO", "SaxoTraderPRO", "SaxoInvestor"],
    instruments: "70.000+ instrumentos",
    accountTypes: ["Classic", "Platinum", "VIP"],
    deposit: ["Transferência", "Cartão"],
    withdrawal: ["Transferência"],
    support: ["Chat 24/5", "Email", "Telefone", "Consultor dedicado"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: false,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "12ms média",
    commission: "0.08% ações / $3/lote forex",
    inactivityFee: "€100/ano após 6 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "interactive-brokers",
    name: "Interactive Brokers",
    logo: interactiveBrokersLogo,
    rating: 4.6,
    founded: "1978",
    headquarters: "Greenwich, EUA",
    regulation: ["SEC", "FINRA", "FCA", "ASIC"],
    minDeposit: "$0",
    spreadMin: "0.0 pips",
    leverage: "1:50 (EUA) / 1:30 (Europa)",
    platforms: ["TWS", "IBKR Mobile", "Client Portal", "API"],
    instruments: "150+ mercados globais",
    accountTypes: ["IBKR Lite", "IBKR Pro"],
    deposit: ["Transferência", "ACH", "Wire"],
    withdrawal: ["Transferência", "Wire"],
    support: ["Chat 24/7", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: false,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "1ms (co-location)",
    commission: "$0.0035/ação ou 0.08-0.20 bps",
    inactivityFee: "$0",
    withdrawalFee: "1 grátis/mês"
  },
  {
    slug: "cmc-markets",
    name: "CMC Markets",
    logo: cmcMarketsLogo,
    rating: 4.7,
    founded: "1989",
    headquarters: "Londres, Reino Unido",
    regulation: ["FCA", "ASIC", "MAS", "CySEC"],
    minDeposit: "£0",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["Next Generation", "MT4"],
    instruments: "12.000+ mercados",
    accountTypes: ["CFD", "Spread Betting"],
    deposit: ["Cartão", "Transferência", "PayPal"],
    withdrawal: ["Cartão", "Transferência", "PayPal"],
    support: ["Chat 24/5", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "15ms média",
    commission: "$0 (spread-only)",
    inactivityFee: "£10/mês após 12 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "pepperstone",
    name: "Pepperstone",
    logo: pepperstoneLogo,
    rating: 4.8,
    founded: "2010",
    headquarters: "Melbourne, Austrália",
    regulation: ["ASIC", "FCA", "CySEC", "DFSA"],
    minDeposit: "$200",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["MT4", "MT5", "cTrader", "TradingView"],
    instruments: "1.200+ instrumentos",
    accountTypes: ["Standard", "Razor"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill", "Neteller"],
    withdrawal: ["Cartão", "Transferência", "PayPal", "Skrill"],
    support: ["Chat 24/5", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "30ms média",
    commission: "$0 Standard / $3.50/lote Razor",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "ic-markets",
    name: "IC Markets",
    logo: icMarketsLogo,
    rating: 4.8,
    founded: "2007",
    headquarters: "Sydney, Austrália",
    regulation: ["ASIC", "CySEC", "FSA"],
    minDeposit: "$200",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["MT4", "MT5", "cTrader"],
    instruments: "2.250+ instrumentos",
    accountTypes: ["Standard", "Raw Spread", "cTrader"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "PayPal", "Skrill", "Crypto"],
    support: ["Chat 24/7", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "40ms média",
    commission: "$0 Standard / $3.50/lote Raw",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "fp-markets",
    name: "FP Markets",
    logo: fpMarketsLogo,
    rating: 4.7,
    founded: "2005",
    headquarters: "Sydney, Austrália",
    regulation: ["ASIC", "CySEC", "FSCA"],
    minDeposit: "$100",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["MT4", "MT5", "cTrader", "IRESS"],
    instruments: "10.000+ instrumentos",
    accountTypes: ["Standard", "Raw", "IRESS"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill", "Neteller"],
    withdrawal: ["Cartão", "Transferência", "PayPal", "Skrill"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "40ms média",
    commission: "$0 Standard / $3/lote Raw",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "xm-group",
    name: "XM Group",
    logo: xmLogo,
    rating: 4.6,
    founded: "2009",
    headquarters: "Limassol, Chipre",
    regulation: ["CySEC", "ASIC", "FSCA"],
    minDeposit: "$5",
    spreadMin: "0.6 pips",
    leverage: "1:30 (varejo) / 1:888 (profissional)",
    platforms: ["MT4", "MT5", "XM App"],
    instruments: "1.000+ instrumentos",
    accountTypes: ["Micro", "Standard", "XM Ultra Low", "Shares"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Neteller"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "1s média",
    commission: "$0 (spread-only)",
    inactivityFee: "$5/mês após 90 dias",
    withdrawalFee: "Grátis"
  },
  {
    slug: "avatrade",
    name: "AvaTrade",
    logo: avatradeLogo,
    rating: 4.5,
    founded: "2006",
    headquarters: "Dublin, Irlanda",
    regulation: ["ASIC", "CySEC", "FSA", "FSCA"],
    minDeposit: "$100",
    spreadMin: "0.9 pips",
    leverage: "1:30 (varejo) / 1:400 (profissional)",
    platforms: ["MT4", "MT5", "AvaTradeGO", "WebTrader", "AvaOptions"],
    instruments: "1.250+ instrumentos",
    accountTypes: ["Standard", "Professional", "Islamic"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill", "Neteller"],
    withdrawal: ["Cartão", "Transferência", "PayPal", "Skrill"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "50ms média",
    commission: "$0 (spread-only)",
    inactivityFee: "$50 após 3 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "octafx",
    name: "OctaFX",
    logo: octafxLogo,
    rating: 4.6,
    founded: "2011",
    headquarters: "São Vicente e Granadinas",
    regulation: ["FSA", "FSCA", "FSC"],
    minDeposit: "$25",
    spreadMin: "0.1 pips",
    leverage: "1:500",
    platforms: ["MT4", "MT5", "OctaTrader"],
    instruments: "250+ instrumentos",
    accountTypes: ["OctaTrader", "MT4", "MT5"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "PIX", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "PIX", "Crypto"],
    support: ["Chat 24/7", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "100ms média",
    commission: "$0 (spread-only)",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "tickmill",
    name: "Tickmill",
    logo: tickmillLogo,
    rating: 4.8,
    founded: "2014",
    headquarters: "Londres, Reino Unido",
    regulation: ["FCA", "CySEC", "FSA", "FSCA"],
    minDeposit: "$100",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["MT4", "MT5", "Tickmill App"],
    instruments: "180+ instrumentos",
    accountTypes: ["Classic", "Pro", "VIP"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Neteller"],
    support: ["Chat 24/5", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "20ms média",
    commission: "$0 Classic / $2/lote Pro / $1/lote VIP",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "plus500",
    name: "Plus500",
    logo: plus500Logo,
    rating: 4.3,
    founded: "2008",
    headquarters: "Haifa, Israel",
    regulation: ["FCA", "ASIC", "CySEC", "FSC"],
    minDeposit: "$100",
    spreadMin: "0.6 pips",
    leverage: "1:30 (varejo) / 1:300 (profissional)",
    platforms: ["Plus500 WebTrader", "Plus500 App"],
    instruments: "2.800+ instrumentos",
    accountTypes: ["Retail", "Professional"],
    deposit: ["Cartão", "Transferência", "PayPal", "Skrill"],
    withdrawal: ["Cartão", "Transferência", "PayPal", "Skrill"],
    support: ["Chat 24/7", "Email"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: false,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "Instantânea",
    commission: "$0 (spread-only)",
    inactivityFee: "$10/mês após 3 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "exness",
    name: "Exness",
    logo: exnessLogo,
    rating: 4.7,
    founded: "2008",
    headquarters: "Limassol, Chipre",
    regulation: ["FCA", "CySEC", "FSA", "FSCA"],
    minDeposit: "$10",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / Ilimitada (profissional)",
    platforms: ["MT4", "MT5", "Exness Terminal", "Exness Trade App"],
    instruments: "250+ instrumentos",
    accountTypes: ["Standard", "Standard Cent", "Pro", "Raw Spread", "Zero"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "PIX", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "PIX", "Crypto"],
    support: ["Chat 24/7", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "25ms média",
    commission: "$0 Standard / $3.50/lote Raw / $0.20/lote Zero",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis instantâneo"
  },
  {
    slug: "fxtm",
    name: "FXTM",
    logo: fxtmLogo,
    rating: 4.5,
    founded: "2011",
    headquarters: "Limassol, Chipre",
    regulation: ["FCA", "CySEC", "FSCA", "FSC"],
    minDeposit: "$10",
    spreadMin: "0.8 pips",
    leverage: "1:30 (varejo) / 1:2000 (profissional)",
    platforms: ["MT4", "MT5", "FXTM Trader App"],
    instruments: "250+ instrumentos",
    accountTypes: ["Micro", "Advantage", "Advantage Plus"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Neteller"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "150ms média",
    commission: "$0 Micro / $0.40-$2/lote outros",
    inactivityFee: "$5/mês após 6 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "admirals",
    name: "Admirals",
    logo: admiralsLogo,
    rating: 4.7,
    founded: "2001",
    headquarters: "Tallinn, Estônia",
    regulation: ["FCA", "CySEC", "ASIC", "EFSA"],
    minDeposit: "$100",
    spreadMin: "0.1 pips",
    leverage: "1:30 (varejo) / 1:500 (profissional)",
    platforms: ["MT4", "MT5", "Admirals App", "StereoTrader"],
    instruments: "8.000+ instrumentos",
    accountTypes: ["Trade.MT4", "Trade.MT5", "Zero.MT4", "Zero.MT5", "Invest.MT5"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Neteller"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "25ms média",
    commission: "$0 Trade / $1.8-$3/lote Zero",
    inactivityFee: "€10/mês após 24 meses",
    withdrawalFee: "1 grátis/mês"
  },
  {
    slug: "roboforex",
    name: "RoboForex",
    logo: roboforexLogo,
    rating: 4.4,
    founded: "2009",
    headquarters: "Belize City, Belize",
    regulation: ["IFSC", "CySEC", "FSCA"],
    minDeposit: "$10",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:2000 (profissional)",
    platforms: ["MT4", "MT5", "cTrader", "R StocksTrader"],
    instruments: "12.000+ instrumentos",
    accountTypes: ["Pro", "ECN", "Prime", "R StocksTrader"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Crypto"],
    support: ["Chat 24/7", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "100ms média",
    commission: "$0 Pro / $10/1M ECN / $5/1M Prime",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  },
  {
    slug: "hotforex-hfm",
    name: "HotForex (HFM)",
    logo: hotforexLogo,
    rating: 4.5,
    founded: "2010",
    headquarters: "São Vicente e Granadinas",
    regulation: ["FCA", "CySEC", "FSCA", "ASIC"],
    minDeposit: "$5",
    spreadMin: "0.1 pips",
    leverage: "1:30 (varejo) / 1:1000 (profissional)",
    platforms: ["MT4", "MT5", "HFM App"],
    instruments: "1.200+ instrumentos",
    accountTypes: ["Micro", "Premium", "Zero Spread", "HFcopy"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Neteller"],
    support: ["Chat 24/5", "Email", "Telefone", "Português"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "50ms média",
    commission: "$0 Micro/Premium / $3/lote Zero",
    inactivityFee: "$5/mês após 6 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "alpari",
    name: "Alpari",
    logo: alpariLogo,
    rating: 4.2,
    founded: "1998",
    headquarters: "São Vicente e Granadinas",
    regulation: ["FCA", "CySEC", "FSC"],
    minDeposit: "$5",
    spreadMin: "0.3 pips",
    leverage: "1:30 (varejo) / 1:1000 (profissional)",
    platforms: ["MT4", "MT5", "Alpari Mobile"],
    instruments: "250+ instrumentos",
    accountTypes: ["Standard", "Nano", "ECN", "Pro"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Crypto"],
    support: ["Chat 24/5", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: true,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "200ms média",
    commission: "$0 Standard / $1.5/lote ECN",
    inactivityFee: "$5/mês após 6 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "city-index",
    name: "City Index",
    logo: cityIndexLogo,
    rating: 4.6,
    founded: "1983",
    headquarters: "Londres, Reino Unido",
    regulation: ["FCA", "ASIC", "MAS"],
    minDeposit: "$0",
    spreadMin: "0.5 pips",
    leverage: "1:30 (varejo) / 1:400 (profissional)",
    platforms: ["City Index WebTrader", "MT4", "AT Pro"],
    instruments: "13.500+ mercados",
    accountTypes: ["Standard", "Professional"],
    deposit: ["Cartão", "Transferência", "PayPal"],
    withdrawal: ["Cartão", "Transferência", "PayPal"],
    support: ["Chat 24/5", "Email", "Telefone"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: true,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "14ms média",
    commission: "$0 (spread-only)",
    inactivityFee: "£12/mês após 12 meses",
    withdrawalFee: "Grátis"
  },
  {
    slug: "deriv",
    name: "Deriv",
    logo: derivLogo,
    rating: 4.1,
    founded: "1999",
    headquarters: "Malta",
    regulation: ["MFSA", "FSC", "FSA"],
    minDeposit: "$5",
    spreadMin: "0.0 pips",
    leverage: "1:30 (varejo) / 1:1000 (profissional)",
    platforms: ["Deriv MT5", "Deriv X", "Deriv GO", "DTrader", "DBot"],
    instruments: "100+ instrumentos",
    accountTypes: ["Deriv MT5", "Deriv X", "Deriv cTrader"],
    deposit: ["Cartão", "Transferência", "Skrill", "Neteller", "Crypto"],
    withdrawal: ["Cartão", "Transferência", "Skrill", "Crypto"],
    support: ["Chat 24/7", "Email"],
    education: true,
    demoAccount: true,
    copyTrading: false,
    islamicAccount: false,
    negativeBalanceProtection: true,
    segregatedFunds: true,
    executionSpeed: "Instantânea",
    commission: "$0 (spread-only)",
    inactivityFee: "Grátis",
    withdrawalFee: "Grátis"
  }
];

// Get all unique regulations
const allRegulations = Array.from(new Set(brokersData.flatMap(b => b.regulation))).sort();

// Deposit range options
const depositRanges = [
  { label: "Todos", value: "all" },
  { label: "$0 - Sem mínimo", value: "0" },
  { label: "Até $10", value: "10" },
  { label: "Até $100", value: "100" },
  { label: "Até $200", value: "200" },
  { label: "Acima de $200", value: "200+" }
];

// Spread range options
const spreadRanges = [
  { label: "Todos", value: "all" },
  { label: "0.0 pips", value: "0" },
  { label: "Até 0.5 pips", value: "0.5" },
  { label: "Até 1.0 pips", value: "1.0" }
];

const parseDeposit = (deposit: string): number => {
  const cleaned = deposit.replace(/[^0-9.]/g, '');
  return cleaned ? parseFloat(cleaned) : 0;
};

const parseSpread = (spread: string): number => {
  const match = spread.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

const ComparacaoCorretoras = () => {
  const [selectedBrokers, setSelectedBrokers] = useState<string[]>([]);
  const [filterRegulation, setFilterRegulation] = useState<string>("all");
  const [filterDeposit, setFilterDeposit] = useState<string>("all");
  const [filterSpread, setFilterSpread] = useState<string>("all");
  const [isExporting, setIsExporting] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Apply filters
  const filteredBrokers = brokersData.filter(broker => {
    if (filterRegulation !== "all" && !broker.regulation.includes(filterRegulation)) {
      return false;
    }
    
    if (filterDeposit !== "all") {
      const depositValue = parseDeposit(broker.minDeposit);
      if (filterDeposit === "0" && depositValue !== 0) return false;
      if (filterDeposit === "10" && depositValue > 10) return false;
      if (filterDeposit === "100" && depositValue > 100) return false;
      if (filterDeposit === "200" && depositValue > 200) return false;
      if (filterDeposit === "200+" && depositValue <= 200) return false;
    }
    
    if (filterSpread !== "all") {
      const spreadValue = parseSpread(broker.spreadMin);
      if (filterSpread === "0" && spreadValue !== 0) return false;
      if (filterSpread === "0.5" && spreadValue > 0.5) return false;
      if (filterSpread === "1.0" && spreadValue > 1.0) return false;
    }
    
    return true;
  });

  const toggleBroker = (slug: string) => {
    if (selectedBrokers.includes(slug)) {
      setSelectedBrokers(selectedBrokers.filter(s => s !== slug));
    } else if (selectedBrokers.length < 3) {
      setSelectedBrokers([...selectedBrokers, slug]);
    }
  };

  const clearSelection = () => setSelectedBrokers([]);
  
  const clearFilters = () => {
    setFilterRegulation("all");
    setFilterDeposit("all");
    setFilterSpread("all");
  };

  const hasActiveFilters = filterRegulation !== "all" || filterDeposit !== "all" || filterSpread !== "all";

  const selectedBrokersData = brokersData.filter(b => selectedBrokers.includes(b.slug));

  const renderBoolean = (value: boolean) => (
    value ? <Check className="h-5 w-5 text-bull mx-auto" /> : <X className="h-5 w-5 text-bear mx-auto" />
  );

  const exportToPDF = async () => {
    if (!tableRef.current || selectedBrokersData.length < 2) return;
    
    setIsExporting(true);
    toast({
      title: "Gerando PDF...",
      description: "Aguarde enquanto preparamos sua comparação.",
    });

    try {
      const element = tableRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      pdf.setFontSize(18);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Comparação de Corretoras de Forex', pdfWidth / 2, 15, { align: 'center' });
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')} - melhorcorretoraforex.com`, pdfWidth / 2, 22, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', imgX, 30, imgWidth * ratio * 0.95, imgHeight * ratio * 0.95);
      
      const brokerNames = selectedBrokersData.map(b => b.name).join('-');
      pdf.save(`comparacao-${brokerNames.toLowerCase().replace(/\s+/g, '-')}.pdf`);
      
      toast({
        title: "PDF exportado com sucesso!",
        description: "O arquivo foi baixado automaticamente.",
      });
    } catch (error) {
      toast({
        title: "Erro ao exportar",
        description: "Não foi possível gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Comparar Corretoras de Forex | Side-by-Side | Melhor Corretora Forex</title>
        <meta name="description" content="Compare corretoras de forex lado a lado. Selecione 2-3 corretoras e veja tabela comparativa detalhada com spreads, regulamentação, plataformas e mais." />
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-20">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Link to="/corretoras" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Corretoras
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comparação Detalhada</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Comparar <span className="text-gradient-bull">Corretoras</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Selecione 2 a 3 corretoras para ver uma comparação lado a lado com todos os detalhes importantes.
              </p>
            </div>

            {/* Filters */}
            <Card className="max-w-6xl mx-auto mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Filter className="h-5 w-5" />
                    Filtrar Corretoras
                  </CardTitle>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Limpar filtros
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Regulamentação</label>
                    <Select value={filterRegulation} onValueChange={setFilterRegulation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar regulador" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os reguladores</SelectItem>
                        {allRegulations.map(reg => (
                          <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Depósito Mínimo</label>
                    <Select value={filterDeposit} onValueChange={setFilterDeposit}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        {depositRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Spread Mínimo</label>
                    <Select value={filterSpread} onValueChange={setFilterSpread}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        {spreadRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {hasActiveFilters && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Mostrando {filteredBrokers.length} de {brokersData.length} corretoras
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Broker Selection */}
            <Card className="max-w-6xl mx-auto mb-8">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2">
                    Selecionar Corretoras
                    <Badge variant="outline">
                      {selectedBrokers.length}/3 selecionadas
                    </Badge>
                  </CardTitle>
                  {selectedBrokers.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearSelection}>
                      Limpar seleção
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {filteredBrokers.map((broker) => {
                    const isSelected = selectedBrokers.includes(broker.slug);
                    const isDisabled = !isSelected && selectedBrokers.length >= 3;
                    
                    return (
                      <button
                        key={broker.slug}
                        onClick={() => toggleBroker(broker.slug)}
                        disabled={isDisabled}
                        className={`
                          relative p-3 rounded-lg border-2 transition-all text-left
                          ${isSelected 
                            ? 'border-primary bg-primary/10' 
                            : isDisabled 
                              ? 'border-border/50 opacity-50 cursor-not-allowed' 
                              : 'border-border hover:border-primary/50 hover:bg-accent/50'
                          }
                        `}
                      >
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary-foreground" />
                          </div>
                        )}
                        <img 
                          src={broker.logo} 
                          alt={broker.name}
                          className="w-12 h-12 object-contain rounded mb-2 mx-auto"
                        />
                        <p className="text-xs font-medium text-center truncate">{broker.name}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            {selectedBrokersData.length >= 2 ? (
              <Card className="max-w-6xl mx-auto overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle>Tabela Comparativa</CardTitle>
                    <Button 
                      onClick={exportToPDF} 
                      disabled={isExporting}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {isExporting ? "Exportando..." : "Exportar PDF"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto" ref={tableRef}>
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-48 font-bold">Característica</TableHead>
                          {selectedBrokersData.map((broker) => (
                            <TableHead key={broker.slug} className="text-center min-w-40">
                              <div className="flex flex-col items-center gap-2">
                                <img src={broker.logo} alt={broker.name} className="w-12 h-12 object-contain rounded" />
                                <span className="font-bold">{broker.name}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-primary text-primary" />
                                  <span>{broker.rating}</span>
                                </div>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Informações Gerais
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fundação</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center">{b.founded}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sede</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.headquarters}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Regulamentação</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.regulation.join(", ")}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Custos e Taxas
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Depósito Mínimo</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center font-semibold">{b.minDeposit}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Spread Mínimo</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-primary font-semibold">{b.spreadMin}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Comissão</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.commission}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Taxa de Inatividade</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.inactivityFee}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Taxa de Saque</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.withdrawalFee}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Trading
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Alavancagem</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.leverage}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Instrumentos</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.instruments}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Velocidade de Execução</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center">{b.executionSpeed}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Plataformas</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.platforms.join(", ")}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tipos de Conta</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.accountTypes.join(", ")}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Recursos e Funcionalidades
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Conta Demo</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.demoAccount)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Copy Trading</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.copyTrading)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Conta Islâmica</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.islamicAccount)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Educação</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.education)}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Segurança
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Proteção Saldo Negativo</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.negativeBalanceProtection)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fundos Segregados</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug}>{renderBoolean(b.segregatedFunds)}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Métodos de Pagamento
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Depósito</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.deposit.join(", ")}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Saque</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.withdrawal.join(", ")}</TableCell>)}
                        </TableRow>

                        <TableRow className="bg-primary/5">
                          <TableCell colSpan={selectedBrokersData.length + 1} className="font-bold text-primary">
                            Suporte
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Canais de Suporte</TableCell>
                          {selectedBrokersData.map((b) => <TableCell key={b.slug} className="text-center text-sm">{b.support.join(", ")}</TableCell>)}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-2xl mx-auto text-center py-12">
                <CardContent>
                  <Scale className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Selecione pelo menos 2 corretoras</h3>
                  <p className="text-muted-foreground">
                    Escolha entre 2 e 3 corretoras acima para ver a comparação detalhada lado a lado.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Links */}
            {selectedBrokersData.length >= 2 && (
              <div className="max-w-6xl mx-auto mt-8 flex flex-wrap justify-center gap-4">
                {selectedBrokersData.map((broker) => (
                  <Link key={broker.slug} to={`/corretoras/${broker.slug}`}>
                    <Button variant="outline">
                      Ver detalhes de {broker.name}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComparacaoCorretoras;