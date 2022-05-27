module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': 'off',
    'vue/require-default-prop': 'off',
    semi: ['error', 'always'],
  },
};
