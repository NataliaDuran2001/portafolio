# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio site for Natalia Duran. Single-page Next.js App Router app with sections for hero, about, experience, projects, skills, education, and contact. Content is in Spanish.

## Stack

- **Next.js 15.5** with App Router and Turbopack (both `dev` and `build` use `--turbopack`)
- **React 19** + **TypeScript 5** (strict mode)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) — no `tailwind.config.js`; configure via `app/globals.css`
- **shadcn/ui** — `new-york` style, `slate` base color, `lucide-react` icons, RSC enabled
- **framer-motion** for animations, **next-themes** for dark mode
- Radix primitives: avatar, dialog, navigation-menu, progress, separator, slot, tabs

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build --turbopack
npm run start    # next start
npm run lint     # eslint (flat config, extends next/core-web-vitals + next/typescript)
```

No test suite is configured. No `type-check` script despite what the README claims.

## Layout

Flat structure at the repo root (no `src/` directory, unlike the README's diagram):

```
app/                      # App Router entrypoints (layout.tsx, page.tsx, globals.css)
components/
  layout/                 # Navbar, Footer
  sections/               # Hero/About/Experience/Projects/Skills/Education/Contact
  ui/                     # shadcn/ui primitives — regenerate via `npx shadcn@latest add ...`
  theme-provider.tsx      # next-themes wrapper
lib/utils.ts              # `cn()` helper (clsx + tailwind-merge)
public/                   # static assets (avatar, CV)
```

Path alias: `@/*` → repo root (see `tsconfig.json`). shadcn aliases resolve as `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.

## Conventions

- Section components live in `components/sections/` and are composed in `app/page.tsx`.
- UI primitives in `components/ui/` are shadcn-generated — prefer regenerating via the shadcn CLI over hand-editing, and follow the `new-york` variant conventions (CVA + Radix + `cn`).
- Use the `@/` alias for imports, not relative paths across directories.
- Tailwind v4: theme tokens and CSS variables live in `app/globals.css`, not a JS config.

## Known issues

- **`README.md` has unresolved git merge conflict markers** (`<<<<<<< HEAD` / `>>>>>>>`). The "HEAD" side is a stub; the incoming side is the real README. Resolve before touching README content.
- The README describes a `src/`-based layout and Next.js 14 — the actual repo is flat and on Next.js 15.5 / React 19. Trust the code, not the README.
