# Aqeel's Portfolio (v2)

Client-attractive, file-driven portfolio for **Aqeel Ahmad** — Mobile Technical Lead.
Built with **Next.js 15 (App Router)** + **TypeScript** + **Tailwind CSS** + **shadcn/ui** + **Framer Motion**.

No Google Sheets, no backend. All content lives in typed files in `data/`. Edit a file, push to GitHub, Vercel redeploys.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the production build
npm run type-check # tsc --noEmit
```

---

## Editing your content

Every section reads from a single typed file in `data/`. You don't need to touch any component code.

| Section | Edit this file | Notes |
| --- | --- | --- |
| Hero, About, Contact | `data/personal.ts` | name, title, tagline, summary, email, phone, location, **bookingUrl**, **profileImage** |
| Hero trust strip | `data/stats.ts` | 4 stat tiles (years, apps shipped, uptime, etc.) |
| Services cards | `data/services.ts` | 3 packaged offerings with deliverables + timeline |
| Skills | `data/skills.ts` | Categorized chips |
| Projects + case study modal | `data/projects.ts` | Each project supports `image`, `liveUrl`, `githubUrl`, `highlights`, `impacts` |
| Experience timeline | `data/experience.ts` | Bullets support `**Heading:** body` markdown-bold |
| Achievements grid | `data/achievements.ts` | Metric + title + 1-line desc |
| Certificates | `data/certificates.ts` | **Empty by default — section auto-hides.** Add entries to show. |
| Education | `data/education.ts` |  |
| Testimonials | `data/testimonials.ts` | **Empty by default — section auto-hides.** Add real quotes from LinkedIn recommendations. |
| Social links | `data/social.ts` | LinkedIn / GitHub / Medium etc. |
| Navbar items | `data/nav.ts` | Section IDs + labels |

### Adding a project screenshot

1. Save a square or 16:9 image to `public/images/projects/<slug>.png`.
2. In `data/projects.ts`, set the project's `image` field to `"/images/projects/<slug>.png"`.
3. Save — the dev server hot-reloads.

### Replacing the avatar

Drop a square photo at `public/images/avatar.jpg` and set `profileImage: "/images/avatar.jpg"` in `data/personal.ts`. Without it, the Hero renders a clean gradient-initials avatar.

### Replacing the CV

Replace `public/resume.pdf` with your real CV. The Hero's "Download CV" button will serve it.

### Booking link

Update `bookingUrl` in `data/personal.ts` to your real Cal.com / Calendly URL — the "Book a Discovery Call" CTAs everywhere will follow.

---

## Deploying to Vercel

**Option A — Vercel CLI (fastest):**
```bash
npm i -g vercel
vercel              # one-time, follow prompts
vercel --prod
```

**Option B — GitHub + Vercel dashboard:**
1. `git init && git add . && git commit -m "Initial portfolio v2"`
2. Push to a new GitHub repo.
3. In Vercel dashboard → **Add New → Project** → import the repo.
4. Hit **Deploy**. No env vars required.

After the first deploy, every `git push` triggers an automatic redeploy.

---

## Why this exists (vs the original portfolio)

The previous portfolio at `../portfolio/` pulled content from a Google Sheet via a serverless function. That was flexible but had failure modes — sheet permissions, expired credentials, race conditions, content drift between code and data. This version:

- Has **zero runtime dependencies** beyond Vercel hosting.
- Builds statically — fast first paint, great Lighthouse scores.
- Is fully type-checked end to end — typos in the data show up immediately.
- Adds **client-conversion sections** (Services, Achievements, Testimonials scaffold) that the original was missing.

---

## Project structure

```
portfolio-v2/
├── app/
│   ├── layout.tsx        # Fonts, metadata, ThemeProvider
│   ├── page.tsx          # Section composition
│   └── globals.css       # Tailwind + CSS vars
├── components/
│   ├── sections/         # One file per page section
│   ├── ui/               # shadcn primitives (button, card, dialog, badge)
│   ├── Navbar.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── AnimatedSection.tsx
│   ├── SectionHeading.tsx
│   └── TechChip.tsx
├── data/                 # ← edit your content here
├── lib/
│   └── utils.ts
└── public/
    ├── images/
    └── resume.pdf
```

---

## License

Personal portfolio — all content © Aqeel Ahmad.
# aqeel-ahmad-portfolio
