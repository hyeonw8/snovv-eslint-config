# Snovv ESLint Config

TypeScript + React projects shared ESLint and Prettier configuration.

## Features

* 🚀 Optimized for **TypeScript + React**
* 📦 Automatic **import ordering** with priority for React & Next.js
* 🎯 **Tab-based indentation**
* ✨ Integrated **Prettier formatting**
* 🔧 Support for **JavaScript files** (using Babel parser)
* ⚙️ Flexible config for **config files**

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
npm install --save-dev @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-import-resolver-typescript prettier
```

## Usage

### ESLint config
In `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['snovv-eslint-config'],
  // Add overrides or additional rules here if needed
};
```

### Prettier config
In `prettier.config.js`:

```javascript
module.exports = require('snovv-eslint-config/prettier.config');
```

Or in `package.json`:

```json
{
  "prettier": "snovv-eslint-config/prettier.config"
}
```

## Customization

### Override rules

```javascript
// .eslintrc.js
module.exports = {
  extends: ['snovv-eslint-config'],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'prefer-arrow-callback': 'error',
  },
};
```

### Project-specific overrides

```javascript
module.exports = {
  extends: ['snovv-eslint-config'],
  overrides: [
    {
      files: ['src/legacy/**/*.js'],
      rules: {
        'no-var': 'off',
      },
    },
  ],
};
```

## Included rules

### ESLint extends
* `eslint:recommended`
* `@typescript-eslint/recommended`
* `plugin:react/recommended`
* `plugin:import/errors`
* `plugin:import/warnings`
* `plugin:import/typescript`
* `plugin:prettier/recommended`

### Key rules

**TypeScript:**
* Warn on `@typescript-eslint/no-explicit-any`
* Enforce `@typescript-eslint/prefer-nullish-coalescing`
* Error on unused vars except those starting with `_`

**React:**
* Disable `react/react-in-jsx-scope` (supports React 17+)

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

## Prettier config highlights

* Indentation with tabs (tab size 2)
* Single quotes (including JSX)
* Semicolons required
* Trailing commas in ES5-valid places (objects, arrays, etc.)
* Max line length 80 (100 for TypeScript files)
* Unix-style line endings (LF)

## File-specific configs

### JavaScript files (`.js`, `.jsx`)
* Use Babel parser
* Disable TypeScript-specific rules
* React support enabled

### Config files
* Files like `*.config.js`, `*.config.ts`, `vite.config.*`, `next.config.*`
* Disable `no-console` warnings for these

## Example project structure

```
your-project/
├── .eslintrc.js
├── prettier.config.js
├── tsconfig.json
├── src/
│   ├── components/
│   ├── utils/
│   ├── hooks/
│   └── lib/
└── package.json
```

## Recommended scripts in `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
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
    "source.fixAll.eslint": true
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

## License

MIT