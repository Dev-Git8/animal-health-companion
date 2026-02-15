import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart, User, LogOut } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const t = translations[language] || translations.en;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getUserDisplayName = () => {
    if (!user) return "";
    return user.email?.split("@")[0] || "User";
  };

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
              Know Your Animal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link active">
              {t.nav.home}
            </Link>
            <Link to="/animals" className="nav-link">
              {t.nav.animals}
            </Link>
            <Link to="/about" className="nav-link">
              {t.nav.about}
            </Link>
            <Link to="/vets" className="nav-link">
              Vets
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageDropdown 
              selectedLanguage={language}
              onLanguageChange={setLanguage}
            />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                  <User className="h-4 w-4" />
                  {getUserDisplayName()}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    {t.nav.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/auth"
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                {t.nav.login}
              </Link>
            )}
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
                {t.nav.home}
              </Link>
              <Link to="/animals" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                {t.nav.animals}
              </Link>
              <Link to="/about" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/vets" className="px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                Vets
              </Link>
              <div className="px-4 py-2">
                <LanguageDropdown 
                  selectedLanguage={language}
                  onLanguageChange={setLanguage}
                />
              </div>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="mx-4 mt-2 px-5 py-2 rounded-full bg-destructive text-destructive-foreground font-medium text-sm text-center hover:bg-destructive/90 transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  {t.nav.logout}
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="mx-4 mt-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm text-center hover:bg-primary/90 transition-colors"
                >
                  {t.nav.login}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
