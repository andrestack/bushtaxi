# Bush Taxi Rebrand — Session Log

## Session 1 — 2026-04-14

### What was done

**Starting point:** "Minimal" landing page template by React Bits Pro (Next.js 16, Tailwind v4, TypeScript, Motion). Originally themed as "TLDR" — a fictional AI summarization SaaS product.

**Goal:** Rebrand the visual identity to "Bush Taxi Drumming School" — a West African drumming school website. Copy/content updates deferred to a later phase.

---

#### Phase 1: Foundation (Design Tokens + Fonts)

- **`app/globals.css`** — Replaced all CSS custom properties with Bush Taxi brand palette:
  - `--background: #F0BB78` (warm terracotta), `--foreground: #000000`
  - `--accent: #F24847` (red), `--accent-blue: #53ACDD` (blue), `--ring: #53ACDD`
  - `--muted: #F5D5A0`, `--muted-foreground: #4A3520`, `--border: #000000`
  - Added `--font-display` variable for Garda Empty
  - Removed `.dark {}` block and `html.dark` color-scheme rule
  - Added `.font-display` utility class
- **`app/layout.tsx`** — Swapped Geist/Geist Mono fonts for:
  - `Manrope` (body, via `next/font/google`)
  - `Garda Empty` (display, via `next/font/local` from `fonts/Gardaempty.ttf`)
  - Removed `ThemeSwitch` component import/usage
  - Removed `suppressHydrationWarning` from `<html>`
  - Set viewport `themeColor` to `#F0BB78`
- **`tailwind.config.js`** — Fixed content paths from `./src/**` to `./app/**`, `./components/**`, `./lib/**`. Aligned font families with CSS variable references.

#### Phase 2: Removed Unnecessary Complexity

- **Deleted `components/theme-switch.tsx`** — floating dark mode toggle
- **Deleted `components/theme-toggle.tsx`** — unused alternate toggle
- **`components/providers.tsx`** — Removed `ThemeProvider` from `next-themes`. Only `ReducedMotionProvider` and `SmoothScroll` remain.
- **`components/hero.tsx`** — Removed `DitherCursor` import and all related state (`isMobile`, `shouldRender`, `opacity`, `isVisible`, intersection observer, animation frame logic). Cleaned up unused imports.
- **`components/final-cta.tsx`** — Kept `DitherCursor` but changed color from `#000000` to `#F24847` (brand red) with `opacity={0.15}`.
- **Deleted `brand-styles.css`** — Was a staging file, never imported. Values now live in `globals.css`.

#### Phase 3: Component Restyling

All components received the Bush Taxi visual treatment:

- **Thick black `border-2 border-black`** on all cards, buttons, containers, and interactive elements
- **`font-display` + `uppercase`** on all section headings (h2s) and card titles
- **Removed `grayscale` filter** from all images
- **Rounded corners simplified** — mostly `rounded-md` instead of `rounded-2xl` (per brand: "simple and graphic")

| Component          | Key Visual Changes                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `header.tsx`       | Logo changed from "TLDR" text to `banner.svg` image. Nav bar and menu cards get black borders.                                                                                                                         |
| `hero.tsx`         | Card images: alternating `bushtaxi2.svg` / `hari.svg` / `lenke.svg`. Cards stripped to bare images with transparent backgrounds — no frames, borders, labels, or track line. CTA button: red accent with black border. |
| `features.tsx`     | Images replaced with `bushtaxi.svg`, `lenke.svg`, `hari.svg`. Black borders on cards and image containers.                                                                                                             |
| `how-it-works.tsx` | Lucide icons replaced with brand SVG elements (`element1.svg`, `element2.svg`, `element3.svg`). Black borders on step cards.                                                                                           |
| `stats.tsx`        | `font-display` on animated numbers.                                                                                                                                                                                    |
| `testimonials.tsx` | Black borders on cards and scroll buttons.                                                                                                                                                                             |
| `pricing.tsx`      | Highlighted plan uses `bg-accent-blue` (blue). Black borders on plan cards and CTA.                                                                                                                                    |
| `faq.tsx`          | Section background changed from `bg-foreground` (black) to `bg-accent-blue` (blue) with black border. FAQ cards get `bg-background`.                                                                                   |
| `final-cta.tsx`    | Kept DitherCursor with brand red. Black borders on container and CTA button.                                                                                                                                           |
| `footer.tsx`       | Added `bushtaxi.svg` brand mark. Black borders on buttons and social icons. `font-display` on headings.                                                                                                                |

#### Phase 4: Brand Assets + Metadata

- **`app/icon.svg`** — Replaced blue icon with Bush Taxi brand mark (BT initials, red/warm)
- **`app/apple-icon.svg`** — Same brand mark at 180x180
- **`public/site.webmanifest`** — Updated name to "Bush Taxi Drumming School", colors to `#F0BB78`

#### Phase 5: Config + SEO Metadata

- **`lib/metadata.ts`** — Site name, tagline, description, creator, authors, keywords all updated for Bush Taxi Drumming School
- **`lib/config.ts`** — All section configs updated with drumming school placeholders. `darkMode: false`. Footer links changed to Classes/Workshops/Events/Private Lessons. Contact updated.

---

### Files deleted (3)

- `components/theme-switch.tsx`
- `components/theme-toggle.tsx`
- `brand-styles.css`

### Build status

Passes cleanly (`next build` — no TypeScript errors, no warnings).

---

### Corrections applied

- **Hero carousel cards** — Stripped all card frames, borders, rounded corners, padding, and text labels. Cards are now bare SVG images with transparent backgrounds using `object-contain`. Overrode `rotating-cards.tsx` default card styling via `!border-0 !shadow-none !bg-transparent !rounded-none`. Disabled the circular track line (`showTrackLine={false}`).

---

## Next Steps

### Immediate (Copy Phase)

1. **Replace all TLDR placeholder text** across components — headlines, descriptions, feature names, FAQ content, testimonials, pricing plans, stats numbers, CTA labels, email addresses, contact details. Most text is hardcoded in individual component files, not pulled from `lib/config.ts`.
2. **Wire components to `lib/config.ts`** — The config file has been updated with drumming school content, but most components still hardcode their text. Consider refactoring components to read from config for easier future updates.
3. **Navigation menu items** — Currently still show "Chrome Extension", "Safari Extension", "API Access", etc. Need drumming school navigation (Classes, Workshops, About, etc.).

### Visual Refinements

4. **Review the site in browser** (`npm run dev`) — check spacing, font rendering (especially Garda Empty at various sizes), color contrast, and overall feel.
5. **Hero section** — The carousel images may need size/spacing tuning depending on how the SVGs render at `350x275`.
6. **Pricing section** — Rethink plans for a drumming school context (e.g., Drop-in Class / Monthly Membership / Private Lessons).
7. **Testimonials** — Replace fictional tech employee testimonials with drumming student quotes.
8. **Stats** — Replace SaaS metrics with school metrics (students taught, years of experience, etc.).

### Assets

9. **OG image** (`/og-image.png`) — Does not exist yet. Needs creating for social sharing.
10. **Favicon.ico** — The SVG icons are updated, but `favicon.ico` (binary) still has the old blue icon. Generate a new `.ico` from the brand mark.
11. **PWA icons** (`icon-192.png`, `icon-512.png`, `icon-maskable.png`) — Referenced in `site.webmanifest` but don't exist. Generate or remove references.
12. **Review unused `.webp` images** in `public/img/` — 11 TLDR placeholder images are no longer referenced. Can be deleted to reduce project size.

### Technical

13. **Consider removing `next-themes` dependency** — No longer used after dark mode removal. Would reduce bundle size.
14. **Consider removing `@react-three/fiber`, `@react-three/drei`, `three`** — Only used by `dither-cursor.tsx` in `final-cta.tsx`. If the dither effect isn't essential, removing these would significantly reduce bundle size (~500KB+).
15. **Tailwind v4 config** — The `tailwind.config.js` uses v3 syntax. Since Tailwind v4 reads from `globals.css` `@theme inline`, the config file may be partially ignored. Consider migrating fully to v4 config or removing the legacy file.
