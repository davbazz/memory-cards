import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import InitialPage from './Components/InitialPage'
import StartGamePage from './Components/StartGamePage'
import GamePage from'./Components/GamePage.jsx'
import WinPage from './Components/WinPage'
import Highscore from './Components/HighscorePage'
import LosePage from './Components/LosePage'
import Footer from './Components/Footer'


export const Context = createContext(null);

function App() {

  	const [turns, setTurns] = useState(0) //test turn uesecontext

  // const [player, setPlayer] = useState({
  //   nickname: 'Your Nickname', 
  //   games_played: 0,
  //   highscore: 0 
  // })

  function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }
  window.addEventListener('resize', appHeight);
  appHeight();

  return (
    <Context.Provider value={{turns, setTurns}}>
      <div className='screen-size py-6 px-4 bg-funYellow dark:bg-funDarkGreen font-baloo relative duration-300'>
        <Header />
        <Routes>
          <Route path={'/'} element={ <InitialPage /> } />
          <Route path='/start' element={ <StartGamePage /> } />
          <Route path='/game' element={ <GamePage /> } />
          <Route path='/game/win' element={ <WinPage /> } />
          <Route path='/game/highscore' element={ <Highscore /> } />
          <Route path='/game/lose' element={ <LosePage /> } />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App
