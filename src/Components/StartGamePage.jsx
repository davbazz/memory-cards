import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function StartGamePage() {

    const navigate = useNavigate()
    const previousPage = useCallback(() => navigate('/', {replace: true}), [navigate])
    const nextPage = useCallback(() => navigate('/game', {replace: true}), [navigate])

    return (
        <div className="StartGamePage">
            <ul className="user-info mx-auto flex justify-center items-center w-4/6 xl:gap-20 lg:gap-16 md:gap-12 sm:gap-8 gap-4 mt-10">
                <li 
                    className="w-1/3 text-center text-2xl text-slate-900 bg-orange-50 border-2 border-orange-200 rounded-3xl py-4">
                    Best Result: 10
                </li>
                <li 
                    className="w-1/3 text-center text-3xl uppercase text-slate-900 bg-white border-2 border-slate-900  rounded-3xl py-8">
                    Nickname
                </li>
                <li 
                    className="w-1/3 text-center text-2xl text-slate-900 bg-orange-50 border-2 border-orange-200 rounded-3xl py-4">
                    Games Played: 4
                </li>
            </ul>
            <button 
                onClick={nextPage}
                className="block mx-auto my-40 text-center py-12 px-28 rounded-3xl placeholder:text-slate-900 cursor-pointer border-2  sm:text-5xl text:xl 2xl:w-4/12 bg-white border-solid border-slate-900 focus:outline-none focus:border-yellow-400 caret-transparent shadow hover:shadow-sm hover:shadow-slate-600 focus:shadow-yellow-400 active:border-red-400 hover:bg-lightBlue">
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


{/*text-2xl text-slate-900 bg-orange-50 border-2 border-orange-200 rounded-3xl px-8 py-4*/}

{/*text-3xl text-slate-900 uppercase bg-orange-50 border-2 border-orange-200 rounded-3xl px-10 py-6*/}