import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tierra: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c0a0',
          400: '#c0a478',
          500: '#a08560',
          600: '#876d4d',
          700: '#6d5640',
          800: '#5a4736',
          900: '#4a3a2d',
        },
        verde: {
          50: '#f3f6f4',
          100: '#e3ebe6',
          200: '#c7d7cd',
          300: '#a3bcad',
          400: '#7a9b88',
          500: '#5d7f6b',
          600: '#496655',
          700: '#3c5346',
          800: '#32433a',
          900: '#2a3830',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;