import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DeliverySection from "@/components/DeliverySection";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <DeliverySection />
        <StoreSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
