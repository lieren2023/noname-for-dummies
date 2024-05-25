import js from "@eslint/js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		rules: {
			"no-console": 0,
			"no-constant-condition": [
				"error",
				{
					checkLoops: false,
				},
			],
			"no-irregular-whitespace": [
				"error",
				{
					skipStrings: true,
					skipTemplates: true,
				},
			],
			"no-redeclare": 0,
			"no-undef": 0,
			"no-unused-vars": 0,
			"require-yield": 0,
		},
		languageOptions: {
			ecmaVersion: 13,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.es2015,
				...globals.node,
				...globals.serviceworker,
				...globals.worker,
			},
		},
	},
];
