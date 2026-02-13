import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroAnimals from "@/assets/hero-animals.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language]?.hero || translations.en.hero;
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleAsk = () => {
    const msg = input.trim();
    if (!msg) return;
    navigate("/chat", { state: { question: msg } });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const quickQuestions = [
    "My cow has fever, what should I do?",
    "How to prevent diseases in chickens?",
    "Common dog diseases in India",
    "Goat care tips for beginners",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroAnimals} alt="Indian animals" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Search / Ask bar */}
          <div className="max-w-2xl mx-auto">
            <div className="search-glass rounded-full p-2 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <MessageCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about animal health..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3"
                />
              </div>
              <button
                type="button"
                onClick={handleAsk}
                disabled={!input.trim()}
                className="btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Ask</span>
              </button>
            </div>

            {/* Quick questions */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => navigate("/chat", { state: { question: q } })}
                  className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors backdrop-blur-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
