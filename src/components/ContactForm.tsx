import { useState, useCallback } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [data, setData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = useCallback((field: keyof FormData, value: string): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "El nombre es obligatorio";
      if (value.trim().length < 2) return "Mínimo 2 caracteres";
      if (value.trim().length > 100) return "Máximo 100 caracteres";
    }
    if (field === "email") {
      if (!value.trim()) return "El email es obligatorio";
      if (!emailRegex.test(value)) return "Formato de email inválido";
    }
    if (field === "message") {
      if (!value.trim()) return "El mensaje es obligatorio";
      if (value.trim().length < 10) return "Mínimo 10 caracteres";
      if (value.trim().length > 1000) return "Máximo 1000 caracteres";
    }
    return undefined;
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validate(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validate(field, data[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const isValid =
    data.name.trim().length >= 2 &&
    emailRegex.test(data.email) &&
    data.message.trim().length >= 10 &&
    !Object.values(errors).some(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all
    const newErrors: FormErrors = {};
    (Object.keys(data) as (keyof FormData)[]).forEach((field) => {
      newErrors[field] = validate(field, data[field]);
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSent(true);

    // Auto-reset after 3s
    setTimeout(() => {
      setSent(false);
      setData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    }, 3000);
  };

  const fieldClass = (field: keyof FormData) =>
    `w-full bg-muted border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${
      errors[field] && touched[field]
        ? "border-destructive focus:ring-destructive/50 shake-field"
        : "border-border focus:ring-primary/50"
    }`;

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            ¿Buscas un JDM específico? Escríbenos y te ayudamos
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`relative bg-card border border-border rounded-lg p-8 transition-all duration-500 ${
              sent ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {sent && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card rounded-lg z-10 animate-fade-up">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <p className="font-display text-2xl text-foreground">¡Mensaje Enviado!</p>
                <p className="text-sm text-muted-foreground mt-1">Te responderemos pronto</p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  maxLength={100}
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={fieldClass("name")}
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-destructive mt-1 animate-fade-up">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  maxLength={255}
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={fieldClass("email")}
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-destructive mt-1 animate-fade-up">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  placeholder="Cuéntanos qué vehículo buscas..."
                  rows={4}
                  maxLength={1000}
                  value={data.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={fieldClass("message")}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-destructive mt-1 animate-fade-up">{errors.message}</p>
                )}
                <p className="text-xs text-muted-foreground text-right mt-1">
                  {data.message.length}/1000
                </p>
              </div>

              <button
                type="submit"
                disabled={!isValid || sending}
                className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md btn-glow btn-ripple transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
