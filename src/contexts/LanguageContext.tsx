import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "en" | "lv";

interface Translations {
  nav: {
    home: string;
    services: string;
    gallery: string;
    booking: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
    cta1: string;
    cta2: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  services: {
    subtitle: string;
    title1: string;
    titleHighlight: string;
    description: string;
    popular: string;
    select: string;
    currency: string;
    whatIncluded: string;
    packages: {
      name: string;
      description: string;
      features: string[];
    }[];
  };
  gallery: {
    subtitle: string;
    title1: string;
    titleHighlight: string;
    description: string;
    before: string;
    after: string;
  };
  booking: {
    subtitle: string;
    title1: string;
    titleHighlight: string;
    description: string;
    selectDate: string;
    selectTime: string;
    selectedDate: string;
    yourBooking: string;
    at: string;
    confirmBooking: string;
    pleaseSelectDate: string;
    weekDays: string[];
    locale: string;
    step1: string;
    step2: string;
    step3: string;
    next: string;
    back: string;
    selectServices: string;
    selectServicesDesc: string;
    total: string;
    summary: string;
    selectedServices: string;
  };
  contact: {
    subtitle: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    hours: string;
    hoursValue: string;
    area: string;
    areaValue: string;
    infoTitle: string;
    mapTitle: string;
    greenZone: string;
    greenZoneDesc: string;
    yellowZone: string;
    yellowZoneDesc: string;
    formTitle: string;
    formDescription: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    carLabel: string;
    carPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    privacy: string;
    successMessage: string;
  };
  footer: {
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      gallery: "Галерея",
      booking: "Календарь",
      contact: "Контакты",
      bookNow: "Записаться",
    },
    hero: {
      badge: "ПРЕМИУМ ДЕТЕЙЛИНГ С ВЫЕЗДОМ",
      title1: "Ваш автомобиль",
      titleHighlight: "заслуживает",
      title2: "лучшего ухода",
      description:
        "Профессиональный мобильный детейлинг с выездом к вам. Мы приедем в любое удобное место и время, чтобы вернуть вашему автомобилю первозданный блеск.",
      cta1: "Записаться на детейлинг",
      cta2: "Узнать цены",
      stat1Value: "500+",
      stat1Label: "Довольных клиентов",
      stat2Value: "5 лет",
      stat2Label: "На рынке",
      stat3Value: "24/7",
      stat3Label: "Работаем для вас",
    },
    services: {
      subtitle: "Наши услуги",
      title1: "Выберите",
      titleHighlight: "идеальный пакет",
      description:
        "От быстрой мойки до полного детейлинга с защитным покрытием — у нас есть решение для любых потребностей",
      popular: "ПОПУЛЯРНЫЙ",
      select: "Выбрать",
      currency: "€",
      whatIncluded: "Что входит:",
      packages: [
        {
          name: "Интерьер",
          description: "Полная глубокая чистка салона автомобиля",
          features: [
            "Уборка салона пылесосом",
            "Химчистка сидений",
            "Протирка пластика и панелей",
            "Очистка ковриков",
            "Обработка кожи",
            "Озонирование",
          ],
        },
        {
          name: "Экстерьер",
          description: "Мойка, полировка и защита кузова снаружи",
          features: [
            "Бесконтактная мойка",
            "Полировка кузова",
            "Нанесение воска",
            "Чернение резины",
            "Протирка стёкол",
            "Детейлинг дисков",
          ],
        },
        {
          name: "Комплект",
          description: "Полный уход: интерьер + экстерьер вместе",
          features: [
            "Всё из Интерьер",
            "Всё из Экстерьер",
            "Керамическое покрытие",
            "Защитная плёнка PPF",
            "Восстановление фар",
            "Гарантия 1 год",
          ],
        },
      ],
    },
    gallery: {
      subtitle: "Наши работы",
      title1: "Результаты",
      titleHighlight: "говорят сами за себя",
      description:
        "Посмотрите трансформацию автомобилей наших клиентов — от уставших и запущенных до сияющих как новые",
      before: "До",
      after: "После",
    },
    booking: {
      subtitle: "Онлайн запись",
      title1: "Выберите",
      titleHighlight: "дату и время",
      description: "Выберите удобное время для записи на детейлинг вашего автомобиля",
      selectDate: "Выберите дату",
      selectTime: "Выберите время",
      selectedDate: "Выбранная дата",
      yourBooking: "Ваша запись",
      at: "в",
      confirmBooking: "Подтвердить запись",
      pleaseSelectDate: "Сначала выберите дату в календаре",
      weekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      locale: "ru-RU",
      step1: "Дата и время",
      step2: "Услуги",
      step3: "Заявка",
      next: "Далее",
      back: "Назад",
      selectServices: "Выберите услуги",
      selectServicesDesc: "Отметьте услуги, которые вас интересуют",
      total: "Итого",
      summary: "Ваша запись",
      selectedServices: "Выбранные услуги",
    },
    contact: {
      subtitle: "Связаться с нами",
      title1: "Готовы",
      titleHighlight: "преобразить",
      title2: "ваш автомобиль?",
      description:
        "Оставьте заявку и мы свяжемся с вами в течение 15 минут, чтобы обсудить детали и назначить удобное время",
      phone: "Телефон",
      email: "Email",
      hours: "Режим работы",
      hoursValue: "Ежедневно 8:00 - 22:00",
      area: "Зона обслуживания",
      areaValue: "Рига и окрестности (до 30 км)",
      infoTitle: "Контактная информация",
      mapTitle: "Зона обслуживания",
      greenZone: "Рига",
      greenZoneDesc: "бесплатный выезд",
      yellowZone: "+30 км",
      yellowZoneDesc: "выезд за доп. плату",
      formTitle: "Оставить заявку",
      formDescription: "Заполните форму и мы свяжемся с вами",
      nameLabel: "Ваше имя",
      namePlaceholder: "Иван",
      phoneLabel: "Телефон",
      phonePlaceholder: "+371 __ ___ ___",
      carLabel: "Марка и модель авто",
      carPlaceholder: "BMW X5",
      messageLabel: "Сообщение (необязательно)",
      messagePlaceholder: "Опишите, какие услуги вас интересуют...",
      submit: "Отправить заявку",
      privacy: "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных",
      successMessage: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
    },
    footer: {
      copyright: "© 2026 BM Detailing. Все права защищены.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      booking: "Calendar",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "PREMIUM MOBILE DETAILING",
      title1: "Your car",
      titleHighlight: "deserves",
      title2: "the best care",
      description:
        "Professional mobile detailing at your location. We come to any convenient place and time to restore your car's original shine.",
      cta1: "Book Detailing",
      cta2: "View Prices",
      stat1Value: "500+",
      stat1Label: "Happy clients",
      stat2Value: "5 years",
      stat2Label: "In business",
      stat3Value: "24/7",
      stat3Label: "Working for you",
    },
    services: {
      subtitle: "Our services",
      title1: "Choose the",
      titleHighlight: "perfect package",
      description:
        "From a quick wash to full detailing with protective coating — we have a solution for any need",
      popular: "POPULAR",
      select: "Select",
      currency: "€",
      whatIncluded: "What's included:",
      packages: [
        {
          name: "Interior",
          description: "Complete deep cleaning of the car interior",
          features: [
            "Interior vacuuming",
            "Seat dry cleaning",
            "Plastic and panel wiping",
            "Floor mat cleaning",
            "Leather treatment",
            "Ozonation",
          ],
        },
        {
          name: "Exterior",
          description: "Wash, polish and exterior body protection",
          features: [
            "Touchless wash",
            "Body polishing",
            "Wax application",
            "Tire blackening",
            "Glass wiping",
            "Wheel detailing",
          ],
        },
        {
          name: "Full Package",
          description: "Complete care: interior + exterior together",
          features: [
            "Everything from Interior",
            "Everything from Exterior",
            "Ceramic coating",
            "PPF protective film",
            "Headlight restoration",
            "1 year warranty",
          ],
        },
      ],
    },
    gallery: {
      subtitle: "Our work",
      title1: "Results",
      titleHighlight: "speak for themselves",
      description:
        "See the transformation of our clients' cars — from tired and neglected to shining like new",
      before: "Before",
      after: "After",
    },
    booking: {
      subtitle: "Online Booking",
      title1: "Select",
      titleHighlight: "date and time",
      description: "Choose a convenient time to book detailing for your car",
      selectDate: "Select date",
      selectTime: "Select time",
      selectedDate: "Selected date",
      yourBooking: "Your booking",
      at: "at",
      confirmBooking: "Confirm booking",
      pleaseSelectDate: "First select a date on the calendar",
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      locale: "en-US",
      step1: "Date & Time",
      step2: "Services",
      step3: "Request",
      next: "Next",
      back: "Back",
      selectServices: "Select services",
      selectServicesDesc: "Check the services you are interested in",
      total: "Total",
      summary: "Your booking",
      selectedServices: "Selected services",
    },
    contact: {
      subtitle: "Contact us",
      title1: "Ready to",
      titleHighlight: "transform",
      title2: "your car?",
      description:
        "Leave a request and we'll contact you within 15 minutes to discuss details and schedule a convenient time",
      phone: "Phone",
      email: "Email",
      hours: "Working hours",
      hoursValue: "Daily 8:00 - 22:00",
      area: "Service area",
      areaValue: "Riga and surroundings (up to 30 km)",
      infoTitle: "Contact information",
      mapTitle: "Service area",
      greenZone: "Riga",
      greenZoneDesc: "free service",
      yellowZone: "+30 km",
      yellowZoneDesc: "additional fee",
      formTitle: "Leave a request",
      formDescription: "Fill out the form and we'll contact you",
      nameLabel: "Your name",
      namePlaceholder: "John",
      phoneLabel: "Phone",
      phonePlaceholder: "+371 __ ___ ___",
      carLabel: "Car make and model",
      carPlaceholder: "BMW X5",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Describe which services interest you...",
      submit: "Send request",
      privacy: "By clicking the button, you agree to the processing of personal data",
      successMessage: "Thank you for your request! We'll contact you soon.",
    },
    footer: {
      copyright: "© 2026 BM Detailing. All rights reserved.",
    },
  },
  lv: {
    nav: {
      home: "Sākums",
      services: "Pakalpojumi",
      gallery: "Galerija",
      booking: "Kalendārs",
      contact: "Kontakti",
      bookNow: "Pieteikties",
    },
    hero: {
      badge: "PREMIUM MOBILAIS DETALIZĒŠANA",
      title1: "Jūsu automašīna",
      titleHighlight: "ir pelnījusi",
      title2: "vislabāko aprūpi",
      description:
        "Profesionāla mobilā detalizēšana jūsu atrašanās vietā. Mēs ieradīsimies jebkurā ērtā vietā un laikā, lai atjaunotu jūsu automašīnas sākotnējo spīdumu.",
      cta1: "Pieteikt detalizēšanu",
      cta2: "Skatīt cenas",
      stat1Value: "500+",
      stat1Label: "Apmierināti klienti",
      stat2Value: "5 gadi",
      stat2Label: "Tirgū",
      stat3Value: "24/7",
      stat3Label: "Strādājam jums",
    },
    services: {
      subtitle: "Mūsu pakalpojumi",
      title1: "Izvēlieties",
      titleHighlight: "ideālo paketi",
      description:
        "No ātras mazgāšanas līdz pilnai detalizēšanai ar aizsargpārklājumu — mums ir risinājums jebkurām vajadzībām",
      popular: "POPULĀRS",
      select: "Izvēlēties",
      currency: "€",
      whatIncluded: "Kas iekļauts:",
      packages: [
        {
          name: "Interjers",
          description: "Pilnīga automašīnas salona dziļā tīrīšana",
          features: [
            "Salona putekļsūcējs",
            "Sēdekļu ķīmiskā tīrīšana",
            "Plastmasas un paneļu tīrīšana",
            "Grīdas paklāju tīrīšana",
            "Ādas apstrāde",
            "Ozonēšana",
          ],
        },
        {
          name: "Eksterjers",
          description: "Mazgāšana, pulēšana un virsbūves aizsardzība",
          features: [
            "Bezkontakta mazgāšana",
            "Virsbūves pulēšana",
            "Vaska uzklāšana",
            "Riepu melnināšana",
            "Stiklu tīrīšana",
            "Riteņu detalizēšana",
          ],
        },
        {
          name: "Komplekts",
          description: "Pilna aprūpe: interjers + eksterjers kopā",
          features: [
            "Viss no Interjera",
            "Viss no Eksterjera",
            "Keramikas pārklājums",
            "PPF aizsargplēve",
            "Lukturu atjaunošana",
            "1 gada garantija",
          ],
        },
      ],
    },
    gallery: {
      subtitle: "Mūsu darbi",
      title1: "Rezultāti",
      titleHighlight: "runā paši par sevi",
      description:
        "Skatiet mūsu klientu automašīnu pārvērtības — no nogurušām un pamestām līdz spīdošām kā jaunām",
      before: "Pirms",
      after: "Pēc",
    },
    booking: {
      subtitle: "Tiešsaistes rezervācija",
      title1: "Izvēlieties",
      titleHighlight: "datumu un laiku",
      description: "Izvēlieties ērtu laiku, lai rezervētu detalizēšanu jūsu automašīnai",
      selectDate: "Izvēlieties datumu",
      selectTime: "Izvēlieties laiku",
      selectedDate: "Izvēlētais datums",
      yourBooking: "Jūsu rezervācija",
      at: "plkst.",
      confirmBooking: "Apstiprināt rezervāciju",
      pleaseSelectDate: "Vispirms izvēlieties datumu kalendārā",
      weekDays: ["Pr", "Ot", "Tr", "Ce", "Pk", "Se", "Sv"],
      locale: "lv-LV",
      step1: "Datums un laiks",
      step2: "Pakalpojumi",
      step3: "Pieteikums",
      next: "Tālāk",
      back: "Atpakaļ",
      selectServices: "Izvēlieties pakalpojumus",
      selectServicesDesc: "Atzīmējiet pakalpojumus, kas jūs interesē",
      total: "Kopā",
      summary: "Jūsu rezervācija",
      selectedServices: "Izvēlētie pakalpojumi",
    },
    contact: {
      subtitle: "Sazinieties ar mums",
      title1: "Gatavi",
      titleHighlight: "pārveidot",
      title2: "jūsu automašīnu?",
      description:
        "Atstājiet pieprasījumu un mēs sazināsimies ar jums 15 minūšu laikā, lai apspriestu detaļas un ieplānotu ērtu laiku",
      phone: "Tālrunis",
      email: "E-pasts",
      hours: "Darba laiks",
      hoursValue: "Katru dienu 8:00 - 22:00",
      area: "Apkalpošanas zona",
      areaValue: "Rīga un apkārtne (līdz 30 km)",
      infoTitle: "Kontaktinformācija",
      mapTitle: "Apkalpošanas zona",
      greenZone: "Rīga",
      greenZoneDesc: "bezmaksas izbraukums",
      yellowZone: "+30 km",
      yellowZoneDesc: "par papildu samaksu",
      formTitle: "Atstāt pieprasījumu",
      formDescription: "Aizpildiet veidlapu un mēs sazināsimies ar jums",
      nameLabel: "Jūsu vārds",
      namePlaceholder: "Jānis",
      phoneLabel: "Tālrunis",
      phonePlaceholder: "+371 __ ___ ___",
      carLabel: "Automašīnas marka un modelis",
      carPlaceholder: "BMW X5",
      messageLabel: "Ziņojums (neobligāti)",
      messagePlaceholder: "Aprakstiet, kuri pakalpojumi jūs interesē...",
      submit: "Nosūtīt pieprasījumu",
      privacy: "Noklikšķinot uz pogas, jūs piekrītat personas datu apstrādei",
      successMessage: "Paldies par jūsu pieprasījumu! Mēs drīz sazināsimies ar jums.",
    },
    footer: {
      copyright: "© 2026 BM Detailing. Visas tiesības aizsargātas.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
