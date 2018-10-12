module.exports = {
  extends: ['krizzu'],
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    plugins: [
      'typescript'
    ],
    parser: 'typescript-eslint-parser',
    rules: {
      'no-restricted-syntax': ["error", "WithStatement"]
    }
  }],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  }
}