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
		},
		fontFamily:{
			'Jakarta':['"Plus Jakarta Sans"', 'sans-serif'],
			'Inter':['"Inter"', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'hero-bg-img': "url('./src/assets/bg-img-home-pg.png')",
			  }
		},
	},
	plugins: [],
}
