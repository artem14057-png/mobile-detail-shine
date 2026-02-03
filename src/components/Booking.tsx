import { useLanguage } from "@/contexts/LanguageContext";
import BookingSteps from "./BookingSteps";

const Booking = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.booking.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {t.booking.title1} <span className="text-gradient-red">{t.booking.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.booking.description}
          </p>
        </div>

        {/* Multi-step Booking Form */}
        <BookingSteps />
      </div>
    </section>
  );
};

export default Booking;
