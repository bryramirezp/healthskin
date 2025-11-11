import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dna, Atom, TestTube2 } from "lucide-react";

export function ScienceSection() {
  const scienceImage = PlaceHolderImages.find(p => p.id === 'science-bio-printing');

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:gap-16 lg:items-center max-w-7xl mx-auto">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-primary font-semibold tracking-wider text-sm sm:text-base">CIENCIA E INNOVACIÓN</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Tecnología de Bio-impresión a tu Alcance</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 md:px-0">
              HEALSKIN se crea mediante un proceso de bio-impresión de vanguardia. Utilizamos biomateriales inteligentes y factores de crecimiento para construir una estructura 3D que imita la matriz extracelular de la piel, creando el andamiaje perfecto para la regeneración celular.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0"><Dna className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Matriz Biomimética</h3>
                        <p className="text-muted-foreground">La estructura porosa promueve la migración celular y el intercambio de nutrientes, acelerando la formación de nuevo tejido.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0"><Atom className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Liberación Controlada</h3>
                        <p className="text-muted-foreground">Incorpora y libera agentes terapéuticos de forma sostenida directamente en la herida, optimizando el ambiente para la curación.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0"><TestTube2 className="w-6 h-6"/></div>
                    <div>
                        <h3 className="font-semibold text-lg">Biocompatible y Reabsorbible</h3>
                        <p className="text-muted-foreground">Hecho de materiales seguros que el cuerpo integra y reabsorbe naturalmente, evitando la necesidad de retiradas dolorosas.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {scienceImage && (
              <div className="relative aspect-video md:aspect-4/3 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={scienceImage.imageUrl}
                  alt={scienceImage.description}
                  fill
                  unoptimized
                  className="object-cover"
                  data-ai-hint={scienceImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
