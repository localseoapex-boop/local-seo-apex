/**
 * services.ts — the service catalog (requirement #6: content model).
 *
 * One entry per service line. This drives:
 *   - the homepage service grid
 *   - /services/[service] pages (one per entry)
 *   - /locations/[city]/[service] pages (entry × location)
 *   - "Related services" internal links
 *
 * `related` holds sibling slugs for cross-linking. The deeper, page-level copy
 * (overview paragraphs, what's-included groups, problem/solution pairs, and
 * FAQs) lives in src/data/service-content.ts, keyed by the same slug — this file
 * stays a lean catalog. Adding a service here (plus a content entry) generates
 * its pages automatically — no new route files.
 *
 * Slugs are load-bearing: src/config/site.ts FOOTER_LINKS points at them, and
 * every generated URL derives from them. Changing one is a redirect-worthy event.
 */

/** Icon keys resolved to inline SVG by src/components/ServiceIcon.astro. */
export type ServiceIcon = 'search' | 'code' | 'target' | 'map-pin';

/**
 * Entry-level price, used for "starting at" copy and schema.org Offer data.
 * `period` distinguishes a retainer ('month') from one-time work ('project').
 */
export interface StartingPrice {
  amount: number;
  /** ISO 4217 currency code. */
  currency: string;
  period: 'month' | 'project';
}

export interface Service {
  slug: string;
  name: string;
  /** Compact label for eyebrows, badges, and nav where the full name is too long. */
  shortName: string;
  /** Closest schema.org type for the provider of this service. */
  schemaType: string;
  /** Outcome-first one-liner used on cards (the benefit, not the deliverable). */
  tagline: string;
  /** <h1> on the service page. Overrides the generic "{name} in Mesa" pattern. */
  heroTitle: string;
  /** Hero subhead beneath the h1. */
  heroSubtitle: string;
  /** Meta-description base (kept under ~160 chars). */
  description: string;
  /** Opening body paragraph, also used as the homepage card copy. */
  intro: string;
  /** Bulleted "what's included" list — the deliverables. */
  features: string[];
  /** Outcome-oriented bullets — what the client gets out of it. */
  benefits: string[];
  /**
   * PLACEHOLDER PRICING — confirm with the business before launch. These render
   * publicly on service pages and in schema.org Offer data.
   */
  startingPrice: StartingPrice;
  /** Flags the lead offers; badged on the /services hub. */
  featured: boolean;
  icon: ServiceIcon;
  /** Slugs of related services for internal linking. */
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'local-seo',
    name: 'Local SEO',
    shortName: 'Local SEO',
    schemaType: 'ProfessionalService',
    tagline: 'Show up when people search for your service in your city',
    heroTitle: 'Local SEO That Fills Your Schedule',
    heroSubtitle:
      'Rank for the searches homeowners actually use when they are ready to book — not vanity keywords that never turn into work.',
    description:
      'Local SEO for home service companies. On-page work, local content, citations, and reviews that grow rankings and bring in calls from ready-to-book customers.',
    intro:
      'Most home service jobs start with a local search. We build your rankings through on-page work, local content, citations, and reviews so the calls come from people who are ready to book, not price shoppers three towns over.',
    features: [
      'Technical and on-page SEO',
      'Local keyword and competitor research',
      'City and service page architecture',
      'Citation building and cleanup',
      'Review generation strategy',
      'Monthly reporting on calls and rankings',
    ],
    benefits: [
      'Steady, compounding lead flow you do not rent',
      'Rankings in the cities you actually serve',
      'Calls from buyers instead of price shoppers',
      'A traffic base that outlasts your ad budget',
    ],
    startingPrice: { amount: 1500, currency: 'USD', period: 'month' },
    featured: true,
    icon: 'search',
    related: ['google-business-profile-optimization', 'website-development', 'ppc-management'],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    shortName: 'Websites',
    schemaType: 'ProfessionalService',
    tagline: 'Turn the traffic you already have into booked jobs',
    heroTitle: 'SEO-First Websites Built to Convert',
    heroSubtitle:
      'Fast, clean, and structured for search from the first wireframe — because retrofitting SEO onto a finished site costs more and works worse.',
    description:
      'Custom website development for home service businesses. Fast, SEO-first builds with clean structure and clear calls to action that turn visitors into phone calls.',
    intro:
      'A slow site with no clear next step wastes every visitor you earn. We build fast, SEO-first websites with clean structure and obvious calls to action, so more of the people who land on your site pick up the phone.',
    features: [
      'SEO-first information architecture',
      'Custom, mobile-first design',
      'Core Web Vitals performance work',
      'Schema markup and technical SEO',
      'Conversion-focused calls to action',
      'Lead form and call tracking setup',
    ],
    benefits: [
      'More booked jobs from the same traffic',
      'A site that loads before visitors leave',
      'Structure search engines can actually crawl',
      'A foundation every other channel depends on',
    ],
    startingPrice: { amount: 4500, currency: 'USD', period: 'project' },
    featured: true,
    icon: 'code',
    related: ['local-seo', 'google-business-profile-optimization', 'ppc-management'],
  },
  {
    slug: 'ppc-management',
    name: 'PPC Management',
    shortName: 'PPC',
    schemaType: 'ProfessionalService',
    tagline: 'Buy leads at a price that still leaves you a profit',
    heroTitle: 'PPC Management Measured in Booked Jobs',
    heroSubtitle:
      'We manage campaigns around cost per booked job instead of cost per click, and cut the spend that never turns into work.',
    description:
      'PPC management for home service companies. Google Ads and Local Services Ads managed around cost per booked job, not clicks, with spend that earns its keep.',
    intro:
      'Paid search puts you in front of buyers who need help today. We manage campaigns around cost per booked job instead of clicks, and we cut the spend that never turns into work.',
    features: [
      'Google Ads and Local Services Ads',
      'Keyword and negative keyword management',
      'Landing page and ad copy testing',
      'Call tracking and conversion setup',
      'Bid and budget management',
      'Cost-per-booked-job reporting',
    ],
    benefits: [
      'Leads today while SEO compounds in the background',
      'Spend tied to booked work, not clicks',
      'Budget pulled off keywords that never convert',
      'Clear numbers on what a job actually costs you',
    ],
    startingPrice: { amount: 1200, currency: 'USD', period: 'month' },
    featured: false,
    icon: 'target',
    related: ['local-seo', 'website-development', 'google-business-profile-optimization'],
  },
  {
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile Optimization',
    shortName: 'GBP',
    schemaType: 'ProfessionalService',
    tagline: 'Win the map results your competitors are fighting over',
    heroTitle: 'Google Business Profile Optimization',
    heroSubtitle:
      'The map pack drives a large share of home service calls. We tune the profile that decides whether you appear in it.',
    description:
      'Google Business Profile optimization for home service businesses. Categories, services, photos, posts, and reviews tuned to win local map pack results.',
    intro:
      'The map pack drives a large share of calls for home service companies. We tune your categories, services, photos, and review strategy so you appear in local results and give homeowners a reason to choose you.',
    features: [
      'Category and service selection',
      'Profile completion and NAP consistency',
      'Photo and post strategy',
      'Review generation and response',
      'Q&A and spam-listing cleanup',
      'Map pack ranking reporting',
    ],
    benefits: [
      'Visibility in the results homeowners tap first',
      'Reviews that give buyers a reason to pick you',
      'A profile that stops leaking calls to competitors',
      'Local relevance no ad budget can buy',
    ],
    startingPrice: { amount: 750, currency: 'USD', period: 'month' },
    featured: false,
    icon: 'map-pin',
    related: ['local-seo', 'ppc-management', 'website-development'],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** All service slugs — used as the default service set for a location. */
export const allServiceSlugs = services.map((s) => s.slug);

/** The lead offers, badged on the /services hub. */
export const featuredServices = services.filter((s) => s.featured);

/** Renders a StartingPrice as display copy, e.g. "$1,500/mo" or "$4,500 project". */
export const formatStartingPrice = (price: StartingPrice): string => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
  return price.period === 'month' ? `${amount}/mo` : `${amount} project`;
};
