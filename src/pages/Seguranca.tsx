import { Shield, AlertTriangle, CheckCircle2, Lock, Eye, FileCheck, Award, Scale, Globe, Server, UserCheck, BadgeAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const securityChecks = [
  {
    icon: Shield,
    title: "Regulamentação",
    description: "Verifique se a corretora é regulada por órgãos respeitados como FCA, CySEC, ASIC ou CFTC",
    type: "good",
    details: [
      "Licença válida e verificável",
      "Auditoria regular por órgãos independentes",
      "Registro público acessível",
      "Conformidade com regulações internacionais"
    ]
  },
  {
    icon: Lock,
    title: "Segregação de Fundos",
    description: "Seus fundos devem estar separados do capital operacional da corretora",
    type: "good",
    details: [
      "Contas segregadas em bancos tier-1",
      "Proteção contra falência da corretora",
      "Auditorias regulares de fundos",
      "Transparência na gestão de capital"
    ]
  },
  {
    icon: FileCheck,
    title: "Proteção ao Investidor",
    description: "Esquemas de compensação que protegem seu capital em caso de problemas",
    type: "good",
    details: [
      "FSCS (UK) até £85,000",
      "ICF (Cyprus) até €20,000",
      "Cobertura adicional por corretora",
      "Processos claros de compensação"
    ]
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Informações claras sobre spreads, comissões e políticas de execução",
    type: "good",
    details: [
      "Tabela de spreads pública",
      "Política de execução detalhada",
      "Histórico de slippage",
      "Relatórios de qualidade de execução"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Red Flags",
    description: "Sinais de alerta que indicam possíveis problemas com a corretora",
    type: "warning",
    details: [
      "Prometem retornos garantidos",
      "Sem regulamentação clara",
      "Dificuldades para sacar fundos",
      "Reclamações frequentes não resolvidas"
    ]
  },
  {
    icon: BadgeAlert,
    title: "Esquemas Ponzi",
    description: "Identifique e evite esquemas fraudulentos disfarçados de trading",
    type: "warning",
    details: [
      "Retornos irrealistas prometidos",
      "Estrutura de pirâmide/recrutamento",
      "Falta de transparência nas operações",
      "Pressão para investir rapidamente"
    ]
  },
];

const regulators = [
  {
    name: "FCA",
    fullName: "Financial Conduct Authority",
    country: "Reino Unido",
    rating: "Tier 1",
    protection: "£85,000 FSCS",
    description: "Um dos reguladores mais rigorosos do mundo"
  },
  {
    name: "ASIC",
    fullName: "Australian Securities and Investments Commission",
    country: "Austrália",
    rating: "Tier 1",
    protection: "Segregação obrigatória",
    description: "Regulador altamente respeitado no mercado asiático"
  },
  {
    name: "CySEC",
    fullName: "Cyprus Securities and Exchange Commission",
    country: "Chipre",
    rating: "Tier 2",
    protection: "€20,000 ICF",
    description: "Regulador europeu com padrões MiFID II"
  },
  {
    name: "CFTC",
    fullName: "Commodity Futures Trading Commission",
    country: "Estados Unidos",
    rating: "Tier 1",
    protection: "Alta proteção",
    description: "Regulador americano com requisitos rigorosos"
  },
  {
    name: "BaFin",
    fullName: "Bundesanstalt für Finanzdienstleistungsaufsicht",
    country: "Alemanha",
    rating: "Tier 1",
    protection: "€100,000",
    description: "Regulador alemão conhecido pela rigidez"
  },
  {
    name: "FSA",
    fullName: "Financial Services Agency",
    country: "Japão",
    rating: "Tier 1",
    protection: "Alta segregação",
    description: "Regulador japonês extremamente rigoroso"
  },
];

const verificationSteps = [
  {
    step: "1",
    title: "Verifique a Licença",
    description: "Confirme o número de licença no site do regulador",
    actions: [
      "Acesse o site oficial do regulador",
      "Busque o nome da corretora",
      "Verifique status ativo da licença",
      "Confirme escopo de atuação"
    ]
  },
  {
    step: "2",
    title: "Pesquise Reputação",
    description: "Busque avaliações e experiências de outros traders",
    actions: [
      "Leia reviews em sites independentes",
      "Verifique fóruns de trading",
      "Analise reclamações e resoluções",
      "Busque prêmios e reconhecimentos"
    ]
  },
  {
    step: "3",
    title: "Teste a Plataforma",
    description: "Use conta demo para avaliar qualidade de execução",
    actions: [
      "Abra conta demo gratuita",
      "Teste velocidade de execução",
      "Verifique spreads reais",
      "Avalie estabilidade da plataforma"
    ]
  },
  {
    step: "4",
    title: "Analise Custos",
    description: "Compare todos os custos envolvidos nas operações",
    actions: [
      "Spreads para pares principais",
      "Comissões por lote",
      "Taxas de depósito/saque",
      "Custos de inatividade"
    ]
  },
];

const securityBestPractices = [
  {
    icon: Lock,
    title: "Autenticação de Dois Fatores",
    description: "Sempre ative 2FA em todas suas contas de trading",
    importance: "Crítico"
  },
  {
    icon: Shield,
    title: "Senhas Fortes e Únicas",
    description: "Use senhas complexas e diferentes para cada plataforma",
    importance: "Crítico"
  },
  {
    icon: Eye,
    title: "Monitoramento Regular",
    description: "Verifique regularmente suas contas e transações",
    importance: "Alta"
  },
  {
    icon: Server,
    title: "Conexões Seguras",
    description: "Evite redes WiFi públicas para acessar contas de trading",
    importance: "Alta"
  },
  {
    icon: UserCheck,
    title: "Verificação de E-mails",
    description: "Confirme autenticidade de e-mails da corretora antes de clicar",
    importance: "Média"
  },
  {
    icon: FileCheck,
    title: "Documentação Completa",
    description: "Mantenha registros de todas transações e comunicações",
    importance: "Média"
  },
];

const commonScams = [
  {
    title: "Robôs Milagrosos",
    description: "EAs que prometem lucros garantidos sem risco",
    warning: "Nenhum sistema garante lucros. Se parece bom demais, provavelmente é fraude."
  },
  {
    title: "Sinais Pagos Fraudulentos",
    description: "Grupos que cobram caro por sinais com resultados manipulados",
    warning: "Verifique histórico real verificado por terceiros. Desconfie de win rates acima de 80%."
  },
  {
    title: "Corretoras Não Reguladas",
    description: "Brokers offshore sem regulamentação adequada",
    warning: "Sempre opere apenas com corretoras reguladas por órgãos reconhecidos."
  },
  {
    title: "Conta Gerenciada Fraudulenta",
    description: "Pessoas que oferecem gerenciar seu capital prometendo altos retornos",
    warning: "Nunca transfira fundos diretamente para terceiros. Use apenas gestores licenciados."
  },
  {
    title: "Phishing de Corretoras",
    description: "Sites falsos que imitam corretoras legítimas",
    warning: "Sempre verifique a URL e certificado SSL. Marque sites oficiais nos favoritos."
  },
];

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Segurança em Primeiro Lugar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proteja seu <span className="text-gradient-bull">Capital</span> no Trading
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Guia completo de segurança para identificar corretoras confiáveis, evitar fraudes e proteger seus investimentos no mercado forex. Aprenda a verificar regulamentações, identificar red flags e operar com segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Security Checks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Checklist de <span className="text-gradient-bear">Segurança</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Principais pontos para verificar antes de depositar seu capital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {securityChecks.map((check, index) => {
              const Icon = check.icon;
              const isWarning = check.type === "warning";
              
              return (
                <Card
                  key={index}
                  className={`bg-card border-border hover-lift transition-all ${
                    isWarning ? "border-destructive/30" : "border-primary/30"
                  }`}
                >
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                      isWarning 
                        ? "bg-destructive/10 border border-destructive/20" 
                        : "bg-primary/10 border border-primary/20"
                    }`}>
                      <Icon className={`h-6 w-6 ${isWarning ? "text-destructive" : "text-primary"}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{check.title}</CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {check.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {check.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            isWarning ? "bg-destructive" : "bg-primary"
                          }`} />
                          <span>{detail}</span>
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

      {/* Regulators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principais <span className="text-gradient-bear">Reguladores</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça os órgãos reguladores mais respeitados do mercado financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {regulators.map((regulator, index) => (
              <Card key={index} className="bg-card border-border hover-lift transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="text-2xl mb-1">{regulator.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{regulator.country}</p>
                    </div>
                    <Badge variant={regulator.rating === "Tier 1" ? "default" : "secondary"}>
                      {regulator.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm font-medium mb-2">
                    {regulator.fullName}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mb-3">
                    {regulator.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-1">Proteção ao Investidor</p>
                    <p className="text-sm font-semibold text-primary">{regulator.protection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-gradient-bear">Verificar</span> uma Corretora
            </h2>
            <p className="text-lg text-muted-foreground">
              Processo passo a passo para validar a segurança e confiabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {verificationSteps.map((step, index) => (
              <Card key={index} className="bg-card border-border hover-lift transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.actions.map((action, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Boas Práticas de <span className="text-gradient-bear">Segurança</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Medidas essenciais para proteger suas contas e capital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {securityBestPractices.map((practice, index) => {
              const Icon = practice.icon;
              const importanceColor = practice.importance === "Crítico" ? "destructive" : practice.importance === "Alta" ? "primary" : "secondary";
              
              return (
                <Card key={index} className="bg-card border-border hover-lift transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant={importanceColor === "destructive" ? "destructive" : "secondary"} className="text-xs">
                        {practice.importance}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{practice.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {practice.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Scams */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Golpes <span className="text-gradient-bear">Comuns</span> no Trading
            </h2>
            <p className="text-lg text-muted-foreground">
              Aprenda a identificar e evitar as fraudes mais frequentes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {commonScams.map((scam, index) => (
              <Alert key={index} variant="destructive" className="border-destructive/30">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle className="text-lg font-bold">{scam.title}</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p className="text-sm">{scam.description}</p>
                  <p className="text-sm font-semibold">⚠️ {scam.warning}</p>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-primary/20 hover-lift transition-all">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">Checklist do Trader Consciente</CardTitle>
                <CardDescription className="text-lg mb-6">
                  Baixe nosso guia completo em PDF com checklist detalhado para verificação de corretoras, lista de reguladores confiáveis e alertas de segurança atualizados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold mb-1">50+ Checks</h4>
                    <p className="text-xs text-muted-foreground">Pontos de verificação</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold mb-1">20+ Reguladores</h4>
                    <p className="text-xs text-muted-foreground">Órgãos globais</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <Scale className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold mb-1">100% Gratuito</h4>
                    <p className="text-xs text-muted-foreground">Acesso completo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Seguranca;
