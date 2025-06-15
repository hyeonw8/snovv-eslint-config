# Snovv ESLint Config

TypeScript + React projects shared ESLint and Prettier configuration using **ESLint flat config**.

[![npm version](https://badge.fury.io/js/snovv-eslint-config.svg)](https://www.npmjs.com/package/snovv-eslint-config)


## Features

* 🚀 Optimized for **TypeScript + React**
* 📦 Automatic **import ordering** with priority for React & Next.js
* 🎯 **Tab-based indentation**
* ✨ Integrated **Prettier formatting**
* 🔧 Support for **JavaScript files** (using Babel parser)
* ⚙️ Flexible config for **config files**
* 🆕 **ESLint 9+ flat config** support

## Installation

### Quick install (recommended)
```bash
npx install-peerdeps --dev snovv-eslint-config
```

### Manual install
```bash
# Main package
npm install --save-dev snovv-eslint-config

# Peer dependencies
npm install --save-dev @babel/eslint-parser @babel/preset-env @babel/preset-react @typescript-eslint/eslint-plugin @typescript-eslint/parser @eslint/js globals eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-import-resolver-typescript prettier
```

## Usage

### ESLint config
Create `eslint.config.js` (ESLint 9+ flat config):

```javascript
module.exports = require('snovv-eslint-config');
```

Or with custom overrides:

```javascript
const baseConfig = require('snovv-eslint-config');

module.exports = [
  ...baseConfig,
  {
    // Add your custom rules here
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
```

### Prettier config
Create `prettier.config.js`:

```javascript
module.exports = require('snovv-eslint-config/prettier.config.js');
```

Or in `package.json`:

```json
{
  "prettier": "snovv-eslint-config/prettier.config.js"
}
```

## Customization

### Override rules for specific files

```javascript
const baseConfig = require('snovv-eslint-config');

module.exports = [
  ...baseConfig,
  {
    files: ['src/legacy/**/*.js'],
    rules: {
      'no-var': 'off',
    },
  },
  {
    files: ['**/*.test.{js,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```

### Ignore additional files

```javascript
const baseConfig = require('snovv-eslint-config');

module.exports = [
  {
    ignores: ['custom-build/**', 'legacy/**'],
  },
  ...baseConfig,
];
```

## Configuration Details

### File Support
* **TypeScript files** (`.ts`, `.tsx`) - Full TypeScript + React support
* **JavaScript files** (`.js`, `.jsx`) - Babel parser with React support
* **Config files** - Special rules for `*.config.js`, `*.config.ts`, etc.

### Key Rules

**TypeScript:**
* Warn on `@typescript-eslint/no-explicit-any`
* Enforce `@typescript-eslint/prefer-nullish-coalescing`
* Error on unused vars except those starting with `_`

**React:**
* Disable `react/react-in-jsx-scope` (supports React 17+)
* Auto-detect React version

**Import ordering:**
* Prioritize React & Next.js packages
* Group internal modules by path alias (`@/components`, `@/utils`, etc.)
* Alphabetical order inside groups
* Blank lines between groups

**General:**
* Warn on `console` usage
* Error on `debugger`
* Enforce `prefer-const`
* Disallow `var`

## Prettier Configuration

* Indentation with tabs (tab size 2)
* Single quotes (including JSX)
* Semicolons required
* Trailing commas in ES5-valid places
* Max line length 80 (100 for TypeScript files)
* Unix-style line endings (LF)


## Recommended scripts in `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "check": "npm run lint && npm run format:check"
  }
}
```

## VS Code settings (`.vscode/settings.json`)

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Requirements

* Node.js >= 16.0.0
* npm >= 8.0.0
* ESLint >= 9.0.0

## License

MIT