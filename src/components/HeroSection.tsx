import { ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gourmet-burger.jpg";
const HeroSection = () => {
  return <section id="inicio" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-r from-onix-dark via-onix-dark/80 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="neon-text">Onix Burger</span>
                <br />
                <span className="text-onix-gold">O Melhor</span>
                <br />
                <span className="text-foreground">Hambúrguer</span>
                <br />
                <span className="text-onix-gold">da Vida</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                Hamburgueria artesanal em São Gonçalo com a entrega mais rápida da cidade
              </p>
            </div>

            {/* Slogan */}
            <div className="bg-onix-purple/20 border border-onix-purple/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-center neon-text">
                Pensou, Pediu, Chegou!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-card/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="bg-onix-purple/20 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-onix-purple" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Delivery</p>
                  <p className="text-onix-gold text-xs">O Delivery mais rápido da cidade</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-card/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="bg-onix-gold/20 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-onix-gold" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Loja Física</p>
                  <p className="text-onix-purple text-xs">A melhor estrutura da cidade</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="neon" className="neon-glow text-lg px-8 py-6" onClick={() => window.open("http://wa.me/5521965565600", "_blank")}>
                Peça pelo WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline-gold" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById("loja")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Conheça Nossa Loja
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              <img src={heroImage} alt="Hambúrguer Gourmet Onix Burger" className="rounded-3xl shadow-2xl pulse-scale" />
              <div className="absolute inset-0 bg-gradient-to-t from-onix-purple/20 to-transparent rounded-3xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 bg-onix-gold text-onix-dark px-4 py-2 rounded-full font-bold animate-bounce">
              Desde 2017
            </div>
            
            <div className="absolute bottom-10 left-10 bg-onix-purple text-white px-4 py-2 rounded-full font-bold neon-glow">
              São Gonçalo
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;