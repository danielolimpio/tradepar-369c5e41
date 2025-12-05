import { useState, useRef } from "react";
import { Star, ArrowLeft, Check, X, Scale, Download, Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { 
  brokersData, 
  allRegulations, 
  depositRanges, 
  spreadRanges, 
  parseDeposit, 
  parseSpread,
  type BrokerComparison 
} from "@/data/brokersComparisonData";

const ComparacaoCorretoras = () => {
  const [selectedBrokers, setSelectedBrokers] = useState<string[]>([]);
  const [filterRegulation, setFilterRegulation] = useState<string>("all");
  const [filterDeposit, setFilterDeposit] = useState<string>("all");
  const [filterSpread, setFilterSpread] = useState<string>("all");
  const [isExporting, setIsExporting] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const filteredBrokers = brokersData.filter(broker => {
    if (filterRegulation !== "all" && !broker.regulation.includes(filterRegulation)) {
      return false;
    }
    
    if (filterDeposit !== "all") {
      const depositValue = parseDeposit(broker.minDeposit);
      if (filterDeposit === "0" && depositValue !== 0) return false;
      if (filterDeposit === "10" && depositValue > 10) return false;
      if (filterDeposit === "100" && depositValue > 100) return false;
      if (filterDeposit === "200" && depositValue > 200) return false;
      if (filterDeposit === "200+" && depositValue <= 200) return false;
    }
    
    if (filterSpread !== "all") {
      const spreadValue = parseSpread(broker.spreadMin);
      if (filterSpread === "0" && spreadValue !== 0) return false;
      if (filterSpread === "0.5" && spreadValue > 0.5) return false;
      if (filterSpread === "1.0" && spreadValue > 1.0) return false;
    }
    
    return true;
  });

  const toggleBroker = (slug: string) => {
    if (selectedBrokers.includes(slug)) {
      setSelectedBrokers(selectedBrokers.filter(s => s !== slug));
    } else if (selectedBrokers.length < 3) {
      setSelectedBrokers([...selectedBrokers, slug]);
    }
  };

  const clearSelection = () => setSelectedBrokers([]);
  
  const clearFilters = () => {
    setFilterRegulation("all");
    setFilterDeposit("all");
    setFilterSpread("all");
  };

  const hasActiveFilters = filterRegulation !== "all" || filterDeposit !== "all" || filterSpread !== "all";

  const selectedBrokersData = brokersData.filter(b => selectedBrokers.includes(b.slug));

  const renderBoolean = (value: boolean) => (
    value ? <Check className="h-5 w-5 text-bull mx-auto" /> : <X className="h-5 w-5 text-bear mx-auto" />
  );

  const exportToPDF = async () => {
    if (!tableRef.current || selectedBrokersData.length < 2) return;
    
    setIsExporting(true);
    toast({
      title: "Gerando PDF...",
      description: "Aguarde enquanto preparamos sua comparação.",
    });

    try {
      const element = tableRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      pdf.setFontSize(18);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Comparação de Corretoras de Forex', pdfWidth / 2, 15, { align: 'center' });
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text(`Gerado em ${new Date().toLocaleDateString('pt-BR')} - melhorcorretoraforex.com`, pdfWidth / 2, 22, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', imgX, 30, imgWidth * ratio * 0.95, imgHeight * ratio * 0.95);
      
      const brokerNames = selectedBrokersData.map(b => b.name).join('-');
      pdf.save(`comparacao-${brokerNames.toLowerCase().replace(/\s+/g, '-')}.pdf`);
      
      toast({
        title: "PDF exportado com sucesso!",
        description: "O arquivo foi baixado automaticamente.",
      });
    } catch (error) {
      toast({
        title: "Erro ao exportar",
        description: "Não foi possível gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Comparar Corretoras de Forex | Side-by-Side | Melhor Corretora Forex</title>
        <meta name="description" content="Compare corretoras de forex lado a lado. Selecione 2-3 corretoras e veja tabela comparativa detalhada com spreads, regulamentação, plataformas e mais." />
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-20">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Link to="/corretoras" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Corretoras
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comparação Detalhada</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Comparar <span className="text-gradient-bull">Corretoras</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Selecione 2 a 3 corretoras para ver uma comparação lado a lado com todos os detalhes importantes.
              </p>
            </div>

            <Card className="max-w-6xl mx-auto mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Filter className="h-5 w-5" />
                    Filtrar Corretoras
                  </CardTitle>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Limpar filtros
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Regulamentação</label>
                    <Select value={filterRegulation} onValueChange={setFilterRegulation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar regulador" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os reguladores</SelectItem>
                        {allRegulations.map(reg => (
                          <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Depósito Mínimo</label>
                    <Select value={filterDeposit} onValueChange={setFilterDeposit}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        {depositRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Spread Mínimo</label>
                    <Select value={filterSpread} onValueChange={setFilterSpread}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        {spreadRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {hasActiveFilters && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Mostrando {filteredBrokers.length} de {brokersData.length} corretoras
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="max-w-6xl mx-auto mb-8">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="flex items-center gap-2">
                    Selecionar Corretoras
                    <Badge variant="outline">
                      {selectedBrokers.length}/3 selecionadas
                    </Badge>
                  </CardTitle>
                  {selectedBrokers.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearSelection}>
                      Limpar seleção
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {filteredBrokers.map((broker) => {
                    const isSelected = selectedBrokers.includes(broker.slug);
                    const isDisabled = !isSelected && selectedBrokers.length >= 3;
                    
                    return (
                      <button
                        key={broker.slug}
                        onClick={() => toggleBroker(broker.slug)}
                        disabled={isDisabled}
                        className={`
                          relative p-3 rounded-lg border-2 transition-all text-left
                          ${isSelected 
                            ? 'border-primary bg-primary/10' 
                            : isDisabled 
                              ? 'border-border/50 opacity-50 cursor-not-allowed' 
                              : 'border-border hover:border-primary/50 hover:bg-accent/50'
                          }
                        `}
                      >
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="h-3 w-3 text-primary-foreground" />
                          </div>
                        )}
                        <img 
                          src={broker.logo} 
                          alt={broker.name}
                          className="w-12 h-12 object-contain rounded mb-2 mx-auto"
                        />
                        <p className="text-xs font-medium text-center truncate">{broker.name}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {selectedBrokersData.length >= 2 ? (
              <Card className="max-w-6xl mx-auto overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <CardTitle>Tabela Comparativa</CardTitle>
                    <Button 
                      onClick={exportToPDF} 
                      disabled={isExporting}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {isExporting ? "Gerando..." : "Exportar PDF"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div ref={tableRef} className="overflow-x-auto bg-background p-4 rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-48 font-semibold">Característica</TableHead>
                          {selectedBrokersData.map(broker => (
                            <TableHead key={broker.slug} className="text-center min-w-40">
                              <div className="flex flex-col items-center gap-2">
                                <img src={broker.logo} alt={broker.name} className="w-10 h-10 object-contain rounded" />
                                <span className="font-semibold">{broker.name}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-bull text-bull" />
                                  <span className="text-sm">{broker.rating}</span>
                                </div>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Fundação</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center">{b.founded}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Sede</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center text-sm">{b.headquarters}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Regulamentação</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center">
                              <div className="flex flex-wrap gap-1 justify-center">
                                {b.regulation.map(reg => (
                                  <Badge key={reg} variant="secondary" className="text-xs">{reg}</Badge>
                                ))}
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Depósito Mínimo</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center font-semibold">{b.minDeposit}</TableCell>)}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Spread Mínimo</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center font-semibold text-bull">{b.spreadMin}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Alavancagem</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center text-sm">{b.leverage}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Plataformas</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center text-sm">{b.platforms.join(", ")}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Instrumentos</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center">{b.instruments}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tipos de Conta</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center text-sm">{b.accountTypes.join(", ")}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Velocidade de Execução</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center">{b.executionSpeed}</TableCell>)}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Comissão</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center text-sm">{b.commission}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Taxa de Inatividade</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center text-sm">{b.inactivityFee}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Taxa de Saque</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug} className="text-center">{b.withdrawalFee}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Métodos de Depósito</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center text-sm">{b.deposit.join(", ")}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Suporte</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center text-sm">{b.support.join(", ")}</TableCell>
                          ))}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Conta Demo</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.demoAccount)}</TableCell>)}
                        </TableRow>
                        <TableRow className="bg-muted/50">
                          <TableCell className="font-medium">Copy Trading</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.copyTrading)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Conta Islâmica</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.islamicAccount)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Proteção Saldo Negativo</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.negativeBalanceProtection)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fundos Segregados</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.segregatedFunds)}</TableCell>)}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Educação</TableCell>
                          {selectedBrokersData.map(b => <TableCell key={b.slug}>{renderBoolean(b.education)}</TableCell>)}
                        </TableRow>
                        <TableRow className="bg-primary/5">
                          <TableCell className="font-medium">Ação</TableCell>
                          {selectedBrokersData.map(b => (
                            <TableCell key={b.slug} className="text-center">
                              <Link to={`/corretoras/${b.slug}`}>
                                <Button size="sm" className="bg-primary hover:bg-primary/90">
                                  Ver Detalhes
                                </Button>
                              </Link>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-6xl mx-auto">
                <CardContent className="py-16 text-center">
                  <Scale className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-xl font-semibold mb-2">Selecione pelo menos 2 corretoras</h3>
                  <p className="text-muted-foreground">
                    Clique nas corretoras acima para adicionar à comparação (máximo 3).
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComparacaoCorretoras;
