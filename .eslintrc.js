module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'space-before-function-paren': 0,
    'prettier/prettier': 2,
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
