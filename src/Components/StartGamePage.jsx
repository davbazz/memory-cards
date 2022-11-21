import { useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
// import { Context } from "../App"

function StartGamePage() {

	// const { player, setPlayer } = useContext(Context)

    const navigate = useNavigate()
    const previousPage = useCallback(() => navigate('/', {replace: true}), [navigate])
    const nextPage = useCallback(() => navigate('/game', {replace: true}), [navigate])

    const slowNextPage = () => {setTimeout(() => nextPage(), 500)}

    return (
        <div className="StartGamePage">
            <ul className="user-info mx-auto flex justify-center items-center w-4/6 xl:gap-20 lg:gap-16 md:gap-12 sm:gap-8 gap-4">
                <li 
                    className="w-1/3 text-center text-2xl text-darkGrey bg-orange-50  rounded-3xl py-4">
                    Best Result: {player.games_played}
                </li>
                <li 
                    className="w-1/3 text-center text-4xl uppercase text-darkGrey bg-white rounded-3xl py-8">
                    {player.nickname}
                </li>
                <li 
                    className="w-1/3 text-center text-2xl text-darkGrey bg-orange-50  rounded-3xl py-4">
                    Games Played: {player.highscore}
                </li>
            </ul>
            <button 
                onClick={slowNextPage}
                className="block mx-auto mt-56 text-center py-8 px-20 rounded-3xl cursor-pointer sm:text-5xl text:xl 2xl:w-4/12 border-2   border-transparent slow-button-border slow-button-bg slow-button">
                START
            </button>
            <button
                onClick={previousPage}>
                back
            </button>
        </div>
    )
}

export default StartGamePage


{/*text-2xl text-darkGrey bg-orange-50 border-2 border-orange-200 rounded-3xl px-8 py-4*/}

{/*text-3xl text-darkGrey uppercase bg-orange-50 border-2 border-orange-200 rounded-3xl px-10 py-6*/}



