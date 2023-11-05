import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Settings to generate React Components
  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
