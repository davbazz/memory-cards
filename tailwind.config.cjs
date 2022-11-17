/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      lightGray: '#D0C9C0',
      darkGrey: '#111827',
      lightBlue: 'rgba(136, 158, 175, 0.7)',
      darkBlue: 'rgba(75, 90, 104, 1)',
      lightGreen: '#829460',
      transparent: 'transparent',
      darkSlate: '#0f172a',
      lightSlate: '#1e293b',
      darkBeige: '#d0cac0',
      lightBeige: '#c5bdb2'
    },
    fontFamily: {
      'baloo': ['"Baloo 2"']
    },
    extend: {},
  },
  plugins: [],
}


// lightGray: '#e6e2dd', D0C9C0, #e6e2de

/*
  darkmode 
    bg - darkBlue,
    text - darkText, c5bdb2 d0cac0
    borders - #dbd6cf, #d0cac0, #bab1a3


*/


/* lightmode 
      lightGray: '#e6e2de',
      darkGrey: '#111827',
      lightBlue: 'rgba(136, 158, 175, 0.7)',
      darkBlue: 'rgba(75, 90, 104, 1)',
      lightGreen: '#829460',
      transparent: 'transparent',
      darkSlate: '#0f172a',
      lightSlate: '#1e293b'
*/



/*
 trying different more fun colors
 bg-yellow - #FFE8A3
 dark-green - #55706D
 light-green - #AED6D1
*/