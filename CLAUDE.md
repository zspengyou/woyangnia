# CLAUDE.md

## Project

woyangnia.com — Love Page SaaS platform. Couples create personalized romantic web pages at `[subdomain].woyangnia.com`.

- Product spec: `requirements/productspec.md`
- Design spec: `docs/superpowers/specs/2026-03-14-homepage-design.md`

## Tech Stack

- **Monorepo**: Turborepo with npm workspaces
- **Frontend**: Next.js 16 (App Router) at `apps/web/`
- **UI Library**: Shared package at `packages/ui/` (shadcn/ui + Radix UI)
- **Styling**: Tailwind CSS v4 with CSS custom properties in `packages/ui/src/styles/globals.css`
- **Backend**: Supabase (Postgres + Storage + Auth)
- **Hosting**: Vercel

## Visual Design Decisions

The user chose a **warm, personal** direction — NOT the formal/luxury aesthetic originally in the product spec.

- **Vibe**: Conversational, friendly, like a friend telling you about a gift idea. Not a wedding invitation or corporate landing page.
- **Background**: Warm off-white (`#faf7f5` / `oklch(0.978 0.004 70)`)
- **Accent color**: Warm red (`#e06060` / `oklch(0.62 0.17 20)`) — mapped to `--primary`
- **Alt section bg**: `#f5f0ed` — mapped to `--secondary` / `--muted`
- **Typography**: Noto Sans SC (Chinese) + Figtree (Latin), modern sans-serif, no serif fonts
- **Border radius**: 12px (`--radius: 0.75rem`)
- **Tone of copy**: Casual Chinese — "超简单，三步就好" not "HOW IT WORKS"
- **No dark mode** on the marketing site (`forcedTheme="light"` on ThemeProvider)
- **No ornamental dividers** — sections separated by background color alternation

## Code Conventions

- Page-specific components go in `apps/web/components/[page-name]/` (e.g., `homepage/`)
- Shared components (nav, footer) go in `apps/web/components/`
- Reusable UI primitives go in `packages/ui/src/components/`
- Use `cn()` from `@workspace/ui/lib/utils` for conditional classes
- Use `<Button>` from `@workspace/ui/components/button` with `asChild` + `<Link>` for CTA links
- Chinese is the primary language; English used sparingly

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npx turbo run typecheck` — TypeScript check
- `npx turbo run lint` — ESLint
- `npx turbo run build` — production build
