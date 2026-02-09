import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight, ArrowRight, Check, Sparkles, Shield, Car, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Sparkles, Shield, Car];
const servicePrices = [80, 70, 130];

type BookingStep = "datetime" | "services" | "contact";

const BookingSteps = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<BookingStep>("datetime");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    message: "",
  });

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00", "19:00", "20:00"
  ];

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    
    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
      setSelectedTime(null);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString(t.booking.locale, { month: 'long', year: 'numeric' });
  };

  const weekDays = t.booking.weekDays;

  // Service selection logic
  const toggleService = (index: number) => {
    setSelectedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getTotalPrice = () => {
    return selectedServices.reduce((sum, index) => sum + servicePrices[index], 0);
  };

  // Form logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
      services: selectedServices.map(i => t.services.packages[i].name),
      ...formData
    });
    alert(t.contact.successMessage);
  };

  const canProceedToServices = selectedDate && selectedTime;
  const canProceedToContact = selectedServices.length > 0;

  const steps = [
    { id: "datetime", label: t.booking.step1 },
    { id: "services", label: t.booking.step2 },
    { id: "contact", label: t.booking.step3 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              currentStep === step.id 
                ? "bg-primary text-primary-foreground" 
                : steps.findIndex(s => s.id === currentStep) > index
                  ? "bg-primary/20 text-primary"
                  : "bg-secondary/50 text-muted-foreground"
            }`}>
              <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-sm font-bold">
                {steps.findIndex(s => s.id === currentStep) > index ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </span>
              <span className="hidden sm:inline font-medium">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 mx-2 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Date & Time */}
      {currentStep === "datetime" && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t.booking.selectDate}</h3>
            </div>

            <div className="flex items-center justify-between mb-6">
              <button onClick={handlePrevMonth} className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <span className="text-lg font-semibold capitalize">{formatMonth(currentMonth)}</span>
              <button onClick={handleNextMonth} className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => (
                <div key={index} className="aspect-square">
                  {day && (
                    <button
                      onClick={() => handleDateClick(day)}
                      disabled={isDateDisabled(day)}
                      className={`w-full h-full rounded-lg text-sm font-medium transition-all duration-200 ${
                        isDateSelected(day)
                          ? "bg-primary text-primary-foreground"
                          : isDateDisabled(day)
                          ? "text-muted-foreground/30 cursor-not-allowed"
                          : "text-foreground hover:bg-primary/20 hover:text-primary"
                      }`}
                    >
                      {day}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t.booking.selectTime}</h3>
            </div>

            {selectedDate ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {t.booking.selectedDate}: <span className="text-foreground font-medium">
                    {selectedDate.toLocaleDateString(t.booking.locale, { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedTime && (
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="text-center mb-4">
                      <p className="text-muted-foreground">{t.booking.yourBooking}:</p>
                      <p className="text-xl font-bold text-primary mt-1">
                        {selectedDate.toLocaleDateString(t.booking.locale, { 
                          day: 'numeric', 
                          month: 'long' 
                        })} {t.booking.at} {selectedTime}
                      </p>
                    </div>
                    <Button 
                      variant="red" 
                      size="lg" 
                      className="w-full"
                      onClick={() => setCurrentStep("services")}
                    >
                      {t.booking.next}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <p>{t.booking.pleaseSelectDate}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Services Selection */}
      {currentStep === "services" && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-2">{t.booking.selectServices}</h3>
            <p className="text-muted-foreground mb-8">{t.booking.selectServicesDesc}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {t.services.packages.map((service, index) => {
                const Icon = serviceIcons[index];
                const price = servicePrices[index];
                const isSelected = selectedServices.includes(index);

                return (
                  <div
                    key={index}
                    onClick={() => toggleService(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-primary/20 border-2 border-primary"
                        : "bg-secondary/30 border-2 border-transparent hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleService(index)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-primary/30" : "bg-primary/10"
                          }`}>
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold">{service.name}</h4>
                            <span className="text-primary font-bold">{price}€</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedServices.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">{t.booking.total}:</span>
                  <span className="text-2xl font-bold text-primary">{getTotalPrice()}€</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-between">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCurrentStep("datetime")}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {t.booking.back}
            </Button>
            <Button 
              variant="red" 
              size="lg"
              disabled={!canProceedToContact}
              onClick={() => setCurrentStep("contact")}
            >
              {t.booking.next}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Form */}
      {currentStep === "contact" && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 red-glow">
            <h3 className="text-2xl font-bold mb-2">{t.contact.formTitle}</h3>
            <p className="text-muted-foreground mb-6">{t.contact.formDescription}</p>

            {/* Summary */}
            <div className="bg-secondary/30 rounded-xl p-4 mb-8">
              <h4 className="font-semibold mb-3">{t.booking.summary}:</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">{t.booking.selectedDate}: </span>
                  <span className="font-medium">
                    {selectedDate?.toLocaleDateString(t.booking.locale, { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })} {t.booking.at} {selectedTime}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">{t.booking.selectedServices}: </span>
                  <span className="font-medium">
                    {selectedServices.map(i => t.services.packages[i].name).join(", ")}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">{t.booking.total}: </span>
                  <span className="font-bold text-primary">{getTotalPrice()}€</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={3}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button"
                  variant="outline" 
                  size="lg"
                  onClick={() => setCurrentStep("services")}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  {t.booking.back}
                </Button>
                <Button variant="red" size="xl" className="flex-1">
                  {t.booking.confirmBooking}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {t.contact.privacy}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSteps;
