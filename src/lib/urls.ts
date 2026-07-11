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

/** /services/[category]/[subservice] — parent sub-service page. */
export const subServiceUrl = (categorySlug: string, subSlug: string): string =>
  `/services/${categorySlug}/${subSlug}`;

/** Build an absolute URL from a path, using the configured site origin. */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).href;
