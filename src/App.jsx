import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import InitialPage from './Components/InitialPage'
import StartGamePage from './Components/StartGamePage'
import CardsPage from'./Components/CardsPage.jsx'
import WinPage from './Components/WinPage'
import Highscore from './Components/HighscorePage'
import LosePage from './Components/LosePage'

function App() {
  return (
    <div className='py-6 px-4 min-h-screen bg-lightGray font-baloo'>
      <Header />
      <Routes>
        <Route path={'/'} element={ <InitialPage /> } />
        <Route path='/start' element={ <StartGamePage /> } />
        <Route path='/game' element={ <CardsPage /> } />
        <Route path='/game/win' element={ <WinPage /> } />
        <Route path='/game/highscore' element={ <Highscore /> } />
        <Route path='/game/lose' element={ <LosePage /> } />
      </Routes>
    </div>
  )
}

export default App
