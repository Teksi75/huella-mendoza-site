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
- Las instrucciones directas del chat (usuario/desarrollador/sistema) tienen prioridad sobre estos archivos.
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
- No romper UX/responsive actual; preservar accesibilidad mínima.
- No agregar dependencias sin justificarlo y sin actualizar `package-lock.json`.
- No tocar configuraciones base (Next/TS/ESLint/Tailwind) sin dejarlo explicitado en el resumen de cambios.
- Entornos sin red: usar `next/font/local` y evitar `next/font/google`.
- Navbar: transparencia al hacer scroll + menú mobile.
- ImageCarouselModal: bloqueo de scroll del body, snap horizontal y focus trap; botones prev/next en `md+`.
- WhatsAppCTA: mensaje cambia por ruta (`usePathname`) y se arma en `data/contact.ts`.
- HomeContactForm: validación básica y envío a WhatsApp.
- ProjectsGrid: abre el modal con la galería correcta.

## Checklist antes de finalizar
- Si se tocó `tsconfig.json`, `next-env.d.ts`, `package.json`/`package-lock.json`, `.gitignore`, `app/layout.tsx`, rutas en `app/**/page.tsx` o assets en `public/`: ejecutar `npm run lint` y `npm run build`.
- Si sólo cambió documentación (`*.md`): ejecutar al menos `npm run lint` (si es rápido) o justificar por qué no se ejecutó.
- Verificar rutas clave (`/`, `/base`, `/diseno`, `/diseno/modelos`, `/huella`, `/proyectos`, `/refugios`, `/contacto`) si hubo cambios de UI/rutas.

Docs relacionadas: PROJECT_STRUCTURE_HUELLA.md (mapa extendido)

## Log de cambios (auditoría)
- **Qué cambió y por qué**
  - Se aclaró la precedencia de instrucciones del chat y se ajustaron guardrails para dependencias/configuración.
  - Se refinó el checklist para ejecutar lint/build según el tipo de cambios.
- **Decisiones tomadas**
  - Mantener npm como gestor operativo y usar `npm run lint`/`npm run build` como base para validaciones.
- **Qué validé (comandos/archivos)**
  - Comandos: `git rev-parse --show-toplevel`, `git status --porcelain`, `cat package.json`, `rg --files -g 'AGENTS.md'`, `npm run docs:structure`, `npm run lint`, `npm run build` (falló por fetch de Google Fonts sin red).
  - Archivos leídos: `AGENTS.md`, `PROJECT_STRUCTURE_HUELLA.md`, `package.json`.
