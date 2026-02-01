import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
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
              Связаться с нами
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Готовы <span className="text-gradient-red">преобразить</span>
              <br />
              ваш автомобиль?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут, чтобы
              обсудить детали и назначить удобное время
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="tel:+79991234567"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-semibold">+7 (999) 123-45-67</div>
                </div>
              </a>

              <a
                href="mailto:info@bmdetailing.ru"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">info@bmdetailing.ru</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Режим работы
                  </div>
                  <div className="font-semibold">Ежедневно 8:00 - 22:00</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Зона обслуживания
                  </div>
                  <div className="font-semibold">
                    Москва и область (до 30 км)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card rounded-2xl p-8 red-glow">
            <h3 className="text-2xl font-bold mb-2">Оставить заявку</h3>
            <p className="text-muted-foreground mb-8">
              Заполните форму и мы свяжемся с вами
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="car" className="block text-sm font-medium mb-2">
                  Марка и модель авто
                </label>
                <Input
                  id="car"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  placeholder="BMW X5"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Сообщение (необязательно)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите, какие услуги вас интересуют..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button variant="red" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
