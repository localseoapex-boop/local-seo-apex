/**
 * urls.ts — canonical URL builders.
 *
 * Centralizing URL construction means the routing scheme is defined in ONE
 * place. If you ever change /locations to /service-areas, you edit here and
 * every internal link, breadcrumb, and sitemap entry follows — no find-and-
 * replace across templates.
 */
import { SITE } from '../config/site';

export const serviceUrl = (slug: string): string => `/services/${slug}`;

export const cityUrl = (slug: string): string => `/locations/${slug}`;

/**
 * /industries/[industry]. These pages do not exist yet — only industries with
 * `hasPage: true` in data/industries.ts should be linked with this, so the hub
 * never ships a link to an unbuilt route.
 */
export const industryUrl = (slug: string): string => `/industries/${slug}`;

/**
 * The offers a CTA can carry into the contact form.
 *
 * Every CTA on the site routes through contactUrl(), so the form always knows
 * which promise the visitor clicked. The value lands in the form's hidden
 * `offer` field and is submitted with the lead, which is what lets you attribute
 * a lead to the CTA that produced it rather than guessing.
 *
 * Adding an offer means adding it here. A typo becomes a build error rather than
 * a silently untracked lead.
 */
export type ContactOffer = 'strategy' | 'audit';

/**
 * /contact, optionally carrying an offer. contactUrl('audit') -> /contact?offer=audit
 *
 * Call this instead of writing "/contact" by hand so the query contract lives in
 * one place and every CTA stays attributable.
 */
export const contactUrl = (offer?: ContactOffer): string =>
  offer ? `/contact?offer=${offer}` : '/contact';

/** Build an absolute URL from a path, using the configured site origin. */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).href;
