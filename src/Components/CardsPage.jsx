import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import SingleCard from "./SingleCard"
import lottieJson1 from '../lotties/lottie1.json'
import lottieJson2 from '../lotties/lottie2.json'
import lottieJson3 from '../lotties/lottie3.json'
import lottieJson4 from '../lotties/lottie4.json'
import lottieJson5 from '../lotties/lottie5.json'
import lottieJson6 from '../lotties/lottie6.json'

const cardImages = [
	{ "src": lottieJson1, matched: false },
	{ "src": lottieJson2, matched: false },
	{ "src": lottieJson3, matched: false },
	{ "src": lottieJson4, matched: false },
	{ "src": lottieJson5, matched: false },
	{ "src": lottieJson6, matched: false }
]

function CardsPage() {

	const [cards, setCards] = useState([])
  	const [turns, setTurns] = useState(0)
	const [countMatch, setCountMatch] = useState(0)
  	const [choiceOne, setChoiceOne] = useState(null)
  	const [choiceTwo, setChoiceTwo] = useState(null)
  	const [disabled, setDisabled] = useState(false)

	// navigation  
	const navigate = useNavigate()
	const finish = useCallback(() => navigate('/', {replace: true}), [navigate])

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }))
		
			setChoiceOne(null)
			setChoiceTwo(null)
			setCards(shuffledCards)
			setTurns(0)
			setCountMatch(0)
	}

	// handle a choice 
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	// compare 2 selected cards 
  	useEffect(() => {
		if (choiceOne && choiceTwo) {
		setDisabled(true)
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map(card => {
						if (card.src === choiceOne.src) {
							return {...card, matched: true}
						} else {
							return card
						}
					})
				})
				setCountMatch((prev) => prev + 1)
				resetTurn()
			} else {
				setTimeout(() => resetTurn(), 1000)
			}
		}
	}, [choiceOne, choiceTwo])

	//reset choices & increase turn
	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(prev => prev + 1)
		setDisabled(false)
		checkEndGame()
	}

	// check end game 
	const checkEndGame = () => {
		if (countMatch === 5) {
			console.log('game over')
			setTimeout(() => shuffleCards(), 3000)
		} 
	}

	// start new game automatically 
	useEffect(() => {
		shuffleCards()
	}, [])

	return (
		<div className="CardsPage relative">
			<div className="cards-buttons absolute -top-20 flex gap-4">
				<button 
					onClick={finish}
					className="text-center text-xl text-slate-900 bg-transparent border-2 border-slate-900 rounded-3xl px-4 py-1 hover:bg-lightBlue">
					Finish
				</button>
				<button 
					onClick={shuffleCards}
					className="text-center text-xl text-slate-900 bg-transparent border-2 border-slate-900 rounded-3xl px-4 py-1 hover:bg-lightBlue">
					Restart
				</button>
				<button 
					disabled
					className="text-center text-xl text-slate-900 bg-transparent border-2 border-slate-900 rounded-3xl px-4 py-1 hover:bg-lightBlue">
					Turns : {turns}
				</button>
			</div>
			<div className="relative">
				<div className="card-grid">
					{cards.map(card => (
						<SingleCard
							key={card.id} 
							card={card}
							handleChoice={handleChoice} // passing this function as a prop
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CardsPage
