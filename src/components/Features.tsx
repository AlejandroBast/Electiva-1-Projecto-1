import { Shield, Truck, Globe, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Globe,
    title: "Importación Directa",
    desc: "Enviamos desde Japón a cualquier parte del mundo con documentación completa.",
  },
  {
    icon: Shield,
    title: "Inspección Certificada",
    desc: "Cada vehículo pasa por una inspección de 150 puntos antes de la venta.",
  },
  {
    icon: Truck,
    title: "Envío Internacional",
    desc: "Logística puerta a puerta con seguimiento en tiempo real.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    desc: "Asistencia personalizada en español durante todo el proceso.",
  },
];

const Features = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Más de 10 años de experiencia exportando los mejores JDM del mundo
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 120} variant="fade-up">
              <div className="bg-card p-6 rounded-lg border border-border card-hover-3d">
                <feat.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
