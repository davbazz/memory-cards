import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

function InitialPage() {
	const [name, setName] = useState('')
	const [nickname, setNickname] = useState('')

	
	const navigate = useNavigate()
	const nextPage = useCallback(() => navigate('/start', {replace: true}), [navigate])
 	
	return (
		<div className="InitialPage relative">
			<h1 
				className="text-center font-medium text-darkBlue 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-7xl text-6xl 2xl:mt-32 xl:mt-24 lg:mt-16 md:mt-20 sm:mt-20 mt-12">
				Memory Card Game
			</h1>
			<div className="mx-auto flex justify-center items-center sm:flex-row flex-col lg:gap-12 md:gap-8 sm:gap-6 gap-8 2xl:mt-52 xl:mt-48 lg:mt-44 md:mt-40 sm:mt-36 mt-20">
				<input 
					value={nickname}
					onChange={event => setNickname(event.target.value)}
					required
					placeholder="ENTER YOUR NICKNAME" 
					className="text-center text-darkGrey xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-2xl xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-4/12 w:4/12 2xl:h-20 xl:h-16 lg:h-16 md:h-14 sm:h-12 h-14 xl:px-6 lg:px-6 md:px-2 sm:px-2 px-0 rounded-xl border-2 border-lightBlue hover:border-darkGrey bg-lightBlue caret-transparent cursor-pointer placeholder:text-darkBlue placeholder:font-medium  placeholder:2xl:text-2xl placeholder:xl:text-xl placeholder:lg:text-lg placeholder:md:text-base placeholder:sm:text-sm placeholder:text-lg focus:outline-none focus:border-lightGreen transition duration-75"
				/>
				<button 
					onClick={nextPage}
					className="text-center text-darkGrey xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-2xl sm:w-1/12 w:4/12 2xl:h-20 xl:h-16 lg:h-16 md:h-14 sm:h-12 h-14 sm:px-0 px-6 cursor-pointer rounded-xl border-2 border-darkGrey hover:bg-lightBlue transition duration-75">
					GO
				</button>
				{/*<div>{`you nickname is ${name}`}</div>*/}
			</div>
		</div>
	)
}

export default InitialPage


{/*input-nickname block text-center py-10 w-3/12 l-2/6 rounded-2xl placeholder:text-darkBlue placeholder:text-xl cursor-pointer border-2 sm:text-3xl text-xl bg-lightBlue border-solid border-slate-900 focus:outline-none caret-transparent*/}

{/*button-nickname block text-center py-10 w-1/12 l-2/6 rounded-2xl cursor-pointer border-2 sm:text-3xl text:xl border-solid border-slate-900 hover:bg-lightBlue*/}