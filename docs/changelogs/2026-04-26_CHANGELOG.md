# Changelog — 2026-04-26

## Phase 1 — Content collection schemas + migration ✅

**Branch:** `feat/astro-phase-1` ([PR #9](https://github.com/gianfaye/gianfaye.github.com/pull/9), draft, stacked on Phase 0)

### Done
- Defined `src/content.config.ts` with Astro Content Collections matching [SPEC.md §3](../SPEC.md#3-content-schemas):
  - `posts` (37 entries) — title, optional slug, topic (comma-separated string preserved as-is), date, image hero, excerpt, optional categories
  - `projects` (12 entries) — title, optional slug, work enum (`Website` / `Landing Page` / `Print` / `Software`), optional client, date, image hero, excerpt, optional categories
- Migrated all 37 posts + 12 projects from `www/content/` → `site-v2/src/content/` with co-located images.
- Migrated taxonomy YAML files as-is: `topics.yml`, `works.yml`, `clients.yml`.
- Wired the home page sanity check to enumerate the loaded posts/projects so the build proves all entries pass schema validation.

### Deviations from plan
- **Zod import:** the plan didn't specify the import path. `import { z } from 'astro:schema'` is deprecated in Astro 6 (re-exported from `astro:content`, which is in turn deprecated in favor of `astro/zod` for removal in Astro 7). Switched to `import { z } from 'astro/zod'` — clears all 18 deprecation hints.
- **Instagram embeds:** 11 `![instagram](shortcode)` markers across two arduino posts (`2016-01-21-arduino-getting-started`, `2016-12-30-coffee-getting-cold-alarm-device-arduino`) were rendered by Gatsby's `gatsby-remark-instagram-embed` plugin. Without it, Rollup tries to resolve the shortcode IDs as module imports and the build fails. Replaced with plain `[View on Instagram](https://www.instagram.com/p/{ID}/)` links to unblock the build. **Follow-up for Phase 4:** if real embeds are wanted, write a small custom remark plugin that recognises the shortcode pattern and emits an `<iframe>` embed.

### Verification
- `astro check` → 0 errors / 0 warnings / 0 hints
- `astro build` → 0 errors, sitemap generated, rendered home page reports `37 posts, 12 projects`

---

## Phase 2 — Layout, header, footer, dark mode ✅

**Branch:** `feat/astro-phase-2` ([PR #10](https://github.com/gianfaye/gianfaye.github.com/pull/10), draft, stacked on Phase 1)

### Done
- `BaseLayout.astro` — `<html>`, `<head>`, `<header>`, `<main>`, `<footer>` wrapper. Inline `<head>` script reads `localStorage`/`prefers-color-scheme` and applies `.dark` to `<html>` before first paint to avoid the flash-of-wrong-theme.
- `ArticleLayout.astro` — extends BaseLayout, adds the sticky title aside and inert slots for the reading-progress bar (Phase 4), share buttons (Phase 4), and Disqus thread (Phase 5).
- `Header.astro` — sticky on scroll with shadow, primary nav, mailto-copy button with tooltip, dark-mode toggle (the original Codepen-derived moon-to-sun morph, recreated in vanilla CSS via `MoonOrSun` + `MoonMask` pseudo-element layers), and a mobile hamburger.
- `Footer.astro` — dark band with the two-tier layout: `Everything Else.` heading + link grid (main nav columns + Works + Topics) on top, social icons + copyright + Privacy/Terms/RSS sublinks on bottom.
- `Logo.astro` — uses `mask-image` against `/public/logo.svg` so `currentColor` controls the fill, which means the wordmark inherits the active text color in both light and dark mode for free.
- Custom mix-blend-mode cursor in `BaseLayout`, gated on `(hover: hover)` so it never appears on touch devices.
- Migrated all 31 font files (Voyager Grotesque regular/light/bold, Sentinel Book/Light/Italic) from `www/static/fonts/` → `site-v2/public/fonts/` with `@font-face` declarations updated to point at `/fonts/`.
- Tailwind v4 `@theme` declarations for font stacks and `--color-accent`. Light/dark color tokens live in CSS custom properties on `:root` and `:root.dark` so the dark-mode toggle is an instant variable swap rather than a re-render.

### Design-fidelity discrepancies (first review pass)
The first pass of Phase 2 introduced several deviations from the original Gatsby site that were called out in review. Each was deliberate at the time but contradicts the migration's "recreate the existing look as closely as possible" rule. Documenting them here as a reference so the same shortcuts don't get re-introduced in later phases.

| # | Where I deviated | Original | What I shipped first | Fix |
|---|---|---|---|---|
| 1 | Active menu link | Same color and weight as inactive — original `MenuLink` styled-component has no `&.active` rule | Orange + bold | Active state must look identical to inactive (no color shift, no weight shift) |
| 2 | Voyager Grotesque weights loaded | Only `vger-light` (300) and `vger-regular` (400) | Added `vger-bold` (700) — pulled `font-weight: 600` requests up to 700 instead of falling back to 400 | Loading bold breaks the menu typography |
| 3 | Header padding | `padding-top: 100px` initial state, collapses on sticky | `padding: 1.5rem` always | Need the original 100px-then-collapse behavior |
| 4 | Mailto icon | `Icons.MailtoMd` — specific path | Generic envelope SVG | Use the original SVG path verbatim |
| 5 | Footer social icons | 14×14 / 14×13 / 15×15 / 14×14 viewBoxes from `@gianfaye/gatsby-theme/src/icons/social/`, `max-width: 16px` per anchor, `margin-left: 3.2rem` between | Generic 24×24 envelope-style icons, `gap: 1.5rem` | Restored verbatim — fixed in this commit |
| 6 | Footer headings (`Everything Else.`, `Works`, `Topics`) | No explicit `font-weight` in original styled-components — h5/h6 default but visually rendered light because of inheritance | Bold by default | Set `font-weight: 400` to match original render |
| 7 | Footer copy + sublinks letter-spacing | `letter-spacing: 2px` (absolute) | `0.125em` (relative — produces 1.25–1.75px depending on font-size) | Use absolute px to match exactly |
| 8 | Footer link size | `FooterLink: font-size: 20px` | `1.125rem` (= 18px) | Use 20px |
| 9 | `FooterHeading` size | Fixed `60px` | `clamp(2.25rem, 5vw, 3.75rem)` | Should be fixed 60px, not responsive |
| 10 | Cursor color | Hard-coded `#fafafa`, mix-blend-mode handles inversion | Made it theme-aware (white in light, dark in dark) — a dark cursor over the inverted-light footer in dark mode washed out | Pinned to `#fafafa` in both modes — fixed in this commit |
| 11 | Logo content | Full `GIANFAYE` + `PAGUIRIGAN` stacked wordmark | Just `GIANFAYE` + slash | Need both words — the second name is part of the brand mark |
| 12 | Dark-mode toggle | CSS-only moon-to-sun morph (Codepen reference in original Header `MoonOrSun`/`MoonMask` styled-components) | Sun/moon SVGs that swap on `:root.dark` | Reimplement the morph in vanilla CSS — addressed in subsequent edits |

**Lesson:** `docs/SPEC.md` says "recreate the existing look as closely as possible (not a redesign)." This phase is a tech-stack migration, so the rule is stricter than I treated it: copy CSS values verbatim (px not em, fixed not clamp), match original `@font-face` declarations exactly so the browser's font-weight fallback chain produces the same render, reuse the original SVG icon paths from `@gianfaye/gatsby-theme/src/icons/`, and don't add states/styles that aren't in the original (e.g. active menu styling). Saved as a durable feedback memory to apply across remaining phases.

### Verification (after fixes)
- `astro check` → 0 errors / 0 warnings / 0 hints
- `astro build` → 0 errors, sitemap generated, header + footer markup verified in `dist/index.html`
- Manual: dark-mode toggle persists across reload, mix-blend-mode cursor reads correctly over both light and dark areas including the inverted-light footer in dark mode, hamburger opens at < 1024px viewport.

---

## Up next

Phase 3 — listing & detail pages (home hero, blog list with pagination, blog post template, projects list, project template, topics index + per-topic archive, works index + per-work archive, about, timeline, terms, privacy, 404). The first deliverable that actually swaps in the real home page (`Web artisan / Maker of things / Geek of all trades` hero, recent posts grid, projects grid, client swiper) and replaces the Phase 2 sanity-check listing.
