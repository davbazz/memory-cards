import { createContext, useState } from 'react'
import Header from './Components/Header'
import InitialPage from './Components/InitialPage'
import GamePage from'./Components/GamePage'
import Footer from './Components/Footer'


export const Context = createContext(null);


function App() {

  const [turns, setTurns] = useState(0)
  const [game, setGame] = useState(false)

  function appHeight() {
	const doc = document.documentElement
	doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }
  window.addEventListener('resize', appHeight);
  appHeight();

  return (
	<Context.Provider value={{turns, setTurns}}>
	  <div className="screen-size py-6 px-4 bg-yellow dark:bg-darkGreen font-baloo relative duration-300 h-auto">
		<Header />
		{	game 
			? <GamePage setGame={setGame}/> 
			: <InitialPage setGame={setGame}/> }
		<Footer />
	  </div>
	</Context.Provider>
  )
}

export default App