# gianfaye.com — Implementation Plan

> See [SPEC.md](./SPEC.md) for what's being built and why.
> See [changelogs/](./changelogs/) for what's been done so far.

The migration runs in 7 phases. Development happens in a `site-v2/` subdirectory so the existing Gatsby code remains untouched and `gianfaye.com` keeps serving the old site until **Phase 6** (the final swap).

---

## Phase 0 — Repo & deploy scaffold

**Goal:** Prove the deploy pipeline works end-to-end before writing real code.

- Create `site-v2/` directory at repo root
- Scaffold Astro: `npm create astro@latest -- --template minimal --typescript strict`
- Configure `astro.config.mjs` with `site: 'https://gianfaye.com'`, `output: 'static'`
- Add integrations: `@astrojs/sitemap`, `@astrojs/mdx`
- Add Tailwind v4 via `@tailwindcss/postcss` (the Vite plugin is incompatible with Astro 6's Rolldown bundler)
- Add `public/CNAME` and `public/.nojekyll`
- Add `.github/workflows/build-check.yml` at repo root for PR build verification
- Stage `site-v2/.github/workflows/deploy.yml` (inert until Phase 6)
- Pin Node via `.nvmrc` (LTS 22)

**Verification:** Open a draft PR, confirm `Build check (site-v2)` passes. Don't merge.

---

## Phase 1 — Content collection schemas + migration

**Goal:** All 37 posts + 12 projects load into Astro Content Collections.

- Define `src/content.config.ts` with collection schemas (see [SPEC.md §3](./SPEC.md#3-content-schemas))
- Copy `www/content/posts/` → `site-v2/src/content/posts/`
- Copy `www/content/projects/` → `site-v2/src/content/projects/`
- Copy `www/content/topics/topics.yml`, `works/works.yml`, `clients/clients.yml`
- Adjust frontmatter where needed (verify date parsing, topic comma-handling)

**Verification:** `astro check` passes; `astro build` outputs all 37 posts + 12 projects without errors.

---

## Phase 2 — Layout, header, footer, dark mode

**Goal:** Site chrome matches existing look.

- `src/layouts/BaseLayout.astro` — `<html>`, head, header, footer, slot
- `src/layouts/ArticleLayout.astro` — extends BaseLayout, adds sticky title aside, progress bar, share, Disqus
- Migrate fonts from `www/static/fonts/` → `site-v2/public/fonts/`
- Tailwind theme tokens — colors and font stacks extracted from existing theme
- Dark mode — `prefers-color-scheme` + localStorage toggle, vanilla TS, no flicker (inline script in `<head>`)
- Header with sticky behavior + scroll-aware shadow
- Mobile hamburger menu
- Footer with social icons

**Verification:** Visual diff against archived Gatsby site running locally.

---

## Phase 3 — Listing & detail pages

- Home page (`index.astro`): hero, typing animation, recent posts grid, recent projects grid, client swiper gallery
- Blog list with pagination (Astro `paginate()` API)
- Blog post template (article layout, MDX rendering, hero image, share, Disqus, next/prev)
- Projects list (grid)
- Project template
- Topics index + per-topic archive
- Works index + per-work archive
- About, timeline, terms, privacy, 404

**Verification:** Click through every page in the local dev server. Compare to the old site rendered from `archive/gatsby-v2`.

---

## Phase 4 — Custom features

- Reading progress bar — vanilla JS scroll listener, ~20 LoC
- Particles animation on about page — `tsparticles` v3 with the slim engine bundle
- Typing animation on home — custom TS, ~30 LoC
- Image zoom — `medium-zoom` initialized client-side
- Client swiper — Swiper v11 with module imports
- Skills grid — static HTML with skill icons from `www/static/`
- Code highlighting — Shiki theme tuned to match Prism setup

**Verification:** Each interactive element works in Chrome, Safari, Firefox, mobile Safari.

---

## Phase 5 — SEO, RSS, sitemap, analytics, Disqus

- Shared `<SEO>` component for meta/OG/Twitter tags
- JSON-LD structured data for posts and projects
- `@astrojs/rss` route for `/rss.xml` (posts) and `/projects-rss.xml` (projects)
- `@astrojs/sitemap` integration
- Create new GA4 property; add tracking script with consent-aware loading
- Disqus embed in article template using existing shortname
- `robots.txt`

**Verification:** Lighthouse score ≥95 across performance/SEO/accessibility/best-practices. RSS validates at validator.w3.org. Sitemap loads. Analytics fires (real-time check).

---

## Phase 6 — Final swap + production deploy

**Goal:** Replace Gatsby code at repo root with the new Astro site.

- Delete from repo root: `www/`, `@gianfaye/`, `lerna.json`, `package.json`, `yarn.lock`, `.commitlintrc.yml` (Gatsby-era)
- Move all of `site-v2/*` to repo root
- Update `.gitignore` for Astro (`dist/`, `.astro/`, `node_modules/`)
- Update `.github/workflows/deploy.yml` to build from root
- Final test: `npm run build` from repo root, deploy to `gh-pages`
- DNS sanity check: `gianfaye.com` resolves and serves the new site

**Verification:** Site loads at `https://gianfaye.com`. Spot-check 5 random old blog post URLs to confirm no broken links.

---

## Timeline

Estimates assume part-time work (a few hours per session). Each phase is a natural commit boundary.

| Phase | Description | Effort | Calendar estimate |
|---|---|---|---|
| 0 | Repo scaffold + deploy pipeline | ~2 h | Day 1 |
| 1 | Content schemas + migration | ~3 h | Day 2 |
| 2 | Layout, header, footer, dark mode | ~6 h | Days 3–4 |
| 3 | Listing & detail pages | ~8 h | Days 5–7 |
| 4 | Custom features | ~5 h | Day 8 |
| 5 | SEO, RSS, sitemap, analytics, Disqus | ~3 h | Day 9 |
| 6 | Final swap + production deploy | ~2 h | Day 10 |
| **Total** | | **~29 h** | **~2 weeks part-time** |

Each phase ends with a commit on a feature branch, mergeable to `master` independently. Phase 6 is the only phase that visibly changes `gianfaye.com` for real visitors.

---

## Maintenance Plan

The Gatsby site failed because nothing checked it for years. The new plan automates dependency checks and pins a recurring manual review.

### Automated (continuous)
- **Dependabot** (`.github/dependabot.yml`) — daily checks for npm + GitHub Actions; auto-PRs for security patches and minor/patch versions
- **GitHub security advisories** — enabled at repo level
- **Build status** — every PR runs `astro check` + `astro build` to catch breakage before merge

### Quarterly (every 3 months — first Monday of January, April, July, October)
A `MAINTENANCE.md` file at repo root will document the checklist:
1. Run `npm outdated` and review major version bumps
2. Read Astro release notes since last check (https://github.com/withastro/astro/releases)
3. Review Dependabot's open PRs and merge or close
4. Run `npm audit` and resolve high/critical findings
5. Test build locally, deploy a staging preview
6. Update `MAINTENANCE.md` log with date + notes

### Annually (every January)
1. Evaluate Astro major version migration (e.g., v6 → v7) — read migration guide, plan upgrade
2. Audit content: archive/unpublish posts that are no longer accurate
3. Renew domain registration check
4. Refresh GA4 property settings, review traffic
5. Run a full Lighthouse audit and address regressions

### Reminders
A scheduled GitHub Actions workflow opens a "Quarterly review" issue on the first Monday of each quarter. Set up after Phase 6.

### Pinning strategy
- Use `^` ranges for Astro and integrations (auto-update minor/patch)
- Lock `engines.node` in `package.json` to current LTS (e.g., `>=22.0.0`)
- Keep `.nvmrc` in sync with CI Node version

---

## Verification (end-to-end test, post-Phase-6)

1. **Build & type-check pass:** `npm run build` + `astro check` exit 0 with no errors or warnings
2. **All URLs from the old site resolve:** Spot-check 10 random `/blog/:slug` and `/project/:slug` URLs return 200
3. **RSS feed validates:** Paste `https://gianfaye.com/rss.xml` into https://validator.w3.org/feed/
4. **Sitemap valid:** `curl https://gianfaye.com/sitemap-index.xml` returns valid XML; submit to Google Search Console
5. **Lighthouse audit:** Run on home, blog list, a blog post, project list, about — all scores ≥95
6. **GA4 fires:** Open the site, check GA4 real-time view shows the visit
7. **Disqus loads:** Open any blog post, scroll to comments, comments thread renders
8. **Dark mode toggle persists:** Toggle, refresh, mode is retained
9. **Mobile responsive:** Test home, blog post, about, timeline at iPhone SE viewport (375px)
10. **DNS:** `dig gianfaye.com` shows GitHub Pages IPs; `https://gianfaye.com` serves the new site without redirect loops

If all 10 pass, the migration is complete. `archive/gatsby-v2` becomes a permanent reference branch (do not delete).
