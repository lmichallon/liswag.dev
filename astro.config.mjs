// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	trailingSlash: 'never',
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
	},
});
