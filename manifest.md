# Project Manifest: Bush Taxi Drumming School

## Overview

**Project Name:** Bush Taxi Drumming School  
**Type:** Landing Page Website  
**Technology Stack:** Next.js 16+, TypeScript, Tailwind CSS v4, Motion (React)  
**Last Updated:** 2026-04-14 (Session 1 Rebrand)

---

## Project Purpose

A premium, production-ready landing page for Bush Taxi — a West African drumming school teaching Dundun and Djembe in the Noosa Hinterland, Queensland, Australia. The website promotes weekly classes, weekend intensives, and showcases the school's unique approach to teaching both instruments from day one.

---

## Architecture

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.1 (App Router) |
| Language | TypeScript 5 (Strict Mode) |
| Styling | Tailwind CSS v4 |
| Animation | Motion (formerly Framer Motion) v12 |
| WebGL | React Three Fiber v9 + Three.js v0.182 |
| Smooth Scroll | Lenis v1.3.17 |
| Icons | Lucide React |
| Fonts | Manrope (Google Fonts), Garda Empty (Display) |

### Project Structure

```
├── app/                          # Next.js App Router
│   ├── globals.css               # Design tokens, theme colors, custom CSS
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing page composition
│   ├── about/page.tsx            # About page
│   ├── sitemap.ts                # SEO sitemap
│   ├── robots.ts                 # SEO robots.txt
│   └── icon.svg / apple-icon.svg # Brand favicons
├── components/                   # React components
│   ├── hero.tsx                  # Hero with animated text & rotating cards
│   ├── how-it-works.tsx          # 3-step process section
│   ├── features.tsx              # Feature grid with images
│   ├── stats.tsx                 # Animated statistics counters
│   ├── testimonials.tsx          # Horizontal scrolling testimonials
│   ├── pricing.tsx               # 3-tier pricing section
│   ├── faq.tsx                   # Accordion FAQ section
│   ├── final-cta.tsx             # Full-width CTA with dither effect
│   ├── footer.tsx                # Site footer
│   ├── header.tsx                # Navigation header
│   ├── rotating-cards.tsx        # 3D card carousel component
│   ├── dither-cursor.tsx         # WebGL shader cursor effect
│   ├── providers.tsx             # Context providers (Motion, SmoothScroll)
│   ├── smooth-scroll.tsx         # Lenis smooth scroll wrapper
│   └── skip-to-content.tsx       # Accessibility skip link
├── lib/                          # Utilities & configuration
│   ├── config.ts                 # ⭐ Central site configuration
│   ├── metadata.ts               # SEO metadata utilities
│   ├── motion.tsx                # Motion component wrappers
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── fonts/                    # Garda Empty font files
│   ├── img/                      # Brand images (SVGs, photos)
│   └── site.webmanifest          # PWA manifest
└── skills/                       # Agent documentation
    ├── react-bits-pro/SKILL.md   # React Bits Pro skill docs
    ├── brand-guidelines/SKILL.md # Brand guidelines
    └── view-transitions/         # View transitions docs
```

---

## Brand Identity

### Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `--background` | `#F0BB78` (Warm Terracotta/Gold) | Page background |
| `--foreground` | `#000000` (Black) | Primary text |
| `--accent` | `#F24847` (Red) | CTAs, highlights |
| `--accent-blue` | `#53ACDD` (Sky Blue) | Secondary accents, FAQ bg |
| `--muted` | `#F5D5A0` (Light Gold) | Secondary backgrounds |
| `--muted-foreground` | `#4A3520` (Dark Brown) | Secondary text |
| `--border` | `#000000` (Black) | All borders (2px thick) |
| `--ring` | `#53ACDD` (Blue) | Focus rings |

### Typography

| Font | Purpose |
|------|---------|
| **Manrope** (Variable) | Body text, UI elements |
| **Garda Empty** | Display headings, hero text, stats |

### Design Principles

- **Bold black borders** (2px) on all cards, buttons, and containers
- **Uppercase headings** using `font-display` class
- **Simple, graphic aesthetic** — minimal rounded corners (`rounded-md`)
- **Warm, earthy color palette** reflecting West African drumming culture
- **No dark mode** — light theme only

---

## Sections Overview

### 1. Hero
- Animated headline with character-by-character reveal
- Rotating 3D card carousel featuring drum images
- Primary CTA button (red with black border)
- Scroll indicator

### 2. How It Works
- 3-step process (Show Up → Learn → Repeat)
- Brand SVG elements as icons
- Black-bordered cards

### 3. Features
- 3 feature cards with custom illustrations
- Images: `bushtaxi.svg`, `lenke.svg`, `hari.svg`
- Explains unique approach (both instruments, tradition, physicality)

### 4. Stats
- 4 animated counters
- Metrics: Playing Since 2002, Hours Weekly, Countries Taught, Joy Delivered
- Garda Empty display font

### 5. Testimonials
- Horizontal scrolling carousel
- Student quotes with names/roles
- Fade edges effect

### 6. Pricing
- 3 tiers: Single Class ($25), 10-Class Pass ($220), Weekend Intensive ($160)
- "Best Value" badge on middle tier
- Blue accent on highlighted plan

### 7. FAQ
- Blue background section (`bg-accent-blue`)
- 8 common questions with expandable answers
- Contact CTA at bottom

### 8. Final CTA
- Full-width section with WebGL dither cursor effect
- Red accent color for effect
- Final booking CTA

### 9. Footer
- Brand description and CTA
- Navigation links (Classes, Info)
- Contact details and schedule
- Social links

---

## Configuration

All site content is centralized in `lib/config.ts`:

### Key Config Objects

| Config Object | Purpose |
|---------------|---------|
| `siteConfig` | Site name, tagline, description, URL, social |
| `heroConfig` | Headline, description, CTAs, carousel labels |
| `howItWorksConfig` | 3 steps with titles and descriptions |
| `featuresConfig` | 3 features with numbers, titles, descriptions |
| `statsConfig` | 4 statistics with labels and descriptions |
| `testimonialsConfig` | Student quotes and attributions |
| `pricingConfig` | 3 pricing tiers with features |
| `faqConfig` | 8 FAQ items with Q&A pairs |
| `finalCtaConfig` | Final CTA headline, description, CTA |
| `aboutConfig` | About page content (story timeline) |
| `footerConfig` | Footer links, contact info, copyright |
| `features` | Feature flags (smoothScroll, ditherCursor, etc.) |

### Feature Flags

```typescript
features: {
  smoothScroll: true,    // Lenis smooth scrolling
  darkMode: false,       // Disabled (light theme only)
  ditherCursor: true,     // WebGL cursor in FinalCTA
  statsSection: true,     // Show stats section
}
```

---

## Assets

### Brand Images

| File | Description |
|------|-------------|
| `/img/bushtaxi.svg` | Brand mark/logo |
| `/img/bushtaxi2.svg` | Alternate brand mark |
| `/img/hari.svg` | Drum illustration (hari) |
| `/img/lenke.svg` | Drum illustration (lenke) |
| `/img/tinab.svg` | Additional brand asset |
| `/img/element1-3.svg` | Decorative SVG elements |
| `/img/banner.svg` | Header banner/logo |
| `/img/Taxi Conakry.JPG` | Photography assets |

### Fonts

- `Gardaempty.woff2` / `.ttf` — Display font for headings

---

## Scripts

| Command | Description |
|-----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format with Prettier |
| `npm run typecheck` | Run TypeScript checks |

---

## Dependencies

### Production
- `next` — Framework
- `react` / `react-dom` — UI library
- `motion` — Animation library
- `@react-three/fiber` / `@react-three/drei` — WebGL/React integration
- `three` — 3D library
- `lenis` — Smooth scrolling
- `lucide-react` — Icons
- `clsx` / `tailwind-merge` — Class utilities

### Development
- `typescript` — Type safety
- `tailwindcss` — Styling
- `eslint` / `eslint-config-next` — Linting
- `prettier` — Code formatting

### Animation & Transitions
- `next-view-transitions` — Page-to-page view transitions (Native View Transitions API)

---

## View Transitions & Animations

Based on the view-transitions skill, the website now includes:

### 1. Page-to-Page View Transitions

The `next-view-transitions` library provides native browser View Transitions API support for smooth page navigation.

**Implementation:**
- Wrapped root layout with `<ViewTransitions>` provider in `app/layout.tsx`
- Updated all `Link` components to use `next-view-transitions` instead of `next/link`
- Navigation between pages (Home → About) now has smooth cross-fade animations

**Components Updated:**
- `app/layout.tsx` — Added ViewTransitions wrapper
- `components/header.tsx` — Uses `Link` from `next-view-transitions`
- `components/footer.tsx` — Uses `Link` from `next-view-transitions`

### 2. Hover Micro-interactions (CSS Transitions)

Based on the skill's CSS hover transition patterns, added lift + shadow effects:

**Testimonial Cards:**
```tsx
className="... transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
```

**How It Works Cards:**
```tsx
className="... transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
```

**Stats Cards:**
```tsx
className="... transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
whileHover={{ scale: 1.05 }}
```

### 3. Staggered Scroll Animations

Already implemented using Motion's `whileInView` with staggered delays:

- **Features:** Cards animate with `delay: index * 0.1`
- **How It Works:** Steps animate with `delay: index * 0.1`
- **Stats:** Numbers animate with `delay: index * 0.1`
- **Testimonials:** Cards animate with `delay: index * 0.1`
- **Pricing:** Plans animate with staggered delays

### Animation Easing

Consistent easing across all animations:
```typescript
const easeOut = [0.16, 1, 0.3, 1] as const;
```

This creates a smooth deceleration curve that feels premium and polished.

---

## Changelog

### Session 2 — 2026-05-26

**Added View Transitions & Enhanced Animations**

Implemented smooth animations using the view-transitions skill:

#### Page Transitions (next-view-transitions)
- Installed `next-view-transitions` library
- Wrapped root layout with `<ViewTransitions>` provider
- Updated all `Link` components to use `next-view-transitions`
  - `components/header.tsx`
  - `components/footer.tsx`
- Navigation between Home → About now has smooth native browser transitions

#### Hover Micro-interactions
Added lift + shadow effects to interactive elements:
- **Testimonials:** Cards lift 2px with shadow on hover
- **How It Works:** Step cards lift 2px with shadow on hover  
- **Stats:** Numbers scale 1.05x on hover with group hover effects

**Pattern Applied:**
```tsx
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
```

**Build Status:** ✅ Passes cleanly

---


---

### Session 3 — 2026-05-26

**Linked About Page Throughout Site**

Added navigation links to the About page in key locations:

#### Header Navigation
- Updated "About" link in mobile menu to point to `/about`
- Uses `next-view-transitions` for smooth page transitions

#### Features Section
- Added "Read our story" link in sticky sidebar
- Positioned below the section description
- Uses ArrowUpRight icon with hover animation
- Links to `/about` with view transition

#### Footer Navigation  
- About link already present in footer "Info" column
- Uses `next-view-transitions` Link component

**Components Updated:**
- `components/header.tsx` — Fixed About link href
- `components/features.tsx` — Added "Read our story" link with imports
- `components/footer.tsx` — Already had About link (verified)

**Build Status:** ✅ Passes cleanly

---

### Session 1 — 2026-04-14

**Rebrand from "Minimal" template to Bush Taxi Drumming School**

#### Foundation
- Replaced design tokens with warm terracotta/gold palette
- Swapped fonts: Geist → Manrope + Garda Empty
- Removed dark mode entirely
- Set viewport theme color to `#F0BB78`

#### Component Restyling
- Added thick black borders (2px) to all cards/buttons
- Applied `font-display` + `uppercase` to all headings
- Simplified rounded corners (`rounded-md`)
- Replaced placeholder images with brand SVGs
- Changed icons to brand SVG elements

#### Assets
- Updated favicons (`icon.svg`, `apple-icon.svg`)
- Added brand images: `bushtaxi.svg`, `hari.svg`, `lenke.svg`, etc.
- Created `banner.svg` for header

#### Content
- Updated `lib/config.ts` with drumming school content
- Updated metadata for SEO
- Configured footer links and contact details

#### Removed
- `theme-switch.tsx` — Dark mode toggle
- `theme-toggle.tsx` — Unused alternate toggle
- `brand-styles.css` — Staging file
- `ThemeProvider` from `next-themes`

**Build Status:** ✅ Passes cleanly (no TypeScript errors)

---

## Next Steps (Per Changelog)

### Copy Phase (Pending)
1. Replace all remaining placeholder text in components
2. Wire components to `lib/config.ts` for centralized content
3. Update navigation menu items for drumming school context

### Visual Refinements
4. Browser testing for spacing, fonts, color contrast
5. Hero carousel size/spacing tuning
6. Pricing plans review for drumming context
7. Testimonials replacement with real student quotes
8. Stats review for school metrics

### Assets
9. Create OG image for social sharing
10. Generate new `favicon.ico` from brand mark
11. Create PWA icons or remove references
12. Delete unused `.webp` images (11 TLDR placeholders)

### Technical Optimizations
13. Consider removing `next-themes` dependency
14. Consider removing Three.js dependencies (if dither effect not essential)
15. Migrate Tailwind config to v4 syntax or remove legacy file

---

## License

This template is licensed for use in commercial projects. Resale or redistribution of the template itself is prohibited.

---

**Contact:** mail@andresilva.online  
**Location:** Noosa Hinterland, Queensland, Australia  
**Classes:** Tuesdays (Palmwoods), Thursdays (Pomona — Coming Soon)
