"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { getInstagramPosts } from "@/lib/instagram-data";

export function InstagramFeed() {
  const instagramData = getInstagramPosts();
  const posts = instagramData.posts || [];
  const instagramUsername = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'healskin.bio';
  const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;

  if (posts.length === 0) {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Sigue Nuestro Progreso</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              Acompáñanos en nuestro viaje para revolucionar el cuidado de la piel. Encuentra las últimas noticias, hitos y detrás de cámaras en nuestro Instagram.
            </p>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram />
                Seguir en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Sigue Nuestro Progreso</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Acompáñanos en nuestro viaje para revolucionar el cuidado de la piel. Encuentra las últimas noticias, hitos y detrás de cámaras en nuestro Instagram.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-4 max-w-7xl mx-auto">
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden rounded-lg"
            >
              <Image 
                src={post.imageUrl} 
                alt={post.caption || 'Publicación de Instagram'} 
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
