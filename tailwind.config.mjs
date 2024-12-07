/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'primary': "var(--primary)",
			'secondary': 'var(--secondary)',
			'accent':'var(--accent)',
			'base': 'var(--base)',
		},
		fontFamily:{
			'Jakarta':['"Plus Jakarta Sans", serif'],
			'Inter':['"Inter", sans-serif']
		},
		extend: {
		},
	},
	plugins: [],
}
