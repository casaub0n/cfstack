module.exports = {
  root: true,
  extends: ["custom"],
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "packages/my-app/pages/"],
  },
};
