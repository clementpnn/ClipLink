// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:unicorn/all"],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "unused-imports"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true
        }
      }
    ],
    "unicorn/no-keyword-prefix": "off",
    "unicorn/prevent-abbreviations": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "unused-imports/no-unused-imports": "error",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    eqeqeq: ["error", "always"],
    "no-trailing-spaces": "error",
    indent: ["error", 2],
    "no-empty": "error",
    "space-in-parens": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-multi-spaces": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "array-bracket-spacing": ["error", "never"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "space-before-blocks": ["error", "always"],
    "brace-style": ["error", "1tbs"]
  }
}
