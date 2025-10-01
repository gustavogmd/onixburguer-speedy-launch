import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import onixLogo from "@/assets/onix-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 pt-safe">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={onixLogo} alt="Onix Burger" className="h-8 w-8" />
            <span className="text-xl font-bold neon-text">Onix Burger</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-onix-purple transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("delivery")}
              className="text-foreground hover:text-onix-purple transition-colors"
            >
              Delivery
            </button>
            <button
              onClick={() => scrollToSection("loja")}
              className="text-foreground hover:text-onix-purple transition-colors"
            >
              Nossa Loja
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-onix-purple transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="neon"
              size="sm"
              className="neon-glow"
              onClick={() => window.open("https://onixburguer.com.br/", "_blank")}
            >
              Peça agora pelo site
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-white/10 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-onix-purple transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("delivery")}
                className="text-left text-foreground hover:text-onix-purple transition-colors"
              >
                Delivery
              </button>
              <button
                onClick={() => scrollToSection("loja")}
                className="text-left text-foreground hover:text-onix-purple transition-colors"
              >
                Nossa Loja
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-onix-purple transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="neon"
                size="sm"
                className="w-fit"
                onClick={() => window.open("https://onixburguer.com.br/", "_blank")}
              >
                Peça agora pelo site
                <span className="ml-2">→</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;