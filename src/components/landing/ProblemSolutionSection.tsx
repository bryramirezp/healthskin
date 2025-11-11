import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProblemSolutionSection() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'problem-traditional');
  const solutionImage = PlaceHolderImages.find(p => p.id === 'solution-healskin');

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">HEALSKIN, de la Ciencia a tu Piel</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            En Chile, más de 120.000 personas sufren quemaduras anualmente. Los métodos actuales son a menudo dolorosos, lentos y con riesgo de infección. HEALSKIN nace para cambiar esta realidad.
            </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader className="flex-row gap-4 items-center">
                <div className="bg-destructive/10 p-3 rounded-full">
                    <ThumbsDown className="w-6 h-6 text-destructive" />
                </div>
                <div>
                    <CardTitle>El Problema</CardTitle>
                    <CardDescription>Curación Ineficiente</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              {problemImage && (
                <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                  <Image src={problemImage.imageUrl} alt={problemImage.description} fill unoptimized className="object-cover" data-ai-hint={problemImage.imageHint} />
                </div>
              )}
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dolor intenso en cada cambio de apósito.</li>
                <li>• Lenta regeneración del tejido.</li>
                <li>• Alto riesgo de infecciones y secuelas.</li>
                <li>• Impacto negativo en la calidad de vida.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex-row gap-4 items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                    <ThumbsUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <CardTitle>La Solución</CardTitle>
                    <CardDescription>Innovación Biotecnológica</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              {solutionImage && (
                <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                  <Image src={solutionImage.imageUrl} alt={solutionImage.description} fill unoptimized className="object-cover" data-ai-hint={solutionImage.imageHint} />
                </div>
              )}
              <ul className="space-y-2 text-foreground">
                <li>✓ Curaciones menos invasivas y dolorosas.</li>
                <li>✓ Regeneración cutánea acelerada y eficaz.</li>
                <li>✓ Reduce significativamente el riesgo de infección.</li>
                <li>✓ Mejora notable en la calidad de vida del paciente.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
