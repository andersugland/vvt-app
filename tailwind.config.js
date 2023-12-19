/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				light: '#ffffff',
				gray: '#a6a6a6',
				dark: '#404040',
				primary: '#F39200',
				secondary: '#124697'
			},
			gridTemplateColumns: {
				imageOutside: '1fr 1fr 1fr'
			},
			fontFamily: {
				heading: ['Ubuntu', 'sans-serif'],
				body: ['Rubik Variable', 'sans-serif']
			},
			fontSize: {
				sm: ['0.75rem', '1.8em'],
				body: ['1rem', '1.8em'],
				md: ['1.333rem', '1.4em'],
				lg: ['1.777rem', '110%'],
				xl: ['2.369rem', '110%'],
				'2xl': ['3.157rem', '110%'],
				'3xl': ['4.290rem', '110%'],
				huge: ['5.61rem', '1em']
			},
			spacing: {
				tiny: '20px',
				xsmall: '50px',
				small: '105px',
				medium: '150px',
				large: '250px',
				gutter: '48px'
			},
			transitionTimingFunction: {
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)'
			},
			content: {
				'arrow-right': 'url("./lib/assets/arrow-right.svg")'
			}
		}
	},
	plugins: []
};
