// filepath: /home/joao/filho-prodigo/eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['.velite', '.next'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        fetch: 'readonly',
        URL: 'readonly',
        Response: 'readonly',
        URLSearchParams: 'readonly',
        process: 'readonly',
        SVGElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLSpanElement: 'readonly',
        HTMLUListElement: 'readonly',
        HTMLLIElement: 'readonly',
        console: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      react,
      reactHooks,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      // Adicione suas regras personalizadas aqui
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];