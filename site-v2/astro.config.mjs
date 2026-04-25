// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gianfaye.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
