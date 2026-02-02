import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="BM Detailing" 
              className="h-10 w-auto"
            />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#gallery"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#booking"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.booking}
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </a>
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
