import { TrendingUp, Mail, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navegação: [
      { label: "Corretoras", href: "#corretoras" },
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Estratégias", href: "#estrategias" },
      { label: "Traders", href: "#traders" },
      { label: "Segurança", href: "#seguranca" },
    ],
    Recursos: [
      { label: "Blog", href: "#" },
      { label: "Tutoriais", href: "#" },
      { label: "Ferramentas", href: "#" },
      { label: "API", href: "#" },
      { label: "Comunidade", href: "#" },
    ],
    Legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Contato", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <TrendingUp className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold">
                Trader<span className="text-gradient-bull">par</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              O portal de referência em forex com rankings de corretoras verificadas, estratégias profissionais
              e tecnologia de ponta para traders de todos os níveis.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover-lift"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-destructive">Aviso de Risco:</strong> Trading de forex e CFDs envolve
              risco significativo de perda e pode não ser adequado para todos os investidores. Antes de
              negociar, considere cuidadosamente seus objetivos de investimento, nível de experiência e
              tolerância ao risco. O desempenho passado não é indicativo de resultados futuros.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Traderpar. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito para traders, por traders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
