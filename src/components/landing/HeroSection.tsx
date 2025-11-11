
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-biotech');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-screen md:min-h-[600px] flex items-center justify-center -mt-20 pt-20">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center z-0"
            unoptimized
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/40 dark:bg-primary/80 z-10" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-center max-w-4xl mx-auto py-12 sm:py-16 md:py-20">
            <div className="bg-primary-foreground/20 backdrop-blur-sm p-2 rounded-full">
              <p className="text-sm font-medium text-primary-foreground">
                Ciencia. Innovación. Empatía.
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-foreground drop-shadow-lg">
              La Revolución en la Regeneración de la Piel
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4 sm:px-0">
              HEALSKIN: El apósito bio-impreso que acelera la curación, reduce el dolor y transforma la vida de pacientes con quemaduras y heridas complejas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  Contáctanos
                  <ArrowRight />
                </Button>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
