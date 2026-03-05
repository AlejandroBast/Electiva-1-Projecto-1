import { Github, Linkedin, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const teamMembers = [
  {
    name: "Carlos Mendoza",
    role: "Developer 1 — Frontend",
    bio: "Ingeniero de Sistemas con experiencia en React y diseño de interfaces. Responsable de la arquitectura HTML semántica y el modo oscuro.",
    education: "Ingeniería de Sistemas — Universidad Nacional",
    github: "https://github.com/carlosmendoza",
    linkedin: "https://linkedin.com/in/carlosmendoza",
    email: "carlos@example.com",
    avatar: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Developer 2 — UI/UX",
    bio: "Diseñadora y desarrolladora frontend especializada en CSS avanzado y animaciones. Encargada del comportamiento del navbar y enlaces activos.",
    education: "Diseño Digital — Universidad del Valle",
    github: "https://github.com/anarodriguez",
    linkedin: "https://linkedin.com/in/anarodriguez",
    email: "ana@example.com",
    avatar: "AR",
  },
  {
    name: "Luis Herrera",
    role: "Developer 3 — JavaScript",
    bio: "Desarrollador full-stack con enfoque en validación de formularios e interactividad. Implementó feedback animado y validación en tiempo real.",
    education: "Ingeniería Informática — Universidad de Antioquia",
    github: "https://github.com/luisherrera",
    linkedin: "https://linkedin.com/in/luisherrera",
    email: "luis@example.com",
    avatar: "LH",
  },
  {
    name: "María García",
    role: "Developer 4 — CSS Animations",
    bio: "Especialista en micro-interacciones y efectos visuales. Creó los efectos ripple en botones y las animaciones 3D de las tarjetas.",
    education: "Ingeniería Multimedia — Universidad Autónoma",
    github: "https://github.com/mariagarcia",
    linkedin: "https://linkedin.com/in/mariagarcia",
    email: "maria@example.com",
    avatar: "MG",
  },
];

const TeamResumes = () => {
  return (
    <section id="hojas-de-vida" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
            Hojas de <span className="text-gradient">Vida</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Conoce al equipo detrás de JDM Global Warehouse
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 150} variant="scale">
              <div className="bg-card border border-border rounded-lg p-6 card-hover-3d group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-display text-xl text-primary shrink-0">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                    <p className="text-xs text-primary font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.bio}</p>
                <p className="text-xs text-accent mb-4">🎓 {member.education}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamResumes;
