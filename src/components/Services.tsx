import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Car, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Droplets, Sparkles, Shield, Car];
const servicePrices = ["25", "55", "120", "250"];
const servicePopular = [false, true, false, false];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.services.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {t.services.title1} <span className="text-gradient-red">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.packages.map((service, index) => {
            const Icon = serviceIcons[index];
            const popular = servicePopular[index];
            const price = servicePrices[index];

            return (
              <div
                key={index}
                className={`relative group rounded-2xl p-6 transition-all duration-500 hover-lift ${
                  popular
                    ? "bg-gradient-red red-glow"
                    : "glass-card hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-background rounded-full text-xs font-semibold text-primary tracking-wider">
                    {t.services.popular}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    popular ? "bg-white/20" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      popular ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    popular ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`text-3xl font-bold ${
                      popular ? "text-white" : "text-gradient-red"
                    }`}
                  >
                    {price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      popular ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {t.services.currency}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          popular ? "text-white" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          popular ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  variant={popular ? "default" : "redOutline"}
                  className={`w-full ${
                    popular ? "bg-white text-primary hover:bg-white/90" : ""
                  }`}
                >
                  {t.services.select}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
