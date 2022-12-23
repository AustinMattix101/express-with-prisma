// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { defaults } = require('jest-config');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs'],
  // eslint-disable-next-line no-undef
  testEnvironment: path.join(__dirname, 'prisma', 'prisma-test-environment.mjs'),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

// eslint-disable-next-line no-undef
module.exports = config;