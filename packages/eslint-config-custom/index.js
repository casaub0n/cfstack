module.exports = {
  // https://github.com/storybookjs/eslint-plugin-storybook
  extends: ["next/core-web-vitals", "turbo", "prettier", "plugin:storybook/recommended"],
  plugins: ["import", "unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
    // https://github.com/typescript-eslint/typescript-eslint/issues/393#issuecomment-511115374
    warnOnUnsupportedTypeScriptVersion: false,
  },
};
