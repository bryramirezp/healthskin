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
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div className="flex flex-col items-center text-center">
                {valentinaImage && (
                    <div className="relative mb-4">
                        <Avatar className="w-32 h-32 border-4 border-background">
                            <AvatarImage src={valentinaImage.imageUrl} alt={valentinaImage.description} data-ai-hint={valentinaImage.imageHint} />
                            <AvatarFallback>VZ</AvatarFallback>
                        </Avatar>
                        <span className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical"><path d="M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10"/><path d="m10 10 4 4"/><path d="M10 4v6"/><path d="M14 4v2"/></svg>
                        </span>
                    </div>
                )}
                <h3 className="text-xl font-bold">Valentina Zenteno</h3>
                <p className="text-primary font-semibold">Co-Fundadora & CSO</p>
                <p className="mt-2 text-muted-foreground max-w-sm">"Vimos el sufrimiento de pacientes con quemaduras y supimos que podíamos hacer más. Nuestra motivación es la empatía convertida en innovación."</p>
            </div>
            <div className="flex flex-col items-center text-center">
                {benjaminImage && (
                    <div className="relative mb-4">
                        <Avatar className="w-32 h-32 border-4 border-background">
                            <AvatarImage src={benjaminImage.imageUrl} alt={benjaminImage.description} data-ai-hint={benjaminImage.imageHint} />
                            <AvatarFallback>BP</AvatarFallback>
                        </Avatar>
                         <span className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </span>
                    </div>
                )}
                <h3 className="text-xl font-bold">Benjamín Pereira</h3>
                <p className="text-primary font-semibold">Co-Fundador & CEO</p>
                <p className="mt-2 text-muted-foreground max-w-sm">"Transformamos un proyecto académico en una solución tangible que tiene el potencial de cambiar el estándar de cuidado de heridas en Chile y el mundo."</p>
            </div>
        </div>
      </div>
    </section>
  );
}
