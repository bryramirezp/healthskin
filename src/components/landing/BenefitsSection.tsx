import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Beneficios que Transforman Vidas</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            HEALSKIN no es solo un apósito, es una nueva esperanza para una recuperación integral.
            </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
