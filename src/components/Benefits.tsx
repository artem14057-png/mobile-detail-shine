import { MapPin, Clock, Award, Truck, Shield, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const benefitIcons = [Truck, Award, Clock, Shield, Star, MapPin];

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.benefits.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {t.benefits.title1} <span className="text-gradient-red">{t.benefits.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.benefits.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
