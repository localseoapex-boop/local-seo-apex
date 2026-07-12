/**
 * contact-form.ts — the lead form's configuration and its select options.
 *
 * Two jobs:
 *
 *   1. ENDPOINT CONFIG. `CONTACT_FORM.endpoint` is deliberately empty. No
 *      submission endpoint is hardcoded anywhere in the templates. Drop the URL
 *      from whatever handles the POST (Formspree, Netlify, a serverless
 *      function, a CRM webhook) in here and the form starts submitting. Nothing
 *      else needs to change.
 *
 *      WHILE THIS IS EMPTY THE FORM CANNOT SUBMIT. The page renders the form in
 *      a clearly disabled state rather than pretending to accept a lead and
 *      dropping it on the floor, because a form that silently eats leads is
 *      worse than a form that admits it is not connected yet.
 *
 *   2. OPTIONS. The industry and service choices are NOT written here. They are
 *      derived from data/industries.ts and data/services.ts at build time, so a
 *      new trade or a new service appears in the form automatically and the form
 *      can never offer something we do not sell.
 */
import { industries } from './industries';
import { services } from './services';

export const CONTACT_FORM = {
  /**
   * Where the form POSTs. EMPTY UNTIL CONFIGURED — see the note above.
   * Example: 'https://formspree.io/f/xxxxxxx'
   */
  endpoint: 'https://cloud.activepieces.com/api/v1/webhooks/XrYUt4Qwe19qmy9Xz0AVc',
  /** POST for a lead form. Never GET, which would put PII in the URL and logs. */
  method: 'POST',
  /** Where a successful submission lands. Most providers honour a _next field. */
  redirectPath: '/thank-you',
  /**
   * Honeypot field name. Bots fill every input they find, so a field that is
   * hidden from humans and left empty by them is a cheap, JS-free spam filter.
   * Deliberately plausible-sounding: a bot cannot tell it is a trap.
   * REJECT ANY SUBMISSION WHERE THIS IS NON-EMPTY, server side.
   */
  honeypotField: 'fax_number',
} as const;

/** True once an endpoint is configured. Gates the form's submit state. */
export const isFormConfigured = (): boolean => CONTACT_FORM.endpoint.trim().length > 0;

export interface SelectOption {
  value: string;
  label: string;
}

/** Industry choices, derived from the trade catalog plus an escape hatch. */
export const industryOptions: SelectOption[] = [
  ...industries.map((i) => ({ value: i.slug, label: i.name })),
  { value: 'other', label: 'Other home service trade' },
];

/** Service checkboxes, derived from the service catalog plus "not sure yet". */
export const serviceOptions: SelectOption[] = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: 'not-sure', label: 'Not sure yet' },
];

/** How many locations the business runs. Shapes the whole local strategy. */
export const locationCountOptions: SelectOption[] = [
  { value: '1', label: '1 location' },
  { value: '2-5', label: '2 to 5 locations' },
  { value: '6-10', label: '6 to 10 locations' },
  { value: '11-plus', label: '11 or more locations' },
];

/**
 * Budget bands. These are ranges a buyer self-selects into, NOT packages and NOT
 * tiers. Nothing here is sold as a plan. "Not sure yet" is first on purpose,
 * because an owner who does not know their budget should not be filtered out.
 */
export const budgetOptions: SelectOption[] = [
  { value: 'not-sure', label: 'Not sure yet' },
  { value: 'under-1000', label: 'Under $1,000 per month' },
  { value: '1000-2500', label: '$1,000 to $2,500 per month' },
  { value: '2500-5000', label: '$2,500 to $5,000 per month' },
  { value: 'over-5000', label: 'More than $5,000 per month' },
  { value: 'project', label: 'One-time project, not a monthly budget' },
];

/**
 * Hidden attribution fields, populated client-side on page load.
 *
 * `offer` comes from the CTA the visitor clicked (see contactUrl in lib/urls.ts).
 * The utm_* fields come from the ad or campaign that brought them. `referrer`
 * and `landing_page` are read from the browser. All of them ride along with the
 * lead so a booked job can be traced back to what produced it.
 */
export const HIDDEN_FIELDS = [
  'offer',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'referrer',
  'landing_page',
] as const;
