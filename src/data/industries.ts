/**
 * industries.ts — the industry catalog (the trades we serve).
 *
 * One entry per trade. This drives:
 *   - the homepage industry grid
 *   - the /industries hub
 *   - future /industries/[industry] pages (one per entry)
 *
 * ARCHITECTURE NOTE — the hub is data-driven on purpose. Adding an industry here
 * makes it appear on the hub and the homepage with no template edits. When an
 * industry page is ready, add the route and flip `hasPage` to true: the hub cards
 * start linking to it automatically. Nothing about the hub needs to change to
 * grow this section, which is the whole point of keeping the copy in data.
 *
 * `priorityServices` holds SERVICE SLUGS from data/services.ts, ordered by what
 * we would build first for that trade. Templates resolve them through
 * lib/links.ts → servicesForIndustry() and link to /services/[slug]. We never
 * restate what a service IS here. The service catalog owns that copy, so a
 * service description can never drift between the two files.
 *
 * CONTENT RULES (same as locations.ts):
 *   - Every field is claim-free. No results, no client names, no statistics we
 *     cannot substantiate. Nothing here should imply proof we do not have.
 *   - Copy must be genuinely distinct per trade. Templated copy with the trade
 *     name swapped is thin content and search engines treat it as such.
 *   - House style for industry copy: no em dashes and no semicolons in prose.
 *
 * Slugs are load-bearing. They are the future /industries/[industry] URLs, so
 * changing one is a redirect-worthy event.
 */

/**
 * How demand in a trade actually behaves. This is the axis that decides which
 * service we lead with, so it is data rather than template copy: the /industries
 * hub groups trades by this key, and a new industry joins the right group with
 * no template edit.
 */
export type DemandShape = 'emergency' | 'considered' | 'research';

export const DEMAND_SHAPES: Record<DemandShape, { label: string; text: string }> = {
  emergency: {
    label: 'Decided in minutes',
    text: 'Something broke and the homeowner needs it fixed today. They tap the first credible result, so visibility in the map pack and a site that loads instantly are worth more than any amount of persuasive copy.',
  },
  considered: {
    label: 'Decided over days or weeks',
    text: 'The job is expensive enough that the homeowner collects bids and compares companies. You have to stay visible across many visits and give them a reason to trust you before the phone ever rings.',
  },
  research: {
    label: 'Starts as a question',
    text: 'The homeowner is researching a problem rather than searching for a contractor. The company that answers the question clearly earns the lead early, well before a competitor gets a chance to bid on it.',
  },
};

export interface Industry {
  /** URL slug for the future /industries/[industry] page. */
  slug: string;
  /** Display name, e.g. "HVAC". */
  name: string;
  /** How demand behaves in this trade. Drives grouping on the /industries hub. */
  demandShape: DemandShape;
  /** How we refer to the operator, e.g. "HVAC companies". Used mid-sentence. */
  companyNoun: string;
  /** Outcome-first one-liner for card headers. */
  tagline: string;
  /**
   * The single defining market dynamic of this trade, in one or two sentences.
   * Short enough for a homepage card. This is the field the grids render.
   */
  cardText: string;
  /** Meta-description base for the industry page (kept under ~160 chars). */
  description: string;
  /** Opening body paragraph for the industry page. */
  intro: string;
  /** How buyers in this trade actually search and decide. */
  buyerBehavior: string;
  /** What specifically makes marketing this trade hard. */
  challenges: string[];
  /**
   * Service slugs from data/services.ts, ordered by what we would build first
   * for this trade. Resolved to full Service objects by servicesForIndustry().
   */
  priorityServices: string[];
  /** Why that sequence, for this trade. Justifies the recommendation above. */
  serviceRationale: string;
  /**
   * True once /industries/[slug] exists. The hub links the card only when true,
   * so we never ship an internal link to a page that has not been built.
   */
  hasPage: boolean;
}

export const industries: Industry[] = [
  {
    slug: 'hvac',
    name: 'HVAC',
    demandShape: 'emergency',
    companyNoun: 'HVAC companies',
    tagline: 'Capture the emergency and the replacement with the same system',
    cardText:
      'Demand swings hard by season. Your marketing has to capture emergency repairs and planned replacements at the same time.',
    description:
      'Local SEO, websites, and PPC for HVAC companies. Marketing built around seasonal demand swings, emergency repair calls, and high ticket system replacements.',
    intro:
      'HVAC is two businesses wearing one uniform. A no-cool call in July is an emergency where the first company that answers wins, and a system replacement is a considered purchase where a homeowner compares three bids over a week. Marketing that only serves one of them leaves the other on the table.',
    buyerBehavior:
      'Repair searches happen on a phone, in a hot house, with no patience for a slow website. Replacement searches happen on a laptop at night, where financing, brand, and reviews all get read before anyone calls. The same company needs to be visible and credible in both moments.',
    challenges: [
      'Seasonal demand swings that leave the schedule full in August and empty in October',
      'Emergency repair searches that are decided in minutes by whoever is easiest to call',
      'High ticket replacements where the homeowner collects several bids before choosing',
      'Maintenance plans that need a different offer than either repair or replacement',
    ],
    priorityServices: ['local-seo', 'google-business-profile-optimization', 'ppc-management'],
    serviceRationale:
      'Local SEO and the Google Business Profile carry the emergency calls, because the map pack is where a homeowner with no air conditioning taps first. Paid search is what lets you buy the shoulder season back when organic demand drops off.',
    hasPage: false,
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    demandShape: 'emergency',
    companyNoun: 'plumbing companies',
    tagline: 'Be the one they can find and call in the first two minutes',
    cardText:
      'Emergency searches convert in minutes. Whoever is visible and easy to call gets the job.',
    description:
      'Local SEO, websites, and PPC for plumbing companies. Built around emergency searches that convert in minutes and the visibility that decides who gets the call.',
    intro:
      'Plumbing has the shortest decision window in the trades. A homeowner watching water spread across a floor is not comparison shopping, not reading your about page, and not filling out a form. They are tapping the first credible number they see, and everything about your marketing either survives that moment or does not.',
    buyerBehavior:
      'The search is urgent, mobile, and local, and the click almost always goes to the map pack rather than the organic results below it. Reviews get skimmed rather than read. A phone number that is hard to find or a page that loads slowly is the same as being invisible.',
    challenges: [
      'Emergency intent that gives you minutes, not days, to be found',
      'Map pack visibility that is decided largely by proximity and reviews',
      'A phone that has to be answered, because the caller moves on to the next result',
      'Planned work like repipes and water heaters that sells nothing like an emergency call',
    ],
    priorityServices: ['google-business-profile-optimization', 'local-seo', 'ppc-management'],
    serviceRationale:
      'The Google Business Profile comes first because emergency plumbing searches are won in the map, not below it. Local SEO builds the service and city pages that reach the planned work, and paid search covers the hours and neighborhoods where the map alone will not put you in front of the searcher.',
    hasPage: false,
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    demandShape: 'considered',
    companyNoun: 'electrical contractors',
    tagline: 'Reach three different buyers without one budget eating the others',
    cardText:
      'Panel upgrades, EV chargers, and small repairs each attract a different buyer with a different budget.',
    description:
      'Local SEO, websites, and PPC for electrical contractors. Marketing that separates panel upgrades, EV charger installs, and service calls into the funnels they actually are.',
    intro:
      'Electrical work is not one service, and the buyers barely overlap. A panel upgrade is a planned, permitted, high ticket project. An EV charger install is a research-heavy purchase driven by a car that already arrived. A dead outlet is a small service call. Marketing all three with the same page and the same keyword set means the cheap work drowns out the profitable work.',
    buyerBehavior:
      'The high value searches are specific and technical, and the homeowner often arrives already knowing the term for what they need. That specificity is an advantage, because a page built for the exact job can rank and convert far better than a general electrician page ever will.',
    challenges: [
      'Service lines with wildly different job values competing for the same budget',
      'EV charger and panel work that is researched heavily before anyone calls',
      'Permit and code questions that a homeowner wants answered before they commit',
      'Small repair calls that fill the schedule without filling the bank account',
    ],
    priorityServices: ['website-development', 'local-seo', 'ppc-management'],
    serviceRationale:
      'The website comes first here, because separating panel upgrades, EV chargers, and service calls into their own pages is what lets each one rank and convert on its own terms. Local SEO then builds authority behind those pages, and paid search buys the high value terms while they mature.',
    hasPage: false,
  },
  {
    slug: 'garage-doors',
    name: 'Garage Doors',
    demandShape: 'emergency',
    companyNoun: 'garage door companies',
    tagline: 'Own the handful of searches that actually turn into work',
    cardText:
      'A broken spring is urgent and the search is specific. Ranking for those terms is the whole game.',
    description:
      'Local SEO, websites, and PPC for garage door companies. Built around urgent, specific repair searches and the door replacement work that follows them.',
    intro:
      'Garage door demand is unusually concentrated. A small set of searches, mostly broken springs, openers, and doors that will not close, produce most of the profitable work. That concentration cuts both ways. The keyword list is short enough to actually own, and it is short enough that your competitors are all fighting over the same handful of terms.',
    buyerBehavior:
      'The searcher knows what broke and searches for it by name, which makes intent unusually easy to read. The car is often stuck inside the garage, so the job is urgent and same-day availability is a real selling point. Replacement doors, by contrast, are a visual purchase where photos do the persuading.',
    challenges: [
      'A concentrated keyword set that every competitor in the market is targeting',
      'Urgent repair searches where same-day availability decides the call',
      'Replacement work that sells on appearance and needs photography to compete',
      'A crowded map pack in metros where national franchises bid heavily',
    ],
    priorityServices: ['local-seo', 'google-business-profile-optimization', 'ppc-management'],
    serviceRationale:
      'Local SEO is the priority because the winning keyword set is small enough to genuinely own, and once you rank for it the leads arrive without a cost per click. The profile and paid search cover the same terms in the map and the ads while those rankings are earned.',
    hasPage: false,
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    demandShape: 'considered',
    companyNoun: 'roofing companies',
    tagline: 'Win the estimate before the homeowner ever calls',
    cardText:
      'High ticket work and heavy competition. Local proof and trust signals decide who gets the estimate.',
    description:
      'Local SEO, websites, and PPC for roofing companies. Marketing built for high ticket work, long consideration windows, and the trust signals that win the estimate.',
    intro:
      'Roofing is the highest stakes marketing problem in the trades. The jobs are large, the competition is heavy and well funded, and a homeowner spending five figures on a roof does not call the first result. They read, they compare, and they decide who to trust before the phone ever rings.',
    buyerBehavior:
      'The window between the first search and the first call can run for weeks. Homeowners collect bids, read reviews carefully rather than skimming them, and look for evidence that the company is established and local. Storm damage compresses that timeline but raises the competition, because every roofer in the region is chasing the same neighborhoods.',
    challenges: [
      'High cost per click in paid search, which punishes weak landing pages immediately',
      'A long consideration window where you have to stay visible across many visits',
      'Trust and credibility signals that carry more weight than ranking position alone',
      'Storm-driven demand spikes that draw out-of-town competitors into your market',
    ],
    priorityServices: ['website-development', 'local-seo', 'google-business-profile-optimization'],
    serviceRationale:
      'The website carries this trade, because a homeowner deciding between five figure bids is evaluating credibility on your site before they call. Local SEO earns the visibility across a long research window, and the Google Business Profile is where the reviews that settle the decision actually live.',
    hasPage: false,
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    demandShape: 'considered',
    companyNoun: 'landscaping companies',
    tagline: 'Sell the recurring contract and the one-time project separately',
    cardText:
      'Recurring maintenance and one-time projects are two different funnels that need two different offers.',
    description:
      'Local SEO, websites, and PPC for landscaping companies. Marketing that separates recurring maintenance contracts from one-time design and installation projects.',
    intro:
      'Landscaping hides two businesses behind one name. Recurring maintenance is a subscription where the value of a customer is measured across years, and design or installation work is a single large project decided on how the finished result looks. Selling both from the same page and the same ad usually undersells both.',
    buyerBehavior:
      'Maintenance buyers are looking for reliability and a fair price, and they are choosing a company they will see every week. Project buyers are looking at photographs and imagining their own yard. One decision is practical and the other is visual, and the pages that serve them should not look alike.',
    challenges: [
      'Recurring contracts and one-time projects that need entirely different offers',
      'Seasonality that swings the work and the search volume through the year',
      'Design and installation work that sells on imagery more than on copy',
      'A low barrier to entry that fills the market with cheap, unlicensed competition',
    ],
    priorityServices: ['local-seo', 'website-development', 'google-business-profile-optimization'],
    serviceRationale:
      'Local SEO comes first because maintenance customers are worth years of revenue and organic rankings keep producing them without a per-click cost. The website is what lets project work sell itself on photography rather than price.',
    hasPage: false,
  },
  {
    slug: 'insulation',
    name: 'Insulation',
    demandShape: 'research',
    companyNoun: 'insulation contractors',
    tagline: 'Answer the research questions and earn the lead before the pitch',
    cardText:
      'Rebates and energy savings drive the research. Content that answers those questions earns the lead.',
    description:
      'Local SEO, websites, and content for insulation contractors. Marketing built around rebate research, energy savings questions, and a long research-driven buying cycle.',
    intro:
      'Insulation is bought with a question, not an emergency. Nobody wakes up wanting insulation. They want a lower power bill, a room that is not freezing, or the rebate somebody mentioned to them. The company that answers those questions clearly is usually the company that gets the call, because the homeowner has already decided they trust it.',
    buyerBehavior:
      'The search starts informational rather than commercial, often around rebates, energy costs, or R-values, and it can run for weeks before it turns into a request for a quote. That makes content unusually powerful here, because you can earn the lead during the research phase rather than bidding for it at the end.',
    challenges: [
      'Demand that begins as a research question rather than a service search',
      'Rebate and incentive programs that change and that homeowners find confusing',
      'A long, education-heavy cycle between the first search and the first call',
      'Value that is invisible, which makes the savings case harder to sell than a new roof',
    ],
    priorityServices: ['local-seo', 'website-development', 'google-business-profile-optimization'],
    serviceRationale:
      'Local SEO is the engine for this trade, because the buying cycle starts with questions and the company that ranks for those answers earns the lead before a competitor ever gets a chance to bid on it. The website turns that research traffic into quote requests.',
    hasPage: false,
  },
];

export const getIndustry = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);

/** All industry slugs, e.g. for generating future /industries/[industry] routes. */
export const allIndustrySlugs = industries.map((i) => i.slug);

/** Industries with a published page. Drives whether the hub links a card. */
export const industriesWithPages = industries.filter((i) => i.hasPage);

/** Trade names as plain copy, e.g. "HVAC, Plumbing, and Electrical". */
export const industryNameList = (): string => {
  const names = industries.map((i) => i.name);
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
};

/**
 * Industries grouped by demand shape, in DEMAND_SHAPES key order.
 *
 * Groups with no industries are dropped, so the /industries hub renders whatever
 * the catalog actually contains. Adding a trade puts it in the right group with
 * no template change, and retiring the last trade in a group removes the group
 * rather than leaving an empty heading behind.
 */
export const industriesByDemandShape = (): {
  shape: DemandShape;
  label: string;
  text: string;
  industries: Industry[];
}[] =>
  (Object.keys(DEMAND_SHAPES) as DemandShape[])
    .map((shape) => ({
      shape,
      ...DEMAND_SHAPES[shape],
      industries: industries.filter((i) => i.demandShape === shape),
    }))
    .filter((group) => group.industries.length > 0);
