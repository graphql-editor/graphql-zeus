module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/$1'],
  },
  testMatch: ['<rootDir>/**/*.spec.(ts|tsx)'],
  watchPathIgnorePatterns: ['node_modules'],
  watchman: false,
};
