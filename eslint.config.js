import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { config as tsLintConfig, configs as tsLintConfigs } from 'typescript-eslint'

export default tsLintConfig(
  { ignores: [ 'dist', 'node_modules', '.idea', '.vscode' ] },
  {
    extends: [ js.configs.recommended, ...tsLintConfigs.recommended ],
    files: [ '**/*.{js,ts,tsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Правило принуждает использовать return со значением в колбеках методов массива (кроме forEach, в forEach можно будет использовать return без значения) [https://eslint.org/docs/latest/rules/array-callback-return]
      'array-callback-return': [ 'warn', { checkForEach: true, allowVoid: true } ],

      // Правило запрещает использовать await в циклах [https://eslint.org/docs/latest/rules/no-await-in-loop]
      'no-await-in-loop': 'warn',

      // Правило запрещает использование return в constructor [https://eslint.org/docs/latest/rules/no-constructor-return]
      'no-constructor-return': 'error',

      // Правило запрещает дублирование импортов [https://eslint.org/docs/latest/rules/no-duplicate-imports]
      'no-duplicate-imports': [ "error", { "includeExports": true } ],

      // Правило запрещает использовать return со значением в функции исполнителе промиса [https://eslint.org/docs/latest/rules/no-promise-executor-return]
      'no-promise-executor-return': [ "error", { allowVoid: true } ],

      // Правило запрещает сравнивать одинаковые значения (неверный вариант кода let x = 10; if (x === x) { x = 20 };) [https://eslint.org/docs/latest/rules/no-self-compare]
      'no-self-compare': 'warn',

      // Правило запрещает использовать функцию, переменную или класс до ее объявления [https://eslint.org/docs/latest/rules/no-use-before-define]
      'no-use-before-define': 'error'
    },
  },
)
