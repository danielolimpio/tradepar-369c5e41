import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contato = () => {
  useEffect(() => {
    document.title = "Contato - Tradepar | Entre em Contato Conosco";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Entre em contato com a equipe Tradepar. Tire suas dúvidas sobre forex trading, rankings de corretoras e nossos serviços. Estamos aqui para ajudar."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-6 glow-bull">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Entre em <span className="text-gradient-bull">Contato</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tem dúvidas sobre trading forex, nossos rankings ou serviços? 
              Estamos aqui para ajudar você.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Envie-nos um email e responderemos em até 24 horas
                    </p>
                    <a 
                      href="mailto:contato@tradepar.com" 
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      contato@tradepar.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Suporte</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Horário de atendimento: Seg-Sex, 9h-18h (BRT)
                    </p>
                    <p className="text-primary text-sm font-medium">
                      +55 (11) 9999-9999
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Localização</h3>
                    <p className="text-sm text-muted-foreground">
                      São Paulo, Brasil<br />
                      Atendimento 100% digital
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/20 rounded-xl p-6">
                <h3 className="font-bold mb-4">Links Rápidos</h3>
                <div className="space-y-3">
                  <a href="/blog/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Blog e Artigos
                  </a>
                  <a href="/corretoras/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Rankings de Corretoras
                  </a>
                  <a href="/estrategias/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Estratégias de Trading
                  </a>
                  <a href="/seguranca/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    → Guia de Segurança
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name"
                        placeholder="Seu nome"
                        className="h-12 bg-background border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="h-12 bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="h-12 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input 
                        id="subject"
                        placeholder="Sobre o que você quer falar?"
                        className="h-12 bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Descreva sua dúvida ou solicitação em detalhes..."
                      className="min-h-[200px] bg-background border-border resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Eu concordo com a{" "}
                      <a href="/politica-privacidade/" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o uso dos meus dados para responder esta solicitação.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto gap-2 glow-bull">
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-8 bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Como os rankings são atualizados?</h3>
                    <p className="text-sm text-muted-foreground">
                      Nossos rankings são revisados mensalmente com base em critérios objetivos 
                      incluindo regulamentação, spreads, plataformas e feedback de usuários.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Vocês oferecem consultoria de trading?</h3>
                    <p className="text-sm text-muted-foreground">
                      Não oferecemos consultoria personalizada. Nosso conteúdo é apenas educacional 
                      e informativo. Recomendamos consultar um profissional certificado.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Como posso sugerir uma corretora?</h3>
                    <p className="text-sm text-muted-foreground">
                      Envie-nos um email com informações sobre a corretora e avaliaremos sua 
                      inclusão em nossos próximos rankings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Vocês têm parceria com corretoras?</h3>
                    <p className="text-sm text-muted-foreground">
                      Sim, podemos receber comissões de afiliação. No entanto, isso não afeta 
                      nossa avaliação independente e objetiva. Veja nosso{" "}
                      <a href="/disclaimer/" className="text-primary hover:underline">Disclaimer</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;