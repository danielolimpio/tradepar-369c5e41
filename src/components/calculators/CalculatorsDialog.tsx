import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, Loader2 } from "lucide-react";

export type CalculatorKey =
  | "position-size"
  | "profit-loss"
  | "margin"
  | "fibonacci"
  | "pivot"
  | "converter";

const CALC_TITLES: Record<CalculatorKey, { title: string; description: string }> = {
  "position-size": {
    title: "Calculadora de Position Size",
    description:
      "Calcule o tamanho ideal de posição com base em capital, risco e stop loss.",
  },
  "profit-loss": {
    title: "Calculadora de Lucro / Prejuízo",
    description: "Estime ganhos e perdas antes de abrir a operação.",
  },
  margin: {
    title: "Calculadora de Margem",
    description: "Descubra a margem exigida para operar com a alavancagem escolhida.",
  },
  fibonacci: {
    title: "Calculadora de Fibonacci",
    description: "Retrações e extensões automáticas de um movimento.",
  },
  pivot: {
    title: "Calculadora de Pivot Points",
    description: "Clássico, Woodie, Camarilla e Fibonacci em uma só tela.",
  },
  converter: {
    title: "Conversor de Moedas em Tempo Real",
    description: "Taxas ao vivo entre as principais moedas do mundo.",
  },
};

// pip size utility — JPY quote uses 0.01, todos os demais 0.0001
const pipSize = (pair: string) => (pair.endsWith("JPY") ? 0.01 : 0.0001);
// pip value por 1 lote padrão (100.000 unidades), aproximado quando quote = USD
const pipValuePerLot = (pair: string) => (pair.endsWith("JPY") ? 9.09 : 10);

const PAIRS = [
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "AUDUSD",
  "USDCAD",
  "USDCHF",
  "NZDUSD",
  "EURJPY",
  "GBPJPY",
  "EURGBP",
];

const fmt = (n: number, d = 2) =>
  isFinite(n)
    ? n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d })
    : "—";

// ---------- Position Size ----------
function PositionSizeCalc() {
  const [balance, setBalance] = useState("10000");
  const [riskPct, setRiskPct] = useState("1");
  const [stopPips, setStopPips] = useState("30");
  const [pair, setPair] = useState("EURUSD");

  const balanceN = parseFloat(balance) || 0;
  const riskN = parseFloat(riskPct) || 0;
  const stopN = parseFloat(stopPips) || 0;
  const riskAmount = (balanceN * riskN) / 100;
  const pipVal = pipValuePerLot(pair);
  const lots = stopN > 0 ? riskAmount / (stopN * pipVal) : 0;

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Saldo da conta (USD)">
          <Input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
        </Field>
        <Field label="Risco por operação (%)">
          <Input type="number" step="0.1" value={riskPct} onChange={(e) => setRiskPct(e.target.value)} />
        </Field>
        <Field label="Stop Loss (pips)">
          <Input type="number" value={stopPips} onChange={(e) => setStopPips(e.target.value)} />
        </Field>
        <Field label="Par">
          <PairSelect value={pair} onChange={setPair} />
        </Field>
      </div>
      <ResultGrid
        items={[
          { label: "Valor em risco", value: `$ ${fmt(riskAmount)}` },
          { label: "Lote padrão", value: fmt(lots, 3), highlight: true },
          { label: "Mini lote (0.1)", value: fmt(lots * 10, 2) },
          { label: "Micro lote (0.01)", value: fmt(lots * 100, 1) },
        ]}
      />
    </div>
  );
}

// ---------- Profit / Loss ----------
function ProfitLossCalc() {
  const [direction, setDirection] = useState<"buy" | "sell">("buy");
  const [entry, setEntry] = useState("1.0850");
  const [exit, setExit] = useState("1.0920");
  const [lots, setLots] = useState("1");
  const [pair, setPair] = useState("EURUSD");

  const ps = pipSize(pair);
  const pv = pipValuePerLot(pair);
  const entryN = parseFloat(entry) || 0;
  const exitN = parseFloat(exit) || 0;
  const lotsN = parseFloat(lots) || 0;
  const diff = direction === "buy" ? exitN - entryN : entryN - exitN;
  const pips = diff / ps;
  const pnl = pips * pv * lotsN;

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Direção">
          <Select value={direction} onValueChange={(v) => setDirection(v as "buy" | "sell")}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Compra (Long)</SelectItem>
              <SelectItem value="sell">Venda (Short)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Par">
          <PairSelect value={pair} onChange={setPair} />
        </Field>
        <Field label="Preço de entrada">
          <Input type="number" step="0.0001" value={entry} onChange={(e) => setEntry(e.target.value)} />
        </Field>
        <Field label="Preço de saída">
          <Input type="number" step="0.0001" value={exit} onChange={(e) => setExit(e.target.value)} />
        </Field>
        <Field label="Tamanho (lotes)">
          <Input type="number" step="0.01" value={lots} onChange={(e) => setLots(e.target.value)} />
        </Field>
      </div>
      <ResultGrid
        items={[
          { label: "Variação em pips", value: fmt(pips, 1) },
          {
            label: "Resultado",
            value: `${pnl >= 0 ? "+" : ""}$ ${fmt(pnl)}`,
            highlight: true,
            positive: pnl >= 0,
          },
        ]}
      />
    </div>
  );
}

// ---------- Margin ----------
function MarginCalc() {
  const [lots, setLots] = useState("1");
  const [price, setPrice] = useState("1.0850");
  const [leverage, setLeverage] = useState("100");
  const [pair, setPair] = useState("EURUSD");

  const lotsN = parseFloat(lots) || 0;
  const priceN = parseFloat(price) || 0;
  const levN = parseFloat(leverage) || 1;
  const notional = lotsN * 100000; // unidades da moeda base
  // margem em USD: pares com USD como quote -> notional * price / lev
  //                pares com USD como base  -> notional / lev
  //                pares cross -> aproximação: notional * price / lev
  const baseIsUSD = pair.startsWith("USD");
  const marginUSD = baseIsUSD ? notional / levN : (notional * priceN) / levN;

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Tamanho (lotes)">
          <Input type="number" step="0.01" value={lots} onChange={(e) => setLots(e.target.value)} />
        </Field>
        <Field label="Par">
          <PairSelect value={pair} onChange={setPair} />
        </Field>
        <Field label="Preço atual">
          <Input type="number" step="0.0001" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Field>
        <Field label="Alavancagem (1:X)">
          <Select value={leverage} onValueChange={setLeverage}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 50, 100, 200, 300, 400, 500, 1000].map((l) => (
                <SelectItem key={l} value={String(l)}>
                  1:{l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <ResultGrid
        items={[
          { label: "Valor notional", value: `${fmt(notional, 0)} un.` },
          { label: "Margem exigida", value: `$ ${fmt(marginUSD)}`, highlight: true },
        ]}
      />
    </div>
  );
}

// ---------- Fibonacci ----------
function FibonacciCalc() {
  const [high, setHigh] = useState("1.1200");
  const [low, setLow] = useState("1.0800");
  const [trend, setTrend] = useState<"up" | "down">("up");

  const highN = parseFloat(high) || 0;
  const lowN = parseFloat(low) || 0;
  const range = highN - lowN;

  const retrRatios = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
  const extRatios = [1.272, 1.414, 1.618, 2.0, 2.618];

  const retracements = retrRatios.map((r) => ({
    ratio: r,
    value: trend === "up" ? highN - range * r : lowN + range * r,
  }));
  const extensions = extRatios.map((r) => ({
    ratio: r,
    value: trend === "up" ? highN - range * r : lowN + range * r,
  }));

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Máxima">
          <Input type="number" step="0.0001" value={high} onChange={(e) => setHigh(e.target.value)} />
        </Field>
        <Field label="Mínima">
          <Input type="number" step="0.0001" value={low} onChange={(e) => setLow(e.target.value)} />
        </Field>
        <Field label="Tendência">
          <Select value={trend} onValueChange={(v) => setTrend(v as "up" | "down")}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="up">Alta</SelectItem>
              <SelectItem value="down">Baixa</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <FibTable title="Retrações" rows={retracements} />
        <FibTable title="Extensões" rows={extensions} highlight />
      </div>
    </div>
  );
}

function FibTable({
  title,
  rows,
  highlight,
}: {
  title: string;
  rows: { ratio: number; value: number }[];
  highlight?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="bg-muted/50 px-4 py-2 text-sm font-semibold">{title}</div>
      <div className="divide-y divide-border">
        {rows.map((r) => (
          <div key={r.ratio} className="flex items-center justify-between px-4 py-2 text-sm">
            <span className="text-muted-foreground">{(r.ratio * 100).toFixed(1)}%</span>
            <span className={`font-mono ${highlight ? "text-primary" : "text-foreground"}`}>
              {fmt(r.value, 5)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Pivot Points ----------
function PivotCalc() {
  const [high, setHigh] = useState("1.1200");
  const [low, setLow] = useState("1.0800");
  const [close, setClose] = useState("1.1000");

  const H = parseFloat(high) || 0;
  const L = parseFloat(low) || 0;
  const C = parseFloat(close) || 0;
  const R = H - L;

  const classic = (() => {
    const PP = (H + L + C) / 3;
    return {
      PP,
      R1: 2 * PP - L,
      S1: 2 * PP - H,
      R2: PP + R,
      S2: PP - R,
      R3: H + 2 * (PP - L),
      S3: L - 2 * (H - PP),
    };
  })();

  const woodie = (() => {
    const PP = (H + L + 2 * C) / 4;
    return { PP, R1: 2 * PP - L, S1: 2 * PP - H, R2: PP + R, S2: PP - R };
  })();

  const camarilla = (() => {
    const PP = (H + L + C) / 3;
    return {
      PP,
      R1: C + (R * 1.1) / 12,
      R2: C + (R * 1.1) / 6,
      R3: C + (R * 1.1) / 4,
      R4: C + (R * 1.1) / 2,
      S1: C - (R * 1.1) / 12,
      S2: C - (R * 1.1) / 6,
      S3: C - (R * 1.1) / 4,
      S4: C - (R * 1.1) / 2,
    };
  })();

  const fibonacci = (() => {
    const PP = (H + L + C) / 3;
    return {
      PP,
      R1: PP + 0.382 * R,
      R2: PP + 0.618 * R,
      R3: PP + R,
      S1: PP - 0.382 * R,
      S2: PP - 0.618 * R,
      S3: PP - R,
    };
  })();

  const methods: Record<string, Record<string, number>> = {
    classic,
    woodie,
    camarilla,
    fibonacci,
  };

  return (
    <div className="grid gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Máxima">
          <Input type="number" step="0.0001" value={high} onChange={(e) => setHigh(e.target.value)} />
        </Field>
        <Field label="Mínima">
          <Input type="number" step="0.0001" value={low} onChange={(e) => setLow(e.target.value)} />
        </Field>
        <Field label="Fechamento">
          <Input type="number" step="0.0001" value={close} onChange={(e) => setClose(e.target.value)} />
        </Field>
      </div>
      <Tabs defaultValue="classic">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="classic">Clássico</TabsTrigger>
          <TabsTrigger value="woodie">Woodie</TabsTrigger>
          <TabsTrigger value="camarilla">Camarilla</TabsTrigger>
          <TabsTrigger value="fibonacci">Fibonacci</TabsTrigger>
        </TabsList>
        {Object.entries(methods).map(([key, values]) => (
          <TabsContent key={key} value={key}>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="divide-y divide-border">
                {Object.entries(values).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between px-4 py-2 text-sm">
                    <span
                      className={`font-semibold ${
                        k.startsWith("R")
                          ? "text-primary"
                          : k.startsWith("S")
                          ? "text-destructive"
                          : "text-foreground"
                      }`}
                    >
                      {k}
                    </span>
                    <span className="font-mono">{fmt(v, 5)}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// ---------- Currency Converter (live) ----------
const CURRENCIES = [
  "USD", "EUR", "BRL", "GBP", "JPY", "CHF", "AUD", "CAD", "NZD",
  "CNY", "HKD", "SGD", "MXN", "ZAR", "SEK", "NOK", "DKK", "PLN", "TRY",
];

function ConverterCalc() {
  const [amount, setAmount] = useState("1000");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    if (from === to) {
      setRate(1);
      setUpdatedAt(new Date().toLocaleTimeString("pt-BR"));
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
      .then((r) => {
        if (!r.ok) throw new Error("Falha ao obter taxa");
        return r.json();
      })
      .then((data) => {
        if (cancelled) return;
        const r = data?.rates?.[to];
        if (typeof r !== "number") throw new Error("Par indisponível");
        setRate(r);
        setUpdatedAt(new Date().toLocaleTimeString("pt-BR"));
      })
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [from, to]);

  const amountN = parseFloat(amount) || 0;
  const converted = rate !== null ? amountN * rate : null;

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-end gap-3">
        <Field label="De">
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Button variant="outline" size="icon" onClick={swap} aria-label="Inverter" className="mb-0.5">
          <ArrowRightLeft className="h-4 w-4" />
        </Button>
        <Field label="Para">
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="Valor">
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </Field>

      <div className="rounded-lg border border-border p-5 bg-muted/30">
        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Buscando taxa ao vivo…
          </div>
        ) : error ? (
          <div className="text-destructive text-sm">{error}</div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-sm text-muted-foreground">
              {fmt(amountN)} {from} equivale a
            </div>
            <div className="text-3xl font-bold text-primary">
              {fmt(converted ?? 0, 4)} <span className="text-lg text-foreground/70">{to}</span>
            </div>
            <div className="text-xs text-muted-foreground flex flex-wrap gap-x-3">
              <span>1 {from} = {fmt(rate ?? 0, 6)} {to}</span>
              {updatedAt && <span>Atualizado às {updatedAt}</span>}
              <span>Fonte: frankfurter.dev (BCE)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Shared bits ----------
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function PairSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {PAIRS.map((p) => (
          <SelectItem key={p} value={p}>
            {p.slice(0, 3)}/{p.slice(3)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function ResultGrid({
  items,
}: {
  items: { label: string; value: string; highlight?: boolean; positive?: boolean }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((i) => (
        <div
          key={i.label}
          className={`rounded-lg border p-4 ${
            i.highlight ? "border-primary/60 bg-primary/5" : "border-border bg-muted/30"
          }`}
        >
          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
            {i.label}
          </div>
          <div
            className={`text-2xl font-bold font-mono ${
              i.positive === false
                ? "text-destructive"
                : i.highlight || i.positive
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            {i.value}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- Root Dialog ----------
export function CalculatorsDialog({
  open,
  onOpenChange,
  calculator,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  calculator: CalculatorKey | null;
}) {
  const meta = useMemo(
    () => (calculator ? CALC_TITLES[calculator] : null),
    [calculator]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {meta && (
          <DialogHeader>
            <div className="flex items-center gap-2">
              <DialogTitle>{meta.title}</DialogTitle>
              <Badge variant="secondary">100% funcional</Badge>
            </div>
            <DialogDescription>{meta.description}</DialogDescription>
          </DialogHeader>
        )}
        <div className="pt-2">
          {calculator === "position-size" && <PositionSizeCalc />}
          {calculator === "profit-loss" && <ProfitLossCalc />}
          {calculator === "margin" && <MarginCalc />}
          {calculator === "fibonacci" && <FibonacciCalc />}
          {calculator === "pivot" && <PivotCalc />}
          {calculator === "converter" && <ConverterCalc />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CalculatorsDialog;
