module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    theme: {
      typography: {
        default: {
          css: {
            pre: null,
            code: null,
            'code::before': null,
            'code::after': null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
