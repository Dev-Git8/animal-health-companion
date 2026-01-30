import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = ({ selectedLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              PashuSeva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/diseases" className="nav-link">
              Diseases
            </Link>
            <Link to="/animals" className="nav-link">
              Animals
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown 
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
            <Link
              to="/auth"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                Home
              </Link>
              <Link to="/diseases" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                Diseases
              </Link>
              <Link to="/animals" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                Animals
              </Link>
              <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                About
              </Link>
              <div className="px-4 py-2">
                <LanguageDropdown 
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={onLanguageChange}
                />
              </div>
              <Link
                to="/auth"
                className="mx-4 mt-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm text-center hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
