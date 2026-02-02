import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#booking", label: t.nav.booking },
    { href: "#contact", label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "lv", label: "LV" },
  ];

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
            <a href="#" className="flex items-center">
              <img 
                src={logo} 
                alt="BM Detailing" 
                className="h-14 md:h-16 w-auto"
              />
            </a>

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
              <a
                key={link.href}
                href={link.href}
                className="relative px-6 py-4 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10 transition-all duration-300 tracking-wider uppercase group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-foreground group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <Button variant="ghost" size="sm" className="ml-4 text-primary-foreground border border-primary-foreground/30 hover:bg-white/10 hover:text-primary-foreground">
              {t.nav.bookNow}
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[8rem] left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
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
            <Button variant="red" size="lg" className="mt-4">
              {t.nav.bookNow}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
