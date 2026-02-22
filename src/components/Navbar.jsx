import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Know Your Animal
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link active">{t.nav.home}</Link>
            <Link to="/animals" className="nav-link">{t.nav.animals}</Link>
            <Link to="/about" className="nav-link">{t.nav.about}</Link>
            <Link to="/vets" className="nav-link">{t.nav.vets}</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown selectedLanguage={language} onLanguageChange={setLanguage} />
            <Link to="/auth" className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
              Login
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">{t.nav.home}</Link>
              <Link to="/animals" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">{t.nav.animals}</Link>
              <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">{t.nav.about}</Link>
              <Link to="/vets" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">{t.nav.vets}</Link>
              <div className="px-4 py-2">
                <LanguageDropdown selectedLanguage={language} onLanguageChange={setLanguage} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
