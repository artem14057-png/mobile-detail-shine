import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Luxury car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wider">
              ПРЕМИУМ ДЕТЕЙЛИНГ С ВЫЕЗДОМ
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-up delay-100">
            Ваш автомобиль{" "}
            <span className="text-gradient-red">заслуживает</span>
            <br />
            лучшего ухода
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up delay-200">
            Профессиональный мобильный детейлинг с выездом к вам. Мы приедем в
            любое удобное место и время, чтобы вернуть вашему автомобилю
            первозданный блеск.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Записаться на детейлинг
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="redOutline" size="xl">
              Узнать цены
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">500+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Довольных клиентов
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">5 лет</div>
              <div className="text-sm text-muted-foreground mt-1">
                На рынке
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">
                Работаем для вас
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
