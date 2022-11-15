import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import InitialPage from './Components/InitialPage'
import StartGamePage from './Components/StartGamePage'
import CardsPage from'./Components/CardsPage.jsx'
import WinPage from './Components/WinPage'
import Highscore from './Components/HighscorePage'
import LosePage from './Components/LosePage'
import Footer from './Components/Footer'

function App() {

  function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight*.01) + 'px');
  }
  window.addEventListener('resize', appHeight);
  appHeight();

  return (
    <div className='screen-size py-6 px-4 bg-lightGray font-baloo relative'>
      <Header />
      <Routes>
        <Route path={'/'} element={ <InitialPage /> } />
        <Route path='/start' element={ <StartGamePage /> } />
        <Route path='/game' element={ <CardsPage /> } />
        <Route path='/game/win' element={ <WinPage /> } />
        <Route path='/game/highscore' element={ <Highscore /> } />
        <Route path='/game/lose' element={ <LosePage /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
