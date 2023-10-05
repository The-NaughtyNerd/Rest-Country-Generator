/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(43, 57, 69)',
        darkBackground: 'rgb(32, 44, 55)',
        lightText: 'rgb(17, 21, 23)',
        lightInput: 'rgb(133, 133, 133)',
        lightBackground: 'rgb(250, 250, 250)',
      },
    },
  },
  plugins: [],
};
