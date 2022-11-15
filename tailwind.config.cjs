/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      lightGray: '#D0C9C0',
      darkGrey: '#111827',
      lightBlue: 'rgba(136, 158, 175, 0.7)',
      darkBlue: 'rgba(75, 90, 104, 1)',
      lightGreen: '#829460',
      transparent: 'transparent',
      darkSlate: '#0f172a',
      lightSlate: '#1e293b'
    },
    fontFamily: {
      'baloo': ['"Baloo 2"']
    },
    extend: {},
  },
  plugins: [],
}
