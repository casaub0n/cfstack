module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 100,
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
    "next/babel",
  ],
  plugins: [],
  ignore: ["./jest.config.js", "./.eslintrc.js"],
};
