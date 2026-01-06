import { Award, TrendingUp, Users, TrendingDown, Target, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import trader1 from "@/assets/trader-1.jpg";
import trader2 from "@/assets/trader-2.jpg";
import trader3 from "@/assets/trader-3.jpg";

const topTraders = [
  { rank: 1, name: "Carlos Henrique", avatar: trader1, return: "+156.8%", drawdown: "-8.2%", trades: 847, winRate: "72%", strategy: "Scalping EUR/USD", verified: true },
  { rank: 2, name: "Ana Paula", avatar: trader2, return: "+134.5%", drawdown: "-12.4%", trades: 623, winRate: "68%", strategy: "Swing Trading", verified: true },
  { rank: 3, name: "Roberto Santos", avatar: trader3, return: "+98.3%", drawdown: "-6.1%", trades: 412, winRate: "75%", strategy: "Position Trading", verified: true },
];

const TradersRanking = () => {
  return (
    <section id="traders" className="py-12 md:py-20 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-4 md:mb-6">
            <Award className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Desempenho Verificado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Ranking de <span className="text-gradient-bear">Traders</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Conheça os traders com melhor desempenho, verificados através do Myfxbook e FXBlue.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 md:space-y-4">
          {topTraders.map((trader) => (
            <div key={trader.rank} className="flex items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-background border-2 border-destructive text-sm sm:text-lg md:text-xl font-bold text-destructive">
                {trader.rank}º
              </div>
              
              <div className="flex-1 min-w-0 group bg-card border border-border rounded-xl p-3 sm:p-4 md:p-6 hover-lift hover:border-destructive/40 transition-all">
                <div className="flex flex-col sm:hidden gap-3">
                  <div className="flex items-center gap-3">
                    <img src={trader.avatar} alt={trader.name} className="w-12 h-12 object-cover rounded-lg border-2 border-border flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-base font-bold truncate">{trader.name}</h3>
                        {trader.verified && <TrendingUp className="h-3.5 w-3.5 text-primary flex-shrink-0" />}
                      </div>
                      <Badge variant="secondary" className="text-xs mt-1">{trader.strategy}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 text-muted-foreground mb-0.5"><TrendingUp className="h-3 w-3" /><span>Retorno</span></div>
                      <p className="font-bold text-primary text-sm">{trader.return}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 text-muted-foreground mb-0.5"><TrendingDown className="h-3 w-3" /><span>Drawdown</span></div>
                      <p className="font-bold text-destructive text-sm">{trader.drawdown}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 text-muted-foreground mb-0.5"><Target className="h-3 w-3" /><span>Win Rate</span></div>
                      <p className="font-bold text-sm">{trader.winRate}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="flex items-center gap-1 text-muted-foreground mb-0.5"><BarChart3 className="h-3 w-3" /><span>Trades</span></div>
                      <p className="font-bold text-sm">{trader.trades}</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all font-medium text-sm">Ver Perfil</button>
                </div>

                <div className="hidden sm:flex items-center gap-4 md:gap-6">
                  <img src={trader.avatar} alt={trader.name} className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 object-cover rounded-lg border-2 border-border flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 md:mb-4 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold">{trader.name}</h3>
                      {trader.verified && <Badge variant="outline" className="border-primary/30 text-primary text-xs"><TrendingUp className="h-3 w-3 mr-1" />Verificado</Badge>}
                      <Badge variant="secondary" className="text-xs">{trader.strategy}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Retorno</p><p className="text-base md:text-lg font-bold text-primary">{trader.return}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Drawdown</p><p className="text-base md:text-lg font-bold text-destructive">{trader.drawdown}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Win Rate</p><p className="text-base md:text-lg font-bold">{trader.winRate}</p></div>
                      <div><p className="text-muted-foreground mb-0.5 text-xs">Trades</p><p className="text-base md:text-lg font-bold">{trader.trades}</p></div>
                    </div>
                  </div>
                  <button className="flex-shrink-0 px-4 md:px-6 py-2 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all font-medium text-sm whitespace-nowrap">Ver Perfil</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-16 p-4 sm:p-6 md:p-8 lg:p-12 bg-card border border-border rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-destructive" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Junte-se à Comunidade</h3>
              <p className="text-sm md:text-base text-muted-foreground">Crie seu perfil de trader e compartilhe seus resultados verificados.</p>
            </div>
            <Link to="/traders/" className="w-full md:w-auto">
              <Button size="lg" variant="destructive" className="w-full md:w-auto">Criar Perfil</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradersRanking;
