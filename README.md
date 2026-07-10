# Local SEO Apex

The marketing site for **Local SEO Apex**, a digital marketing agency for home service companies, built with [Astro](https://astro.build). It ships an SEO-focused content framework with structured data (schema.org), multi-office support, location and service landing pages, and a Markdown-driven blog.

## 📚 Framework Documentation

Before making changes to this project, review these documents in order:

1. **Project Philosophy** (`docs/project-philosophy.md`) – Understand the principles and architectural goals of the framework.
2. **Brand Positioning** (`docs/brand-positioning.md`) – The strategic foundation: who we serve, how we think, how we communicate. Takes precedence over any conflicting marketing content.
3. **Copywriting Standards** (`docs/copywriting-standards.md`) – Follow the writing standards for all content.
4. **SEO Methodology Interview** (`docs/seo-methodology-interview.md`) – Understand the reasoning behind the framework's SEO decisions.
5. **SEO Standards** (`docs/seo-standards.md`) – The SEO playbook distilled from the methodology interview.

## 🚀 Project Structure

```text
/
├── public/                 # Static assets (favicon, OG images, robots.txt)
├── scripts/
│   └── generate-og.mjs     # Rasterizes src/assets/og-default.svg to public/og-default.png
├── src
│   ├── assets/
│   │   └── og-default.svg  # Design source of truth for the social share image
│   ├── config/
│   │   └── site.ts         # Brand-level config: name, URL, nav, footer, business defaults
│   ├── content/
│   │   └── blog/           # Markdown blog posts (content collection) — currently empty
│   ├── content.config.ts   # Content collection schema
│   ├── data/
│   │   ├── offices.ts      # Per-office NAP/hours — source of truth for LocalBusiness schema
│   │   ├── services.ts     # Service catalog — drives /services/[service]
│   │   ├── subservices.ts  # Sub-service catalog — drives /services/[service]/[subservice]
│   │   └── locations.ts    # Market catalog — drives /locations/[city]
│   ├── layouts/            # Base, city, service, sub-service, and blog post layouts
│   └── pages/              # Routes: home, services, pricing, industries, locations, about, contact
└── package.json
```

Brand and business details live in `src/config/site.ts` (org-level) and `src/data/offices.ts` (per-office NAP, hours, and service areas). The canonical site origin is set in both `astro.config.mjs` and `SITE.url` — keep them in sync.

### Blog status

There are currently **no published articles**. The blog architecture is intact (`src/content.config.ts`, `src/pages/blog/[...slug].astro`, `src/layouts/BlogPostLayout.astro`) and the post route generates zero pages, so nothing thin gets indexed. The `/blog` hub page and its nav and footer links were removed for the same reason.

To bring the blog back: add real Markdown posts under `src/content/blog/`, restore `src/pages/blog/index.astro`, and re-add the `Blog` entries to `NAV_LINKS` and `FOOTER_LINKS` in `src/config/site.ts`. Until then the build prints a harmless warning that the `blog` collection is empty.

### Social share image

`public/og-default.png` is **generated**, not hand-edited. It is rasterized from `src/assets/og-default.svg` by `scripts/generate-og.mjs`, which runs automatically on `prebuild`. Editing the PNG directly will be overwritten on the next build — edit the SVG and run `npm run og`.

## 🧭 Project Philosophy

This project is a reusable framework for building local service business websites, not a one-off site. Before making architectural changes, developers and AI assistants should read [`docs/project-philosophy.md`](docs/project-philosophy.md).

It explains the principles the framework is built on: configurable systems over hardcoded logic, data-driven page generation, SEO as part of the architecture, performance, simplicity, and the local SEO model where the primary office city lives on the homepage and core service pages while surrounding markets get service-area pages.

## ✍️ Copywriting Standards

All site copy follows the rules in [`docs/copywriting-standards.md`](docs/copywriting-standards.md). This covers the homepage, service pages, service area pages, blog posts, FAQs, meta titles and descriptions, CTAs, and landing pages.

Before creating or editing any content on this site, developers and AI assistants must read that file and follow it. The goal is copy that reads like an experienced local copywriter wrote it: natural, trustworthy, and free of AI clichés and corporate filler.

Strategic positioning lives in [`docs/brand-positioning.md`](docs/brand-positioning.md). Where the two conflict, brand positioning wins.

## 🔎 SEO Methodology Interview

Before making SEO-related architecture or content decisions, review [`docs/seo-methodology-interview.md`](docs/seo-methodology-interview.md).

This document captures the reasoning behind the framework's SEO decisions through a structured question-and-answer interview covering website architecture, URL strategy, internal linking, content strategy, local SEO, technical SEO, and overall framework philosophy.

It serves as the raw methodology behind the framework. Its answers are distilled into [`docs/seo-standards.md`](docs/seo-standards.md), the official SEO playbook for every website built from this framework.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run og`              | Regenerate Open Graph share images               |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 👀 Want to learn more?

Refer to the [Astro documentation](https://docs.astro.build) for framework details.
