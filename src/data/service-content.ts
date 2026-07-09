/**
 * service-content.ts — deep, page-level copy for each service (req #6).
 *
 * Keyed by the same slug as src/data/services.ts, this holds the long-form
 * content the ServiceLayout renders below the hero: overview paragraphs, common
 * reasons, "what's included" groups, problem/solution pairs, scope notes, and
 * per-service FAQs (which also feed FAQPage schema).
 *
 * Keeping the catalog (services.ts) and the rich content (here) separate means
 * the catalog stays scannable while every service page gets unique, substantial
 * copy — important for local SEO and for actually helping the visitor.
 */
export interface ServiceContent {
  /** 2–3 overview paragraphs rendered under the hero. */
  overview: string[];
  /** "Common reasons customers call" chips. */
  reasons: string[];
  /** "What's included" grouped cards. */
  detailGroups: { title: string; items: string[] }[];
  /** Problem → solution pairs. */
  problems: { problem: string; solution: string }[];
  /** One-line prep tip. Not currently rendered; kept for future template use. */
  prepTip: string;
  /** Scope / expectation-setting note. */
  specialNote: string;
  /** Service-specific FAQs (merged with shared FAQs at render time). */
  faqs: { question: string; answer: string }[];
}

/** Four-step "how it works" process, shared across service pages. */
export const serviceProcess = [
  { title: 'Book a strategy call', text: 'Tell us about your market, your crews, and the work you want more of.' },
  { title: 'We audit what you have', text: 'Rankings, site, profile, and competitors — we find what is actually holding you back.' },
  { title: 'Get a plan and a price', text: 'A prioritized scope with clear deliverables and no long-term lock-in.' },
  { title: 'We build and report', text: 'Work ships every month, and reporting ties it back to calls and booked jobs.' },
];

/** "Why choose us" bullets, shared across service pages. */
export const whyChoose = [
  'Reporting on calls and booked jobs, not vanity metrics',
  'SEO-first architecture planned before design begins',
  'Home service specialists — not a generalist agency',
  'No long-term contracts holding the work hostage',
  'You own your website, accounts, and data',
];

/** Short trust bullets for the service hero. */
export const serviceTrustBullets = [
  'Built for home service businesses',
  'Reporting tied to booked jobs',
  'No long-term contracts',
  'You own everything we build',
];

/** FAQs shared by every service page (appended after the service-specific ones). */
export const sharedServiceFaqs = [
  {
    question: 'How long until I see results?',
    answer:
      'Paid channels can produce leads within days. Local SEO and Google Business Profile work usually start moving rankings and calls within a few months and compound from there, depending on how competitive your city is and how strong your site is today. Anyone promising page one in 30 days is guessing.',
  },
  {
    question: 'Do you require a long-term contract?',
    answer:
      'No. We work month to month. The work has to keep earning your business, and you keep ownership of your website, ad accounts, and data if you ever leave.',
  },
  {
    question: 'Do you only work with home service companies?',
    answer:
      'Yes. We do not split our attention across ecommerce, SaaS, and restaurants. Knowing what an HVAC lead costs and how a roofing sales cycle works is the reason our campaigns start ahead.',
  },
];

export const serviceContent: Record<string, ServiceContent> = {
  'local-seo': {
    overview: [
      'Local SEO is how a home service business gets found by the people already searching for what it does, in the cities it actually serves. It is the difference between showing up when a homeowner searches at the moment their water heater fails, and being invisible to them entirely.',
      'The work splits into three parts: making your website technically sound and structured around the services and cities you serve, earning local relevance through citations and reviews, and publishing content that answers what buyers in your market are actually searching for.',
      'None of it is fast, and that is the point. Rankings you earn are rankings you keep. Unlike ads, the traffic does not stop the day you pause the budget — which is why local SEO usually becomes the cheapest lead source a home service company has.',
    ],
    reasons: [
      'Competitors outrank us',
      'Calls dried up',
      'New service area to launch',
      'Traffic but no calls',
      'Rebuilt the site and lost rankings',
      'Too dependent on paid ads',
    ],
    detailGroups: [
      {
        title: 'Technical foundation',
        items: ['Site crawl and indexation fixes', 'Page speed and Core Web Vitals', 'Schema markup', 'Internal linking structure', 'Mobile usability'],
      },
      {
        title: 'Local relevance',
        items: ['City and service page architecture', 'Citation building and cleanup', 'NAP consistency', 'Google Business Profile alignment', 'Review generation'],
      },
      {
        title: 'Content and reporting',
        items: ['Local keyword research', 'Service and city page copy', 'Competitor gap analysis', 'Rank and call tracking', 'Monthly reporting'],
      },
    ],
    problems: [
      {
        problem: 'You rank for your business name and nothing else.',
        solution: 'We build service and city pages targeting the searches buyers actually type, then earn the local signals that make them rank.',
      },
      {
        problem: 'Your traffic is up but the phone is not ringing.',
        solution: 'Traffic from the wrong searches never converts. We target booking-intent keywords and fix the pages that lose visitors before they call.',
      },
      {
        problem: 'Every lead you get costs you ad spend.',
        solution: 'Organic rankings keep producing after the budget stops. We build the base so paid becomes a lever, not a life-support system.',
      },
    ],
    prepTip: 'Bring your Google Business Profile access and any past SEO reports to the first call.',
    specialNote:
      'Local SEO compounds over months, not days. If you need leads this week, pair it with PPC or Local Services Ads while the organic work matures. We will tell you honestly which one your situation calls for.',
    faqs: [
      {
        question: 'How is local SEO different from regular SEO?',
        answer:
          'Ranking in a city is a different problem than ranking nationally. Proximity, Google Business Profile categories, reviews, and local relevance drive the map results, and none of them matter much for a national site. We work all four.',
      },
      {
        question: 'Do I need a new website to do local SEO?',
        answer:
          'Not always. If your site is fast, crawlable, and structured sensibly, we work with what you have. If it is slow or built on a platform that fights back, rebuilding is usually cheaper than working around it forever.',
      },
    ],
  },

  'website-development': {
    overview: [
      'A home service website has one job: turn the visitor into a phone call. Most fail at it. They load slowly on the phone the homeowner is holding, bury the number, and are built on a structure search engines struggle to crawl.',
      'We plan structure, internal linking, metadata, and schema before making a single design choice. Retrofitting SEO onto a finished site costs more and works worse, so the architecture comes first and the design is built to fit it.',
      'The result is a site that loads fast, reads clearly, gives every visitor an obvious next step, and gives search engines a clean map of every service you offer in every city you serve.',
    ],
    reasons: [
      'Site is slow on mobile',
      'Visitors leave without calling',
      'Redesign lost our rankings',
      'Cannot edit our own site',
      'Site does not match the business',
      'Expanding into new cities',
    ],
    detailGroups: [
      {
        title: 'Architecture',
        items: ['SEO-first sitemap', 'Service and city page structure', 'Internal linking plan', 'URL and redirect mapping', 'Schema markup'],
      },
      {
        title: 'Build and design',
        items: ['Custom, mobile-first design', 'Core Web Vitals performance budget', 'Accessible, semantic markup', 'Content migration', 'CMS you can actually use'],
      },
      {
        title: 'Conversion',
        items: ['Clear calls to action', 'Click-to-call on mobile', 'Lead forms and routing', 'Call tracking setup', 'Trust signals and reviews'],
      },
    ],
    problems: [
      {
        problem: 'Your site takes six seconds to load on a phone.',
        solution: 'We build to a performance budget and measure Core Web Vitals, because most visitors leave before a slow site finishes loading.',
      },
      {
        problem: 'The last redesign wiped out your rankings.',
        solution: 'We map every existing URL and redirect it before launch, so the pages that already rank keep ranking.',
      },
      {
        problem: 'People visit and never call.',
        solution: 'Every page gets one obvious next step, a tappable phone number, and the trust signals a homeowner needs to pick up the phone.',
      },
    ],
    prepTip: 'Have your domain registrar and current hosting logins handy before the build kicks off.',
    specialNote:
      'You own the site, the domain, the code, and the analytics — during the project and after it. We do not build on proprietary platforms that hold your business hostage if you decide to leave.',
    faqs: [
      {
        question: 'Will a redesign hurt my current rankings?',
        answer:
          'It will if nobody plans the migration. We map every URL, preserve the pages that already rank, and redirect the rest before launch, then monitor closely afterward. Done right, a rebuild lifts rankings rather than losing them.',
      },
      {
        question: 'How long does a website build take?',
        answer:
          'Most home service sites take six to ten weeks depending on how many services and cities need pages, and how quickly content and photos come together on your end.',
      },
    ],
  },

  'ppc-management': {
    overview: [
      'Paid search is the fastest way to put your business in front of someone who needs help today. It is also the fastest way to waste money, because the default settings are built to spend your budget, not to book your jobs.',
      'We manage campaigns around cost per booked job. That means tracking calls through to real work, cutting the keywords that generate clicks but never customers, and testing the landing page behind the ad rather than just the ad itself.',
      'For most home service companies, paid search and local SEO are not alternatives. Paid produces leads now, SEO lowers what those leads cost over time, and the two feed each other with the keyword data they generate.',
    ],
    reasons: [
      'Spending with nothing to show',
      'Need leads immediately',
      'Competitors bidding on our name',
      'Seasonal demand swings',
      'Launching a new service area',
      'Agency reports clicks, not jobs',
    ],
    detailGroups: [
      {
        title: 'Campaign management',
        items: ['Campaign build and restructuring', 'Keyword and negative keyword lists', 'Bid and budget management', 'Local Services Ads', 'Geographic targeting'],
      },
      {
        title: 'Creative and landing',
        items: ['Ad copy testing', 'Landing page testing', 'Offer and CTA optimization', 'Ad extensions', 'Competitor monitoring'],
      },
      {
        title: 'Measurement',
        items: ['Call tracking setup', 'Conversion tracking', 'Lead quality review', 'Cost per booked job', 'Monthly reporting'],
      },
    ],
    problems: [
      {
        problem: 'Your agency reports clicks and impressions.',
        solution: 'Clicks do not pay payroll. We track calls through to booked jobs and report on what each one costs you.',
      },
      {
        problem: 'Half your budget goes to searches that never convert.',
        solution: 'Aggressive negative keyword management and search term review cut the spend that never turns into work.',
      },
      {
        problem: 'Your leads are wrong numbers and price shoppers.',
        solution: 'We tighten targeting and match intent, and on Local Services Ads we dispute the junk leads so you are not billed for them.',
      },
    ],
    prepTip: 'Bring admin access to your existing Google Ads account so we can review historical spend.',
    specialNote:
      'Ad spend is billed by Google directly and is separate from our management fee. You keep ownership of the ad accounts and all their history, even if we part ways.',
    faqs: [
      {
        question: 'Is my ad spend included in the management fee?',
        answer:
          'No. Google bills you directly for ad spend, and our management fee is separate. That keeps the incentives clean and means you always see exactly what the platform costs versus what we cost.',
      },
      {
        question: 'Should I run ads or invest in SEO?',
        answer:
          'Most home service companies need both, in that order. Ads produce leads while the organic work matures, then SEO lowers your blended cost per lead as it compounds. If your budget only supports one, we will tell you which fits your situation.',
      },
    ],
  },

  'google-business-profile-optimization': {
    overview: [
      'For most home service searches, the map pack sits above the organic results and takes the majority of the calls. Your Google Business Profile decides whether you appear there, and it is the single most underworked asset in local marketing.',
      'Ranking in the map pack comes down to relevance, distance, and prominence. We work the parts you control: the categories and services on your profile, the completeness and accuracy of every field, the photo and post cadence, and above all the reviews.',
      'It is also the cheapest local ranking win available to most companies. A profile that has been neglected for years usually has category errors, missing services, and duplicate listings quietly suppressing it — all fixable.',
    ],
    reasons: [
      'Not showing in the map pack',
      'Lost access to the profile',
      'Suspended or duplicate listing',
      'Few or aging reviews',
      'Competitors with fake listings',
      'Moved or changed service areas',
    ],
    detailGroups: [
      {
        title: 'Profile foundation',
        items: ['Verification and ownership recovery', 'Primary and secondary categories', 'Services and service areas', 'Hours and attributes', 'NAP consistency'],
      },
      {
        title: 'Ongoing signals',
        items: ['Photo strategy', 'Google Posts', 'Q&A management', 'Product and service updates', 'Spam listing reports'],
      },
      {
        title: 'Reviews',
        items: ['Review request workflow', 'Response drafting', 'Negative review handling', 'Review velocity tracking', 'Rating reporting'],
      },
    ],
    problems: [
      {
        problem: 'You rank organically but never in the map.',
        solution: 'Map rankings run on different signals. We fix categories, services, and review velocity — the levers that actually move the map pack.',
      },
      {
        problem: 'Competitors outrank you with fake listings.',
        solution: 'We document and report spam and duplicate listings, which is often the fastest way to move up in a crowded market.',
      },
      {
        problem: 'Your last review is from two years ago.',
        solution: 'We build a request process your crews will actually follow, so reviews arrive steadily instead of in occasional bursts.',
      },
    ],
    prepTip: 'Have the Google account that owns your profile ready — or tell us if nobody knows who owns it.',
    specialNote:
      'Google Business Profile results depend partly on the searcher’s distance from your address, which no agency controls. We are direct about which cities your profile can realistically rank in and where organic service pages have to carry the work instead.',
    faqs: [
      {
        question: 'Can you rank my profile in cities I do not have an office in?',
        answer:
          'Only so far. Proximity is a real ranking factor in the map pack, so a Mesa address will always struggle to rank in the middle of Phoenix. Service area pages and organic SEO cover the cities your profile cannot reach.',
      },
      {
        question: 'What if my listing was suspended?',
        answer:
          'We audit what triggered it — usually a category, address, or name violation — correct the underlying issue, and file the reinstatement request with the documentation Google asks for.',
      },
    ],
  },
};

export const getServiceContent = (slug: string): ServiceContent | undefined =>
  serviceContent[slug];

/** Visible FAQs for a service page: service-specific first, then shared. */
export const getServiceFaqs = (slug: string) => {
  const content = serviceContent[slug];
  return [...(content?.faqs ?? []), ...sharedServiceFaqs];
};
