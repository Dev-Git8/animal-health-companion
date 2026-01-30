import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold">
                Know Your Animal
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Dedicated to providing accessible animal healthcare information in multiple Indian languages. Together, we care for every creature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diseases" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Disease Database
                </Link>
              </li>
              <li>
                <Link to="/animals" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Animals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>support@knowyouranimal.in</li>
              <li>+91 1800 XXX XXXX</li>
              <li>Mon - Sat: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60">
          <p>© 2026 Know Your Animal. Made with ❤️ for Indian animals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
