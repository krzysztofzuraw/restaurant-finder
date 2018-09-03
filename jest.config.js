module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.stubs.js'],
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '~src/(.*)$': '<rootDir>/src/$1',
    '\\.(svg)$': '<rootDir>/empty-module.js',
  },
  snapshotSerializers: ['jest-emotion/serializer'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/jest.stubs.js'],
  collectCoverage: true,
};
