const path = require("path");

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
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};
