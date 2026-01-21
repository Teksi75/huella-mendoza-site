# Project Structure: Huella Web

## Resumen de stack
- Next.js 16.1.1 con App Router (carpeta `app/`).
- React 19.2.3 + TypeScript 5.9.3.
- Tailwind CSS 4.1.18 (PostCSS: `postcss.config.mjs`, `tailwind.config.ts`).
- ESLint 9.39.2 (`eslint.config.mjs`).
- Framer Motion 12.23.26 y Lucide React 0.562.0.
- Tipografía base: `next/font/google` (Inter) en `app/layout.tsx`.

## Estructura de carpetas (real)
```
.
|-- app/
|   |-- base/
|   |   |-- page.tsx
|   |-- contacto/
|   |   |-- page.tsx
|   |-- diseno/
|   |   |-- modelos/
|   |   |   |-- ModelosListosClient.tsx
|   |   |   |-- page.tsx
|   |   |-- page.tsx
|   |-- huella/
|   |   |-- page.tsx
|   |-- proyectos/
|   |   |-- page.tsx
|   |   |-- ProjectsGrid.tsx
|   |-- refugios/
|   |   |-- page.tsx
|   |-- favicon.ico
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- Footer.tsx
|   |-- HomeContactForm.tsx
|   |-- ImageCarouselModal.tsx
|   |-- Navbar.tsx
|   |-- UsosPosiblesGallery.tsx
|-- data/
|   |-- altText.ts
|   |-- contact.ts
|   |-- modelosListos.ts
|   |-- proyectos.ts
|-- public/
|   |-- .well-known/
|   |   |-- security.txt
|   |-- images/
|   |   |-- proyectos/
|   |   |   |-- diseno-5.jpeg
|   |   |   |-- diseno-6.jpeg
|   |   |   |-- diseno-7.jpeg
|   |   |   |-- diseno-8.jpeg
|   |   |   |-- diseño-4.jpeg
|   |   |   |-- milzoe-01-old.jpeg
|   |   |   |-- milzoe-01.jpeg
|   |   |   |-- milzoe-02-old.jpeg
|   |   |   |-- milzoe-02.jpeg
|   |   |   |-- milzoe-03-old.jpeg
|   |   |   |-- milzoe-03.jpeg
|   |   |   |-- planta_1_dor.png
|   |   |   |-- planta_2_dor_1.png
|   |   |   |-- planta_2_dor_2.png
|   |   |   |-- planta_3_dor.png
|   |   |   |-- proyecto-externo-30.jpg
|   |   |   |-- proyecto-externo-30_frente.jpg
|   |   |   |-- proyecto-externo-30_frente_izq.jpg
|   |   |   |-- proyecto-externo-72.jpg
|   |   |   |-- proyecto-interior-30-1.jpg
|   |   |   |-- proyecto-interior-30-2.jpg
|   |   |   |-- proyecto-interior-30-3.jpg
|   |   |   |-- proyecto-interior-72.jpg
|   |   |   |-- proyecto-interior-comedor-72.png
|   |   |   |-- reame.txt
|   |-- media/
|   |   |-- huella/
|   |   |   |-- base/
|   |   |   |   |-- huella-base-campamento.webp
|   |   |   |   |-- huella-base-logistica.webp
|   |   |   |   |-- huella-base-modulo-simple.webp
|   |   |   |   |-- huella-base-modulo-simple_old.webp
|   |   |   |   |-- huella-base-plegado.webp
|   |   |   |   |-- pan-huella-base-modulo-simple.mp4
|   |   |   |-- diseno/
|   |   |   |   |-- usos/
|   |   |   |   |   |-- Oficina_concept_1.png
|   |   |   |   |   |-- Oficina_concept_2.png
|   |   |   |   |-- diseno-croquis-1.PNG
|   |   |   |   |-- diseno-croquis-10.png
|   |   |   |   |-- diseno-croquis-10.webp
|   |   |   |   |-- diseno-croquis-2.PNG
|   |   |   |   |-- diseno-croquis-3.png
|   |   |   |   |-- diseno-croquis-4.png
|   |   |   |   |-- diseno-croquis-5.png
|   |   |   |   |-- diseno-croquis-6.png
|   |   |   |   |-- diseno-croquis-7.png
|   |   |   |   |-- diseno-croquis-8.png
|   |   |   |   |-- diseno-croquis-9.png
|   |   |   |   |-- diseno-interior-1.png
|   |   |   |   |-- diseno-interior-2.png
|   |   |   |   |-- diseno-interior-3.png
|   |   |   |   |-- diseno-interior-4.png
|   |   |   |   |-- diseno-interior-5.png
|   |   |   |   |-- Hero-16.png
|   |   |   |   |-- Hero-2.png
|   |   |   |   |-- Hero-3.png
|   |   |   |   |-- Hero-8.png
|   |   |   |   |-- Herro-13.png
|   |   |   |-- home/
|   |   |   |   |-- home-protrerillos-embalse-1.png
|   |   |   |   |-- home-protrerillos-embalse-2.png
|   |   |   |   |-- home-protrerillos-embalse-3.png
|   |   |   |-- refugios/
|   |   |   |   |-- experiencia-1.png
|   |   |   |   |-- experiencia-2.png
|   |   |   |   |-- experiencia-3.png
|   |   |   |   |-- experiencia-4.png
|   |   |   |-- 1.png
|   |   |   |-- 10.png
|   |   |   |-- 11.png
|   |   |   |-- 12.png
|   |   |   |-- 13.png
|   |   |   |-- 14.png
|   |   |   |-- 15.png
|   |   |   |-- 16.png
|   |   |   |-- 2.png
|   |   |   |-- 3.png
|   |   |   |-- 4.png
|   |   |   |-- 5.png
|   |   |   |-- 6.png
|   |   |   |-- 7.png
|   |   |   |-- 8.png
|   |   |   |-- 9.png
|   |-- og/
|   |   |-- og-huella.png
|   |-- favicon.svg
|   |-- file.svg
|   |-- globe.svg
|   |-- next.svg
|   |-- robots.txt
|   |-- security.txt
|   |-- sitemap.xml
|   |-- vercel.svg
|   |-- window.svg
|-- .gitattributes
|-- .gitignore
|-- eslint.config.mjs
|-- next-env.d.ts
|-- next.config.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json
```

## Qué se modifica dónde
- Navegación global: `components/Navbar.tsx` (estado de scroll y menú mobile).
- Footer global: `components/Footer.tsx`.
- Layout global, metadata OG/Twitter, favicon y CTA de WhatsApp fijo: `app/layout.tsx`.
- CTA flotante de WhatsApp con mensaje contextual por ruta: `components/WhatsAppCTA.tsx` (usa `usePathname`).
- Estilos globales y tokens de UI: `app/globals.css`.
- Páginas por ruta: `app/<segment>/page.tsx` y subruta `app/diseno/modelos/page.tsx`.
- Componentes de UI con lógica: `app/proyectos/ProjectsGrid.tsx`, `components/ImageCarouselModal.tsx`, `components/HomeContactForm.tsx`, `components/UsosPosiblesGallery.tsx`, `app/diseno/modelos/ModelosListosClient.tsx`.
- Datos estructurados: `data/altText.ts`, `data/contact.ts`, `data/proyectos.ts`, `data/modelosListos.ts`.
- Assets estáticos: `public/images/proyectos/*`, `public/media/huella/**`, `public/og/og-huella.png`, `public/favicon.svg`, `app/favicon.ico`.
- SEO estático y seguridad: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`, `public/security.txt`.

## Rutas clave
- `/` -> `app/page.tsx`
- `/base` -> `app/base/page.tsx`
- `/contacto` -> `app/contacto/page.tsx`
- `/diseno` -> `app/diseno/page.tsx`
- `/diseno/modelos` -> `app/diseno/modelos/page.tsx`
- `/huella` -> `app/huella/page.tsx`
- `/proyectos` -> `app/proyectos/page.tsx`
- `/refugios` -> `app/refugios/page.tsx`

## Assets y media
- OG principal: `public/og/og-huella.png` (referenciado en `app/layout.tsx`).
- Favicon: `public/favicon.svg` (metadata en `app/layout.tsx`) y `app/favicon.ico`.
- Imágenes de proyectos: `public/images/proyectos/*` (renders y plantas).
- Media editorial: `public/media/huella/base/*`, `public/media/huella/diseno/*`, `public/media/huella/diseno/usos/*`, `public/media/huella/home/*`, `public/media/huella/refugios/*`.
- Imágenes sueltas numeradas: `public/media/huella/1.png` a `public/media/huella/16.png`.
- Otros assets en raíz de `public/`: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`.

## Convenciones del repo
- App Router: rutas basadas en `app/<segment>/page.tsx` con layout global en `app/layout.tsx`.
- Metadata global en `app/layout.tsx` (OpenGraph, Twitter, iconos) y metadata específica en `app/base/page.tsx`, `app/diseno/page.tsx`, `app/diseno/modelos/page.tsx`, `app/refugios/page.tsx`.
- SEO estático: `public/robots.txt` referencia `public/sitemap.xml` (lista `/`, `/base`, `/diseno`, `/huella`, `/proyectos`, `/refugios`, `/contacto`).
- Datos tipados en `data/*.ts` (proyectos, modelos listos, textos de contacto, alt text). `data/contact.ts` incluye mensajes diferenciados por intención (base presupuesto/opciones, refugios reserva, contacto directo).
- Rutas de imágenes apuntan a paths bajo `public/`.

## Layouts y grupos de rutas
- Un solo layout global en `app/layout.tsx`.
- No hay grupos de rutas (carpetas con paréntesis).
- Existe una subruta directa `app/diseno/modelos/` sin layout propio.

## Comportamiento responsive (mobile / desktop)
- La Navbar es fija y cambia de fondo según scroll en home; el menú desktop aparece en `lg` y el menú mobile se despliega debajo.
- Las grillas cambian de columnas con `sm`/`md`/`lg` (ej: `ProjectsGrid` usa 2 columnas en `sm` y 3 en `lg`; el `Footer` pasa a 3 columnas en `md`).
- `ImageCarouselModal` permite scroll horizontal con snap y bloquea el scroll del body; los botones Anterior/Siguiente sólo se muestran en `md+`.
- El CTA de WhatsApp es flotante (`fixed bottom-4 right-4`) en todas las páginas y ajusta su mensaje según la ruta actual.

## Componentes con lógica específica para mobile
- `components/Navbar.tsx`: apertura/cierre del menú mobile y cambio de transparencia por scroll.
- `components/ImageCarouselModal.tsx`: scroll horizontal en mobile y controles extra visibles en `md+`; bloqueo de scroll de fondo.
- `app/proyectos/ProjectsGrid.tsx`: abre/cierra el modal (sin lógica exclusiva de mobile; el responsive es CSS).

## Excluidos
- `node_modules/`, `.next/`, `.git/`, `dist/`, `build/`, `.turbo/`, `.vercel/`, `coverage/`, caches y archivos lock fuera de los listados.

## Nota final para asistentes de código
- Antes de cambiar estilos o layout, verifica que Navbar, `ImageCarouselModal`, ProjectsGrid, Footer y el CTA de WhatsApp mantengan la UX responsive actual.
- Si se ajustan grillas, modales o el CTA flotante, actualiza este documento para evitar desalineaciones con el comportamiento real.
