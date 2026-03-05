import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroR32 from "@/assets/hero-r32.jpg";
import heroSupra from "@/assets/hero-supra.jpg";

const slides = [
  {
    image: heroR32,
    title: "Con sede en Kanagawa, Japón",
    subtitle: "Importación directa de vehículos JDM auténticos",
    cta: "Colección R32 GTR",
  },
  {
    image: heroSupra,
    title: "Toyota Supra MK4",
    subtitle: "Leyendas japonesas al alcance de tu mano",
    cta: "Ver Colección",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hogar" className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide text-foreground mb-4">
            {slides[current].title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto font-body">
            {slides[current].subtitle}
          </p>
          <a
            href="#categorias"
            className="inline-block border border-foreground/30 px-8 py-3 text-sm font-medium text-foreground hover:bg-primary hover:border-primary transition-all duration-300 btn-glow btn-ripple"
          >
            {slides[current].cta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={prev} className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-foreground scale-125" : "bg-foreground/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <button onClick={next} className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Siguiente">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
