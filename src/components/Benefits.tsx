import { MapPin, Clock, Award, Truck, Shield, Star } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Выезд к вам",
    description:
      "Мы приедем в любое удобное место: домой, в офис или на парковку",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description:
      "Вам не нужно никуда ехать. Занимайтесь своими делами, пока мы работаем",
  },
  {
    icon: Award,
    title: "Опытные мастера",
    description:
      "Наши специалисты имеют сертификаты и многолетний опыт работы",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description:
      "Даём гарантию на все виды работ. Если не понравится — переделаем бесплатно",
  },
  {
    icon: Star,
    title: "Премиум материалы",
    description:
      "Используем только профессиональную автокосметику от ведущих брендов",
  },
  {
    icon: MapPin,
    title: "Работаем по всему городу",
    description:
      "Обслуживаем все районы города и пригород в радиусе 30 км",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">6 причин</span> выбрать нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы не просто моем машины — мы заботимся о вашем автомобиле как о
            своём собственном
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
