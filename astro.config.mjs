// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Host-Variante (www oder ohne) ist AP-1-Entscheidung. Bis dahin: www als Arbeitsannahme,
// dokumentiert in docs/OFFENE-FRAGEN.md. Canonicals folgen dieser einen Variante.
export default defineConfig({
  site: 'https://www.schreck-kunststofftechnik.de',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/danke/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
