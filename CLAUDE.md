# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev         # dev server at http://localhost:3000
npm run build       # production build
npm run start       # serve production build
npm run lint        # next lint
npm run type-check  # tsc --noEmit
```

There is no test suite. Verify changes with `npm run type-check` and `npm run build`.

## Architecture

Single-page portfolio site for Aqeel Ahmad: Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion. Builds statically, deploys to Vercel, no required env vars.

### Content-as-data pattern (the core idea)

All site content lives in typed files under `data/` — one file per section (personal, projects, experience, skills, testimonials, etc.), with all shared types in `data/types.ts`. Section components in `components/sections/` import their data file and render it; content edits should touch only `data/`, never components. `app/page.tsx` composes all sections in order.

Sections auto-hide when their data array is empty (e.g. `Certificates` and `Testimonials` return `null` if their array has no entries), so an empty data file removes the section without any component change.

### Booking flow

The "Book a Discovery Call" feature spans several layers:

- `components/BookingProvider.tsx` — client context mounted in `app/layout.tsx`; any component calls `useBooking().open()` to show `BookingDialog`.
- `lib/booking.ts` — shared logic: time slots, .ics generation, mailto fallback, human-readable slot formatting. Times are hardcoded to PKT (UTC+5 / Asia/Karachi).
- `app/api/book/route.ts` — POST endpoint. If `RESEND_API_KEY` is set at deploy time it emails both parties via Resend (with .ics attachment); without the key it still returns `ok: true` and the client falls back to a pre-filled mailto link. Email failures soft-fail by design — don't turn them into hard errors.
- `app/api/book/ics/route.ts` — GET endpoint serving a downloadable .ics for a slot.

### Design system — "The Release Manifest"

The visual identity treats the portfolio as a shipping document: projects are a release ledger with IDs (`R-014` → `R-001`, count = number of shipped products), experience is a changelog, skills are a spec sheet, and the hero features a release-manifest card.

- **Color:** one signal accent (international orange, `--primary`; `--accent` is intentionally the same value) used only semantically — status dots, stamps, CTAs, active states. No gradients, no glows anywhere. Dark theme is warm ink + bone (not pure black/white); light theme is warm technical paper.
- **Type:** Bricolage Grotesque (`font-heading`, display), Hanken Grotesk (`font-sans`, body), JetBrains Mono (`font-mono`, the "manifest voice" for dates/IDs/labels — use the `.label-mono` utility in `globals.css`).
- Structural devices must encode real data (counts, dates, release IDs), never decoration. Square markers (`h-1.5 w-1.5 bg-primary`) are the list-bullet idiom.
- **Copy style (owner requirement):** no dashes as punctuation between words (use commas, colons or periods; hyphenated compounds like "full-stack" are fine) and no contractions ("I am", not "I'm") in any user-visible copy.

### Animation & performance layer

- **Every section follows the active theme** (no always-dark subtrees). An earlier iteration dark-scoped the hero/contact; that was removed because it made the theme toggle look broken. Section boundaries are crisp hairlines (`border-border`) — no seam gradients.
- `ThemeToggle` must read `resolvedTheme` (not `theme`): with `enableSystem` the stored value can be `"system"`, which makes a `theme === "dark"` check wrong.
- Above-the-fold entrances (hero, navbar) are **CSS-only** (`reveal-up`, `reveal-line`, `header-drop` in `app/globals.css`) so they paint before hydration. Below-fold sections use the server-rendered `Reveal` component (`data-reveal` + one `RevealObserver` IntersectionObserver) — not per-element framer-motion. `components/AnimatedSection.tsx` / `components/Motion.tsx` still exist but are unused by sections.
- `RevealObserver` uses a near-zero threshold (0.01) on purpose: blocks taller than the viewport can never reach a fractional intersection threshold.
- Framer usage goes through `LazyMotion` (`components/MotionProvider.tsx`, non-strict): import `m` from framer-motion, not `motion`.
- Interaction primitives live in `components/motion/` (Magnetic, TiltCard, CustomCursor, ScrollProgress, CountUp, Reveal + RevealObserver). All are gated on fine pointer + `prefers-reduced-motion`; the custom cursor is a decorative overlay (no `cursor: none`) so it can't break selection or inputs.
- Below-fold sections are wrapped in `.cv-auto` (`content-visibility: auto`) in `app/page.tsx`. Note `innerText` excludes skipped content — use `textContent` when scripting checks.
- SEO: `app/robots.ts`, `app/sitemap.ts`, Person JSON-LD in `components/StructuredData.tsx`; update the hardcoded BASE_URL in all three if the domain changes.

### Client-name policy

The web projects in `data/` describe real client work under **generic names**. The strings "Sarayi", "Khaleej", "SAK", and "Ozone" must never appear anywhere in this repo (code, comments, data, assets). Verify with:
`grep -rniE "sarayi|khaleej|ozone" app components data lib public` and `grep -rn "SAK" app components data lib`.

### Other structure notes

- `components/ui/` holds shadcn primitives (button, card, dialog, badge); `components.json` is the shadcn config; `cn()` lives in `lib/utils.ts`. Path alias `@/*` maps to the repo root.
- Theming uses next-themes via `components/ThemeProvider.tsx`, class-based, default dark.
- `app/layout.tsx` derives all metadata from `data/personal.ts`.
- Experience bullets support `**Heading:** body` markdown-bold parsing.
- Static assets: project screenshots go in `public/images/projects/<slug>.png` and are referenced from `data/projects.ts`; the CV is `public/resume.pdf`.
