import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function InitialPage() {
	
	const navigate = useNavigate()
	const nextPage = useCallback(() => navigate('/game', {replace: true}), [navigate])
	const slowNextPage = () => {setTimeout(() => nextPage(), 2000)}
	return (
		<div className="InitialPage relative">
			<h1 
				className="text-center font-medium text-funDarkGreen 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-7xl text-6xl 2xl:mt-32 xl:mt-24 lg:mt-16 md:mt-20 sm:mt-20 mt-12 dark:text-funYellow duration-300">
				Memory Cards Game
			</h1>
			<button 
				onClick={slowNextPage}
				className="main-button block text-funDarkGreen font-bold text-lg mx-auto sm:mt-44 mt-32 w-52 px-8  py-3 bg-funLightGreen dark:bg-funDarkOrange overflow-hidden dark:text-funYellow hover:bg-funDarkGreen dark:hover:bg-funYellow dark:hover:text-funDarkGreen dark:hover:border-funLightOrange">
				START THE GAME
				<span> - and have fun</span>
			</button>
		</div>
	)
}

export default InitialPage


/*
block mx-auto mt-40 text-center py-8 px-20 rounded-3xl cursor-pointer sm:text-5xl text:xl 2xl:w-4/12 border-2   border-transparent slow-button-border slow-button-bg slow-button
*/


{/*input-nickname block text-center py-10 w-3/12 l-2/6 rounded-2xl placeholder:text-darkBlue placeholder:text-xl cursor-pointer border-2 sm:text-3xl text-xl bg-lightBlue border-solid border-slate-900 focus:outline-none caret-transparent*/}

{/*button-nickname block text-center py-10 w-1/12 l-2/6 rounded-2xl cursor-pointer border-2 sm:text-3xl text:xl border-solid border-slate-900 hover:bg-lightBlue*/}



{/*
<div className="mx-auto flex justify-center items-center sm:flex-row flex-col lg:gap-12 md:gap-8 sm:gap-6 gap-8 2xl:mt-52 xl:mt-48 lg:mt-44 md:mt-40 sm:mt-36 mt-20">
	<input 
		onChange={event => setPlayer((prev) => {
			return {...prev, nickname: event.target.value}
		})}
		required
		placeholder="ENTER YOUR NICKNAME" 
		className="text-center text-darkGrey xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-2xl xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-4/12 w:4/12 2xl:h-20 xl:h-16 lg:h-16 md:h-14 sm:h-12 h-14 xl:px-6 lg:px-6 md:px-2 sm:px-2 px-0 rounded-xl border-2 border-lightBlue hover:border-darkGrey bg-lightBlue caret-transparent cursor-pointer placeholder:text-darkBlue placeholder:font-medium  placeholder:2xl:text-2xl placeholder:xl:text-xl placeholder:lg:text-lg placeholder:md:text-base placeholder:sm:text-sm placeholder:text-lg focus:outline-none focus:border-lightGreen transition duration-75 dark:text-lightGray dark:placeholder:text-lightBlue dark:bg-lightBeige"
	/>
	<button 
		onClick={nextPage}
		className="text-center text-darkGrey xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-2xl sm:w-1/12 w:4/12 2xl:h-20 xl:h-16 lg:h-16 md:h-14 sm:h-12 h-14 sm:px-0 px-6 cursor-pointer rounded-xl border-2 border-darkGrey hover:bg-lightBlue transition duration-75 dark:text-lightGray">
		GO
	</button>
</div>
*/}