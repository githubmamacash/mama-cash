/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['Roboto', 'system-ui', 'serif'],
				'body': ["Inter", 'system-ui', 'sans-serif']
			},
		},
	},
	plugins: [],
}