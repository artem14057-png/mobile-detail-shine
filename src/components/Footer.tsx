import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="BM Detailing" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              to="/gallery"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.gallery}
            </Link>
            <Link
              to="/booking"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.booking}
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
