/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      darkGrey: '#111827',
      transparent: 'transparent',
      darkSlate: '#0f172a',
      darkBeige: '#d0cac0',
      lightBeige: '#c5bdb2',
      yellow: '#FFE8A3',
      darkGreen: '#55706D',
      lightBlue: '#AED6D1',
      darkBlue: '#8DCCC4',
      darkOrange: '#CC704B',
      lightOrange: 'rgba(204, 112, 75, 0.7)'
    },
    fontFamily: {
      'baloo': ['"Baloo 2"']
    },
    extend: {}
  },
  plugins: [],
}