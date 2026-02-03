import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/booking", label: t.nav.booking },
    { href: "/contact", label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "lv", label: "LV" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar - Logo and Contact */}
      <div className="bg-[#4a1942]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Phone */}
            <a
              href="tel:+37120000000"
              className="hidden md:flex items-center gap-2 text-sm text-[#d4af37] hover:text-[#f0d060] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+371 20 000 000</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 ml-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-sm font-medium tracking-wider transition-colors ${
                    language === lang.code
                      ? "text-[#d4af37]"
                      : "text-white/80 hover:text-[#d4af37]"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="BM Detailing" 
                className="h-14 md:h-16 w-auto"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>


      {/* Navigation Bar */}
      <div className="hidden md:block bg-primary/95">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-6 py-4 text-sm font-medium transition-all duration-300 tracking-wider uppercase group ${
                  isActive(link.href)
                    ? "text-primary-foreground bg-white/10"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-foreground transition-all duration-300 ${
                  isActive(link.href) ? "w-3/4" : "w-0 group-hover:w-3/4"
                }`} />
              </Link>
            ))}
            <Link to="/booking">
              <Button variant="ghost" size="sm" className="ml-4 text-primary-foreground border border-primary-foreground/30 hover:bg-white/10 hover:text-primary-foreground">
                {t.nav.bookNow}
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[8rem] left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-lg font-medium transition-colors py-3 border-b border-border/30 ${
                  isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="tel:+37120000000"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+371 20 000 000</span>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    language === lang.code
                      ? "bg-[#4a1942] text-[#d4af37]"
                      : "text-muted-foreground hover:text-[#d4af37]"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="red" size="lg" className="mt-4 w-full">
                {t.nav.bookNow}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
