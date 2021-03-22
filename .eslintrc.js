/* eslint-disable no-undef */
/* eslint-disable quotes */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": ["js", "jsx"] }],
        "arrow-parens": ["warn", "always"],
        "no-console": ["off"],
        "react/jsx-props-no-spreading": ["off"],
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
    }
};
