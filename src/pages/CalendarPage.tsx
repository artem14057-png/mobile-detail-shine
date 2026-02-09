import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Simulated booked slots (in real app, this would come from a database)
const bookedSlots: Record<string, string[]> = {
  "2026-02-10": ["09:00", "10:00", "14:00"],
  "2026-02-11": ["11:00", "13:00", "15:00", "16:00"],
  "2026-02-12": ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
  "2026-02-14": ["09:00", "11:00"],
  "2026-02-15": ["14:00", "15:00", "16:00", "17:00"],
  "2026-02-18": ["09:00", "10:00", "11:00"],
  "2026-02-20": ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
};

const allTimeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00"
];

const CalendarPage = () => {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const getDateKey = (day: number) => {
    const y = currentMonth.getFullYear();
    const m = String(currentMonth.getMonth() + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const isDatePast = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  const getAvailability = (day: number) => {
    if (isDatePast(day)) return "past";
    const key = getDateKey(day);
    const booked = bookedSlots[key] || [];
    if (booked.length >= allTimeSlots.length) return "full";
    if (booked.length > allTimeSlots.length / 2) return "few";
    return "available";
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDay(null);
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString(t.booking.locale, { month: "long", year: "numeric" });
  };

  const selectedDateKey = selectedDay ? getDateKey(selectedDay) : null;
  const selectedBookedSlots = selectedDateKey ? (bookedSlots[selectedDateKey] || []) : [];

  return (
    <div className="pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.booking.subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {t.nav.booking}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.booking.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Big Calendar */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <button onClick={handlePrevMonth} className="p-3 rounded-xl hover:bg-primary/10 transition-colors">
                <ChevronLeft className="w-6 h-6 text-muted-foreground" />
              </button>
              <span className="text-2xl font-bold capitalize">{formatMonth(currentMonth)}</span>
              <button onClick={handleNextMonth} className="p-3 rounded-xl hover:bg-primary/10 transition-colors">
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            {/* Week days header */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {t.booking.weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (!day) return <div key={index} />;
                const availability = getAvailability(day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={index}
                    disabled={availability === "past" || availability === "full"}
                    onClick={() => setSelectedDay(day)}
                    className={`aspect-square rounded-xl text-base font-semibold transition-all duration-200 relative flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : availability === "past"
                        ? "text-muted-foreground/20 cursor-not-allowed"
                        : availability === "full"
                        ? "bg-destructive/10 text-destructive/40 cursor-not-allowed"
                        : availability === "few"
                        ? "bg-yellow-500/10 text-foreground hover:bg-yellow-500/20"
                        : "bg-emerald-500/10 text-foreground hover:bg-emerald-500/20"
                    }`}
                  >
                    <span>{day}</span>
                    {availability !== "past" && (
                      <span className={`w-2 h-2 rounded-full ${
                        isSelected
                          ? "bg-primary-foreground"
                          : availability === "full"
                          ? "bg-destructive/40"
                          : availability === "few"
                          ? "bg-yellow-500"
                          : "bg-emerald-500"
                      }`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">
                  {t.booking.locale === "ru-RU" ? "Свободно" : t.booking.locale === "lv-LV" ? "Brīvs" : "Available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-sm text-muted-foreground">
                  {t.booking.locale === "ru-RU" ? "Мало мест" : t.booking.locale === "lv-LV" ? "Maz vietu" : "Few slots"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive/40" />
                <span className="text-sm text-muted-foreground">
                  {t.booking.locale === "ru-RU" ? "Занято" : t.booking.locale === "lv-LV" ? "Aizņemts" : "Full"}
                </span>
              </div>
            </div>
          </div>

          {/* Time slots sidebar */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t.booking.selectTime}</h3>
            </div>

            {selectedDay ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDay).toLocaleDateString(t.booking.locale, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {allTimeSlots.map((time) => {
                    const isBooked = selectedBookedSlots.includes(time);
                    return (
                      <div
                        key={time}
                        className={`py-3 px-4 rounded-lg text-sm font-medium text-center transition-all ${
                          isBooked
                            ? "bg-destructive/10 text-destructive/40 line-through"
                            : "bg-emerald-500/10 text-emerald-400"
                        }`}
                      >
                        {time}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground text-center">
                <p>{t.booking.pleaseSelectDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
