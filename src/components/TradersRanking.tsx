import { TrendingUp, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import trader1 from "@/assets/trader-1.jpg";
import trader2 from "@/assets/trader-2.jpg";
import trader3 from "@/assets/trader-3.jpg";

const topTraders = [
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
];

const TradersRanking = () => {
  return (
    <section id="traders" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <Award className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Desempenho Verificado</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ranking de <span className="text-gradient-bear">Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os traders com melhor desempenho, verificados através do Myfxbook e FXBlue.
          </p>
        </div>

        {/* Trader Cards */}
        <div className="max-w-5xl mx-auto space-y-4">
          {topTraders.map((trader) => (
            <div key={trader.rank} className="flex items-center gap-4">
              {/* Rank Badge - Outside */}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-background border-2 border-destructive text-xl font-bold text-destructive">
                {trader.rank}º
              </div>
              
              {/* Trader Card */}
              <div className="flex-1 group bg-card border border-border rounded-xl p-6 hover-lift hover:border-destructive/40 transition-all">
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img 
                      src={trader.avatar} 
                      alt={trader.name}
                      className="w-24 h-24 object-cover rounded-lg border-2 border-border"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold">{trader.name}</h3>
                      {trader.verified && (
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">{trader.strategy}</Badge>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-6">
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Retorno</p>
                        <p className="text-lg font-bold text-primary">{trader.return}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Drawdown</p>
                        <p className="text-lg font-bold text-destructive">{trader.drawdown}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Win Rate</p>
                        <p className="text-lg font-bold">{trader.winRate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1 text-xs">Trades</p>
                        <p className="text-lg font-bold">{trader.trades}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex-shrink-0 px-6 py-2 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all font-medium text-sm">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 md:p-12 bg-card border border-border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                <Users className="h-10 w-10 text-destructive" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Junte-se à Comunidade</h3>
              <p className="text-muted-foreground mb-4">
                Compartilhe seus resultados, analise estatísticas e aprenda com os melhores traders do mercado.
              </p>
              <button className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium hover:bg-destructive/90 transition-colors glow-bear">
                Criar Perfil de Trader
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradersRanking;
