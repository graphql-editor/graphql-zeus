module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1'],
  },
  testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
  watchPathIgnorePatterns: ['node_modules'],
  watchman: false,
};
