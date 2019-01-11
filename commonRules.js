const restricted = require('eslint-restricted-globals');

module.exports = {
  // General
  'no-class-assign': 0,
  'no-duplicate-imports': 0,
  'no-plusplus': 0,
  'no-restricted-globals': ['error'].concat(restricted),
  'no-underscore-dangle': 0,
  'no-use-before-define': 0,
  'no-console': 1,
  'new-cap': 0,
  'require-jsdoc': 0,
  'semi': 0,
  'no-restricted-syntax': ['error', 'WithStatement'],
  'no-await-in-loop': 0,

  // Importing
  'import/extensions': 0,
  'import/no-dynamic-require': 0,
  'import/no-unresolved': 2,
  'import/prefer-default-export': 0,
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: ['**/__tests__/**'] },
  ],

  // Prettier
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'es5',
    },
  ],

  // React
  'class-methods-use-this': 0,
  'react/forbid-prop-types': 1,
  'react/prefer-stateless-function': 0,
  'react/prop-types': 0,
  'react/require-default-props': 0,
  'react/sort-comp': 0,
  'react/destructuring-assignment': 0,
  'react/jsx-filename-extension': [0, { extensions: ['.js'] }],
}