import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up (after being scrolled down)
      if (currentScrollY < lastScrollY.current && currentScrollY > 200) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current || currentScrollY <= 200) {
        setShowNav(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <>
      {/* Compact Header */}
      <header className="relative z-40 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center group shrink-0">
              <img 
                src={logo} 
                alt="BM Detailing" 
                className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav + Controls - Right */}
            <div className="hidden md:flex items-center gap-6">
              {/* Navigation Links */}
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="flex items-center gap-3 border-l border-border/30 pl-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-sm font-bold tracking-widest transition-all duration-300 ${
                      language === lang.code
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Phone */}
              <a
                href="tel:+37120000000"
                className="flex items-center gap-2 text-sm font-bold group"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">+371 20 000 000</span>
              </a>

              {/* Book Now */}
              <Link to="/booking">
                <Button 
                  size="sm" 
                  className="font-medium tracking-wider transition-all duration-300"
                >
                  {t.nav.bookNow}
                </Button>
              </Link>
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
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[62px] left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in z-50">
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
              <a href="tel:+37120000000" className="flex items-center gap-2 text-sm text-primary">
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
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="mt-4 w-full">
                {t.nav.bookNow}
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Sticky Navigation - appears when scrolling up */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="hidden md:block bg-background/95 backdrop-blur-md shadow-lg border-b border-border/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between py-2">
              <Link to="/" className="shrink-0">
                <img src={logo} alt="BM Detailing" className="h-10 w-auto object-contain" />
              </Link>
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/booking">
                  <Button size="sm" className="ml-2 font-medium tracking-wider">
                    {t.nav.bookNow}
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
