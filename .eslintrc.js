module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['html'],
  globals: {},
  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
