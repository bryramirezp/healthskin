import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function InstagramFeed() {
  const igImages = PlaceHolderImages.filter(p => p.id.startsWith('instagram-')).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sigue Nuestro Progreso</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            Acompáñanos en nuestro viaje para revolucionar el cuidado de la piel. Encuentra las últimas noticias, hitos y detrás de cámaras en nuestro Instagram.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {igImages.map((image) => (
                <div key={image.id} className="relative aspect-square group overflow-hidden rounded-lg">
                    <Image 
                        src={image.imageUrl} 
                        alt={image.description} 
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-white" />
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                    Seguir en Instagram
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
