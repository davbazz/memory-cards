import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function Highscore() {

	const navigate = useNavigate()
	const previousPage = useCallback(() => navigate('/game', {replace: true}), [navigate])
    const playAgain = useCallback(() => navigate('/game', {replace: true}), [navigate])

    return(
        <div>
            <h2 
                className="mt-12 text-center text-9xl text-slate-900">
                HIGHSCORE
            </h2>
            <p 
                className="mt-20 text-center text-3xl text-slate-900">
                You made it! Would you like to reach the ultimate "6 turns" highscore? 
            </p>
            <button 
                onClick={playAgain}
                className="block mx-auto mt-48 px-8 py-4 text-2xl uppercase bg-white rounded-3xl border-2 border-slate-900 hover:shadow-sm hover:shadow-slate-600">
                PLAY AGAIN
            </button>
            <button className="mr-10" onClick={previousPage}>back</button>
        </div>
    )
}

export default Highscore