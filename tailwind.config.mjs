/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/oil_filter_detail/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/product_detail/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/service_detail/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		colors:{
			'primary': "var(--primary)",
			'primary-tp':'var(--primary-transparent)',
			'secondary': 'var(--secondary)',
			'accent':'var(--accent)',
			'white': 'var(--white)',
			'black': 'var(--black)'
		},
		fontFamily:{
			'Jakarta':['"Plus Jakarta Sans"', 'sans-serif'],
			'Inter':['"Inter"', 'sans-serif']
		},
	},
	plugins: [],
}
