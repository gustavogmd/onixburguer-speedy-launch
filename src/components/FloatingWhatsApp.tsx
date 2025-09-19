import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl animate-pulse-scale"
        onClick={() => window.open("http://wa.me/5521965565600", "_blank")}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-card text-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <p className="text-sm font-medium">Fale conosco!</p>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-card"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;