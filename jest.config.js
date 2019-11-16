module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  transformIgnorePatterns: [
    'this-is-just-here-to-not-match-anything-and-make-sure-the-node-modules-are-not-ignored-in-the-transforms',
  ],
  transform: {
    '\\.ts$': 'ts-jest',
    '\\.js$': 'babel-jest', // if you have jsx tests too
  },
  globals: {
    'ts-jest': {
      // tsConfig: '<rootDir>/test-utils/tsconfig.jest.json',
      babelConfig: true,
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['src/**/*.{js,ts}', '!test/**/*.spec.{js,ts}', '!src/lib/vendor/**/*.*'],
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    'src/index.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    'src/lib/Dummy.ts': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
