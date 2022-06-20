const sharedRules = {
  // Enforces using console.warn instead of console.log
  'no-console': 'warn',
  // Support flexible placement of variables
  'no-use-before-define': 'off',

  'no-unused-vars': 'off',
  // All components should be defined as an arrow functions //
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  // Props spreading with typescript is safe
  'react/jsx-props-no-spreading': 'off',
  // Using object default values instead
  'react/require-default-props': 'off',
  // Replaced with typescript props definitions
  'react/prop-types': 'off',
  // Since React v17 this can be safely disabled
  'react/react-in-jsx-scope': 'off',
  // Makes sure we don't miss the tests disabled during development
  'jest/no-disabled-tests': 'warn',
  // Makes sure we are only using `.only` when debugging
  'jest/no-focused-tests': 'error',
  // Enforces different test titles to trace failing tests easily
  'jest/no-identical-title': 'error',
  // Enforces using string instead of object for emotion styling
  // '@emotion/syntax-preference': [2, 'string'],
  // Ensures the vanilla emotions is not used, useful while using React
  // '@emotion/no-vanilla': 'error',
  // Used to enforce the ordering of the imports causing lint error.
  'import/first': 'error',
  // the order of the imports
  'import/order': [
    'error',
    {
      'newlines-between': 'always-and-inside-groups',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: 'components/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'views/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'contexts/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'lib/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'helpers/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'utils/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'assets/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: './assets/**',
          group: 'sibling',
          position: 'after',
        },
      ],
    },
  ],
};

const tsOnlyRules = {
  // Prefer type-only imports
  '@typescript-eslint/consistent-type-imports': 'error',
  // Support flexible placement of variables and enums
  '@typescript-eslint/no-use-before-define': 'off',
};

const tsConfig = {
  files: ['**/*.ts?(x)'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    ...sharedRules,
    ...tsOnlyRules,
  },
};

module.exports = {
  ignorePatterns: ['node_modules', 'out'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
  ],
  // plugins: ['@emotion/eslint-plugin'],
  //s
  plugins: ['jest'],
  rules: sharedRules,
  overrides: [{ ...tsConfig }],
};