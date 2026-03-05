import catNissan from "@/assets/cat-nissan.jpg";
import catHonda from "@/assets/cat-honda.jpg";
import catMazda from "@/assets/cat-mazda.jpg";
import ScrollReveal from "./ScrollReveal";

const cars = [
  {
    image: catNissan,
    name: "Nissan Skyline R33 GT-R",
    year: "1995",
    price: "$45,900 USD",
    km: "68,000 km",
  },
  {
    image: catHonda,
    name: "Honda NSX NA1",
    year: "1992",
    price: "$89,500 USD",
    km: "52,000 km",
  },
  {
    image: catMazda,
    name: "Mazda RX-7 FD3S",
    year: "1997",
    price: "$52,000 USD",
    km: "74,000 km",
  },
];

const FeaturedCars = () => {
  return (
    <section id="destacados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
            Vehículos <span className="text-gradient">Destacados</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <ScrollReveal key={car.name} delay={i * 150} variant="fade-up">
              <div className="group bg-card rounded-lg overflow-hidden border border-border card-hover-3d">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-sm">
                    {car.year}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-foreground mb-1">{car.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{car.km}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-accent">{car.price}</span>
                    <button className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-sm hover:bg-primary/80 transition-colors btn-glow btn-ripple">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
