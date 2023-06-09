import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'LXGW-WenKai-Screen': ['LXGW WenKai Screen', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config;
