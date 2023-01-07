const path = require("path");
const vuetify = require("vite-plugin-vuetify");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias["~storybook"] = path.resolve(__dirname);
    config.resolve.alias["@"] = path.resolve(__dirname, "..", "src");
    config.plugins = [...config.plugins, vuetify()];

    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: false,
        minify: false,
      },
    };
  },
};
