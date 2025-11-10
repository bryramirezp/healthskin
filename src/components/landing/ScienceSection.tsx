import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Atom, TestTube2 } from "lucide-react";

export function ScienceSection() {
  const scienceImage = PlaceHolderImages.find(p => p.id === 'science-bio-printing');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold tracking-wider">CIENCIA E INNOVACIÓN</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Tecnología de Bio-impresión a tu Alcance</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              HEALSKIN se crea mediante un proceso de bio-impresión de vanguardia. Utilizamos biomateriales inteligentes y factores de crecimiento para construir una estructura 3D que imita la matriz extracelular de la piel, creando el andamiaje perfecto para la regeneración celular.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full"><Dna className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Matriz Biomimética</h3>
                        <p className="text-muted-foreground">La estructura porosa promueve la migración celular y el intercambio de nutrientes, acelerando la formación de nuevo tejido.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full"><Atom className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Liberación Controlada</h3>
                        <p className="text-muted-foreground">Incorpora y libera agentes terapéuticos de forma sostenida directamente en la herida, optimizando el ambiente para la curación.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full"><TestTube2 className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Biocompatible y Reabsorbible</h3>
                        <p className="text-muted-foreground">Hecho de materiales seguros que el cuerpo integra y reabsorbe naturalmente, evitando la necesidad de retiradas dolorosas.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="order-2 lg:order-1">
            {scienceImage && (
              <Card>
                <CardContent className="p-2">
                  <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={scienceImage.imageUrl}
                      alt={scienceImage.description}
                      fill
                      unoptimized
                      className="object-cover"
                      data-ai-hint={scienceImage.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
