# Natalia Durán — Portfolio

Portfolio profesional construido con Next.js 15, TypeScript, Tailwind CSS v4 y shadcn/ui.

## Stack

- **Next.js 15.5** (App Router, static export)
- **React 19** + **TypeScript 5**
- **Tailwind CSS v4** + **shadcn/ui** (new-york, slate)
- **Framer Motion** para animaciones
- **Web3Forms** para formulario de contacto

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & Deploy

```bash
npm run build    # genera /out para static hosting
npm run start    # preview local
```

El deploy se hace automáticamente vía GitHub Actions a GitHub Pages al pushear a `main`.

## Estructura

```
app/                    # Páginas (/, /about, /work, /services, /contact)
  work/[slug]/          # Case studies dinámicos
components/
  layout/               # Navbar, Footer
  shared/               # Componentes reutilizables
  ui/                   # shadcn/ui primitives
lib/
  data/                 # Contenido (projects, experience, skills, services, etc.)
  types.ts              # TypeScript interfaces
  utils.ts              # cn() helper
public/                 # Assets estáticos, CV, imágenes de proyectos
```

## Licencia

MIT
