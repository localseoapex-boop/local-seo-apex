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
   */
  excludeHomeCityFromServiceAreas: true,
} as const;

export const BUSINESS = {
  legalName: primaryOffice.legalName,
  type: primaryOffice.type,
  priceRange: primaryOffice.priceRange,
  phone: primaryOffice.phone,
  /** Human-friendly phone for display in CTAs and copy. */
  phoneDisplay: '(480) 788-9830',
  email: primaryOffice.email,
  address: primaryOffice.address,
  geo: primaryOffice.geo,
  openingHours: primaryOffice.hours,
  /** All cities/markets served — handy for area-served lists. */
  areaServed: [
    'Mesa',
    'Phoenix',
    'Scottsdale',
    'Chandler',
    'Gilbert',
    'Tempe',
    'Queen Creek',
    'San Tan Valley',
    'Apache Junction',
  ],
} as const;

/** Primary navigation links rendered in the header. */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact Us', href: '/contact' },
] as const;

/** Footer link groups. */
export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Local SEO', href: '/services/local-seo' },
      { label: 'Website Builds', href: '/services/website-builds' },
      { label: 'PPC Management', href: '/services/ppc' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', href: '/industries' },
      { label: 'Locations', href: '/locations' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
] as const;