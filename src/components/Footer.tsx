import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import onixLogo from "@/assets/onix-logo.png";
const Footer = () => {
  return <footer id="contato" className="bg-onix-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={onixLogo} alt="Onix Burger" className="h-10 w-10" />
              <span className="text-2xl font-bold neon-text">Onix Burguer</span>
            </div>
            <p className="text-muted-foreground">
              A hamburgueria artesanal de São Gonçalo com a entrega mais rápida da cidade.
            </p>
            <div className="space-y-3">
              <p className="text-onix-gold font-semibold text-lg">
                "Pensou, Pediu, Chegou!"
              </p>
              <p className="text-foreground font-medium">
                "O melhor Hambúrguer da vida"
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-onix-purple mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Endereço</p>
                  <p className="text-muted-foreground text-sm">
                    Av. José Mendonça de Campos, 955<br />
                    Loja 07 - Colubandê<br />
                    São Gonçalo - RJ, 24451-001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-onix-gold" />
                <div>
                  <p className="text-foreground font-medium">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">(21) 96556-5600</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-onix-purple" />
                <div>
                  <p className="text-foreground font-medium">Funcionamento</p>
                  <p className="text-muted-foreground text-sm">das 18hrs até 00hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Faça seu Pedido</h3>
            <p className="text-muted-foreground text-sm">
              Faça o seu pedido em nosso site agora e experimente o melhor hambúrguer da vida!
            </p>
            
            <Button size="lg" variant="neon" className="neon-glow w-full" onClick={() => window.open("https://onixburguer.com.br/", "_blank")}>
              Peça agora pelo site
              <span className="ml-2">→</span>
            </Button>

            <div className="flex space-x-3">
              <Button variant="outline-gold" size="icon" onClick={() => window.open("https://www.instagram.com/onixburguer/", "_blank")}>
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline-neon" size="icon" onClick={() => window.open("https://www.facebook.com/onixburguer/", "_blank")}>
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 Onix Burguer. Todos os direitos reservados. | Desde 2017 em São Gonçalo</p>
            <p className="text-xs text-muted-foreground">
              Desenvolvido por <a href="http://www.pivotaai.com.br/" target="_blank" rel="noopener noreferrer" className="text-onix-purple hover:text-onix-purple-glow transition-colors underline">PivotaAI</a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;