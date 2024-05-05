/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
    },
    extend: {},
  },
  plugins: [],
};
