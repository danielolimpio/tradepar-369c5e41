import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import trader1 from "@/assets/trader-1.jpg";
import trader2 from "@/assets/trader-2.jpg";
import trader3 from "@/assets/trader-3.jpg";

const allTraders = [
  {
    rank: 1,
    name: "Carlos M.",
    avatar: trader1,
    return: "+187.3%",
    drawdown: "12.4%",
    trades: 342,
    winRate: "68%",
    strategy: "Scalping",
    verified: true,
  },
  {
    rank: 2,
    name: "Ana S.",
    avatar: trader2,
    return: "+154.8%",
    drawdown: "8.2%",
    trades: 189,
    winRate: "72%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 3,
    name: "Pedro L.",
    avatar: trader3,
    return: "+132.1%",
    drawdown: "15.6%",
    trades: 456,
    winRate: "64%",
    strategy: "Day Trade",
    verified: true,
  },
  {
    rank: 4,
    name: "Julia R.",
    avatar: trader1,
    return: "+128.5%",
    drawdown: "10.1%",
    trades: 267,
    winRate: "70%",
    strategy: "Position Trading",
    verified: true,
  },
  {
    rank: 5,
    name: "Ricardo F.",
    avatar: trader2,
    return: "+119.7%",
    drawdown: "14.3%",
    trades: 398,
    winRate: "66%",
    strategy: "Scalping",
    verified: true,
  },
  {
    rank: 6,
    name: "Mariana T.",
    avatar: trader3,
    return: "+115.2%",
    drawdown: "9.8%",
    trades: 223,
    winRate: "73%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 7,
    name: "Bruno K.",
    avatar: trader1,
    return: "+108.9%",
    drawdown: "13.2%",
    trades: 412,
    winRate: "65%",
    strategy: "Day Trade",
    verified: true,
  },
  {
    rank: 8,
    name: "Fernanda A.",
    avatar: trader2,
    return: "+102.4%",
    drawdown: "11.7%",
    trades: 289,
    winRate: "69%",
    strategy: "Scalping",
    verified: true,
  },
  {
    rank: 9,
    name: "Thiago B.",
    avatar: trader3,
    return: "+98.6%",
    drawdown: "8.9%",
    trades: 178,
    winRate: "74%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 10,
    name: "Camila D.",
    avatar: trader1,
    return: "+95.3%",
    drawdown: "12.8%",
    trades: 356,
    winRate: "67%",
    strategy: "Day Trade",
    verified: true,
  },
  {
    rank: 11,
    name: "Rafael G.",
    avatar: trader2,
    return: "+92.1%",
    drawdown: "10.4%",
    trades: 245,
    winRate: "71%",
    strategy: "Position Trading",
    verified: true,
  },
  {
    rank: 12,
    name: "Larissa P.",
    avatar: trader3,
    return: "+88.7%",
    drawdown: "9.3%",
    trades: 201,
    winRate: "72%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 13,
    name: "Diego M.",
    avatar: trader1,
    return: "+85.4%",
    drawdown: "14.1%",
    trades: 423,
    winRate: "64%",
    strategy: "Scalping",
    verified: true,
  },
  {
    rank: 14,
    name: "Patricia V.",
    avatar: trader2,
    return: "+82.9%",
    drawdown: "11.2%",
    trades: 312,
    winRate: "68%",
    strategy: "Day Trade",
    verified: true,
  },
  {
    rank: 15,
    name: "Lucas H.",
    avatar: trader3,
    return: "+79.6%",
    drawdown: "8.7%",
    trades: 167,
    winRate: "75%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 16,
    name: "Amanda C.",
    avatar: trader1,
    return: "+76.2%",
    drawdown: "13.5%",
    trades: 389,
    winRate: "66%",
    strategy: "Scalping",
    verified: true,
  },
  {
    rank: 17,
    name: "Gustavo N.",
    avatar: trader2,
    return: "+73.8%",
    drawdown: "10.9%",
    trades: 278,
    winRate: "69%",
    strategy: "Day Trade",
    verified: true,
  },
  {
    rank: 18,
    name: "Isabela O.",
    avatar: trader3,
    return: "+70.5%",
    drawdown: "9.1%",
    trades: 192,
    winRate: "73%",
    strategy: "Position Trading",
    verified: true,
  },
  {
    rank: 19,
    name: "Rodrigo Q.",
    avatar: trader1,
    return: "+67.3%",
    drawdown: "12.6%",
    trades: 334,
    winRate: "67%",
    strategy: "Swing",
    verified: true,
  },
  {
    rank: 20,
    name: "Beatriz W.",
    avatar: trader2,
    return: "+64.1%",
    drawdown: "11.4%",
    trades: 256,
    winRate: "70%",
    strategy: "Day Trade",
    verified: true,
  },
];

const Traders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <Award className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Desempenho Verificado</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ranking de <span className="text-gradient-bear">Traders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os traders com melhor desempenho, verificados através do Myfxbook e FXBlue. 
              Todos os resultados são auditados e confirmados em contas reais.
            </p>
          </div>
        </div>
      </section>

      {/* Traders List */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {allTraders.map((trader) => (
              <div key={trader.rank} className="flex items-center gap-4">
                {/* Rank Badge - Outside */}
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-background border-2 border-destructive text-xl font-bold text-destructive">
                  {trader.rank}º
                </div>
                
                {/* Trader Card */}
                <div className="flex-1 group bg-card border border-border rounded-xl p-6 hover-lift hover:border-destructive/40 transition-all">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img 
                        src={trader.avatar} 
                        alt={`Foto do trader ${trader.name}`}
                        className="w-24 h-24 object-cover rounded-lg border-2 border-border"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold">{trader.name}</h3>
                        {trader.verified && (
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                        <Badge variant="secondary">{trader.strategy}</Badge>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Retorno</p>
                          <p className="text-lg font-bold text-primary">{trader.return}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Drawdown</p>
                          <p className="text-lg font-bold text-destructive">{trader.drawdown}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Win Rate</p>
                          <p className="text-lg font-bold text-foreground">{trader.winRate}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Trades</p>
                          <p className="text-lg font-bold text-foreground">{trader.trades}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <Button variant="outline" className="w-full md:w-auto border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-card to-muted border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Junte-se à Comunidade
            </h3>
            <p className="text-muted-foreground mb-6">
              Crie seu perfil, compartilhe suas estratégias e inspire outros traders com seus resultados.
            </p>
            <Button size="lg" className="glow-bull">
              Criar Perfil de Trader
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Traders;