const commonRules = require('./commonRules')

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  plugins: ['jest', 'prettier'],
  rules: commonRules,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js', '.native.js'], // for RN
      },
    },
  },
};
