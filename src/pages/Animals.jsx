import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const animals = [
  { id: 1, name: "Cow", nameHi: "गाय", image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop" },
  { id: 2, name: "Buffalo", nameHi: "भैंस", image: "https://images.unsplash.com/photo-1568708167498-2a22bc97ad69?w=400&h=400&fit=crop" },
  { id: 3, name: "Goat", nameHi: "बकरी", image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=400&fit=crop" },
  { id: 4, name: "Sheep", nameHi: "भेड़", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop" },
  { id: 5, name: "Dog", nameHi: "कुत्ता", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop" },
  { id: 6, name: "Cat", nameHi: "बिल्ली", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" },
  { id: 7, name: "Horse", nameHi: "घोड़ा", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=400&fit=crop" },
  { id: 8, name: "Donkey", nameHi: "गधा", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" },
  { id: 9, name: "Chicken", nameHi: "मुर्गी", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop" },
  { id: 10, name: "Duck", nameHi: "बत्तख", image: "https://images.unsplash.com/photo-1459682687441-7761439a709d?w=400&h=400&fit=crop" },
  { id: 11, name: "Pig", nameHi: "सूअर", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=400&fit=crop" },
  { id: 12, name: "Rabbit", nameHi: "खरगोश", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop" },
  { id: 13, name: "Camel", nameHi: "ऊंट", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=400&fit=crop" },
  { id: 14, name: "Elephant", nameHi: "हाथी", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=400&fit=crop" },
  { id: 15, name: "Parrot", nameHi: "तोता", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop" },
  { id: 16, name: "Pigeon", nameHi: "कबूतर", image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=400&fit=crop" },
];

const Animals = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Domestic Animals
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select an animal to learn about common diseases, symptoms, and treatments
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                to={`/animals/${animal.name.toLowerCase()}`}
                className="group"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="relative w-full h-full">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <h3 className="font-semibold text-white text-sm md:text-base">
                        {animal.name}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm">
                        {animal.nameHi}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Animals;
