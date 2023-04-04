module.exports = {
  env: {
    "jest/globals": true,
    es6: true,
  },
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "next",
    "turbo",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  rules: {
    "jest/expect-expect": "off",
    "no-unused-vars": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
