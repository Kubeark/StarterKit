import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import promise from 'eslint-plugin-promise';
import eslintPluginNext from '@next/eslint-plugin-next';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [{
	ignores: [
		'**/node_modules/',
		'**/.yarn/',
		'**/build/',
		'**/public/',
		'**/.vscode/',
		'**/.next/',
		'**/.idea/',
		'**/cypress/',
		'**/next.config.js',
		'**/jest.config.js',
		'**/next-i18next.config.js',
		'**/protos/',
		'**/*.js',
		'**/*.jsx'
	]
}, ...fixupConfigRules(compat.extends(
	'airbnb',
	'eslint:recommended',
	'plugin:react/recommended',
	'plugin:jest/all',
	'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
	'plugin:import/typescript',
	'plugin:promise/recommended',
	'plugin:prettier/recommended',
	'plugin:react-hooks/recommended',
	'prettier'
)), {
	plugins: {
		react: fixupPluginRules(react),
		jest: fixupPluginRules(jest),
		'@typescript-eslint': fixupPluginRules(typescriptEslint),
		promise: fixupPluginRules(promise),
		'@next/next': eslintPluginNext
	},

	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
			...globals.jest,
			React: 'writable',
			NodeJS: true
		},

		parser: tsParser,
		ecmaVersion: 'latest',
		sourceType: 'module',

		parserOptions: {
			ecmaFeatures: {
				jsx: true
			},

			files: ['*.jsx', '*.ts', '*.tsx'],
			project: './tsconfig.json'
		}
	},

	settings: {
		react: {
			version: 'detect'
		},

		jest: {
			version: 'require(\'jest/package.json\').version'
		}
	},

	rules: {
		'react/jsx-filename-extension': ['warn', {
			extensions: ['.ts', '.tsx']
		}],

		'@typescript-eslint/quotes': ['warn', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true
		}],

		'import/no-extraneous-dependencies': ['warn', {
			devDependencies: false
		}],

		'no-tabs': 0,

		'prettier/prettier': ['warn', {
			singleQuote: true,
			useTabs: true
		}],

		'max-classes-per-file': ['error', 2],
		'class-methods-use-this': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-boolean-value': 0,
		'react/prop-types': 0,
		'react/jsx-curly-brace-presence': 'warn',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'no-unused-vars': 'off',
		'no-console': 'off',
		'linebreak-style': 'off',
		'no-use-before-define': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'object-shorthand': 'warn',

		'import/extensions': ['error', 'ignorePackages', {
			'': 'never',
			js: 'never',
			jsx: 'never',
			ts: 'never',
			tsx: 'never'
		}],

		'no-plusplus': 0,
		'no-useless-return': 'off',
		'import/order': 'warn',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'global-require': 'off',
		'react/no-array-,x-key': 'off',
		'react/no-unescaped-entities': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/state-in-constructor': 'off',
		'react/no-danger': 'off',
		'react/no-unknown-property': 0,
		'react/forbid-prop-types': 'off',
		'react/require-default-props': 'off',
		'react/default-props-match-prop-types': 'off',
		'react/no-unused-prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-no-bind': 'off',
		'unused-imports/no-unused-imports': 'off',
		'react/react-in-jsx-scope': 1,
		'no-mixed-spaces-and-tabs': 'off',
		'react/display-name': 'off',
		camelcase: 'off',
		'dot-notation': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-nested-ternary': 0,
		'no-return-await': 0,
		'jsx-a11y/anchor-is-valid': 'off',
		'@typescript-eslint/no-var-requires': 1,
		'@typescript-eslint/ban-ts-comment': 1,
		'@typescript-eslint/no-empty-interface': 1,
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-empty-function': 1,
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-enum-comparison': 'warn',
		'@typescript-eslint/unbound-method': 'warn',
		'react-hooks/exhaustive-deps': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'promise/always-return': 'off',
		'promise/no-return-wrap': 2,
		'promise/param-names': 1,
		'promise/catch-or-return': 1,
		'promise/no-native': 'off',
		'promise/no-nesting': 'off',
		'promise/no-promise-in-callback': 'warn',
		'promise/no-callback-in-promise': 'warn',
		'promise/avoid-new': 'warn',
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'warn',
		'promise/valid-params': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'jest/unbound-method': 'off',
		'jest/require-hook': 'warn'
	}
}, {
	files: ['**/*.cy.ts'],

	rules: {
		'no-unused-expressions': 0
	}
}];
