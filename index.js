const commonRules = require('./commonRules')

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  plugins: ['jest', 'prettier'],
  rules: commonRules
};
