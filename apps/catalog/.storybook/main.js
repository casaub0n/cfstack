const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    {
      directory: "../../../docs/",
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
  framework: "@storybook/nextjs",
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
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

export default config;
