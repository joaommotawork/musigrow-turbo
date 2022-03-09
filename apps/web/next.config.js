const nextTranslate = require('next-translate');

const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM(
	nextTranslate({
		reactStrictMode: true,
	}),
);
