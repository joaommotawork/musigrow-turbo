module.exports = {
	plugins: [
		require('tailwindcss'),
		require('postcss-preset-env')({
			stage: 3,
			features: { 'nesting-rules': true },
			autoprefixer: true,
		}),
	],
};
