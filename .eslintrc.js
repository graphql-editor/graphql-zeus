module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
