const commonRules = require('./commonRules')

module.exports = {
  extends: ['krizzu', 'typescript'],
  parser: 'typescript-eslint-parser',
  plugins: [
    'typescript'
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: commonRules,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  }
}