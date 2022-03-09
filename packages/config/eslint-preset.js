module.exports = {
	extends: [
		'@infinumjs/eslint-config-core-ts',
		'airbnb',
		'airbnb/hooks',
		'plugin:jest/all',
		'plugin:testing-library/react',
		'next',
		'prettier',
	],
	plugins: ['jest', 'testing-library'],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'testing-library/await-async-query': 'error',
		'testing-library/no-await-sync-query': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
	},
	overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	env: {
		'jest/globals': true,
	},
};
