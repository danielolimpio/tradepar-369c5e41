import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { author } from "@/data/author";
import {
  FacebookIcon,
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  WebsiteIcon,
} from "@/components/SocialIcons";
import {
  Users,
  TrendingUp,
  Shield,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
} from "lucide-react";

const socialList = [
  { href: author.socials.website, label: "Site", Icon: WebsiteIcon },
  { href: author.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: author.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: author.socials.x, label: "X", Icon: XIcon },
  { href: author.socials.facebook, label: "Facebook", Icon: FacebookIcon },
];

const highlights = [
  {
    Icon: Briefcase,
    title: "IB e Parcerias Globais",
    text:
      "Atuação como Introducing Broker (IB) e parceiro de corretoras rigorosamente regulamentadas, com mais de 10 anos de mercado.",
  },
  {
    Icon: TrendingUp,
    title: "Gestão de Network e Capital",
    text:
      "Conexão e operação em redes que movimentaram mais de 1 milhão de dólares, com foco em estratégias consistentes e de longo prazo.",
  },
  {
    Icon: Users,
    title: "Traders de Elite",
    text:
      "Trabalho conjunto com traders cujas estratégias têm backtests de 5+ anos e históricos auditados em Myfxbook e MQL5 (12 a 24 meses).",
  },
  {
    Icon: Shield,
    title: "Consultoria e Custódia Própria",
    text:
      "Modelo onde o investimento ficava 100% na conta do próprio cliente, sob sua total custódia, eliminando riscos de terceiros.",
  },
  {
    Icon: GraduationCap,
    title: "Educação e Conscientização",
    text:
      "Conscientização permanente sobre riscos da renda variável, levando oportunidades reais com os pés no chão.",
  },
];

const QuemSomos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Sobre Daniel Olímpio | Quem Somos - Tradepar"
        description="Conheça Daniel Olímpio, fundador do Tradepar: Desenvolvedor Web com mais de 5 anos de atuação direta no mercado Forex como IB e parceiro de corretoras regulamentadas."
        canonicalPath="/quem-somos"
        keywords="quem somos, sobre tradepar, daniel olimpio, fundador tradepar, autor forex"
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-border">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                <img
                  src={author.photo}
                  alt="Daniel Olímpio, fundador do Tradepar"
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary/40"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  <Code2 className="w-3.5 h-3.5" /> Quem Somos
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Sobre Daniel Olímpio:{" "}
                  <span className="text-gradient-bull">
                    a experiência de um veterano a serviço da sua segurança
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Olá, sou Daniel Olímpio. Tenho 46 anos, sou Desenvolvedor Web
                  e o idealizador por trás do <strong className="text-foreground">TradePar.com.br</strong>.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {socialList.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Daniel Olímpio no ${label}`}
                      className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Intro */}
          <section className="mb-12 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Minha trajetória profissional é marcada por uma base sólida de
              duas décadas atuando com <strong className="text-foreground">Network Marketing</strong>, o que me
              ensinou o verdadeiro valor da construção de relacionamentos, da
              ética e da transparência. Porém, foi a minha imersão no mercado
              financeiro que moldou a minha visão analítica e o padrão de
              exigência que trago para este site hoje.
            </p>
          </section>

          {/* Bagagem */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Minha Bagagem no Mercado Financeiro
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Antes de dedicar-me integralmente ao desenvolvimento do TradePar,
              tive uma atuação intensa e direta no mercado de Forex e
              investimentos. Ao longo de <strong className="text-foreground">mais de 5 anos de experiência prática</strong>{" "}
              nesse ecossistema, construí um histórico do qual me orgulho,
              sempre pautado pela proteção do investidor:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-xl p-6 hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Propósito */}
          <section className="mb-16 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              O Que Faço Hoje: o Propósito do TradePar
            </h2>
            <p>
              Hoje, <strong className="text-foreground">não ofereço mais consultoria financeira direta</strong>, nem atuo
              como IB ou gestor de redes de investimento. Meu foco é{" "}
              <strong className="text-foreground">100% tecnológico e editorial</strong>.
            </p>
            <p>
              Utilizo minha expertise como Desenvolvedor Web e meu conhecimento
              profundo de "como as coisas funcionam nos bastidores" para criar
              e manter o TradePar.com.br.
            </p>
            <p>
              Criei este site de ranking de corretoras porque sei exatamente
              onde estão as armadilhas, as taxas ocultas e as práticas abusivas.
              Eu já estive do outro lado, já trouxe capital para esse mercado e
              sei o que separa uma corretora segura de uma cilada.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 rounded-2xl p-6 md:p-8 not-prose">
              <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Minha missão
              </p>
              <p className="text-muted-foreground">
                Usar minha experiência de mais de 20 anos em negócios e minha
                vivência no Forex para <strong className="text-foreground">filtrar, testar e ranquear as melhores
                plataformas</strong> para o investidor brasileiro.
              </p>
            </div>

            <p>
              Aqui você não encontrará vendas agressivas. Você encontrará
              análises técnicas, transparência, foco em regulamentação e a
              visão de alguém que já operou com mais de 1 milhão de dólares em
              redes sérias e sabe exatamente o que exigir de uma corretora.
            </p>
            <p className="text-foreground font-medium">
              Seja bem-vindo ao TradePar. Navegue com segurança.
            </p>
          </section>

          {/* Assinatura */}
          <section className="border-t border-border pt-8">
            <div className="flex items-center gap-4">
              <img
                src={author.photo}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-bold text-lg">{author.name}</p>
                <p className="text-sm text-muted-foreground">{author.role}</p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default QuemSomos;
