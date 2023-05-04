module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
