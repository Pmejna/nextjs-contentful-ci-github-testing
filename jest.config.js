const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
      },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};

module.exports = createJestConfig(customJestConfig);