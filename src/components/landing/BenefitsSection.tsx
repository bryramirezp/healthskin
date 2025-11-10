import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, HeartPulse, ShieldCheck, ShieldPlus, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Recuperación Acelerada",
    description: "Nuestra matriz bioactiva estimula los procesos naturales del cuerpo, reduciendo drásticamente los tiempos de curación.",
  },
  {
    icon: HeartPulse,
    title: "Mejora Calidad de Vida",
    description: "Al favorecer una regeneración rápida y ordenada, HEALSKIN ayuda a los pacientes a retomar sus actividades diarias antes.",
  },
  {
    icon: ShieldCheck,
    title: "Menos Invasivo",
    description: "Diseñado para interactuar amigablemente con el lecho de la herida, minimizando el trauma en cada aplicación y cambio.",
  },
{
    icon: ShieldPlus,
    title: "Reduce el Dolor",
    description: "La composición única del apósito protege las terminaciones nerviosas, ofreciendo un alivio significativo del dolor durante la curación.",
  },
  {
    icon: Sparkles,
    title: "Disminuye Infecciones y Secuelas",
    description: "Crea una barrera protectora optimizada que previene infecciones y promueve una cicatrización de mayor calidad estética y funcional.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beneficios que Transforman Vidas</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            HEALSKIN no es solo un apósito, es una nueva esperanza para una recuperación integral.
            </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="lg:col-span-1 group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/50 p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <benefit.icon className="w-8 h-8 text-accent-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <CardTitle className="mb-1">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
          <div className="hidden lg:flex lg:col-start-2 lg:col-span-1" /> {/* Empty div to center the last two cards on a 3-col grid */}
        </div>
      </div>
    </section>
  );
}
