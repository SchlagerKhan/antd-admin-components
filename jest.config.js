module.exports = {
	roots: ['<rootDir>/src', '<rootDir>/__test__'],
	testMatch: [
		// prettier-ignore
		"**/__tests__/**/*.+(ts|tsx|js)",
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
