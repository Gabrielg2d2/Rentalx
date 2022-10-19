export default {
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: ['src/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: '50%',
  testEnvironment: 'jest-environment-node',
  testPathIgnorePatterns: ['/node_modules/'],
  roots: ['<rootDir>/src']
}
