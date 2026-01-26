import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Shield } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#gallery", label: "Галерея" },
    { href: "#benefits", label: "Преимущества" },
    { href: "#contact", label: "Контакты" },
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
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-gold rounded-sm flex items-center justify-center">
                  <Shield className="w-7 h-7 text-background" />
                </div>
                <div className="absolute -top-1 -left-1 -right-1 h-2 bg-gradient-gold opacity-80" 
                     style={{ clipPath: 'polygon(0 100%, 15% 0, 50% 30%, 85% 0, 100% 100%)' }} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-gradient-gold tracking-wide">
                  BM Detailing
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.3em] uppercase">
                  Premium Care
                </span>
              </div>
            </a>

            {/* Contact & Language */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (999) 123-45-67</span>
              </a>
              <div className="flex items-center gap-1 text-xs">
                <button className="px-2 py-1 text-primary font-medium">RU</button>
                <span className="text-border">|</span>
                <button className="px-2 py-1 text-muted-foreground hover:text-primary transition-colors">EN</button>
              </div>
            </div>

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
              Записаться
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
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
                href="tel:+79991234567"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (999) 123-45-67</span>
              </a>
            </div>
            <Button variant="gold" size="lg" className="mt-4">
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
