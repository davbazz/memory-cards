import { createContext, useState, useEffect, useCallback } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Components/Header'
import InitialPage from './Components/InitialPage'
import GamePage from'./Components/GamePage'
import Footer from './Components/Footer'


export const Context = createContext(null);


function App() {

  const [turns, setTurns] = useState(0)
  const [currentLink, setCurrentLink] = useState(window.location.href)

  const navigate = useNavigate()
  const reload = useCallback(() => navigate('/', {replace: true}), [navigate])

  function appHeight() {
	const doc = document.documentElement
	doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }
  window.addEventListener('resize', appHeight);
  appHeight();

  useEffect(() => {
	console.log(currentLink)
  }, [])

  useEffect(() => {
	setCurrentLink((prevLink) => 'https://memory-cards-portfolio.netlify.app')
  }, [window.onbeforeunload])

  return (
	<Context.Provider value={{turns, setTurns}}>
	  <div className="screen-size py-6 px-4 bg-yellow dark:bg-darkGreen font-baloo relative duration-300 h-auto">
		<Header />
		<Routes>
		  <Route path={'/'} element={ <InitialPage/> } />
		  <Route path='/game' element={ <GamePage/> } />
		</Routes>
		<Footer />
	  </div>
	</Context.Provider>
  )
}

export default App
