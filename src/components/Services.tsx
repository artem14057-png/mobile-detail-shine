import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Car, Droplets } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Droplets,
    name: "Экспресс-мойка",
    description: "Быстрая наружная мойка с сушкой и обработкой стёкол",
    price: "2 500",
    features: [
      "Бесконтактная мойка",
      "Сушка кузова",
      "Протирка стёкол",
      "Чернение резины",
    ],
    popular: false,
  },
  {
    id: 2,
    icon: Sparkles,
    name: "Комплекс Стандарт",
    description: "Полная мойка кузова и уборка салона",
    price: "5 500",
    features: [
      "Всё из Экспресс-мойки",
      "Уборка салона пылесосом",
      "Протирка пластика",
      "Очистка ковриков",
      "Мойка порогов",
    ],
    popular: true,
  },
  {
    id: 3,
    icon: Shield,
    name: "Премиум Детейлинг",
    description: "Глубокая очистка и защита вашего автомобиля",
    price: "12 000",
    features: [
      "Всё из Комплекс Стандарт",
      "Полировка кузова",
      "Химчистка салона",
      "Нанесение воска",
      "Обработка кожи",
      "Озонирование",
    ],
    popular: false,
  },
  {
    id: 4,
    icon: Car,
    name: "VIP Полный уход",
    description: "Максимальный уход и защита с керамикой",
    price: "25 000",
    features: [
      "Всё из Премиум Детейлинг",
      "Керамическое покрытие",
      "Защитная плёнка PPF",
      "Детейлинг дисков",
      "Восстановление фар",
      "Гарантия 1 год",
    ],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Выберите <span className="text-gradient-red">идеальный пакет</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От быстрой мойки до полного детейлинга с защитным покрытием — у нас
            есть решение для любых потребностей
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group rounded-2xl p-6 transition-all duration-500 hover-lift ${
                service.popular
                  ? "bg-gradient-red red-glow"
                  : "glass-card hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-background rounded-full text-xs font-semibold text-primary tracking-wider">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.popular
                    ? "bg-white/20"
                    : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.popular ? "text-white" : "text-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  service.popular ? "text-white" : "text-foreground"
                }`}
              >
                {service.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  service.popular
                    ? "text-white/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-3xl font-bold ${
                    service.popular ? "text-white" : "text-gradient-red"
                  }`}
                >
                  {service.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    service.popular
                      ? "text-white/80"
                      : "text-muted-foreground"
                  }`}
                >
                  ₽
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        service.popular ? "text-white" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        service.popular
                          ? "text-white/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                variant={service.popular ? "default" : "redOutline"}
                className={`w-full ${
                  service.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : ""
                }`}
              >
                Выбрать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
