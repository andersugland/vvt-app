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
			keyframes: {
				dance: {
					'0%, 100%': {
						opacity: '1',
						transform: 'rotate(0deg) scale(1) translate(0, 0)'
					},
					'50%': {
						opacity: '.85',
						transform: 'rotate(180deg) scale(1.5) translate(20px, 20px)'
					}
				}
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
				dance: 'dance 20s linear infinite'
			},
			fontFamily: {
				heading: ['Ubuntu', 'sans-serif'],
				body: ['Rubik Variable', 'sans-serif']
			},
			fontSize: {
				sm: ['15px', '1.8em'],
				body: ['20px', '1.8em'],
				md: ['26.66px', '1.8em'],
				lg: ['35.54px', '110%'],
				xl: ['47.37px', '110%'],
				'2xl': ['63.15px', '110%'],
				'3xl': ['84.17px', '110%'],
				huge: ['221.78px', '1em']
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
