# gianfaye.com — Site Specification

## Context

`gianfaye.com` is a personal portfolio + blog hosted free on **GitHub Pages** from this repo (the User Pages repo `gianfaye/gianfaye.github.com`), with a custom domain mapped via `CNAME`.

The site was originally built on Jekyll, migrated to Gatsby v2 (Novela theme) in 2020, and is now being rebuilt on **Astro 6.x** in 2026 because the Gatsby v2 stack is unmaintainable: build is broken (`narative/gatsby-theme#249`), dependencies are 3+ major versions behind, and many packages are deprecated. Astro produces static HTML output that survives even if maintenance lapses for years, was acquired by Cloudflare (Jan 2026), and has first-class MDX support.

Old Gatsby code is preserved on the `archive/gatsby-v2` branch.

---

## 1. Stack

- **Framework:** Astro 6.1.x (latest stable, April 2026)
- **Language:** TypeScript (`strict`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` (the Vite plugin is incompatible with Astro 6's Rolldown bundler), with custom theme tokens to recreate existing colors, fonts (Gotham, Sentinel, vger), and spacing
- **Content:** Astro Content Collections (Zod schemas) + MDX
- **Image handling:** Astro built-in `<Image>` component with Sharp
- **Hosting:** GitHub Pages (free) via GitHub Actions → `gh-pages` branch
- **Domain:** `gianfaye.com` via `CNAME` file
- **Package manager:** npm (drop Yarn + Lerna; single project, no workspace)
- **Node:** pinned to LTS 22 via `.nvmrc`

---

## 2. Pages & Routes

All existing URLs preserved for SEO/backlinks.

| Route | Source | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Home: hero, typing animation, recent posts, recent projects, client gallery |
| `/blog/` | `src/pages/blog/index.astro` | Paginated list (10/page) |
| `/blog/[slug]/` | `src/pages/blog/[slug].astro` | Article template |
| `/project/` | `src/pages/project/index.astro` | Projects grid |
| `/project/[slug]/` | `src/pages/project/[slug].astro` | Project template |
| `/topics/` | `src/pages/topics/index.astro` | Topic taxonomy listing |
| `/topics/[topic]/` | `src/pages/topics/[topic].astro` | Topic archive |
| `/works/` | `src/pages/works/index.astro` | Work types listing |
| `/works/[work]/` | `src/pages/works/[work].astro` | Work type archive |
| `/about/` | `src/pages/about.astro` | About page (particles, skills grid, interests) |
| `/timeline/` | `src/pages/timeline.astro` | Career timeline |
| `/terms/` | `src/pages/terms.astro` | Terms of service |
| `/privacy/` | `src/pages/privacy.astro` | Privacy policy |
| `/404.html` | `src/pages/404.astro` | Not found |
| `/rss.xml` | `src/pages/rss.xml.ts` | RSS feed (`@astrojs/rss`) |
| `/sitemap-index.xml` | `@astrojs/sitemap` integration | Auto-generated |

---

## 3. Content Schemas

### `src/content/posts/` — 37 entries
Migrated from `www/content/posts/` (Gatsby).

```ts
{
  title: string,
  slug?: string,           // Optional override; defaults to filename
  topic: string,           // Comma-separated string preserved as-is
  date: Date,
  hero: image schema,      // Co-located ./images/*.jpg
  excerpt: string,
  categories?: string[],
}
```

### `src/content/projects/` — 12 entries
Migrated from `www/content/projects/`.

```ts
{
  title: string,
  slug?: string,
  work: enum('Website', 'Landing Page', 'Print', 'Software'),
  client?: string,
  date: Date,
  hero: image schema,
  excerpt: string,
  categories?: string[],
}
```

### Taxonomies (YAML, migrated as-is)
- `src/content/topics/topics.yml` — 18 topics
- `src/content/works/works.yml` — 5 work types
- `src/content/clients/clients.yml` — 18 clients

---

## 4. Visual & Functional Parity

Goal: **recreate the existing look as closely as possible** (not a redesign).

- **Typography:** Gotham (body), Sentinel (headings), vger (display) — fonts copied from `www/static/fonts/`
- **Color palette + dark mode toggle** — extracted from `@gianfaye/gatsby-theme/src/gatsby-plugin-theme-ui/colors.ts`
- **Header** — sticky, with logo, nav (Blog, Projects, About, Timeline), dark mode toggle, mobile hamburger
- **Footer** — social links (GitHub, LinkedIn, Twitter, StackOverflow, Email)
- **Reading progress bar** — sticky on article pages (vanilla JS)
- **Article layout** — sticky title aside, share buttons (Twitter, Facebook, LinkedIn, copy link), next/prev navigation, Disqus comments
- **Code highlighting** — Shiki (Astro built-in, replaces Prism)
- **Particles animation (about page)** — `tsparticles` v3 (modern successor of the version in use)
- **Typing animation (home)** — vanilla TS implementation (~30 LoC, replaces deprecated `react-typist`)
- **Client gallery (home)** — Swiper v11
- **Skills grid (about)** — 12 skill icons (HTML5, CSS3, React, TypeScript, ES6/JS, Angular, Redux, UX, UI, etc.)
- **Image zoom on click** — `medium-zoom` (vanilla, replaces `react-medium-image-zoom`)

---

## 5. Integrations

| Integration | Implementation | Notes |
|---|---|---|
| **Google Analytics** | Direct GA4 script in base layout, optionally lazy-loaded | Upgrade from UA-36995024-1 to a new GA4 property |
| **Disqus comments** | Vanilla embed in article template | Reuse existing Disqus shortname |
| **RSS** | `@astrojs/rss` | Routes: `/rss.xml`, `/projects-rss.xml` |
| **Sitemap** | `@astrojs/sitemap` | Auto-generated |
| **Mailchimp** | **Dropped** | Newsletter signup removed |

---

## 6. SEO

- Meta tags per page (title, description, OG image, Twitter card) via shared `<SEO>` Astro component
- Canonical URLs
- Structured data (JSON-LD) for blog posts (Article schema) and projects (CreativeWork schema)
- `robots.txt` and `sitemap-index.xml`

---

## 7. Hosting Constraints

The site MUST be deployable to GitHub Pages with no paid services. This means:
- Static output only — no SSR, no API routes, no on-demand image optimization
- `CNAME` file required at build output root
- `.nojekyll` file required to prevent Jekyll processing
- Single-repo architecture (User Pages repo serves apex domain)

Any framework or feature change must respect these constraints. Paid hosting (Vercel, Netlify) is out of scope.
