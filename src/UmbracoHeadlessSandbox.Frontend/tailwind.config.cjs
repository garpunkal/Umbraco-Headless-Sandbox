/** @type {import('tailwindcss').Config} */

const colors = require('./config/colors.json');

const colorClasses = [];
for (let colorKey in colors) {
	colorClasses.push('bg-' + colorKey);
	colorClasses.push('text-' + colorKey);
	colorClasses.push('fill-' + colorKey);
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		...colorClasses,
		'-mt-1'
	],
	theme: {
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			...colors,
		},
		container: {
			center: true,
			padding: 'var(--gutter-size)',
			screens: {
				sm: '1140px',
				xl: '1200px'
			},
		},
		fontFamily: {
			'sans': ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
			heading: ['Open Sans', 'sans-serif'],
			footer: ['Open Sans', 'sans-serif'],
			navigation: ['Roboto Condensed', 'sans-serif']
		},
		fontSize: {
			xs: ['var(--font-size-xs)'],
			sm: ['var(--font-size-sm)'],
			md: ['var(--font-size-md)'],
			lg: ['var(--font-size-lg)'],
			xl: ['var(--font-size-xl)'],
			'2xl': ['var(--font-size-2xl)'],
		},
		lineHeight: {
			none: '1',
			body: 'var(--line-height)',
		},
		extend: {
			spacing: {
				'gutter-half': 'calc(var(--gutter-size) / 2)',
				gutter: 'var(--gutter-size)',
				'gutter-dbl': 'calc(var(--gutter-size) * 2)',
				'gutter-tpl': 'calc(var(--gutter-size) * 3)',
			}
		}
	}
}
