module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'eslint-config-airbnb-base', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:vuetify/base'],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'padding-blocks': 'off',
    'max-len': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
