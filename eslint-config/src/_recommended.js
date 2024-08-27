/** @file Recommended rules minus typescript. */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
	env: { es2022: false, es6: true },

	extends: [
		"eslint:all",
		"plugin:eslint-comments/recommended",
		"plugin:regexp/recommended",
		"plugin:markdown/recommended",
		"plugin:promise/recommended",
		"plugin:unicorn/all",
		"plugin:import/recommended",
		require.resolve("./third-party/hardcore-base.js"),
		"hardcore/fp",
		"hardcore/ts-for-js",
		"plugin:jsonc/all",
		"plugin:jsonc/prettier",
	],

	ignorePatterns: [
		"!**",
		"node_modules",
		".git",
		"plugin_packages",
		".npm",
		".upm",
		"dist",
		"build",
		".parcel-cache",
		".nvm",
		".eslintcache",
		".node_repl_history",
		"npm-shrinkwrap.json",
		"package-lock.json",
		"vendor",
		"lib-cov",
		"coverage",
		".cache",
		"tmp",
		"*.min.*",
	],

	overrides: [
		{
			extends: require.resolve("./cli.js"),
			files: ["bin/*.js", ".github/*.js"],
		},
		{ extends: require.resolve("./esm.js"), files: "*.mjs" },
		{
			extends: require.resolve("./config.js"),

			files: [
				"*.config.js",
				"*rc.js",
				"*.config.mjs",
				"*rc.mjs",
				"*.config.cjs",
				"*rc.cjs",
				"*.json",
			],
		},
		{
			files: ["*.md/**", "*.json"],

			// Type information can't be obtained: see https://github.com/eslint/eslint-plugin-markdown/pull/155#issuecomment-671620312
			// So these rules must unfortunately be disabled.
			rules: {
				"@typescript-eslint/await-thenable": 0,
				"@typescript-eslint/consistent-type-exports": 0,
				"@typescript-eslint/dot-notation": 0,
				"@typescript-eslint/no-base-to-string": 0,
				"@typescript-eslint/no-confusing-void-expression": 0,
				"@typescript-eslint/no-floating-promises": 0,
				"@typescript-eslint/no-for-in-array": 0,
				"@typescript-eslint/no-implied-eval": 0,
				"@typescript-eslint/no-meaningless-void-operator": 0,
				"@typescript-eslint/no-misused-promises": 0,
				"@typescript-eslint/no-throw-literal": 0,
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": 0,
				"@typescript-eslint/no-unnecessary-condition": 0,
				"@typescript-eslint/no-unnecessary-qualifier": 0,
				"@typescript-eslint/no-unnecessary-type-arguments": 0,
				"@typescript-eslint/no-unnecessary-type-assertion": 0,
				"@typescript-eslint/non-nullable-type-assertion-style": 0,
				"@typescript-eslint/prefer-includes": 0,
				"@typescript-eslint/prefer-nullish-coalescing": 0,
				"@typescript-eslint/prefer-optional-chain": 0,
				"@typescript-eslint/prefer-readonly": 0,
				"@typescript-eslint/prefer-readonly-parameter-types": 0,
				"@typescript-eslint/prefer-reduce-type-parameter": 0,
				"@typescript-eslint/prefer-regexp-exec": 0,
				"@typescript-eslint/prefer-return-this-type": 0,
				"@typescript-eslint/prefer-string-starts-ends-with": 0,
				"@typescript-eslint/promise-function-async": 0,
				"@typescript-eslint/require-array-sort-compare": 0,
				"@typescript-eslint/require-await": 0,
				"@typescript-eslint/restrict-plus-operands": 0,
				"@typescript-eslint/restrict-template-expressions": 0,
				"@typescript-eslint/return-await": 0,
				"@typescript-eslint/strict-boolean-expressions": 0,
				"@typescript-eslint/switch-exhaustiveness-check": 0,
				"@typescript-eslint/unbound-method": 0,
			},
		},
		{
			extends: require.resolve("./sample.js"),
			files: "*.md",
			processor: "markdown/markdown",
		},
		{
			extends: require.resolve("./browser.js"),
			files: ["*.html", "*.htm", "*.vue"],

			rules: {
				"@redguy12/html-file-comment": 2,
				"jsdoc/require-file-overview": 0,
			},
		},
		{
			files: ["*.html", "*.htm"],
			plugins: ["html"],
		},
		{ extends: require.resolve("./sample.js"), files: "*.md/**" },
		{
			files: "*.json",

			parserOptions: { jsonSyntax: "JSON" },

			rules: {
				"jsdoc/require-file-overview": 0,
				"jsonc/key-name-casing": 0,
				"jsonc/sort-array-values": 0,
				"strict": 0,
			},
		},
		{
			files: [".vscode/**.json", "*.eslintrc.json", "jsconfig.json"],

			parserOptions: { jsonSyntax: "JSONC" },
		},
		{
			files: "package.json",
			rules: { "jsonc/sort-keys": 0 },
		},
		{
			files: ".github/*.js",

			rules: {
				"import/no-extraneous-dependencies": [
					2,
					{
						bundledDependencies: false,
						devDependencies: true,
						optionalDependencies: false,
						peerDependencies: false,
					},
				],
			},
		},
	],

	parserOptions: { ecmaVersion: 2021, sourceType: "script" },
	plugins: ["eslint-comments", "@redguy12", "jsdoc"],
	root: true,

	rules: {
		"@html-eslint/require-doctype": 0,
		"@redguy12/file-comment-before-use-strict": 2,
		"@typescript-eslint/no-misused-promises": [2, { checkVoidReturn: false }],
		"array-element-newline": 0,
		"arrow-body-style": 2,
		"camelcase": 0,

		"capitalized-comments": [
			2,
			"always",
			{
				block: {
					ignorePattern:
						/^do|if|in|for|let|new|try|var|case|else|enum|eval|null|this|true|void|with|await|break|catch|class|const|false|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof|\t/
							.source,
				},

				line: {
					ignoreConsecutiveComments: true,

					ignorePattern:
						/^do|if|in|for|let|new|try|var|case|else|enum|eval|null|this|true|void|with|await|break|catch|class|const|false|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof|\t/
							.source,
				},
			},
		],

		"class-methods-use-this": 2,
		"comma-dangle": [2, "always-multiline"],
		"complexity": [1, 15],
		"consistent-return": 0,
		"curly": [2, "multi-or-nest", "consistent"],
		"default-case": 0,
		"dot-location": [2, "property"],
		"eslint-comments/disable-enable-pair": [2, { allowWholeFile: true }],
		"eslint-comments/no-aggregating-enable": 0,
		"eslint-comments/no-unused-enable": 0,

		"eslint-comments/no-use": [
			2,
			{ allow: ["eslint-disable", "eslint-disable-next-line", "eslint-enable"] },
		],

		"eslint-comments/require-description": [2, { ignore: ["eslint-enable"] }],
		"etc/no-commented-out-code": 1,
		"etc/no-deprecated": 0,
		"import/no-deprecated": 1,
		"fp/no-class": 0,
		"fp/no-loops": 0,
		"fp/no-mutating-methods": 0,
		"fp/no-mutation": 0,
		"fp/no-this": 0,
		"fp/no-throw": 0,
		"func-style": [2, "declaration", { allowArrowFunctions: true }],
		"function-call-argument-newline": [2, "consistent"],
		"function-paren-newline": 0,
		"generator-star-spacing": 0,

		"id-length": [
			2,
			{
				exceptions: ["_"],
				max: 50,
				min: 2,
			},
		],

		"id-match": [
			2,
			/^[#_]?(?:(?:[A-Z]{2,}_){0,9}[A-Z]{2,}|(?:[A-Z](?:[a-z]|[A-Z])+|[a-z]{2,}){0,5})$/
				.source,
			{
				ignoreDestructuring: false,
				onlyDeclarations: false,
				properties: true,
			},
		],

		"implicit-arrow-linebreak": 0,
		"import/extensions": 0,
		"import/first": 2,
		"import/group-exports": 0,
		"import/max-dependencies": 0,
		"import/newline-after-import": 2,
		"import/no-absolute-path": 2,
		"import/no-amd": 2,

		"import/no-anonymous-default-export": [
			2,
			{
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowArray: false,
				allowArrowFunction: false,
				allowCallExpression: true,
				allowLiteral: true,
				allowObject: false,
			},
		],

		"import/no-commonjs": 0,
		"import/no-cycle": [
			2,
			{
				// TODO: (waiting for release) // allowUnsafeDynamicCyclicDependency: true,
				ignoreExternal: true,
			},
		],
		"import/no-dynamic-require": 0,

		"import/no-extraneous-dependencies": [
			2,
			{
				bundledDependencies: false,
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],

		"import/no-import-module-exports": 2,
		"import/no-mutable-exports": 2,
		"import/no-named-as-default-member": 2,
		"import/no-named-default": 2,
		"import/no-namespace": 0,
		"import/no-relative-parent-imports": 0,
		"import/no-self-import": 2,
		"import/no-unassigned-import": 0,
		"import/no-unresolved": 0,
		"import/no-unused-modules": 0,
		"import/no-useless-path-segments": 2,
		"import/no-webpack-loader-syntax": 2,
		"import/order": 0,
		"import/prefer-default-export": 2,
		"import/unambiguous": 0,
		"indent": 0,
		"indent-legacy": 0,
		"init-declarations": 0,
		"jsdoc/check-access": 2,
		"jsdoc/check-alignment": 2,

		"jsdoc/check-examples": [
			0,
			// TODO: enable after https://github.com/eslint/eslint/issues/14745. See https://github.com/gajus/eslint-plugin-jsdoc/pull/792#issuecomment-939587814
			{
				captionRequired: true,
				matchingFileName: "dummy.md/*.js",
				noDefaultExampleRules: false,
				paddedIndent: 1,
				rejectExampleCodeRegex: /^[\s*]*```.*?```[\s*]*?$/gmsu.toString(),
			},
		],

		"jsdoc/check-line-alignment": 2,
		"jsdoc/check-param-names": 2,
		"jsdoc/check-property-names": 2,
		"jsdoc/check-syntax": 2,
		"jsdoc/check-tag-names": 2,
		"jsdoc/check-types": 2,
		"jsdoc/check-values": 2,
		"jsdoc/empty-tags": 2,
		"jsdoc/implements-on-classes": 2,
		"jsdoc/match-description": 2,
		"jsdoc/newline-after-description": 2,
		"jsdoc/no-bad-blocks": 2,
		"jsdoc/no-defaults": 2,
		"jsdoc/no-multi-asterisks": [2, { allowWhitespace: true }],

		"jsdoc/no-restricted-syntax": [
			2,
			{
				contexts: [
					{
						comment:
							"JsdocBlock:has(JsdocTag[tag=type][parsedType.type!=JsdocTypeStringValue][parsedType.type!=JsdocTypeNumber][parsedType.type!=JsdocTypeName])",

						context: "any",

						message:
							"@type should be limited to numeric or string literals and names; use a @typedef instead",
					},
				],
			},
		],

		"jsdoc/no-undefined-types": 0,
		"jsdoc/require-asterisk-prefix": 2,
		"jsdoc/require-description": 2,
		"jsdoc/require-description-complete-sentence": 0,
		"jsdoc/require-file-overview": 2,
		"jsdoc/require-hyphen-before-param-description": 2,
		"jsdoc/require-jsdoc": 2,
		"jsdoc/require-param": 2,
		"jsdoc/require-param-description": 2,
		"jsdoc/require-param-name": 2,
		"jsdoc/require-param-type": 2,
		"jsdoc/require-property": 2,
		"jsdoc/require-property-description": 2,
		"jsdoc/require-property-name": 2,
		"jsdoc/require-property-type": 2,
		"jsdoc/require-returns": 2,
		"jsdoc/require-returns-check": 2,
		"jsdoc/require-returns-description": 2,
		"jsdoc/require-returns-type": 2,
		"jsdoc/require-throws": 0,
		"jsdoc/require-yields": 0,
		"jsdoc/require-yields-check": 0,
		"line-comment-position": 0,
		"linebreak-style": 0,
		"lines-around-comment": 0,
		"max-depth": [1, { max: 5 }],

		"max-len": [
			1,
			{
				code: 100,
				comments: 120,
				ignoreRegExpLiterals: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreUrls: true,
				tabWidth: 4,
			},
		],

		"max-lines": [
			1,
			{
				max: 500,
				skipBlankLines: true,
				skipComments: true,
			},
		],

		"max-lines-per-function": [
			1,
			{
				IIFEs: true,
				max: 100,
				skipBlankLines: true,
				skipComments: true,
			},
		],

		"max-params": [1, { max: 5 }],
		"max-statements": 0,
		"multiline-comment-style": [2, "separate-lines"],
		"multiline-ternary": [2, "always-multiline"],

		"new-cap": [
			2,
			{
				capIsNew: true,
				newIsCap: true,
				properties: true,
			},
		],

		"newline-per-chained-call": 0,
		"no-confusing-arrow": 0,
		"no-console": 1,
		"no-continue": 0,
		"no-empty": [2, { allowEmptyCatch: true }],
		"no-empty-function": 0,
		"no-extra-parens": 0,
		"no-fallthrough": [0, { allowEmptyCase: true }],
		"no-implicit-coercion": [2, { disallowTemplateShorthand: true }],
		"no-inline-comments": 0,
		"no-inner-declarations": 0,
		"no-invalid-this": 0,
		"no-magic-numbers": 0,
		"no-mixed-operators": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-nested-await": 0,
		"no-nested-ternary": 0,

		"no-param-reassign": [
			2,
			{
				ignorePropertyModificationsFor: ["request", "response"],
				props: true,
			},
		],

		"no-plusplus": 0,
		"no-promise-executor-return": 0,
		"no-shadow": [2, { ignoreOnInitialization: true }],
		"no-tabs": 0,
		"no-ternary": 0,
		"no-undef": [2, { typeof: true }],
		"no-undefined": 0,
		"no-underscore-dangle": [2, { enforceInMethodNames: true }],

		"no-unused-vars": [
			2,
			{
				args: "all",
				argsIgnorePattern: "_",
				caughtErrors: "all",
			},
		],

		"no-useless-escape": 0,
		"no-warning-comments": [1, { location: "anywhere" }],
		"node/file-extension-in-import": [2, "always"],
		"node/no-process-exit": 0,
		"nonblock-statement-body-position": 0,

		"object-curly-newline": [
			2,
			{
				ExportDeclaration: "never",
				ImportDeclaration: "never",
				ObjectExpression: { consistent: true },
				ObjectPattern: "never",
			},
		],

		"object-curly-spacing": [2, "always"],
		"object-property-newline": 0,
		"one-var": 0,
		"padded-blocks": [2, "never"],
		"prefer-arrow-callback": 2,

		"prefer-destructuring": [
			2,
			{
				AssignmentExpression: { array: true, object: true },
				VariableDeclarator: { array: true, object: true },
			},
			{ enforceForRenamedProperties: false },
		],

		"prettier/prettier": 0,
		"promise/always-return": 0,
		"promise/avoid-new": 0,
		"promise/no-callback-in-promise": 0,
		"promise/no-nesting": 0,
		"promise/no-promise-in-callback": 0,
		"promise/prefer-await-to-then": 0,
		"quote-props": [2, "consistent-as-needed"],
		"quotes": [2, "double", { avoidEscape: true }],
		"regexp/confusing-quantifier": 2,
		"regexp/control-character-escape": 2,
		"regexp/hexadecimal-escape": 2,
		"regexp/letter-case": 2,
		"regexp/negation": 2,
		"regexp/no-dupe-disjunctions": 2,
		"regexp/no-empty-alternative": 2,
		"regexp/no-invalid-regexp": 2,
		"regexp/no-lazy-ends": 2,
		"regexp/no-legacy-features": 2,
		"regexp/no-non-standard-flag": 2,
		"regexp/no-obscure-range": 2,
		"regexp/no-optional-assertion": 2,
		"regexp/no-potentially-useless-backreference": 2,
		"regexp/no-standalone-backslash": 2,
		"regexp/no-super-linear-backtracking": 0,
		"regexp/no-super-linear-move": 0,
		"regexp/no-trivially-nested-assertion": 2,
		"regexp/no-trivially-nested-quantifier": 2,
		"regexp/no-useless-assertions": 2,
		"regexp/no-useless-character-class": 2,
		"regexp/no-useless-dollar-replacements": 2,
		"regexp/no-useless-escape": 2,
		"regexp/no-useless-flag": 2,
		"regexp/no-useless-lazy": 2,
		"regexp/no-useless-non-capturing-group": 2,
		"regexp/no-useless-quantifier": 2,
		"regexp/no-useless-range": 2,
		"regexp/no-zero-quantifier": 2,
		"regexp/optimal-lookaround-quantifier": 0,
		"regexp/prefer-character-class": 2,
		"regexp/prefer-escape-replacement-dollar-char": 2,
		"regexp/prefer-named-backreference": 2,
		"regexp/prefer-predefined-assertion": 2,
		"regexp/prefer-quantifier": 2,
		"regexp/prefer-range": 2,
		"regexp/prefer-regexp-exec": 2,
		"regexp/prefer-regexp-test": 2,
		"regexp/prefer-unicode-codepoint-escapes": 2,
		"regexp/require-unicode-regexp": 0,
		"regexp/sort-character-class-elements": 0,
		"regexp/sort-flags": 2,
		"regexp/strict": 0,
		"regexp/unicode-escape": 2,
		"require-unicode-regexp": 0,
		"security/detect-non-literal-regexp": 0,
		"security/detect-non-literal-require": 0,
		"security/detect-object-injection": 0,
		"security/detect-unsafe-regex": 0,
		"sonarjs/cognitive-complexity": 0,
		"sonarjs/elseif-without-else": 0,
		"sonarjs/no-duplicate-string": [2, 3],
		"sonarjs/no-nested-template-literals": 0,
		"sort-keys": 2,
		"sort-vars": 2,

		"space-before-function-paren": [
			2,
			{
				anonymous: "always",
				asyncArrow: "always",
				named: "never",
			},
		],

		"strict": [2, "global"],
		"unicorn/better-regex": 2,
		"unicorn/consistent-function-scoping": 0,
		"unicorn/custom-error-definition": 2,
		"unicorn/escape-case": 0,
		"unicorn/expiring-todo-comments": 0,
		"unicorn/filename-case": 0,
		"unicorn/import-index": [2, { ignoreImports: true }],
		"unicorn/no-array-callback-reference": 0,
		"unicorn/no-array-for-each": 2,
		"unicorn/no-array-reduce": 0,
		"unicorn/no-await-expression-member": 0,
		"unicorn/no-empty-file": 2,
		"unicorn/no-keyword-prefix": 0,
		"unicorn/no-nested-ternary": 0,
		"unicorn/no-typeof-undefined": 2,
		"unicorn/no-unsafe-regex": 0,
		"unicorn/no-unused-properties": 2,
		"unicorn/no-useless-undefined": 2,
		"unicorn/numeric-separators-style": 2,
		"unicorn/prefer-code-point": 2,
		"unicorn/prefer-export-from": 0,
		"unicorn/prefer-module": 0,
		"unicorn/prefer-node-protocol": 0,
		"unicorn/prefer-object-has-own": 0,
		"unicorn/prefer-prototype-methods": 2,
		"unicorn/prefer-spread": 0,
		"unicorn/prefer-string-replace-all": 0,
		"unicorn/prefer-top-level-await": 0,

		"unicorn/prevent-abbreviations": [
			2,
			{
				allowList: { jQuery: true, args: true },
				checkDefaultAndNamespaceImports: true,
				checkProperties: true,
				checkShorthandImports: true,
				checkShorthandProperties: true,

				replacements: {
					cmd: { command: true },
					i18n: { internationalization: true },
					l10n: { localization: true },
					lang: { language: true },
					langs: { languages: true },
					msg: { message: true },
					msgs: { messages: true },
					pkg: { packageJSON: true, package_: false },
				},
			},
		],

		"unicorn/relative-url-style": [2, "always"],
		"unicorn/template-indent": 2,
		"vars-on-top": 2,
		"wrap-iife": [2, "inside"],
		"wrap-regex": 0,
	},

	settings: { html: { "xml-extensions": [".svg"] } },
};

module.exports = config;
