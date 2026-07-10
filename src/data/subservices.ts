/**
 * subservices.ts — individual services offered under a core category (req #1, #2).
 *
 * Each sub-service belongs to ONE parent category (a slug from services.ts) and
 * drives a single page tier:
 *   - /services/[category]/[subservice]            (sub-service page)
 *
 * There are no location sub-service pages. Sub-services are national in scope
 * here: the category page carries the local targeting, and the sub-service page
 * captures the long-tail query beneath it.
 *
 * This tier splits each category into the two highest-intent searches beneath
 * it, capturing long-tail queries the category page cannot rank for on its own.
 * Adding a row here automatically generates its page and links — no new files.
 */
export interface SubService {
  slug: string;
  name: string;
  /** Parent category slug from services.ts (e.g. 'local-seo'). */
  parent: string;
  /** One-line hero subhead. */
  tagline: string;
  /** Meta-description base (~150–160 chars). */
  description: string;
  /** Opening body paragraph. */
  intro: string;
  /** Bulleted "what's included" list. */
  features: string[];
}

export const subServices: SubService[] = [
  // ───────────────────────── Local SEO ─────────────────────────
  {
    slug: 'local-seo-audits',
    name: 'Local SEO Audits',
    parent: 'local-seo',
    tagline: 'Find out exactly why you are not ranking.',
    description:
      'Local SEO audits for home service businesses — technical issues, on-page gaps, citation errors, and competitor analysis, with a prioritized fix list.',
    intro:
      'An audit tells you where the rankings are actually leaking. We review your technical setup, page structure, citations, reviews, and the competitors beating you, then hand you a prioritized list of what to fix first and what to ignore.',
    features: [
      'Technical crawl and indexation review',
      'On-page and content gap analysis',
      'Citation and NAP consistency check',
      'Competitor ranking breakdown',
      'Prioritized, plain-English fix list',
    ],
  },
  {
    slug: 'citation-building',
    name: 'Citation Building',
    parent: 'local-seo',
    tagline: 'Consistent business listings across the directories that matter.',
    description:
      'Citation building and cleanup for home service companies — accurate NAP data across the directories and aggregators local search relies on.',
    intro:
      'Search engines cross-check your name, address, and phone against dozens of directories. Conflicting listings quietly suppress your rankings. We build the citations that count, correct the ones that are wrong, and remove the duplicates.',
    features: [
      'Core directory and aggregator listings',
      'NAP consistency corrections',
      'Duplicate listing removal',
      'Industry and local directory placement',
      'Ongoing listing monitoring',
    ],
  },

  // ──────────────────── Website Development ────────────────────
  {
    slug: 'seo-website-design',
    name: 'SEO Website Design',
    parent: 'website-development',
    tagline: 'New sites structured for search before the first pixel.',
    description:
      'SEO website design for home service businesses — fast, mobile-first builds with the architecture, schema, and calls to action that turn traffic into calls.',
    intro:
      'We plan structure, internal linking, metadata, and schema before a single design choice. The result is a fast, mobile-first site that reads well to homeowners and crawls cleanly for search engines, with an obvious next step on every page.',
    features: [
      'SEO-first information architecture',
      'Custom, mobile-first design',
      'Core Web Vitals performance budget',
      'Schema markup and metadata',
      'Conversion-focused calls to action',
    ],
  },
  {
    slug: 'website-redesign',
    name: 'Website Redesign',
    parent: 'website-development',
    tagline: 'Rebuild without throwing away the rankings you have.',
    description:
      'Website redesigns for home service companies — modernize design and speed while preserving URLs, rankings, and the traffic you already earned.',
    intro:
      'Most redesigns lose traffic because nobody planned the migration. We map every existing URL, preserve the pages that already rank, redirect the rest, and rebuild the design and speed around them so the launch is an upgrade instead of a reset.',
    features: [
      'Full URL and redirect mapping',
      'Ranking preservation plan',
      'Design and performance rebuild',
      'Content migration and cleanup',
      'Post-launch monitoring',
    ],
  },

  // ────────────────────── PPC Management ──────────────────────
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    parent: 'ppc-management',
    tagline: 'Search campaigns managed around cost per booked job.',
    description:
      'Google Ads management for home service businesses — search campaigns, negative keywords, and landing pages tuned to cost per booked job, not clicks.',
    intro:
      'Google Ads puts you in front of buyers who need help today. We build tight campaigns, prune the keywords that never convert, test the landing pages behind them, and report on what a booked job actually costs you.',
    features: [
      'Campaign build and restructuring',
      'Keyword and negative keyword management',
      'Ad copy and landing page testing',
      'Call tracking and conversion setup',
      'Bid, budget, and spend management',
    ],
  },
  {
    slug: 'local-services-ads',
    name: 'Local Services Ads',
    parent: 'ppc-management',
    tagline: 'Google Guaranteed placement above the map pack.',
    description:
      'Local Services Ads management — Google Guaranteed setup, verification, budget management, and lead disputes for home service companies.',
    intro:
      'Local Services Ads sit above the map pack and charge per lead instead of per click. We handle the verification and licensing, manage budgets and service areas, and dispute the junk leads so you are not paying for wrong numbers.',
    features: [
      'Google Guaranteed setup and verification',
      'Service area and budget management',
      'Lead dispute handling',
      'Review and ranking management',
      'Cost-per-lead reporting',
    ],
  },

  // ────────── Google Business Profile Optimization ──────────
  {
    slug: 'gbp-setup',
    name: 'Google Business Profile Setup',
    parent: 'google-business-profile-optimization',
    tagline: 'A profile built right the first time.',
    description:
      'Google Business Profile setup and verification — categories, services, service areas, photos, and NAP data configured to rank in local map results.',
    intro:
      'A new or neglected profile is the fastest local ranking win available to most home service businesses. We handle verification, pick the categories that actually drive your calls, fill in services and service areas, and get the photos and hours right.',
    features: [
      'Verification and ownership recovery',
      'Primary and secondary category selection',
      'Service and service-area configuration',
      'Photo, hours, and attribute setup',
      'NAP consistency with your website',
    ],
  },
  {
    slug: 'review-management',
    name: 'Review Management',
    parent: 'google-business-profile-optimization',
    tagline: 'More reviews, answered fast, working for your rankings.',
    description:
      'Review generation and response management for home service companies — steady review flow and professional replies that lift map pack rankings.',
    intro:
      'Reviews drive both map rankings and the homeowner’s final choice. We set up a request process your crews will actually follow, respond to what comes in, and handle negative reviews in a way that reads well to the next customer.',
    features: [
      'Review request workflow for crews',
      'Response drafting and posting',
      'Negative review handling',
      'Review volume and rating reporting',
      'Policy-compliant generation tactics',
    ],
  },
];

export const getSubService = (parent: string, slug: string): SubService | undefined =>
  subServices.find((s) => s.parent === parent && s.slug === slug);
