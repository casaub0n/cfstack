// @ts-check

// This is another option: https://turbo.build/repo/docs/handbook/linting/eslint
// https://nextjs.org/docs/basic-features/eslint
// Check other rules, for example: storybook and testing-library https://github.com/takefumi-yoshii/nextjs-testing-strategy-2022/blob/main/package.json
// https://github.com/herp-inc/eslint-config
/**
 * @type {import('eslint').Rule.RuleModule}
 */
 const eslintConfig = {
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ]
}

module.exports = eslintConfig