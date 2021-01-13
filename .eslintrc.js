module.exports =
{
  "env": {
    "node": true,
    "mocha": true,
    "jest": true,
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    'taro/react'
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "react-hooks",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "JSX": true,
    "React": true,
    "NodeJS": true,
    "Promise": true
  },
  "rules": {
    "prettier/prettier": "error",
    "no-console": [1, { "allow": ["error"] }],
    "consistent-return": 2,
    "curly": [2, "multi-or-nest"],
    "dot-location": 0,
    "eqeqeq": 2,
    "no-alert": 2,
    "no-eq-null": 2,
    "no-lone-blocks": 2,
    "no-return-await": 2,
    "no-unused-expressions": 2,
    "no-label-var": 1,
    "array-bracket-spacing": 2,
    "brace-style": 0,
    "comma-spacing": 1,
    "consistent-this": 1,
    "eol-last": 0,
    "multiline-ternary": [1, "always-multiline"],
    "new-cap": [2, { "capIsNew": false }],
    "no-trailing-spaces": 0,
    // "semi": ["error", "never"],
    "space-before-blocks": 2,
    "space-in-parens": 2,
    "spaced-comment": 2,
    "switch-colon-spacing": ["error", { "after": true, "before": false }],
    "arrow-spacing": 2,
    "quotes": [0, "single"],
    "key-spacing": 2,
    "comma-dangle": ["error", "never"],
    "semi": [2, "always"],
    "react-hooks/exhaustive-deps": 0,
    "no-empty-function": 1,
    "react-native/no-inline-styles": 0,
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "prefer-promise-reject-errors": 0,
    "react/no-array-index-key": 2,
    "react/no-unused-state": 2,
    "react/jsx-indent-props": 1,
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": [1, { "enforceDynamicLinks": "always" }],
    "react/jsx-no-undef": 2,
    "react/jsx-props-no-multi-spaces": 1,
    "react/jsx-tag-spacing": 1,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
    "react-hooks/rules-of-hooks": 2
  }
};

