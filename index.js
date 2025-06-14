module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.*.json'], 
	},
	extends: [
		'eslint:recommended',
		'@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended', 
	],
	plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-unused-vars': 'off',
		'no-undef': 'off',
		'no-console': 'warn',
		'no-debugger': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					['external', 'internal'],
					['parent', 'sibling', 'index'],
					'type',
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: 'react-dom',
						group: 'external',
						position: 'before',
					},
					{
						pattern: 'next',
						group: 'external',
						position: 'before',
					},
					{
						pattern: 'next/**',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '@/components/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@/utils/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@/lib/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@/hooks/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '@/**',
						group: 'internal',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react', 'next'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				distinctGroup: false,
			},
		],
		'import/no-duplicates': 'error',
		'import/no-unused-modules': 'warn',
		'import/newline-after-import': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.*.json'],
      },
    },
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			parser: '@babel/eslint-parser',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
      ],
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				requireConfigFile: false,
				babelOptions: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			plugins: ['react', 'prettier', 'import'],
			rules: {
				'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
				'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'no-console': 'warn',
				'no-debugger': 'warn',
				'prefer-const': 'error',
				'no-var': 'error',
			},
		},
		{
			files: ['*.config.js', '*.config.ts', 'vite.config.*', 'next.config.*'],
			rules: {
				'no-console': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
