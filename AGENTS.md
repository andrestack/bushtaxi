# Agent Instructions: Bush Taxi Drumming School

## Quick Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (must pass before deploy)
npm run typecheck    # TypeScript strict check
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
```

**Required order for clean commits:** `format` → `lint:fix` → `typecheck` → `build`

## Architecture

### Stack
- **Next.js 16.1.1** with App Router
- **TypeScript 5** (strict mode with `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- **Tailwind CSS v4** with `@theme inline` syntax
- **Motion v12** (formerly Framer Motion)
- **React Three Fiber v9** for WebGL effects
- **Lenis** for smooth scrolling
- **next-view-transitions** for page transitions

### Key Constraints

**NO DARK MODE** — Light theme only. `features.darkMode` is `false` in `lib/config.ts`. The `next-themes` dependency is present but unused. Theme color is locked to `#F0BB78` (warm terracotta).

**Content Dual-Source** — All copy lives in two places:
1. `lib/config.ts` (runtime source)
2. `.opencode/content/` (markdown source of truth)

When updating text, mirror changes to both. The markdown files are the authoritative source; `config.ts` is the runtime mirror.

**Brand Design System** — Non-negotiable:
- Background: `#F0BB78` (warm terracotta/gold)
- Borders: 2px solid black on ALL cards, buttons, containers
- Headings: `font-display` (Garda Empty) + `uppercase`
- Accent: `#F24847` (red) for CTAs
- Secondary: `#53ACDD` (sky blue) for highlights
- Border radius: `rounded-md` only (minimal)

### Project Structure

```
app/
  layout.tsx          # Root with ViewTransitions wrapper, Manrope font
  page.tsx            # Landing page (Hero → HowItWorks → Features → Stats → Testimonials → Pricing → FAQ → FinalCTA)
  about/page.tsx      # About page with story timeline
  globals.css         # Design tokens (NO dark mode vars)

components/
  [section].tsx       # Page sections
  header.tsx          # Uses Link from next-view-transitions
  footer.tsx          # Uses Link from next-view-transitions
  providers.tsx       # Motion + Lenis smooth scroll
  dither-cursor.tsx   # WebGL shader (toggle via features.ditherCursor)

lib/
  config.ts           # ⭐ ALL site content (centralized)
  metadata.ts         # SEO meta
  motion.tsx          # Animation presets (easeOut: [0.16, 1, 0.3, 1])

public/
  fonts/Gardaempty.*  # Display font (required)
  img/                # Brand SVGs and photos
```

## Critical Implementation Details

### Links Always Use next-view-transitions

```tsx
// CORRECT — preserves page transition animations
import { Link } from "next-view-transitions";

// WRONG — breaks view transitions
import Link from "next/link";
```

### Hover Micro-Interactions (Required Pattern)

All interactive cards must include:

```tsx
className="... transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
```

### Motion Animation Defaults

```tsx
const easeOut = [0.16, 1, 0.3, 1] as const; // Smooth deceleration
// Use with: transition={{ duration: 0.6, ease: easeOut }}
```

### Feature Flags

Toggle in `lib/config.ts`:

```ts
features: {
  smoothScroll: true,    // Lenis (keep true)
  darkMode: false,       // NEVER enable
  ditherCursor: true,    // WebGL in FinalCTA
  statsSection: true,    // Animated counters
}
```

## Common Pitfalls

1. **Don't add dark mode** — The design is light-theme only. Ignore any README references to dark mode.

2. **Don't use `next/link` directly** — Always import from `next-view-transitions`.

3. **Don't forget the 2px borders** — Every card, button, and container needs `border-2 border-black`.

4. **Garda Empty font must be loaded** — Check `public/fonts/` exists and `@font-face` is in `globals.css`.

5. **TypeScript is STRICT** — `noImplicitAny`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` enabled. No `any` types allowed.

6. **Content sync required** — When updating copy, update BOTH `lib/config.ts` AND the corresponding `.opencode/content/` markdown file.

## File Locations

| What | Where |
|------|-------|
| Site config | `lib/config.ts` |
| Colors/theme | `app/globals.css` :root |
| Fonts | `public/fonts/` + `globals.css` @font-face |
| Brand images | `public/img/` |
| Content source | `.opencode/content/**/*.md` |
| SEO metadata | `lib/metadata.ts` |

## Build Checklist

Before marking complete:
- [ ] `npm run build` passes with no errors
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No lint errors (`npm run lint`)
- [ ] Prettier formatted (`npm run format`)
- [ ] All Links use `next-view-transitions`
- [ ] 2px black borders on all cards/buttons
- [ ] Content mirrored to `.opencode/content/` if changed
