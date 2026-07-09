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
    sitemap(),
  ],
});
