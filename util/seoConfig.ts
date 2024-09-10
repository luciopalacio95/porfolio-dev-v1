// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://porfolio-lucio.onrender.com/", // Change this to your production URL.
	description: "Experiencia y profesionalismo en un mismo lugar.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "/favicon.svg", // Change this to your website's thumbnail.
		alt: "porfolio thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Porfolio de Lucio Palacio - FullStack Developer", // Change this to your website's name,
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Porfolio de Lucio Palacio - FullStack Developer", // Change this to your website's name.
	short_name: "Porfolio de Lucio Palacio", // Change this to your website's short name.
	description:
		"Experiencia y profesionalismo en un mismo lugar.", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "../public/favicon.svg",
			sizes: "192x192",
			type: "image/svg"
		},
		{
			src: "../public/favicon.svg",
			sizes: "512x512",
			type: "image/svg"
		},
		{
			src: "../public/favicon.svg",
			sizes: "512x512",
			type: "image/svg",
			purpose: "any maskable"
		}
	]
}