# Project Structure: Huella Web

## Resumen de stack
- Next.js ^16.1.1 con App Router (carpeta `app/`).
- React ^19.2.3 + React DOM ^19.2.3.
- TypeScript ^5 (strict en `tsconfig.json`).
- Tailwind CSS ^4 con `@tailwindcss/postcss` ^4 (configs: `postcss.config.mjs`, `tailwind.config.ts`).
- ESLint ^9 con `eslint-config-next` 16.1.0 (`eslint.config.mjs`).
- Framer Motion ^12.23.26 y Lucide React ^0.562.0.
- Tipografía base: `next/font/google` (Inter) en `app/layout.tsx`.

## Estructura de carpetas (real)
(AUTO-GENERADO) — No editar a mano. Regenerar cuando cambie la estructura.
```
.
├── .gitattributes
├── .gitignore
├── PROJECT_STRUCTURE_HUELLA.md
├── README.md
├── app
│   ├── base
│   │   └── page.tsx
│   ├── contacto
│   │   └── page.tsx
│   ├── diseno
│   │   ├── modelos
│   │   │   ├── ModelosListosClient.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── huella
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── proyectos
│   │   ├── ProjectsGrid.tsx
│   │   └── page.tsx
│   └── refugios
│       └── page.tsx
├── components
│   ├── Footer.tsx
│   ├── HomeContactForm.tsx
│   ├── ImageCarouselModal.tsx
│   ├── Navbar.tsx
│   ├── UsosPosiblesGallery.tsx
│   └── WhatsAppCTA.tsx
├── data
│   ├── altText.ts
│   ├── contact.ts
│   ├── modelosListos.ts
│   └── proyectos.ts
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── .well-known
│   │   └── security.txt
│   ├── favicon.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── images
│   │   └── proyectos
│   │       ├── diseno-5.jpeg
│   │       ├── diseno-6.jpeg
│   │       ├── diseno-7.jpeg
│   │       ├── diseno-8.jpeg
│   │       ├── diseño-4.jpeg
│   │       ├── milzoe-01-old.jpeg
│   │       ├── milzoe-01.jpeg
│   │       ├── milzoe-02-old.jpeg
│   │       ├── milzoe-02.jpeg
│   │       ├── milzoe-03-old.jpeg
│   │       ├── milzoe-03.jpeg
│   │       ├── planta_1_dor.png
│   │       ├── planta_2_dor_1.png
│   │       ├── planta_2_dor_2.png
│   │       ├── planta_3_dor.png
│   │       ├── proyecto-externo-30.jpg
│   │       ├── proyecto-externo-30_frente.jpg
│   │       ├── proyecto-externo-30_frente_izq.jpg
│   │       ├── proyecto-externo-72.jpg
│   │       ├── proyecto-interior-30-1.jpg
│   │       ├── proyecto-interior-30-2.jpg
│   │       ├── proyecto-interior-30-3.jpg
│   │       ├── proyecto-interior-72.jpg
│   │       ├── proyecto-interior-comedor-72.png
│   │       └── reame.txt
│   ├── llms.txt
│   ├── media
│   │   └── huella
│   │       ├── 1.png
│   │       ├── 10.png
│   │       ├── 11.png
│   │       ├── 12.png
│   │       ├── 13.png
│   │       ├── 14.png
│   │       ├── 15.png
│   │       ├── 16.png
│   │       ├── 2.png
│   │       ├── 3.png
│   │       ├── 4.png
│   │       ├── 5.png
│   │       ├── 6.png
│   │       ├── 7.png
│   │       ├── 8.png
│   │       ├── 9.png
│   │       ├── base
│   │       │   ├── huella-base-campamento.webp
│   │       │   ├── huella-base-logistica.webp
│   │       │   ├── huella-base-modulo-simple.webp
│   │       │   ├── huella-base-modulo-simple_old.webp
│   │       │   ├── huella-base-plegado.webp
│   │       │   └── pan-huella-base-modulo-simple.mp4
│   │       ├── diseno
│   │       │   ├── Hero-16.png
│   │       │   ├── Hero-2.png
│   │       │   ├── Hero-3.png
│   │       │   ├── Hero-8.png
│   │       │   ├── Herro-13.png
│   │       │   ├── diseno-croquis-1.PNG
│   │       │   ├── diseno-croquis-10.png
│   │       │   ├── diseno-croquis-10.webp
│   │       │   ├── diseno-croquis-2.PNG
│   │       │   ├── diseno-croquis-3.png
│   │       │   ├── diseno-croquis-4.png
│   │       │   ├── diseno-croquis-5.png
│   │       │   ├── diseno-croquis-6.png
│   │       │   ├── diseno-croquis-7.png
│   │       │   ├── diseno-croquis-8.png
│   │       │   ├── diseno-croquis-9.png
│   │       │   ├── diseno-interior-1.png
│   │       │   ├── diseno-interior-2.png
│   │       │   ├── diseno-interior-3.png
│   │       │   ├── diseno-interior-4.png
│   │       │   ├── diseno-interior-5.png
│   │       │   └── usos
│   │       │       ├── Oficina_concept_1.png
│   │       │       └── Oficina_concept_2.png
│   │       ├── home
│   │       │   ├── home-protrerillos-embalse-1.png
│   │       │   ├── home-protrerillos-embalse-2.png
│   │       │   └── home-protrerillos-embalse-3.png
│   │       └── refugios
│   │           ├── experiencia-1.png
│   │           ├── experiencia-2.png
│   │           ├── experiencia-3.png
│   │           └── experiencia-4.png
│   ├── next.svg
│   ├── og
│   │   └── og-huella.png
│   ├── robots.txt
│   ├── security.txt
│   ├── sitemap.xml
│   ├── vercel.svg
│   └── window.svg
├── tailwind.config.ts
└── tsconfig.json
```

## Cambios detectados
- El árbol anterior incluía `next-env.d.ts`, pero el archivo no está versionado en el repo actual (aunque `tsconfig.json` lo referencia).

## Qué se modifica dónde
- Navegación global: `components/Navbar.tsx` (estado de scroll y menú mobile).
- Footer global: `components/Footer.tsx`.
- Layout global, metadata OG/Twitter, favicon y CTA de WhatsApp fijo: `app/layout.tsx` + `components/WhatsAppCTA.tsx`.
- CTA flotante de WhatsApp con mensaje contextual por ruta: `components/WhatsAppCTA.tsx` (usa `usePathname` y `data/contact.ts`).
- Estilos globales y tokens de UI: `app/globals.css`.
- Páginas por ruta: `app/<segment>/page.tsx` y subruta `app/diseno/modelos/page.tsx`.
- Componentes de UI con lógica: `app/proyectos/ProjectsGrid.tsx`, `components/ImageCarouselModal.tsx`, `components/HomeContactForm.tsx`, `components/UsosPosiblesGallery.tsx`, `app/diseno/modelos/ModelosListosClient.tsx`.
- Datos estructurados: `data/altText.ts`, `data/contact.ts`, `data/proyectos.ts`, `data/modelosListos.ts`.
- Assets estáticos: `public/images/proyectos/*`, `public/media/huella/**`, `public/og/og-huella.png`, `public/favicon.svg`, `app/favicon.ico`.
- SEO estático y seguridad: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`, `public/security.txt`, `public/llms.txt`.

## Contenido y CTAs (operativo, 2026-01)
- CTA flotante de WhatsApp: se monta en `app/layout.tsx` con `components/WhatsAppCTA.tsx`. Si cambia el número o el mensaje prearmado, revisar también `data/contact.ts`.
- Mensajes y datos de contacto: `data/contact.ts` (teléfono, WhatsApp, mail, textos).
- Cards y micro-CTAs de Diseño (incluye “Ver galería” y la sección “Usos posibles” en Proyectos personalizados): `app/diseno/page.tsx` + `components/UsosPosiblesGallery.tsx` + `components/ImageCarouselModal.tsx` (reusa el mismo modal/carrusel de `/proyectos`).
- Assets “Oficina” (uso posible): `public/media/huella/diseno/usos/Oficina_concept_1.png` y `public/media/huella/diseno/usos/Oficina_concept_2.png`.

## Nota de UX (interno)
- “Proyectos personalizados” en Diseño se comunica como adaptación al caso (no necesariamente premium).
- Cuando se agregue un toque “premium” en CTAs (icono Lucide + microinteracciones), cuidar accesibilidad (foco visible, `aria-label`) y que el layout no cambie en mobile.

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
- Archivos de control/validación: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`, `public/security.txt`, `public/llms.txt`.

## Convenciones del repo
- App Router: rutas basadas en `app/<segment>/page.tsx` con layout global en `app/layout.tsx`.
- Metadata global en `app/layout.tsx` (OpenGraph, Twitter, iconos) y metadata específica en `app/base/page.tsx`, `app/diseno/page.tsx`, `app/diseno/modelos/page.tsx`, `app/refugios/page.tsx`.
- SEO estático: `public/robots.txt` referencia `public/sitemap.xml` (lista `/`, `/base`, `/diseno`, `/huella`, `/proyectos`, `/refugios`, `/contacto`).
- Datos tipados en `data/*.ts` (proyectos, modelos listos, textos de contacto, alt text).
- Alias de imports: `@/*` apunta a la raíz del repo (`tsconfig.json`).
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
