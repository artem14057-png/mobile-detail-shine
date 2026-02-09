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
      {/* Static Header */}
      <header className="relative z-40">
        {/* Logo & Secondary Bar - unified black background */}
        <div className="relative bg-black overflow-hidden">
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)] pointer-events-none" />
          
          {/* Content */}
          <div className="container mx-auto px-4 md:px-8 relative">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center py-2 md:py-3">
              <Link to="/" className="flex flex-col items-center group">
                <img 
                  src={logo} 
                  alt="BM Detailing" 
                  className="h-52 md:h-72 lg:h-96 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Language & Phone Bar */}
            <div className="flex items-center justify-between py-4 border-t border-white/10">
              {/* Language Switcher - Left */}
              <div className="flex items-center gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-base font-bold tracking-widest transition-all duration-300 ${
                      language === lang.code
                        ? "text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]"
                        : "text-white hover:text-red-400"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Phone - Right */}
              <a
                href="tel:+37120000000"
                className="hidden md:flex items-center gap-2 text-sm transition-colors font-semibold group"
              >
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-white font-bold text-base group-hover:text-red-400 transition-colors">+371 20 000 000</span>
              </a>
            </div>
          </div>
          
          {/* Gradient fade to main background */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[hsl(0,0%,4%)] pointer-events-none" />
        </div>

        {/* Navigation Bar - Red */}
        <div className="hidden md:block bg-primary">
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
                <Button 
                  size="sm" 
                  className="ml-4 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium tracking-wider transition-all duration-300"
                >
                  {t.nav.bookNow}
                </Button>
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in z-50">
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
                  className="flex items-center gap-2 text-sm text-primary"
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
      </header>

      {/* Sticky Navigation - Only red bar, appears when scrolling up */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="hidden md:block bg-primary shadow-lg">
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
                <Button 
                  size="sm" 
                  className="ml-4 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium tracking-wider transition-all duration-300"
                >
                  {t.nav.bookNow}
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
