
const rules = {
  semi: ["error", "always"],
  quotes: ["error", "double"],
  'space-before-function-paren': ["error", "never"],
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      "checksVoidReturn": false
    }
  ]
}

module.exports = {
  extends: '@chatie',
  rules,
  env: {
    jest: true,
  },
}
