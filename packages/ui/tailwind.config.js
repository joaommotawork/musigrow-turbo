module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/preview.js'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('tailwindcss-debug-screens')],
};
