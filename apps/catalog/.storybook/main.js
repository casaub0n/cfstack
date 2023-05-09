const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    {
      directory: "../../../doc/",
      titlePrefix: "Cf stack root",
    },
    {
      directory: "../../cf-pages/src/",
      titlePrefix: "cf-pages",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-webpack5",
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  features: {
    babelModeV7: true,
  },
  babel: (config) => {
    return { ...config, rootMode: "upward" };
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../cf-pages/tsconfig.json"),
      }),
    );
    return config;
  },
};
