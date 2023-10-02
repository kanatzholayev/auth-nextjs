/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-orange': 'linear-gradient(273deg, #FFC543 0%, #FF8412 100%)',
				'gradient-blue': 'linear-gradient(273deg, #686DE0 0%, #4834D4 100%)',
				'gradient-light': 'linear-gradient(273deg, #EDEBFB 0%, #F0F0FC 100%)',
				'gradient-lightblue': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E5F1FB 100%)',
				'gradient-modal': 'linear-gradient(180deg, #4936D4 0%, #6835D4 100%);',
				'modal-pattern': "url('/public/modal-bg.png')",
			},
			boxShadow: {
				'orange-button': '0px 4px 8px rgba(66.62, 40.92, 124.31, 0.25)',
				'blue-button': '0px 4px 20px rgba(104, 109, 224, 0.50)',
				'light-button': '0px 4px 20px rgba(104, 109, 224, 0.50) ',
				navbar: '0px -5px 20px rgba(0, 0, 0, 0.10)',
			},
			borderRadius: {
				35: '35px',
			},
			colors: {
				primary: '#1E1E2E',
				inactive: 'rgba(30.39, 30.08, 45.69, 0.50)',
				active: '#4835D4',
				logo: '#4D6AE4',
				offset: 'rgba(30.39, 30.08, 45.69, 0.90)',
				link: '#86BFEB',
				close: '#FFC543',
				gray: '#F3F5F5',
			},
			fontSize: {
				xxs: '.625rem',
			},
		},
	},
	plugins: [],
};
