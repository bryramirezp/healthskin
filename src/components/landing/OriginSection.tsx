import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function OriginSection() {
  const valentinaImage = PlaceHolderImages.find(p => p.id === 'founder-valentina');
  const benjaminImage = PlaceHolderImages.find(p => p.id === 'founder-benjamin');

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestra Historia: De la Universidad al Mundo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            HEALSKIN nació de la pasión y dedicación de dos estudiantes de Biotecnología con un objetivo común: aplicar la ciencia para resolver problemas reales y mejorar la vida de las personas.
            </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col items-center text-center">
                {valentinaImage && (
                    <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                        <AvatarImage src={valentinaImage.imageUrl} alt={valentinaImage.description} data-ai-hint={valentinaImage.imageHint} />
                        <AvatarFallback>VZ</AvatarFallback>
                    </Avatar>
                )}
                <h3 className="text-xl font-bold">Valentina Zenteno</h3>
                <p className="text-primary font-semibold">Co-Fundadora & CSO</p>
                <p className="mt-2 text-muted-foreground">"Vimos el sufrimiento de pacientes con quemaduras y supimos que podíamos hacer más. Nuestra motivación es la empatía convertida en innovación."</p>
            </div>
            <div className="flex flex-col items-center text-center">
                {benjaminImage && (
                    <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                        <AvatarImage src={benjaminImage.imageUrl} alt={benjaminImage.description} data-ai-hint={benjaminImage.imageHint} />
                        <AvatarFallback>BP</AvatarFallback>
                    </Avatar>
                )}
                <h3 className="text-xl font-bold">Benjamín Pereira</h3>
                <p className="text-primary font-semibold">Co-Fundador & CEO</p>
                <p className="mt-2 text-muted-foreground">"Transformamos un proyecto académico en una solución tangible que tiene el potencial de cambiar el estándar de cuidado de heridas en Chile y el mundo."</p>
            </div>
        </div>
      </div>
    </section>
  );
}
