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
  rules: {
    ...commonRules,
    'typescript/explicit-member-accessibility': 0,
    'typescript/no-use-before-define': 0,
    'typescript/member-ordering': 0,
    'typescript/explicit-function-return-type': 0,
    'typescript/member-delimiter-style': 1
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  }
}
