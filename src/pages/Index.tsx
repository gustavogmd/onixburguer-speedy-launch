import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DeliverySection from "@/components/DeliverySection";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DeliverySection />
        <StoreSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
