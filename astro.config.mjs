// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
 // Keep this in sync with SITE.url in src/config/site.ts.
 // This should always point to the production domain.
site: 'https://localseoapex.com',

  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time, listing every
    // statically-rendered page. Referenced from robots.txt so crawlers find it.
    sitemap({
      // /thank-you is a post-submission page. It is noindexed and has no value to
      // a searcher, so it stays out of the sitemap. Submitting a noindexed URL is
      // a contradictory signal to Google.
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
