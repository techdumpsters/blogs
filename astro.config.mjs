import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://techdumpsters.github.io',
  base: '/blogs',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});