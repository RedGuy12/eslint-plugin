/** @file Sample file-specific rules. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: {
		browser: true,
		es2022: true,
		es6: true,
		node: true,
	},

	extends: "plugin:markdown/recommended",
	parserOptions: { ecmaVersion: "latest" },

	rules: {
		"@redguy12/html-file-comment": 0,
		"import/no-extraneous-dependencies": [2, { devDependencies: false }],
		"import/no-unresolved": 0,
		"import/unambiguous": 0,
		"jsdoc/require-file-overview": 0,
		"jsdoc/require-jsdoc": 0,
		"no-console": 0,
		"no-labels": 0,
		"no-unused-labels": 0,
		"node/no-missing-import": 0,
		"node/no-missing-require": 0,
	},
};

module.exports = config;
