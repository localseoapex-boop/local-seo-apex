/**
 * locations.ts — the market catalog (requirements #2, #5).
 *
 * One entry per market served. This drives:
 *   - /locations/[city] pages (one per entry)
 *   - "Nearby areas" internal links (via `nearby`)
 *
 * There are NO per-city service pages. Each service has a single canonical URL
 * at /services/[service]; city pages link across to those.
 *
 * `officeId` ties a market to the office that services it (multi-office support).
 * `services` is optional: omit it and the market gets ALL services.
 *
 * IMPORTANT — we have ONE office, in Mesa. Every other market is served from it.
 * `intro` and `positioning` must never imply a local storefront, and must never
 * claim rankings, results, or client counts we cannot substantiate. Each market
 * gets genuinely distinct copy about ITS competitive landscape — templated copy
 * with the city name swapped is thin content and search engines treat it as such.
 *
 * `neighborhoods` are areas our CLIENTS' customers live in — the places a home
 * service company in that city wants to be found. They are not our locations.
 */
export interface Location {
  /** URL slug, "city-state" pattern, e.g. "mesa-az". */
  slug: string;
  city: string;
  region: string;
  geo: { latitude: number; longitude: number };
  /** Which office (offices.ts) serves this market. */
  officeId: string;
  /** Slugs of nearby markets for internal linking. */
  nearby: string[];
  /** Service slugs offered here. Omit = all services. */
  services?: string[];
  /** Short hero lede for the city page. */
  intro?: string;
  /** How this market actually competes — the body paragraph. Unique per city. */
  positioning?: string;
  /** Areas a client in this city wants to rank in. Woven in for local relevance. */
  neighborhoods?: string[];
}

export const locations: Location[] = [
  {
    slug: 'phoenix-az',
    city: 'Phoenix',
    region: 'AZ',
    geo: { latitude: 33.4484, longitude: -112.074 },
    officeId: 'mesa',
    nearby: ['scottsdale-az', 'mesa-az', 'chandler-az', 'gilbert-az'],
    intro:
      'Phoenix is the largest and most contested home service market in Arizona. Winning it means being visible in the specific corners of the valley you actually want to drive to.',
    positioning:
      'A citywide ranking is not really a thing in Phoenix. The map pack is decided by how close the searcher is to your address, and Phoenix is big enough that a single Google Business Profile will never cover Deer Valley and Laveen at once. So we work the two levers that scale: a Google Business Profile tuned hard for the areas near your yard, and an organic footprint of service and area pages that reaches the neighborhoods proximity cannot. Paid search fills the gaps while that base compounds.',
    neighborhoods: ['Arcadia', 'Desert Ridge', 'Ahwatukee Foothills', 'Encanto', 'Deer Valley', 'Laveen'],
  },
  {
    slug: 'mesa-az',
    city: 'Mesa',
    region: 'AZ',
    geo: { latitude: 33.4152, longitude: -111.8315 },
    officeId: 'mesa',
    nearby: ['gilbert-az', 'chandler-az', 'scottsdale-az', 'phoenix-az'],
    intro:
      'Mesa is our home base. It is also a market where established, long-tenured home service companies are often out-ranked by newer competitors who simply took local search seriously first.',
    positioning:
      'Plenty of Mesa contractors have twenty years of goodwill and a website that has not been touched in ten. That gap is the opportunity: the reviews and the reputation are already there, and they are not being converted into search visibility. We usually start with the Google Business Profile and the website, because those are the two places where an established Mesa business is leaving the most on the table, then build the local SEO footprint out from there.',
    neighborhoods: ['Eastmark', 'Las Sendas', 'Red Mountain Ranch', 'Dobson Ranch', 'The Groves'],
  },
  {
    slug: 'chandler-az',
    city: 'Chandler',
    region: 'AZ',
    geo: { latitude: 33.3062, longitude: -111.8413 },
    officeId: 'mesa',
    nearby: ['gilbert-az', 'mesa-az', 'phoenix-az', 'scottsdale-az'],
    intro:
      'Chandler homeowners research before they call. The company with the faster site, the clearer answers, and the stronger review profile tends to get the estimate.',
    positioning:
      'The tech corridor along Price Road shapes how Chandler buys home services. These are homeowners who open four tabs, compare, and read reviews before anyone picks up a phone. A slow site or a thin Google Business Profile loses that comparison before you know you were in it. Chandler work leans on website performance and review strategy, because in a market that researches, the quality of what they find is the deciding factor.',
    neighborhoods: ['Ocotillo', 'Fulton Ranch', 'Downtown Chandler', 'Sun Groves', 'Layton Lakes'],
  },
  {
    slug: 'gilbert-az',
    city: 'Gilbert',
    region: 'AZ',
    geo: { latitude: 33.3528, longitude: -111.789 },
    officeId: 'mesa',
    nearby: ['chandler-az', 'mesa-az', 'phoenix-az', 'scottsdale-az'],
    intro:
      'Gilbert grew fast, and the home service companies that grew with it are now competing against everyone else who noticed.',
    positioning:
      'Newer housing stock changes what Gilbert homeowners search for. Less emergency repair on failing thirty-year-old systems, more planned upgrades, additions, and replacements that get researched for weeks. That is a longer consideration window, which rewards content that answers real questions and a Google Business Profile that stays active. Paid search covers the urgent jobs while the organic work reaches buyers who are still deciding.',
    neighborhoods: ['Agritopia', 'Power Ranch', 'Val Vista Lakes', 'Seville', 'Morrison Ranch'],
  },
  {
    slug: 'scottsdale-az',
    city: 'Scottsdale',
    region: 'AZ',
    geo: { latitude: 33.4942, longitude: -111.9261 },
    officeId: 'mesa',
    nearby: ['phoenix-az', 'mesa-az', 'chandler-az', 'gilbert-az'],
    intro:
      'Scottsdale jobs carry higher tickets, which means higher click costs and competitors willing to pay them. Precision matters more than volume here.',
    positioning:
      'When a single booked job is worth several thousand dollars, paid search gets expensive quickly and a careless campaign burns budget on tire-kickers. Scottsdale accounts get managed tightly around cost per booked job rather than cost per click. The website carries more weight too — an affluent homeowner comparing contractors for a high-ticket project judges credibility from the site before the first call, so presentation and speed are not cosmetic concerns.',
    neighborhoods: ['Old Town', 'McCormick Ranch', 'Gainey Ranch', 'North Scottsdale', 'DC Ranch'],
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
