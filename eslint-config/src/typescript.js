/** @file TypeScript-specific rules. */
"use strict";

const recommendedRules = {
	...require("./_recommended.js").rules,
	...require("./recommended.js").rules,
};

const prettierRules = require("eslint-config-hardcore/prettier.json").rules;

/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [require.resolve("./esm.js"), "hardcore/ts"],

	globals: { NodeJS: "readonly" },

	rules: Object.assign(
		{
			"@typescript-eslint/array-type": 2,

			"@typescript-eslint/ban-ts-comment": [
				2,
				{
					"ts-check": true,
					"ts-expect-error": { descriptionFormat: /^ \(TS\\d +\) -- /.source },
					"ts-ignore": false,
					"ts-nocheck": false,
				},
			],

			"@typescript-eslint/ban-tslint-comment": 2,
			"@typescript-eslint/brace-style": 2,
			"@typescript-eslint/class-literal-property-style": 2,
			"@typescript-eslint/comma-spacing": 2,
			"@typescript-eslint/consistent-indexed-object-style": 2,
			"@typescript-eslint/consistent-type-assertions": 2,
			"@typescript-eslint/consistent-type-definitions": 0,
			"@typescript-eslint/consistent-type-exports": 2,
			"@typescript-eslint/consistent-type-imports": 2,
			"@typescript-eslint/default-param-last": 2,
			"@typescript-eslint/dot-notation": 2,
			"@typescript-eslint/explicit-function-return-type": 0,
			"@typescript-eslint/explicit-member-accessibility": 2,
			"@typescript-eslint/explicit-module-boundary-types": 2,
			"@typescript-eslint/func-call-spacing": 2,
			"@typescript-eslint/keyword-spacing": 2,
			"@typescript-eslint/lines-between-class-members": 2,
			"@typescript-eslint/member-delimiter-style": 2,
			"@typescript-eslint/method-signature-style": 2,
			"@typescript-eslint/naming-convention": 0,
			"@typescript-eslint/no-confusing-non-null-assertion": 2,
			"@typescript-eslint/no-dupe-class-members": 2,
			"@typescript-eslint/no-extraneous-class": 2,
			"@typescript-eslint/no-invalid-void-type": 2,
			"@typescript-eslint/no-loop-func": 2,
			"@typescript-eslint/no-meaningless-void-operator": 2,
			"@typescript-eslint/no-namespace": 0,
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": 2,
			"@typescript-eslint/no-redeclare": 2,
			"@typescript-eslint/no-require-imports": 2,
			"@typescript-eslint/no-restricted-imports": 2,
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
			"@typescript-eslint/no-unnecessary-condition": 2,
			"@typescript-eslint/no-unnecessary-qualifier": 2,
			"@typescript-eslint/no-unnecessary-type-arguments": 2,
			"@typescript-eslint/no-unsafe-argument": 0,
			"@typescript-eslint/no-unsafe-assignment": 0,
			"@typescript-eslint/no-unsafe-call": 0,
			"@typescript-eslint/no-unsafe-member-access": 0,
			"@typescript-eslint/no-unsafe-return": 0,
			"@typescript-eslint/no-unused-expressions": 2,
			"@typescript-eslint/no-use-before-define": 2,
			"@typescript-eslint/no-useless-constructor": 2,
			"@typescript-eslint/non-nullable-type-assertion-style": 2,
			"@typescript-eslint/object-curly-spacing": [2, "always"],
			"@typescript-eslint/padding-line-between-statements": 2,
			"@typescript-eslint/parameter-properties": 0,
			"@typescript-eslint/prefer-enum-initializers": 2,
			"@typescript-eslint/prefer-for-of": 2,
			"@typescript-eslint/prefer-function-type": 2,
			"@typescript-eslint/prefer-includes": 2,
			"@typescript-eslint/prefer-literal-enum-member": 2,
			"@typescript-eslint/prefer-nullish-coalescing": [2, { ignoreTernaryTests: false }],
			"@typescript-eslint/prefer-optional-chain": 2,
			"@typescript-eslint/prefer-readonly": 2,
			"@typescript-eslint/prefer-readonly-parameter-types": 0,
			"@typescript-eslint/prefer-reduce-type-parameter": 2,
			"@typescript-eslint/prefer-regexp-exec": 2,
			"@typescript-eslint/prefer-return-this-type": 2,
			"@typescript-eslint/prefer-string-starts-ends-with": 2,
			"@typescript-eslint/prefer-ts-expect-error": 2,
			"@typescript-eslint/promise-function-async": 2,
			"@typescript-eslint/quotes": [2, "double", { avoidEscape: true }],
			"@typescript-eslint/require-array-sort-compare": 2,
			"@typescript-eslint/restrict-template-expressions": 0,
			"@typescript-eslint/return-await": 2,
			"@typescript-eslint/semi": 2,
			"@typescript-eslint/sort-type-union-intersection-members": 2,

			"@typescript-eslint/space-before-function-paren": [
				2,
				{
					anonymous: "always",
					asyncArrow: "always",
					named: "never",
				},
			],

			"@typescript-eslint/space-infix-ops": 2,
			"@typescript-eslint/strict-boolean-expressions": 0,
			"@typescript-eslint/switch-exhaustiveness-check": 2,
			"@typescript-eslint/type-annotation-spacing": 2,
			"@typescript-eslint/typedef": 2,
			"@typescript-eslint/unbound-method": 0,

			"@typescript-eslint/unified-signatures": [
				2,
				{ ignoreDifferentlyNamedParameters: true },
			],

			"etc/no-commented-out-code": 1,
			"etc/no-deprecated": 0,
			"etc/prefer-interface": 0,
			"import/extensions": 0,
			"jsdoc/no-types": [2, { contexts: ["any"] }],
			"jsdoc/require-param-type": 0,
			"jsdoc/require-property-type": 0,
			"jsdoc/require-returns-type": 0,
			"new-cap": 0, // It doesn't support decorators
			"no-return-await": 0,
			"no-tabs": 0,
			"node/file-extension-in-import": [2, "always"],
			"node/no-missing-import": 0,
			"prettier/prettier": 0,
			"unicorn/prefer-native-coercion-functions": 0,
		},
		...Object.keys(prettierRules).map((rule) => ({ [rule]: recommendedRules[rule] })),
		...[
			"comma-dangle",
			"no-extra-parens",
			"no-invalid-this",
			"no-magic-numbers",
			"no-shadow",
			"no-unused-vars",
			"init-declarations",
			"no-empty-function",
		].map((rule) => ({ [rule]: 0, [`@typescript-eslint/${rule}`]: recommendedRules[rule] })),
	),
};

module.exports = config;
