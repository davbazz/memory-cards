import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from 'react-lottie-player'

import lottieJson1 from '../assets/lotties/lottie1.json'
import lottieJson2 from '../assets/lotties/lottie2.json'
import lottieJson3 from '../assets/lotties/lottie3.json'
import lottieJson4 from '../assets/lotties/lottie4.json'
import lottieJson5 from '../assets/lotties/lottie5.json'
import lottieJson6 from '../assets/lotties/lottie6.json'


function CardsPage() {

	const [cards, setCards] = useState([
		lottieJson1, lottieJson1, 
		lottieJson2, lottieJson2, 
		lottieJson3, lottieJson3, 
		lottieJson4, lottieJson4, 
		lottieJson5, lottieJson5, 
		lottieJson6, lottieJson6
	])

	useEffect(() => {
		initialLayout()
	}, [])

	const initialLayout = () => {
		setCards((prev) => {
			const newLayout = [...prev]
			return newLayout
		})
	}

	// navigation block 
	const navigate = useNavigate()
	const previousPage = useCallback(() => navigate('/start', {replace: true}), [navigate])
	const finish = useCallback(() => navigate('/', {replace: true}), [navigate])
	const restart = useCallback(() => navigate('/game', {replace: true}), [navigate])
	const winPage = useCallback(() => navigate('/game/win', {replace: true}), [navigate])
	const highscorePage = useCallback(() => navigate('/game/highscore', {replace: true}), [navigate])
	const losePage = useCallback(() => navigate('/game/lose', {replace: true}), [navigate])


	return (
		<div className="CardsPage relative">
			<div className="cards-buttons absolute -top-10 flex gap-4">
				<button 
					onClick={finish}
					className="text-center text-xl text-slate-900 bg-transparent border-2 border-slate-900 rounded-3xl px-4 py-1 hover:bg-lightBlue">
					Finish
				</button>
				<button 
					onClick={restart}
					className="text-center text-xl text-slate-900 bg-transparent border-2 border-slate-900 rounded-3xl px-4 py-1 hover:bg-lightBlue">
					Restart
				</button>
			</div>
			<ul 
				className="mx-auto flex flex-wrap justify-between gap-y-12 gap-x-4 px-40 py-16">
				{[	
					{initialLayout}
				]
					.sort(()=> Math.random()-0.5)
					.map((value) => 
						<li 
							className="border-2 border-slate-900 w-1/5">
							<Lottie
								animationData={value}
								loop
								style={{ width: 150, height: 150 }}
							/>
						</li>
					)
				}
			</ul>
			<button className="mr-10" onClick={previousPage}>back</button>
			<button className="mr-10" onClick={winPage}>WinPage</button>
			<button className="mr-10" onClick={highscorePage}>HighscorePape</button>
			<button className="mr-10" onClick={losePage}>LosePage</button>
		</div>
	)
}

export default CardsPage



{/*let shuffled = unshuffled
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
	 
console.log(shuffled)*/}

{/*<div className='cards_categories'>
								{[  
										"All",
										"Bedroom",
										"Living Room",
										"Kitchen",
										"Workspace",
										"Outdoor",
										"Bathroom",
										"Baby & Children",
										"Dining",
										"Halway",
								].map(cat => <div key={cat} onClick={()=>setActiveCategory(cat)} className="cards_category_link">{cat}</div>)}
						</div>*/}