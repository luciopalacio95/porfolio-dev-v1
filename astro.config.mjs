import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { VitePWA } from "vite-plugin-pwa"

// Helper imports
import { manifest, seoConfig } from "./util/seoConfig"

// https://astro.build/config

export default defineConfig({
	site: seoConfig.baseURL,
  integrations: [tailwind()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
   }
  },
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	}
})
