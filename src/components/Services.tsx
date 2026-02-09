import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Armchair, CarFront, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Armchair, CarFront, Package];
const servicePrices = ["80", "70", "130"];
const servicePopular = [false, false, true];

const Services = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

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

        {/* Services Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.services.packages.slice(0, 3).map((service, index) => {
            const Icon = serviceIcons[index];
            const popular = servicePopular[index];
            const price = servicePrices[index];
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`relative group rounded-2xl p-6 transition-all duration-500 hover-lift cursor-pointer ${
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

                  {/* Icon - larger illustration area */}
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                      popular ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 ${
                        popular ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl font-bold mb-2 text-center ${
                      popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 text-center ${
                      popular ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 text-center">
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

                  {/* Expand indicator */}
                  <div className={`flex items-center justify-center gap-2 mb-4 ${
                    popular ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>

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

                {/* Expanded Features Panel */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                <div className={`rounded-2xl p-6 ${
                    popular ? "bg-gradient-red/80" : "glass-card"
                  }`}>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      popular ? "text-white" : "text-foreground"
                    }`}>
                      {t.services.whatIncluded}
                    </h4>
                    <ul className="space-y-3">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
