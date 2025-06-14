module.exports = {
  semi: true,                   
  singleQuote: true,            
  quoteProps: 'as-needed',      
  trailingComma: 'es5',     
  tabWidth: 2,           
  useTabs: true,              
  printWidth: 80,              
  endOfLine: 'lf',            
  bracketSpacing: true,         
  bracketSameLine: false,     
  arrowParens: 'avoid',      
  jsxSingleQuote: true,      
  htmlWhitespaceSensitivity: 'css',  
  embeddedLanguageFormatting: 'auto', 
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'always',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        printWidth: 100,
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        singleQuote: false,
      },
    },
    {
      files: ['*.config.js', '*.config.ts', 'vite.config.*', 'next.config.*'],
      options: {
        printWidth: 100,
      },
    },
    {
      files: 'package.json',
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
  ],
};