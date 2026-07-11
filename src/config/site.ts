/**
 * Central site configuration — brand-level settings and navigation.
 *
 * Per-office NAP/hours live in src/data/offices.ts (multi-office support).
 * BUSINESS below is derived from the PRIMARY office plus org-level fields, so
 * existing references (BUSINESS.phone, BUSINESS.address, ...) keep working with
 * zero duplicated data.
 */
import { primaryOffice } from '../data/offices';

export const SITE = {
  /** Must match `site` in astro.config.mjs. Used to build absolute/canonical URLs. */
  url: 'https://localseoapex.com',
  /** Brand / business name, reused in titles, schema, and footer. */
  name: 'Local SEO Apex',
  /** Short tagline used as the default meta description fallback. */
  description:
    'Local SEO Apex helps home service businesses grow through Local SEO, custom websites, PPC management, and AI-powered marketing systems.',
  /** Default social share image (lives in /public). 1200x630, regenerated on build. */
  defaultOgImage: '/og-default.png',
  /** Default language for the <html lang> attribute. */
  locale: 'en',
  /** Twitter/X handle for twitter:site card attribution. */
  twitter: '',
  /**
   * When true, the PRIMARY office's home city (offices[0].homeCitySlug) is NOT
   * generated as a /locations/* service-area page — it is represented directly
   * by the homepage and the canonical /services/* pages instead.
   *
   * FALSE for this project: Mesa is the home market AND gets its own location
   * page, so all five markets are represented consistently under /locations.
   */
  excludeHomeCityFromServiceAreas: false,
} as const;

export const BUSINESS = {
  legalName: primaryOffice.legalName,
  type: primaryOffice.type,
  priceRange: primaryOffice.priceRange,
  /** Dial-only (tel: hrefs, schema). Render `phoneDisplay` as text instead. */
  phone: primaryOffice.phone,
  /** Display-only. Differs from `phone` by design — see Office.phoneDisplay. */
  phoneDisplay: primaryOffice.phoneDisplay,
  email: primaryOffice.email,
  address: primaryOffice.address,
  geo: primaryOffice.geo,
  openingHours: primaryOffice.hours,
  /** All markets served — must match the six entries in data/locations.ts. */
  areaServed: ['Phoenix', 'Mesa', 'Chandler', 'Gilbert', 'Scottsdale', 'Queen Creek'],
} as const;

/**
 * Primary navigation links rendered in the header.
 *
 * Blog is intentionally absent. The blog architecture still exists
 * (src/pages/blog/[...slug].astro + the `blog` content collection) but there are
 * zero published posts, so the hub page was removed rather than ship an empty,
 * thin page for Google to index. Restore the link here and in FOOTER_LINKS, and
 * re-add src/pages/blog/index.astro, once real articles are written.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Industries', href: '/industries' },
  { label: 'Locations', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
] as const;

/** Footer link groups. */
export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Local SEO', href: '/services/local-seo' },
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'PPC Management', href: '/services/ppc-management' },
      { label: 'Google Business Profile', href: '/services/google-business-profile-optimization' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Industries', href: '/industries' },
      { label: 'Locations', href: '/locations' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
] as const;