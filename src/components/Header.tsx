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
        {/* Logo Section with reflection effect */}
        <div className="relative bg-black overflow-hidden">
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)] pointer-events-none" />
          
          {/* Content */}
          <div className="container mx-auto px-4 md:px-8 relative">
            <div className="flex flex-col items-center justify-center py-8 md:py-10">
              {/* Logo */}
              <Link to="/" className="flex flex-col items-center group">
                <img 
                  src={logo} 
                  alt="BM Detailing" 
                  className="h-28 md:h-40 lg:h-48 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
              </Link>
            </div>
          </div>
          
          {/* Floor reflection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/[0.02] via-white/[0.01] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Secondary Bar - Language & Phone */}
        <div className="bg-background/80 backdrop-blur-sm border-b border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-12">
              {/* Language Switcher - Left */}
              <div className="flex items-center gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-sm font-medium tracking-widest transition-all duration-300 ${
                      language === lang.code
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-foreground p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Phone - Right */}
              <a
                href="tel:+37120000000"
                className="hidden md:flex items-center gap-2 text-sm transition-colors font-medium group"
              >
                <Phone className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">+371 20 000 000</span>
              </a>
            </div>
          </div>
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
