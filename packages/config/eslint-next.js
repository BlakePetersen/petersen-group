module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ],
  plugins: ['import', '@typescript-eslint'],
  settings: {
    next: {
      rootDir: [
        'apps/ashleypetersenphoto.com/',
        'apps/blakepetersen.io/',
        'apps/dalebridges.com/',
        'apps/0xbp.io/'
      ]
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/return-await': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    'func-name': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-import-module-exports': 0,
    'import/no-unresolved': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-extra-boolean-cast': 0,
    'no-restricted-exports': 0,
    'no-underscore-dangle': 0,
    'object-shorthand': 0,
    'one-var': 0,
    'prefer-template': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/no-invalid-html-attribute': 0,
    'react/no-unstable-nested-components': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 0,
    'spaced-comment': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  },
  overrides: [
    {
      env: {
        jest: true
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended']
    }
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    '.turbo',
    '.next',
    'public'
  ]
}
