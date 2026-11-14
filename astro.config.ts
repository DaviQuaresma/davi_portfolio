import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
	site: "https://davi-portfolio.vercel.app",
	output: "static",
	adapter: vercel(),
	integrations: [
		react(),
		sitemap({
			i18n: { defaultLocale: "pt", locales: { pt: "pt-BR", en: "en-US" } },
		}),
	],
	i18n: {
		defaultLocale: "pt",
		locales: ["pt", "en"],
		routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
	},
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
			CONTACT_TO_EMAIL: envField.string({ context: "server", access: "secret", optional: true }),
			CONTACT_FROM_EMAIL: envField.string({
				context: "server",
				access: "secret",
				default: "Portfolio <onboarding@resend.dev>",
			}),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
