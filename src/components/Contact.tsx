import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceAreaMap from "./ServiceAreaMap";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.contact.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {t.contact.title1} <span className="text-gradient-red">{t.contact.titleHighlight}</span>
            <br />
            {t.contact.title2}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{t.contact.infoTitle}</h3>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <a
                href="tel:+37120000000"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t.contact.phone}</div>
                  <div className="font-semibold">+371 20 000 000</div>
                </div>
              </a>

              <a
                href="mailto:info@bmdetailing.lv"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t.contact.email}</div>
                  <div className="font-semibold">info@bmdetailing.lv</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.hours}
                  </div>
                  <div className="font-semibold">{t.contact.hoursValue}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.area}
                  </div>
                  <div className="font-semibold">
                    {t.contact.areaValue}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <ServiceAreaMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
