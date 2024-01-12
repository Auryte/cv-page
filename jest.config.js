const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.styles.ts',
    '!<rootDir>/src/**/*fonts.ts',
    '!<rootDir>/src/**/page.tsx',
    '!<rootDir>/src/app/[lang]/examples/**/*.{ts,tsx}',
    '!<rootDir>/src/**/config/config.ts',
    '!<rootDir>/src/app/layout.tsx',
    '!<rootDir>/src/**/hooks/**/*.{ts,tsx}',
    '!<rootDir>/src/**/FeedbackContainer.tsx', 
    '!<rootDir>/src/**/LoginFormContainer.tsx',
    '!<rootDir>/src/**/MissingMenuDishContainer.tsx', 
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/e2e/'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/__tests__/**/*.{ts,tsx}',
  ],
  verbose: true,
};

module.exports = createJestConfig(config);
