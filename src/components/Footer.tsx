const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gradient-gold">
              LUXE
            </span>
            <span className="text-sm font-medium text-muted-foreground tracking-widest">
              DETAILING
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Галерея
            </a>
            <a
              href="#benefits"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 LUXE Detailing. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
