import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

function InitialPage() {

	const [name, setName] = useState('')
	
	const navigate = useNavigate()
	const nextPage = useCallback(() => navigate('/start', {replace: true}), [navigate])
 	
	return (
		<div className="InitialPage">
			<h1 
				className="text-center text-darkBlue 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-7xl text-6xl 2xl:mt-18 mt-16">
				Memory Card Game
			</h1>
			<div className="mx-auto flex justify-center items-center gap-12 2xl:mt-52 xl:mt-48 lg:mt-44 md:mt-40 sm:mt-36 mt-28">
				<input 
					value={name}
					onChange={event => setName(event.target.value)}
					required
					placeholder="ENTER YOUR NICKNAME" 
					className="text-center text-3xl w-3/12 h-20 px-6 rounded-xl border-2 border-slate-900 bg-lightBlue caret-transparent cursor-pointer placeholder:text-darkBlue placeholder:text-xl focus:outline-none focus:border-lightGreen"
				/>
				<button 
					onClick={nextPage}
					className="text-center text-3xl w-1/12 h-20 cursor-pointer rounded-xl border-2 border-slate-900 hover:bg-lightBlue">
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