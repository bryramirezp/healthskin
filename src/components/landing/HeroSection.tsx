
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
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center -mt-20">
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
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="bg-primary-foreground/20 backdrop-blur-sm p-2 rounded-full">
              <p className="text-sm font-medium text-primary-foreground">
                Ciencia. Innovación. Empatía.
              </p>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground drop-shadow-lg text-center">
              La Revolución en la Regeneración de la Piel
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              HEALSKIN: El apósito bio-impreso que acelera la curación, reduce el dolor y transforma la vida de pacientes con quemaduras y heridas complejas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
