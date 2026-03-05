import catNissan from "@/assets/cat-nissan.jpg";
import catToyota from "@/assets/cat-toyota.jpg";
import catHonda from "@/assets/cat-honda.jpg";
import catMazda from "@/assets/cat-mazda.jpg";
import catSubaru from "@/assets/cat-subaru.jpg";
import catMitsubishi from "@/assets/cat-mitsubishi.jpg";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { name: "Nissan", image: catNissan, count: 24 },
  { name: "Toyota", image: catToyota, count: 18 },
  { name: "Honda", image: catHonda, count: 15 },
  { name: "Mazda", image: catMazda, count: 12 },
  { name: "Subaru", image: catSubaru, count: 9 },
  { name: "Mitsubishi", image: catMitsubishi, count: 11 },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
            Categorías
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 100} variant="fade-up">
              <a
                href={`#${cat.name.toLowerCase()}`}
                className="group relative aspect-square overflow-hidden rounded-lg card-hover block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/50 group-hover:bg-primary/40 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 z-10">
                  <p className="font-display text-xl text-foreground">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} vehículos</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
