import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import SingleCard from "./SingleCard"
import lottieJson1 from '../lotties/lottie1.json'
import lottieJson2 from '../lotties/lottie2.json'
import lottieJson3 from '../lotties/lottie3.json'
import lottieJson4 from '../lotties/lottie4.json'
import lottieJson5 from '../lotties/lottie5.json'
import lottieJson6 from '../lotties/lottie6.json'

import pic1 from '../pictures/pic1.jpg'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'
import pic4 from '../pictures/pic4.jpg'
import pic5 from '../pictures/pic5.jpg'
import pic6 from '../pictures/pic6.jpg'


const cardImages = [
	{ "src": pic1, matched: false },
	{ "src": pic2, matched: false },
	{ "src": pic3, matched: false },
	{ "src": pic4, matched: false },
	{ "src": pic5, matched: false },
	{ "src": pic6, matched: false }
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
		<div className="CardsPage relative custom-heigth">
			<div className="cards-buttons absolute flex justify-start items-center sm:flex-row flex-col lg:-top-20 md:top-[-5.1rem] sm:top-[-5rem] top-[-5.5rem] md:gap-4 sm:gap-2 gap-1">
				<button 
					onClick={finish}
					className="text-center lg:text-2xl md:text-xl sm:text-lg font-bold 2xl:w-32 lg:w-28 md:w-24 w-[4.5rem] text-funDarkGreen bg-transparent border-2 border-funDarkGreen hover:border-funDarkGreen rounded-3xl sm:py-1 py-0 hover:bg-funDarkGreen hover:text-funYellow dark:border-funYellow  dark:text-funYellow dark:hover:border-funYellow dark:hover:text-funDarkGreen dark:hover:bg-funYellow duration-200">
					Finish
				</button>
				<button 
					onClick={shuffleCards}
					className="text-center lg:text-2xl md:text-xl sm:text-lg font-bold 2xl:w-32 lg:w-28 md:w-24 w-[4.5rem] text-funDarkGreen bg-transparent border-2 border-funDarkGreen hover:border-funDarkGreen rounded-3xl sm:py-1 py-0 hover:bg-funDarkGreen hover:text-funYellow dark:border-funYellow  dark:text-funYellow dark:hover:border-funYellow dark:hover:text-funDarkGreen dark:hover:bg-funYellow duration-200">
					Restart
				</button>
			</div>

			<button
					disabled
					className="turn-button absolute lg:top-[-5.5rem] md:top-[-5.7rem] sm:top-[-5.4rem] top-[-5.3rem] text-center font-bold lg:text-3xl md:text-2xl text-xl rounded-3xl px-4 py-1 text-funYellow bg-funDarkGreen border-8 border-funLightBlue dark:text-funDarkGreen dark:bg-funYellow dark:border-funLightOrange">
					Turns : {turns}
			</button>

			<div className="relative">
				<div className="flex justify-start items-start flex-wrap w-10/12 mx-auto lg:mt-9 sm:mt-10 mt-10">
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

//grid grid-cols-4 mt-10 gap-4