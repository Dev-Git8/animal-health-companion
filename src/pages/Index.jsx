import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
