import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    devOverlay: true
  },
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: {
          en: 'en-US', 
          es: 'es-ES',
          fr: 'fr-CA',
          uk: 'uk-UA',
          ru: 'ru-UA',
        },
      },
    }), 
    react()]
});