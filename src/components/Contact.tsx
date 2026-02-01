import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t.contact.successMessage);
    setFormData({ name: "", phone: "", car: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              {t.contact.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              {t.contact.title1} <span className="text-gradient-red">{t.contact.titleHighlight}</span>
              <br />
              {t.contact.title2}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              {t.contact.description}
            </p>

            {/* Contact Info */}
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

          {/* Right Column - Form */}
          <div className="glass-card rounded-2xl p-8 red-glow">
            <h3 className="text-2xl font-bold mb-2">{t.contact.formTitle}</h3>
            <p className="text-muted-foreground mb-8">
              {t.contact.formDescription}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.phoneLabel}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.phonePlaceholder}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="car" className="block text-sm font-medium mb-2">
                  {t.contact.carLabel}
                </label>
                <Input
                  id="car"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  placeholder={t.contact.carPlaceholder}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button variant="red" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                {t.contact.submit}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t.contact.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
