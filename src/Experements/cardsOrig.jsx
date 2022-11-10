import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from 'react-lottie-player'

import lottieJson1 from '../assets/lotties/lottie1.json'
import lottieJson2 from '../assets/lotties/lottie2.json'
import lottieJson3 from '../assets/lotties/lottie3.json'
import lottieJson4 from '../assets/lotties/lottie4.json'
import lottieJson5 from '../assets/lotties/lottie5.json'
import lottieJson6 from '../assets/lotties/lottie6.json'


const rawLotties = [
	{name: lottieJson1},
	{name: lottieJson2},
	{name: lottieJson3},
	{name: lottieJson4},
	{name: lottieJson5},
	{name: lottieJson6},
]

function addInitialData() {
	return [...rawLotties, ...rawLotties].map(item => ({name: item.name, matched: false, faceUp: false}))
}


function CardsPage() {

	const [cards, setCards] = useState(addInitialData)
	const [matchCount, setMatchCount] = useState(0)

	useEffect(() => {
		randomiseCards()
	}, [])

	// useEffect(()=> {
	// 	checkCards()
	// }, [cards.faceUp])


	// const checkCards = () => setCards((prev) => {
	// 	const newCards = [...prev]
	// 	checkedCards = newCards.forEach(item => {
	// 		if (item.faceUp == true) {
	// 			matchCards()
	// 		}
	// 	})
	// 	// if (cards.faceUp == true) {
	// 	// 	cobsole.log('ok')
	// 	// },
	// })

	const matchCards = (name, matched, faceUp, i) => {
		if (faceUp = true && name === cards[i].name) {
			return matched === true
		} else {
			faceUp === false
		}

	}

	const randomiseCards = () => setCards((prev) => {
		const newlyRandomisedcards = [...prev]
		newlyRandomisedcards.sort(()=> Math.random()-0.5)
		return newlyRandomisedcards
	})

	const flipThisCard = (i) => setCards((prev) => {
		const flippedCard = [...prev]
		flippedCard[i].faceUp = !flippedCard[i].faceUp 
		return flippedCard
	})

	const restart = () => {
		randomiseCards()
		alert('the game was restarted')
	}

	// navigation block 
	const navigate = useNavigate()
	const previousPage = useCallback(() => navigate('/start', {replace: true}), [navigate])
	const finish = useCallback(() => navigate('/', {replace: true}), [navigate])
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
				{cards
					.map(({	name,
							matched,
							faceUp
						}, i) => 
						<li 
							onClick={()=>{flipThisCard(i), matchCards(name, matched, faceUp, i)}}
							className="border-2 border-slate-900 w-1/5">
							{(matched || faceUp) ? 
							<Lottie
								animationData={name}
								loop
								play
								style={{ width: 150, height: 150 }}
							/>:<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/209px-Card_back_06.svg.png?20071016214942"></img>}
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
