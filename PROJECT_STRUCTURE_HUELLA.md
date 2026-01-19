# Project Structure: Huella Web

## Resumen de stack
- Next.js 16 con App Router (carpeta `app/`)
- React 19 + TypeScript
- Tailwind CSS v4 (PostCSS config presente)
- ESLint (config en `eslint.config.mjs`)
- Framer Motion y Lucide React

## Estructura de carpetas (real)
```
.
├─ app/
│  ├─ base/
│  │  └─ page.tsx
│  ├─ contacto/
│  │  └─ page.tsx
│  ├─ diseno/
│  │  └─ page.tsx
│  ├─ huella/
│  │  └─ page.tsx
│  ├─ proyectos/
│  │  ├─ page.tsx
│  │  └─ ProjectsGrid.tsx
│  ├─ refugios/
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Footer.tsx
│  └─ Navbar.tsx
├─ data/
│  ├─ altText.ts
│  ├─ contact.ts
│  └─ proyectos.ts
├─ public/
│  ├─ .well-known/
│  │  └─ security.txt
│  ├─ images/
│  │  └─ proyectos/
│  ├─ media/
│  │  └─ huella/
│  │     ├─ base/
│  │     ├─ diseno/
│  │     ├─ home/
│  │     └─ refugios/
│  ├─ og/
│  │  └─ og-huella.png
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ security.txt
│  └─ sitemap.xml
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
└─ tsconfig.json
```

## Que se modifica donde
- Navegacion y footer global: `components/Navbar.tsx` y `components/Footer.tsx`
- Layout global, metadata, OG y WhatsApp CTA: `app/layout.tsx`
- Estilos globales y tokens de UI: `app/globals.css`
- Paginas por ruta: `app/<ruta>/page.tsx` (App Router)
- Grid de proyectos: `app/proyectos/ProjectsGrid.tsx`
- Textos y datos estructurados: `data/*.ts`
- Imagenes de proyectos: `public/images/proyectos/*`
- Media editorial (home, base, diseno, refugios): `public/media/huella/*`
- SEO estatico: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`

## Rutas clave
- `/` -> `app/page.tsx`
- `/base` -> `app/base/page.tsx`
- `/contacto` -> `app/contacto/page.tsx`
- `/diseno` -> `app/diseno/page.tsx`
- `/huella` -> `app/huella/page.tsx`
- `/proyectos` -> `app/proyectos/page.tsx`
- `/refugios` -> `app/refugios/page.tsx`

## Assets y media
- OG principal: `public/og/og-huella.png` (referenciado en `app/layout.tsx`)
- Favicon: `app/favicon.ico` y `public/favicon.svg`
- Imagenes de proyectos: `public/images/proyectos/*`
- Media por seccion: `public/media/huella/{home,base,diseno,refugios}/*`

## Convenciones del repo
- App Router: rutas basadas en `app/<segment>/page.tsx` con layout global unico en `app/layout.tsx`.
- Datos tipados en `data/*.ts` (proyectos, textos de contacto, alt text).
- Las rutas de imagen en `data/*.ts` apuntan a paths bajo `public/`.
- OG y metadata se configuran en `app/layout.tsx` (incluye OpenGraph y Twitter).

## Layouts y grupos de rutas
- Un solo layout global en `app/layout.tsx`.
- No hay grupos de rutas (carpetas con parens) en la estructura actual.

## Comportamiento responsive (mobile / desktop)
- La experiencia mobile prioriza jerarquia visual, lectura y foco en la accion principal; en desktop se expande el contenido sin perder claridad.
- La Navbar permanece fija y cambia de transparencia en home al hacer scroll; en mobile se accede via menu colapsado y en desktop via barra completa.
- ProjectsGrid pasa de tarjetas apiladas a grilla amplia y el modal favorece el recorrido por imagenes con navegacion simple.
- El layout global mantiene CTA flotante (WhatsApp) y debe evitar tapar acciones clave en pantallas pequenas.
- El Footer se presenta apilado en mobile para lectura rapida y en columnas en desktop para escaneo.

## Componentes con logica especifica para mobile
- `components/Navbar.tsx`: alterna menu mobile (abrir/cerrar), ajusta contraste segun scroll y cierra el menu al navegar.
- `app/proyectos/ProjectsGrid.tsx`: modal bloquea el scroll de fondo y el carrusel se recorre con gesto horizontal; botones de navegacion visibles en desktop.
- `components/Footer.tsx`: sin logica JS, pero su estructura apilada es la referencia para mobile.
- `app/layout.tsx`: CTA flotante persistente y layout fijo con Navbar + Footer en todas las paginas.

## Excluidos
- `node_modules/`, `.next/`, `.git/`, `dist/`, `build/`, `.turbo/`, `.vercel/`, `coverage/`, archivos lock y caches.

## Nota final para asistentes de codigo
- Antes de cambiar estilos o layout, verifica que Navbar, ProjectsGrid, Footer y el layout global mantengan la UX mobile descrita.
- Si se ajustan grillas, modales o CTA flotantes, actualiza este documento para evitar desalineaciones con el comportamiento responsive real.
