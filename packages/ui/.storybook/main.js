module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'storybook-addon-designs',
		'@storybook/addon-storysource',
		'storybook-dark-mode',
		'@storybook/testing-react',
		'storybook-addon-next-router',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
};
