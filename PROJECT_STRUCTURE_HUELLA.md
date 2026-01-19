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

## Excluidos
- `node_modules/`, `.next/`, `.git/`, `dist/`, `build/`, `.turbo/`, `.vercel/`, `coverage/`, archivos lock y caches.
