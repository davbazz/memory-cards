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
      lightBeige: '#c5bdb2',
      funYellow: '#FFE8A3',
      funDarkGreen: '#55706D',
      funLightGreen: '#AED6D1',
      funLightBlue: '#8DCCC4',
      funDarkOrange: '#CC704B',
      funLightOrange: 'rgba(204, 112, 75, 0.7)'
    },
    fontFamily: {
      'baloo': ['"Baloo 2"']
    },
    extend: {
      margin: {
        '5.5rem': '5.5rem',
        '-5.5rem': '-5.5rem'
      }
    },
  },
  plugins: [],
}


// rgb(104, 125, 160)
//'rgb(104, 118, 154)'
// 7A86B6 495C83
// rgb(122, 134, 182) rgb(90, 114, 154)

// E38B29

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