import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import serviceProcess from "@/assets/service-process.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const galleryImages = [beforeAfter1, beforeAfter2, serviceProcess];

const Gallery = () => {
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      image: galleryImages[0],
      title: t.gallery.before + " / " + t.gallery.after,
      description: t.gallery.subtitle,
    },
    {
      id: 2,
      image: galleryImages[1],
      title: t.gallery.before + " / " + t.gallery.after,
      description: t.gallery.subtitle,
    },
    {
      id: 3,
      image: galleryImages[2],
      title: t.gallery.subtitle,
      description: t.gallery.description,
    },
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.gallery.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {t.gallery.title1} <span className="text-gradient-red">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
