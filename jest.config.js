/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['fake-indexeddb/auto', 'structured-clone'],

  // The test environments that will be used for testing
  testEnvironment: 'jsdom',

  // Additional test environments
  // Add 'node' if you want to run some tests in a Node.js environment
  testEnvironmentOptions: {
    'jest-environment-node': {
      // Node.js specific options
      // For example:
      // someNodeOption: true,
    },
  },

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;
