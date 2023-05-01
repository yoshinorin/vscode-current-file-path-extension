module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "mocha"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: ["out/*", "*.js"],
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "@ts-ignore": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "guard-for-in": "error",
        "no-var": "error",
        curly: "error",
        "no-useless-escape": "off",
        "mocha/no-exclusive-tests": "error",
      },
    },
  ],
};
