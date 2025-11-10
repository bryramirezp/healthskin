/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita la exportación estática (SSG)
  output: 'export',
  
  // Deshabilita la optimización de imágenes de Next.js (que requiere un servidor)
  // para un export estático puro.
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
