/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
