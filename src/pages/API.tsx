import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Zap, 
  Lock, 
  Gauge, 
  Globe,
  Terminal,
  Database,
  BarChart3,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  FileCode,
  Webhook,
  Key
} from "lucide-react";

const API = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Dados em Tempo Real",
      description: "Cotações de forex ao vivo com latência inferior a 100ms",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Dados Históricos",
      description: "Acesso a 10+ anos de dados históricos OHLCV",
      color: "text-chart-2"
    },
    {
      icon: BarChart3,
      title: "Indicadores Técnicos",
      description: "50+ indicadores pré-calculados via API",
      color: "text-chart-3"
    },
    {
      icon: TrendingUp,
      title: "Análise de Mercado",
      description: "Sentimento, volatilidade e análise de tendências",
      color: "text-chart-4"
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Receba notificações em tempo real de eventos",
      color: "text-chart-5"
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description: "Autenticação OAuth 2.0 e criptografia end-to-end",
      color: "text-primary"
    }
  ];

  const endpoints = [
    {
      method: "GET",
      path: "/v1/quotes/realtime",
      description: "Obter cotações em tempo real para pares específicos",
      params: ["symbols", "format"],
      response: { symbol: "EURUSD", bid: 1.0856, ask: 1.0858, timestamp: "2024-01-15T14:30:00Z" }
    },
    {
      method: "GET",
      path: "/v1/quotes/historical",
      description: "Dados históricos OHLCV com múltiplos timeframes",
      params: ["symbol", "timeframe", "from", "to"],
      response: { data: [{ time: 1705329000, open: 1.0850, high: 1.0865, low: 1.0848, close: 1.0856, volume: 125000 }] }
    },
    {
      method: "GET",
      path: "/v1/indicators/{indicator}",
      description: "Calcular indicadores técnicos para qualquer par",
      params: ["symbol", "period", "timeframe"],
      response: { indicator: "RSI", value: 62.5, signal: "neutral", timestamp: "2024-01-15T14:30:00Z" }
    },
    {
      method: "GET",
      path: "/v1/market/sentiment",
      description: "Análise de sentimento agregado do mercado",
      params: ["symbol"],
      response: { symbol: "EURUSD", sentiment: "bullish", score: 0.72, traders_long: 65, traders_short: 35 }
    },
    {
      method: "POST",
      path: "/v1/webhooks/subscribe",
      description: "Criar webhook para eventos específicos",
      params: ["url", "events", "symbols"],
      response: { webhook_id: "wh_abc123", status: "active", events: ["price_alert", "market_close"] }
    },
    {
      method: "GET",
      path: "/v1/brokers/list",
      description: "Listar corretoras com rankings e avaliações",
      params: ["country", "regulation", "min_rating"],
      response: { brokers: [{ name: "IC Markets", rating: 4.9, spread_avg: 0.1, regulation: ["ASIC", "CySEC"] }] }
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      period: "para sempre",
      description: "Perfeito para começar e testar",
      requests: "1.000 requisições/mês",
      features: [
        "Dados em tempo real (15min delay)",
        "Dados históricos (1 ano)",
        "10 indicadores básicos",
        "Suporte por email",
        "Rate limit: 10 req/min"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "Developer",
      price: "49",
      period: "/mês",
      description: "Para desenvolvedores e startups",
      requests: "50.000 requisições/mês",
      features: [
        "Dados em tempo real (sem delay)",
        "Dados históricos (10 anos)",
        "50+ indicadores técnicos",
        "Webhooks inclusos",
        "Suporte prioritário",
        "Rate limit: 100 req/min",
        "Documentação avançada"
      ],
      cta: "Começar Teste Grátis",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contato",
      description: "Para instituições e alto volume",
      requests: "Ilimitado",
      features: [
        "Tudo do Developer",
        "Dados tick-by-tick",
        "SLA 99.99% uptime",
        "Suporte dedicado 24/7",
        "Rate limit customizado",
        "White-label disponível",
        "Integração personalizada",
        "Consultoria técnica"
      ],
      cta: "Falar com Vendas",
      popular: false
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      code: `// Obter cotação em tempo real
const response = await fetch(
  'https://api.tradepar.com/v1/quotes/realtime?symbols=EURUSD,GBPUSD',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);

const data = await response.json();
console.log(data);`
    },
    {
      language: "Python",
      code: `import requests

# Calcular RSI
url = "https://api.tradepar.com/v1/indicators/rsi"
params = {
    "symbol": "EURUSD",
    "period": 14,
    "timeframe": "1h"
}
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(f"RSI: {data['value']}")`
    },
    {
      language: "cURL",
      code: `# Dados históricos
curl -X GET "https://api.tradepar.com/v1/quotes/historical?symbol=EURUSD&timeframe=1d&from=2024-01-01&to=2024-01-15" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    }
  ];

  const useCases = [
    {
      title: "Trading Algorítmico",
      description: "Construa bots de trading automatizados com dados em tempo real e execução de ordens",
      icon: Terminal,
      examples: ["High-frequency trading", "Market making", "Arbitragem", "Grid trading"]
    },
    {
      title: "Análise e Backtesting",
      description: "Teste estratégias com dados históricos precisos e métricas de performance",
      icon: BarChart3,
      examples: ["Backtesting de estratégias", "Walk-forward analysis", "Monte Carlo simulation", "Otimização"]
    },
    {
      title: "Dashboards e Apps",
      description: "Crie aplicações personalizadas de monitoramento e análise de mercado",
      icon: Gauge,
      examples: ["Dashboards customizados", "Aplicativos mobile", "Alertas personalizados", "Portfólio tracking"]
    },
    {
      title: "Pesquisa Quantitativa",
      description: "Análise avançada de dados para pesquisa e desenvolvimento de estratégias",
      icon: Database,
      examples: ["Machine learning models", "Análise estatística", "Pattern recognition", "Sentiment analysis"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-1.5">
                <Code className="h-4 w-4 mr-2" />
                RESTful API • WebSocket • Documentação Completa
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                API Profissional de
                <span className="text-gradient-bull"> Dados Forex</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Acesse dados de mercado em tempo real, históricos, indicadores técnicos e muito mais. 
                Integração simples com documentação completa e suporte para todas as linguagens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow-bull">
                  <Key className="h-5 w-5 mr-2" />
                  Obter API Key Grátis
                </Button>
                <Button size="lg" variant="outline">
                  <FileCode className="h-5 w-5 mr-2" />
                  Ver Documentação
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<100ms", label: "Latência Média" },
                { value: "150+", label: "Pares de Moedas" },
                { value: "50M+", label: "Requests/Mês" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-bull mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recursos da <span className="text-gradient-bull">API</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tudo que você precisa para construir aplicações de trading profissionais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Principais <span className="text-gradient-bull">Endpoints</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                API RESTful bem documentada e fácil de integrar
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge className={
                        endpoint.method === "GET" ? "bg-chart-2" :
                        endpoint.method === "POST" ? "bg-primary" : "bg-chart-4"
                      }>
                        {endpoint.method}
                      </Badge>
                      <div className="flex-1">
                        <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                        <p className="text-sm text-muted-foreground mt-2">{endpoint.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground mb-2">Parâmetros:</div>
                        <div className="flex flex-wrap gap-2">
                          {endpoint.params.map((param, paramIndex) => (
                            <Badge key={paramIndex} variant="outline" className="text-xs font-mono">
                              {param}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground mb-2">Exemplo de resposta:</div>
                        <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
                          <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Exemplos de <span className="text-gradient-bull">Código</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comece rapidamente com exemplos em múltiplas linguagens
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {codeExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-primary" />
                        {example.language}
                      </CardTitle>
                      <Button variant="ghost" size="sm">
                        Copiar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de <span className="text-gradient-bull">Uso</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja o que você pode construir com nossa API
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={index} className="hover-lift hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planos e <span className="text-gradient-bull">Preços</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha o plano ideal para suas necessidades
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`hover-lift transition-all ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <Badge className="w-fit mb-2 bg-gradient-bull">Mais Popular</Badge>
                    )}
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gradient-bull">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="text-sm font-semibold">{plan.requests}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'glow-bull' : ''}`} variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Pronto para Começar a Integrar?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Obtenha sua API key gratuita agora e comece a construir em minutos. 
                Sem cartão de crédito necessário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="glow-bull">
                  <Key className="h-5 w-5 mr-2" />
                  Criar Conta Grátis
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  <FileCode className="h-5 w-5 mr-2" />
                  Explorar Documentação
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default API;
