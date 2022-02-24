module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
  ],
};
