import { Search } from "lucide-react";
import heroAnimals from "@/assets/hero-animals.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const HeroSection = ({ searchQuery, onSearchChange }) => {
  const { language } = useLanguage();
  const t = translations[language]?.hero || translations.en.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAnimals}
          alt="Indian animals in a natural setting"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Search Bar */}
          <div className="search-glass rounded-full p-2 max-w-2xl mx-auto flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3"
              />
            </div>
            <button className="btn-hero">
              {t.cta}
            </button>
          </div>

          {/* Quick tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {t.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors backdrop-blur-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
