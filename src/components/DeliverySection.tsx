import { Clock, MapPin, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const DeliverySection = () => {
  const benefits = [{
    icon: <Clock className="w-8 h-8 text-onix-purple" />,
    title: "Entrega Recorde",
    description: "A entrega mais rápida de São Gonçalo. Nosso tempo médio impressiona todos os clientes!"
  }, {
    icon: <MapPin className="w-8 h-8 text-onix-gold" />,
    title: "Cobertura Total",
    description: "Atendemos toda São Gonçalo com a mesma agilidade e qualidade que nos tornou famosos."
  }, {
    icon: <Star className="w-8 h-8 text-onix-purple" />,
    title: "Qualidade Garantida",
    description: "Hambúrguers artesanais preparados na hora, mantendo o sabor até a sua porta."
  }, {
    icon: <Truck className="w-8 h-8 text-onix-gold" />,
    title: "Logística Inteligente",
    description: "Sistema otimizado para garantir que seu pedido chegue quentinho e no tempo prometido."
  }];
  return <section id="delivery" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="neon-text">Delivery</span>
            <span className="text-onix-gold ml-4">Super Rápido</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reconhecidos pela velocidade impressionante de entrega em São Gonçalo. 
            Nossa logística é nossa especialidade!
          </p>
          
          {/* Slogan Highlight */}
          <div className="inline-block bg-onix-purple/10 border border-onix-purple/30 rounded-2xl px-8 py-4 mt-8">
            <p className="text-2xl md:text-3xl font-bold neon-text">
              Pensou, Pediu, Chegou!
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => <Card key={index} className="card-glass hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-muted/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold neon-text">20 a 40min</div>
            <div className="text-muted-foreground">Tempo de entrega Médio</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-onix-gold">🏆1º</div>
            <div className="text-muted-foreground">A melhor Hamburgueria de São Gonçalo</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold neon-text">18hrs a 00hrs</div>
            <div className="text-muted-foreground">Horário de Funcionamento</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-onix-gold">2017</div>
            <div className="text-muted-foreground">Desde de 2017 entregando os melhores</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="neon" className="neon-glow text-xl px-12 py-6" onClick={() => window.open("http://wa.me/5521965565600", "_blank")}>
            <Truck className="w-6 h-6 mr-3" />
            Fazer Pedido Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Clique e fale direto conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </section>;
};
export default DeliverySection;