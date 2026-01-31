# AGENTS.md — Huella Web

## Contexto del proyecto
- Sitio web HUELLA en Next.js (App Router) con rutas en `app/`.
- Componentes reutilizables en `components/`.
- Datos tipados y textos operativos en `data/`.
- Assets y media en `public/`.

## Setup commands
> Gestor real: **npm** (hay `package-lock.json`).
- Instalar dependencias: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Dónde tocar qué (mapa rápido)
- Layout global, metadata y CTA flotante: `app/layout.tsx`, `components/WhatsAppCTA.tsx`.
- Navbar (scroll + menú mobile): `components/Navbar.tsx`.
- Footer global: `components/Footer.tsx`.
- Home: `app/page.tsx` + `components/HomeContactForm.tsx`.
- Proyectos: `app/proyectos/page.tsx` + `app/proyectos/ProjectsGrid.tsx`.
- Modal/carrusel de imágenes: `components/ImageCarouselModal.tsx`.
- Usos posibles en Diseño: `components/UsosPosiblesGallery.tsx`.
- Datos de contacto y mensajes WhatsApp: `data/contact.ts`.
- SEO estático/seguridad: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`, `public/security.txt`, `public/llms.txt`.

## Convenciones
- App Router con páginas en `app/<segment>/page.tsx` y layout en `app/layout.tsx`.
- Componentes client llevan `'use client'` cuando usan estado/efectos.
- Alias de imports `@/*` apunta a la raíz (`tsconfig.json`).
- Mantener clases Tailwind y utilidades existentes; evitar romper responsive.
- Accesibilidad mínima: conservar `aria-label`, foco visible y manejo de teclado en modales.

## Jerarquía de instrucciones (AGENTS.md anidados)
- Codex debe leer AGENTS.md desde la raíz hacia el directorio de trabajo y aplicar precedencia por cercanía (el más cercano al archivo manda).
- Si el archivo crece demasiado, partirlo en `app/AGENTS.md`, `components/AGENTS.md`, etc., para scopes más precisos.

## Tareas comunes (modo rápido)
- Ajustar layout global/metadata: `app/layout.tsx`.
- Cambios en navegación (scroll + menú mobile): `components/Navbar.tsx`.
- CTA WhatsApp y mensajes por ruta: `components/WhatsAppCTA.tsx` + `data/contact.ts`.
- Home y formulario de contacto: `app/page.tsx` + `components/HomeContactForm.tsx`.
- Proyectos y grillas: `app/proyectos/page.tsx` + `app/proyectos/ProjectsGrid.tsx`.
- Modal/carrusel de imágenes: `components/ImageCarouselModal.tsx`.
- Galería de usos en Diseño: `components/UsosPosiblesGallery.tsx` + assets en `public/media/huella/diseno/usos/`.
- SEO/archivos públicos: `public/robots.txt`, `public/sitemap.xml`, `public/.well-known/security.txt`, `public/security.txt`, `public/llms.txt`.

## Guardrails (no romper)
- Navbar: transparencia al hacer scroll + menú mobile.
- ImageCarouselModal: bloqueo de scroll del body, snap horizontal y focus trap; botones prev/next en `md+`.
- WhatsAppCTA: mensaje cambia por ruta (`usePathname`) y se arma en `data/contact.ts`.
- HomeContactForm: validación básica y envío a WhatsApp.
- ProjectsGrid: abre el modal con la galería correcta.

## Checklist antes de finalizar
- Ejecutar `npm run lint` y `npm run build` (y tests si se agregan).
- Verificar rutas clave (`/`, `/base`, `/diseno`, `/diseno/modelos`, `/huella`, `/proyectos`, `/refugios`, `/contacto`).
- Confirmar assets referenciados en `public/`.

Docs relacionadas: PROJECT_STRUCTURE_HUELLA.md (mapa extendido)

## Log de cambios (auditoría)
- **Qué cambió y por qué**
  - Se agregaron secciones de jerarquía de instrucciones y tareas comunes para acelerar trabajo sin recorrer todo el repo.
- **Qué validé (comandos/archivos)**
  - Comandos: `git status --porcelain`, `cat package.json`, `cat package-lock.json`.
  - Archivos leídos: `AGENTS.md`, `PROJECT_STRUCTURE_HUELLA.md`, `package.json`, `package-lock.json`.
