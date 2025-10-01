import { Tablet, Users, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import restaurantAtmosphere from "@/assets/restaurant-atmosphere.jpg";
import tabletOrdering from "@/assets/tablet-ordering.jpg";
const StoreSection = () => {
  const features = [{
    icon: <Tablet className="w-8 h-8 text-onix-purple" />,
    title: "Tablets em Cada Mesa",
    description: "Chega do aborrecimento com Garçons, Faça seu pedido diretamente pelo tablet da mesa. Tecnologia que agiliza todo o processo!"
  }, {
    icon: <Zap className="w-8 h-8 text-onix-gold" />,
    title: "Produção Imediata",
    description: "Pedido finalizado é enviado automaticamente para a cozinha. Velocidade incomparável!"
  }, {
    icon: <Users className="w-8 h-8 text-onix-purple" />,
    title: "Ambiente Moderno",
    description: "Espaço projetado para uma experiência única, com decoração neon e atmosfera jovem."
  }, {
    icon: <MapPin className="w-8 h-8 text-onix-gold" />,
    title: "Localização Premium",
    description: "No coração de Colubandê, fácil acesso e estacionamento para sua comodidade."
  }];
  return <section id="loja" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-foreground">Nossa</span>
            <span className="neon-text ml-4">Loja Física</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouxemos o mesmo conceito de velocidade e praticidade para nossa loja física. 
            Tecnologia que revoluciona a experiência gastronômica!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Images Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={restaurantInterior} alt="Interior da Onix Burger" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
              <img src={tabletOrdering} alt="Sistema de Tablet para Pedidos" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="pt-8">
              <img src={restaurantAtmosphere} alt="Ambiente da Onix Burger" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Velocidade e Praticidade
              </h3>
              <p className="text-lg text-muted-foreground">
                Nossa loja física mantém o mesmo padrão de excelência do delivery. 
                Com tablets em cada mesa, o processo é 100% automatizado: você faz o pedido 
                e em segundos já está sendo preparado na cozinha.
              </p>
            </div>

            {/* Quote */}
            <div className="bg-onix-purple/10 border-l-4 border-onix-purple rounded-r-2xl p-6">
              <blockquote className="text-xl font-semibold text-foreground italic">"Onix Burguer, o melhor Hamburguer da vida"</blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Este é o nosso lema, acreditamos tanto nisso que trabalhamos intensamente todos os dias para que você tenha sempre a melhor experiência ao comer um dos nossos Hamburgueres</p>
            </div>

            {/* Location Info */}
            <div className="bg-card/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-foreground mb-3">📍 Localização</h4>
              <p className="text-muted-foreground">
                Av. José Mendonça de Campos, 955 - Loja 07<br />
                Colubandê, São Gonçalo - RJ, 24451-001
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-card/30 rounded-3xl p-8 backdrop-blur-sm mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1007486331323!2d-43.0138372!3d-22.835761799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88b36825874896ab%3A0x586c7becc3cb527d!2sOnix%20Burguer%20Artesanal%20%7C%20S%C3%A3o%20Gon%C3%A7alo!5e0!3m2!1spt-BR!2sbr!4v1758315818372!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full" />
          </div>
          <div className="text-center">
            <Button size="lg" variant="gold" className="text-lg px-8 py-6" onClick={() => window.open("https://maps.app.goo.gl/YJcxg2skJPhwg4keA", "_blank")}>
              <MapPin className="w-5 h-5 mr-2" />
              Como Chegar
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Card key={index} className="card-glass hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-muted/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default StoreSection;