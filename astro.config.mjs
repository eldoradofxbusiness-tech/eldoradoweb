
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  
  output: 'server', 

  vite: {
    plugins: [tailwindcss()]
  },

  
  site: 'https://eldoradofx.co.uk',

  prefetch: {
    prefetchAll: false, 
    defaultStrategy: 'viewport'
  },

  integrations: [react(), sitemap()],
  
  
  adapter: cloudflare()
});