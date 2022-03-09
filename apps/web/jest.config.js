module.exports = {
	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},

	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
