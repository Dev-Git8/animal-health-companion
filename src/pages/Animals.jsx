import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const animals = [
  { id: 1, name: "cow", image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop" },
  { id: 2, name: "buffalo", image: "https://images.unsplash.com/photo-1568708167498-2a22bc97ad69?w=400&h=400&fit=crop" },
  { id: 3, name: "goat", image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=400&h=400&fit=crop" },
  { id: 4, name: "sheep", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop" },
  { id: 5, name: "dog", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop" },
  { id: 6, name: "cat", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" },
  { id: 7, name: "horse", image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=400&fit=crop" },
  { id: 8, name: "donkey", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" },
  { id: 9, name: "chicken", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=400&fit=crop" },
  { id: 10, name: "duck", image: "https://images.unsplash.com/photo-1459682687441-7761439a709d?w=400&h=400&fit=crop" },
  { id: 11, name: "pig", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=400&fit=crop" },
  { id: 12, name: "rabbit", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop" },
  { id: 13, name: "camel", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=400&fit=crop" },
  { id: 14, name: "elephant", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=400&fit=crop" },
  { id: 15, name: "parrot", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop" },
  { id: 16, name: "pigeon", image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=400&fit=crop" },
];

const Animals = () => {
  const { language } = useLanguage();
  const t = translations[language]?.animals || translations.en.animals;
  const animalNames = t.animalNames;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                to={`/animals/${animal.name}`}
                className="group"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="relative w-full h-full">
                    <img
                      src={animal.image}
                      alt={animalNames[animal.name]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <h3 className="font-semibold text-white text-sm md:text-base">
                        {animalNames[animal.name]}
                      </h3>
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
