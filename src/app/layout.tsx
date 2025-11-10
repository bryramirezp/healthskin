import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'HEALSKIN | Innovación en Curación de Heridas y Quemaduras',
  description: 'Descubre HEALSKIN, el apósito bio-impreso que acelera la regeneración de la piel, reduce el dolor y minimiza cicatrices. La revolución en el cuidado de heridas complejas y quemaduras.',
  openGraph: {
    title: 'HEALSKIN | Innovación en Curación de Heridas y Quemaduras',
    description: 'La solución biotecnológica para una recuperación más rápida, segura y menos dolorosa. Inspirado en la ciencia, creado para tu bienestar.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://healskin.cl',
    siteName: 'HEALSKIN',
    images: [
      {
        url: 'https://picsum.photos/seed/healskinOG/1200/630',
        width: 1200,
        height: 630,
        alt: 'Apósito Biotecnológico HEALSKIN',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEALSKIN | Innovación en Curación de Heridas',
    description: 'Acelera la recuperación de la piel con HEALSKIN, el apósito bio-impreso diseñado para heridas complejas y quemaduras.',
    images: ['https://picsum.photos/seed/healskinOG/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
