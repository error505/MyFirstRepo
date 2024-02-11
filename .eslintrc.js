module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "eqeqeq": ["error", "always"],
    "curly": "error",
    "no-multi-spaces": "error",
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-var": "error",
    "prefer-const": "error",
  },
};
