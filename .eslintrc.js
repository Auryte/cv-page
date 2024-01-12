/** @type {import('eslint').Linter.Config} */
module.exports = {
  'extends': [
    'next/core-web-vitals',
  ],
  'overrides': [
    {
      'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      'files': '**/*.{ts,tsx}',
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': [
          './tsconfig.json',
        ],
        'tsconfigRootDir': './',
      },
      'plugins': [
        '@typescript-eslint',
      ],
      'rules': {
        "@typescript-eslint/ban-ts-comment": "warn"
      },
    },
  ],
  'root': true,
  'rules': {
    'array-callback-return': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        'requireReturnForObjectLiteral': false,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': false,
      },
    ],
    'camelcase': [
      'warn',
      {
        'properties': 'always',
        'ignoreImports': true,
        'ignoreGlobals': true,
        'ignoreDestructuring': false,
      },
    ],
    'comma-spacing': [
      'error',
      {
        'after': true,
        'before': false,
      },
    ],
    'computed-property-spacing': 'error',
    'consistent-return': 'warn',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': [
      'error',
      'always',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'function-paren-newline': [
      'warn',
      'multiline-arguments',
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'import/no-anonymous-default-export': 'error',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          'caseInsensitive': true,
          'order': 'asc',
          'orderImportKind': 'asc',
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'sibling',
            'index',
            'object',
          ],
        ],
        'newlines-between': 'always',
      },
    ],
    'keyword-spacing': [
      'error',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-cond-assign': [
      'error',
      'except-parens',
    ],
    'no-confusing-arrow': [
      'warn',
      {
        'allowParens': true,
        'onlyOneSimpleParam': false,
      },
    ],
    'no-continue': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-inline-comments': 'warn',
    'no-irregular-whitespace': [
      'error',
      {
        'skipComments': true,
        'skipRegExps': true,
        'skipStrings': true,
        'skipTemplates': true,
      },
    ],
    'no-lone-blocks': 'error',
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
          ['??', '?:'],
        ],
        'allowSamePrecedence': true,
      },
    ],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxBOF': 0,
        'maxEOF': 0,
      },
    ],
    'no-redeclare': [
      'error',
      {
        'builtinGlobals': true,
      },
    ],
    'no-return-assign': [
      'error',
      'always',
    ],
    'no-return-await': 'warn',
    'no-sequences': [
      'error',
      {
        'allowInParentheses': true,
      },
    ],
    'no-shadow': 'warn',
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false,
      },
    ],
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': [
      'error',
      {
        'allowNamedExports': false,
        'classes': true,
        'functions': true,
        'variables': true,
      },
    ],
    'no-useless-catch': 'warn',
    'no-useless-computed-key': [
      'error',
      {
        'enforceForClassMembers': true,
      },

    ],
    'no-useless-escape': 'error',
    'no-var': 'error',
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: [
          'break',
          'continue',
          'directive',
          'export',
          'for',
          'if',
          'iife',
          'return',
          'switch',
          'throw',
          'try',
          'while',
        ],
      },
      {
        blankLine: 'always',
        next: [
          'break',
          'continue',
          'directive',
          'export',
          'for',
          'if',
          'iife',
          'return',
          'switch',
          'throw',
          'try',
          'while',
        ],
        prev: '*',
      },
      {
        blankLine: 'never',
        next: '*',
        prev: [
          'case',
        ],
      },
      {
        blankLine: 'never',
        next: [
          'case',
        ],
        prev: '*',
      },
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        'children': 'never',
        'propElementValues': 'always',
        'props': 'never',
      },
    ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent-props': [
      'error',
      {
        'indentMode': 2,
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        'afterOpening': 'never',
        'beforeClosing': 'never',
        'beforeSelfClosing': 'always',
        'closingSlash': 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'sort-imports': [
      'warn',
      {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'asyncArrow': 'always',
        'named': 'never',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
    ],
  },
};
