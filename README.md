# HEALSKIN - Landing Page

Landing page estática para HEALSKIN, un apósito biotecnológico innovador (bio-impreso) para quemaduras de segundo grado y heridas complejas. Desarrollado como sitio estático con Next.js (SSG) optimizado para SEO y despliegue en CDN.

## Descripción del Proyecto

HEALSKIN es un producto biotecnológico diseñado para acelerar la regeneración de la piel, reducir el dolor y minimizar cicatrices en pacientes con quemaduras y heridas complejas. Este proyecto presenta la landing page corporativa que comunica:

- **Problema:** Más de 120.000 personas sufren quemaduras anualmente en Chile
- **Solución:** Apósito bio-impreso que acelera la recuperación, reduce el dolor y minimiza infecciones
- **Origen:** Proyecto universitario fundado por estudiantes de Biotecnología (Valentina Zenteno y Benjamín Pereira)
- **Beneficios:** Recuperación acelerada, menos dolor, menos invasivo, reduce infecciones y secuelas

## Stack Tecnológico

- **Framework:** Next.js 15.3.3 (App Router) con Static Site Generation (SSG)
- **Lenguaje:** TypeScript 5
- **Estilos:** TailwindCSS 3.4.1 con configuración personalizada
- **Tipografía:** Inter (Google Fonts) - Sans-serif principal
- **Componentes UI:** Radix UI (primitivas headless)
  - Dialog, Accordion, Avatar, Card, Button, Input, Label, Textarea, Scroll Area, Slot
- **Iconos:** Lucide React
- **Formularios:** React Hook Form + Zod (solo estructura, sin funcionalidad backend)
- **Imágenes:** Next.js Image component con `unoptimized: true` para exportación estática
- **Placeholders:** Picsum Photos para imágenes de demostración

## Configuración SSG

El proyecto está configurado para generar un sitio completamente estático:

```12:20:next.config.mjs
const nextConfig = {
  // Habilita la exportación estática (SSG)
  output: 'export',
  
  // Deshabilita la optimización de imágenes de Next.js (que requiere un servidor)
  // para un export estático puro.
  images: {
    unoptimized: true,
  },
```

**Características de SSG:**
- Generación estática en tiempo de build
- Sin dependencias de servidor Node.js en producción
- Despliegue en cualquier CDN o hosting estático (Vercel, Netlify, GitHub Pages, Firebase Hosting, etc.)
- HTML, CSS y JS estáticos pre-renderizados
- Optimizado para SEO mediante metadatos estáticos

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con metadatos SEO y configuración de fuentes
│   ├── page.tsx            # Página principal que ensambla todas las secciones
│   ├── globals.css         # Estilos globales y variables CSS (colores, tipografía)
│   └── favicon.ico
├── components/
│   ├── landing/            # Componentes específicos de la landing page
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── HeroSection.tsx # Sección hero con CTA
│   │   ├── ProblemSolutionSection.tsx # Problema vs Solución
│   │   ├── BenefitsSection.tsx # 5 beneficios principales
│   │   ├── ScienceSection.tsx # Sección científica/tecnológica
│   │   ├── OriginSection.tsx # Historia y fundadores
│   │   ├── InstagramFeed.tsx # Feed de Instagram (placeholder estático)
│   │   ├── ContactModal.tsx # Modal de contacto (placeholder no funcional)
│   │   ├── Footer.tsx      # Footer con links y información
│   │   └── Logo.tsx        # Componente de logo
│   └── ui/                 # Componentes UI reutilizables (Radix UI + Tailwind)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── ... (otros componentes shadcn/ui)
├── lib/
│   ├── placeholder-images.ts # Utilidad para manejar imágenes placeholder
│   ├── placeholder-images.json # Datos de imágenes placeholder
│   └── utils.ts            # Utilidades (cn, etc.)
└── hooks/
    ├── use-mobile.tsx      # Hook para detección de dispositivos móviles
    └── use-toast.ts        # Hook para notificaciones toast
```

## Componentes Principales

### HeroSection
Sección principal con imagen de fondo, título, descripción y CTA. Abre el modal de contacto.

### ProblemSolutionSection
Comparación lado a lado entre el problema (apósitos tradicionales) y la solución (HEALSKIN).

### BenefitsSection
Grid de 5 beneficios principales con iconos:
- Recuperación Acelerada
- Mejora Calidad de Vida
- Menos Invasivo
- Reduce el Dolor
- Disminuye Infecciones y Secuelas

### ScienceSection
Sección que explica la ciencia y tecnología detrás de HEALSKIN.

### OriginSection
Presentación de los fundadores (Valentina Zenteno y Benjamín Pereira) con avatares y citas.

### InstagramFeed
Grid de imágenes de Instagram (placeholder estático usando Picsum Photos). No funcional, solo visual.

### ContactModal
Modal de contacto con formulario (nombre, email, mensaje). **No funcional** - solo placeholder visual sin handler `onSubmit`. Diseñado para ser integrado con backend en el futuro.

## Diseño y Estilos

### Paleta de Colores

Definida en `src/app/globals.css` mediante variables CSS:

- **Primary (Azul Corporativo):** `hsl(212, 95%, 58%)` - #2E90FA
- **Accent (Verde Lima):** `hsl(154, 76%, 83%)` - #A7F3D0
- **Background:** `hsl(213, 100%, 95%)` - #E5F1FF (modo claro)
- **Foreground (Texto):** `hsl(224, 71.4%, 4.1%)` - Azul oscuro
- **Secondary:** `hsl(212, 100%, 90%)` - Azul claro
- **Muted:** `hsl(212, 50%, 93%)` - Gris azulado

Soporta modo oscuro con variables CSS alternativas.

### Tipografía

- **Fuente Principal:** Inter (Google Fonts)
- **Pesos:** 400, 500, 600, 700, 800, 900
- **Configuración:** Definida en `tailwind.config.ts` y cargada en `layout.tsx`

### Responsive Design

- Mobile-first approach
- Breakpoints de Tailwind: `sm`, `md`, `lg`
- Componentes adaptativos con grid y flexbox
- Navegación responsive en Header

## SEO y Metadatos

Metadatos configurados en `src/app/layout.tsx`:

- **Título:** "HEALSKIN | Innovación en Curación de Heridas y Quemaduras"
- **Descripción:** Descripción optimizada con keywords
- **Open Graph:** Configurado para compartir en redes sociales
- **Twitter Card:** `summary_large_image`
- **Locale:** `es_CL` (Español Chile)
- **URL:** `https://healskin.cl`

## Scripts Disponibles

```bash
# Desarrollo local
npm run dev              # Inicia servidor de desarrollo en puerto 9002 con Turbopack

# Build para producción
npm run build           # Genera sitio estático en /out

# Linting y type checking
npm run lint            # Ejecuta ESLint
npm run typecheck       # Verifica tipos TypeScript sin compilar
```

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:9002
```

## Build y Despliegue

```bash
# Generar build estático
npm run build

# El resultado se genera en /out
# Este directorio puede desplegarse en cualquier CDN o hosting estático
```

**Plataformas de despliegue compatibles:**
- Vercel (recomendado para Next.js)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Cualquier servidor web estático (Nginx, Apache, etc.)

## Limitaciones y Características Placeholder

### Formulario de Contacto
El componente `ContactModal` es **puramente visual y no funcional**. No tiene handler `onSubmit` ni integración con backend. Diseñado para ser integrado con un servicio de backend (API, Email Service, etc.) en el futuro.

### Feed de Instagram
El componente `InstagramFeed` utiliza imágenes placeholder de Picsum Photos. **No está conectado a la API de Instagram**. Para producción, se requiere:
- Integración con Instagram Basic Display API
- O reemplazo por imágenes estáticas reales
- O implementación de un CMS para gestionar las imágenes

### Imágenes
Todas las imágenes utilizan placeholders de Picsum Photos. En producción, deben reemplazarse por imágenes reales del producto HEALSKIN.

## Configuración TypeScript

- **Strict mode:** Habilitado
- **Path aliases:** `@/*` apunta a `./src/*`
- **Target:** ES2017
- **Module:** ESNext
- **JSX:** Preserve (Next.js maneja la transformación)

## Configuración de Build

- **TypeScript errors:** Ignorados durante build (`ignoreBuildErrors: true`)
- **ESLint errors:** Ignorados durante build (`ignoreDuringBuilds: true`)
- **Output:** Exportación estática (`output: 'export'`)
- **Images:** Desoptimizadas para exportación estática (`unoptimized: true`)

## Dependencias Principales

- `next`: 15.3.3
- `react`: 18.3.1
- `react-dom`: 18.3.1
- `typescript`: 5
- `tailwindcss`: 3.4.1
- `@radix-ui/*`: Componentes UI headless
- `lucide-react`: Iconos
- `class-variance-authority`: Utilidad para variantes de componentes
- `clsx` + `tailwind-merge`: Utilidades para clases CSS condicionales

## Notas de Desarrollo

- El proyecto utiliza el App Router de Next.js (no Pages Router)
- Todos los componentes de la landing page están en `src/components/landing/`
- Los componentes UI reutilizables siguen el patrón shadcn/ui
- Las imágenes se manejan a través de `src/lib/placeholder-images.ts`
- El diseño es completamente responsive y optimizado para móviles
- Soporta modo oscuro mediante variables CSS (no implementado en UI actualmente)

## Contexto del Producto

HEALSKIN es un apósito biotecnológico desarrollado por estudiantes de Biotecnología en Chile. El producto está diseñado para:

1. **Acelerar la recuperación** de la piel en quemaduras de segundo grado
2. **Reducir el dolor** durante las curaciones
3. **Minimizar infecciones** y secuelas
4. **Mejorar la calidad de vida** de los pacientes
5. **Ser menos invasivo** que los métodos tradicionales

El proyecto nació como una solución a un problema real: más de 120.000 personas sufren quemaduras anualmente en Chile, y los métodos actuales de curación son ineficientes, dolorosos y con alto riesgo de complicaciones.

## Licencia

Proyecto privado - Todos los derechos reservados.
