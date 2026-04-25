# Changelog — 2026-04-25

## Migration kickoff: Gatsby → Astro

### Decisions
- Audited current Gatsby v2 monorepo. Build broken (per inline note in `www/package.json` referencing `narative/gatsby-theme#249`). Dependencies 3+ majors behind: Gatsby v2 → v5, React 16 → 18, Theme UI 0.2 → 0.16. Multiple deprecated packages (`@emotion/core`, `babel-plugin-emotion`, `gatsby-image`, `gatsby-plugin-google-analytics`, `request`, `react-typist`).
- Decided to **rebuild rather than incrementally upgrade** — the gap between Gatsby v2 and current is roughly equivalent to a fresh build, with all the friction of fighting old APIs.
- Evaluated Next.js vs Astro. Chose **Astro** for: purpose-built for content sites, first-class MDX, static HTML output (essential for free GitHub Pages hosting), 50K+ stars, recently acquired by Cloudflare (Jan 2026) signaling long-term commitment.
- Confirmed Astro 6.1.x is production-stable. Ecosystem support verified for: GitHub Pages deploy, sitemap, RSS, GA4, Tailwind v4.
- Site stays on the existing User Pages repo (`gianfaye/gianfaye.github.com`) with `CNAME` for `gianfaye.com`. Single repo, no source/deploy split.

### Scope locked in
- **Design:** Recreate existing look as closely as possible (not a redesign).
- **Content:** Migrate all 37 blog posts + 12 projects as-is, no curation.
- **URLs:** Preserve `/blog/:slug` and `/project/:slug` for SEO/backlinks.
- **Integrations:** Drop Mailchimp. Keep Disqus. Keep analytics (upgrade UA → GA4).
- **Repo strategy:** Develop in `site-v2/` subdir; final phase deletes Gatsby files and moves Astro to root.
- See [`docs/SPEC.md`](../SPEC.md) and [`docs/PLAN.md`](../PLAN.md).

### Maintenance
- Quarterly manual review (first Monday of Jan/Apr/Jul/Oct) + Dependabot automation. Explicit goal: avoid the Gatsby-rot pattern.

---

## Phase 0 — Repo & deploy scaffold ✅

**Branch:** `feat/astro-phase-0` ([PR #7](https://github.com/gianfaye/gianfaye.github.com/pull/7), draft)

### Done
- Archived old Gatsby site to branch `archive/gatsby-v2`.
- Scaffolded Astro 6.1.9 in `site-v2/` (TypeScript strict, minimal template).
- Installed integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`.
- Wired up Tailwind CSS v4 via `@tailwindcss/postcss`.
- Created `public/CNAME` (gianfaye.com) and `public/.nojekyll`.
- Added `.github/workflows/build-check.yml` at repo root for PR build verification.
- Staged inert `site-v2/.github/workflows/deploy.yml` for Phase 6 swap.
- Pinned Node to LTS 22 via `site-v2/.nvmrc`.

### Deviation from plan
- Plan specified `@tailwindcss/vite`, but it failed to build under Astro 6's Rolldown-Vite bundler with `Missing field 'tsconfigPaths' on BindingViteResolvePluginConfig.resolveOptions`. Switched to `@tailwindcss/postcss` — produces identical Tailwind v4 output, no functional difference.

### Verification
- Local: `npm run build` → ✅ (1 page in 901ms, sitemap generated, CNAME copied to dist)
- Local: `npx astro check` → ✅ 0 errors / 0 warnings / 0 hints
- CI: `Build check (site-v2)` workflow → ✅ passing in 24s on PR #7

### CI fix during Phase 0
- First CI run failed with `Missing: @emnapi/runtime@1.10.0 from lock file` — Sharp's cross-platform optional native dependencies don't all serialize into the lock when generated on macOS.
- Resolved by switching CI from `npm ci` to `npm install --no-audit --no-fund` (more forgiving of platform-specific Sharp transitive deps) and pinning Node to 22 LTS via `.nvmrc`.

---

## Up next
- Phase 1: Content collection schemas + migration of 37 posts + 12 projects.
