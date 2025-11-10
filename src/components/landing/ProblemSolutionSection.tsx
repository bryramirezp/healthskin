import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProblemSolutionSection() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'problem-traditional');
  const solutionImage = PlaceHolderImages.find(p => p.id === 'solution-healskin');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">HEALSKIN, de la Ciencia a tu Piel</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            En Chile, más de 120.000 personas sufren quemaduras anualmente. Los métodos actuales son a menudo dolorosos, lentos y con riesgo de infección. HEALSKIN nace para cambiar esta realidad.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
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
