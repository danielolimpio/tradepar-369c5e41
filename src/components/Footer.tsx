import { 
  Mail, 
  Twitter, 
  Youtube, 
  Github, 
  Home, 
  Building2, 
  Cpu, 
  LineChart, 
  Users, 
  Shield, 
  BookOpen, 
  GraduationCap, 
  Wrench, 
  Code2, 
  MessageCircle, 
  FileText, 
  Lock, 
  Cookie, 
  AlertTriangle, 
  Phone,
  LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, { label: string; href: string; icon: LucideIcon }[]> = {
    Navegação: [
      { label: "Home", href: "/", icon: Home },
      { label: "Corretoras", href: "/corretoras", icon: Building2 },
      { label: "Tecnologia", href: "/tecnologia", icon: Cpu },
      { label: "Estratégias", href: "/estrategias", icon: LineChart },
      { label: "Traders", href: "/traders", icon: Users },
      { label: "Segurança", href: "/seguranca", icon: Shield },
    ],
    Recursos: [
      { label: "Blog", href: "/blog", icon: BookOpen },
      { label: "Tutoriais", href: "/tutoriais", icon: GraduationCap },
      { label: "Ferramentas", href: "/ferramentas", icon: Wrench },
      { label: "API", href: "/api", icon: Code2 },
      { label: "Comunidade", href: "/comunidade", icon: MessageCircle },
    ],
    Legal: [
      { label: "Termos de Uso", href: "/termos-de-uso", icon: FileText },
      { label: "Política de Privacidade", href: "/politica-privacidade", icon: Lock },
      { label: "Política de Cookies", href: "/politica-cookies", icon: Cookie },
      { label: "Disclaimer", href: "/disclaimer", icon: AlertTriangle },
      { label: "Contato", href: "/contato", icon: Phone },
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
            <Link to="/" className="flex items-center mb-4 group">
              <img 
                src={logo} 
                alt="Tradepar Logo" 
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
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
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                      >
                        <Icon className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
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
        <div className="flex flex-col items-center justify-center gap-2 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © Copyright {currentYear} | Tradepar | Todos os direitos reservados | Desenvolvido por{" "}
            <a 
              href="https://danielolimpio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              DanielOlimpio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
