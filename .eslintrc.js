module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jasmine": true,
    "node": true
  },
  "globals": {
    "test": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "global-require": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "react/no-multi-comp": 0,
    "react/require-extension": 0,
    "react/prefer-stateless-function": 0
  }
};
