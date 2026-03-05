import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              JDM <span className="text-primary">Global</span> Warehouse
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desde Japón para el mundo. Importación directa de vehículos JDM auténticos con más de 10 años de experiencia.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Hogar", "Catálogo", "Tours", "Sobre Nosotros", "Contacto"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Kanagawa, Japón
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +81 45-227-9955
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                info@jdmglobalwarehouse.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 JDM Global Warehouse. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
