module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json']
  },
  settings: {
    react: {
      version: 'detect',
    },
    "next": {
      "rootDir": "./packages/app/"
    },
    "import/resolver": {
      "typescript": {
        // use a glob pattern
        "project": "packages/*/tsconfig.json",
      }
    }
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  "rules": {
    // Other rules
    "@next/next/no-img-element": "off",
    "@typescript-eslint/ban-ts-comment": 'off'
  }
};