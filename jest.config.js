module.exports = {
  preset: 'ts-jest',

  transformIgnorePatterns: [
    '/node_modules/(?!(module-to-transform|another-module-to-transform)/)',
  ],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
