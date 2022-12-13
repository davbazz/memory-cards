import { useEffect, useState, useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../App" 
import SingleCard from "./SingleCard"
import VanGogh_1 from '../img/VanGogh_1.jpeg'
import VanGogh_2 from '../img/VanGogh_2.jpeg'
import VanGogh_3 from '../img/VanGogh_3.jpeg'
import VanGogh_4 from '../img/VanGogh_4.jpeg'
import VanGogh_5 from '../img/VanGogh_5.jpeg'
import VanGogh_6 from '../img/VanGogh_6.jpeg'
import VanGogh_Cover from '../img/VanGogh_Cover.png'


const cardImages = [
	{ "src": VanGogh_1, matched: false },
	{ "src": VanGogh_2, matched: false },
	{ "src": VanGogh_3, matched: false },
	{ "src": VanGogh_4, matched: false },
	{ "src": VanGogh_5, matched: false },
	{ "src": VanGogh_6, matched: false }
]


function CardsPage() {

	const [cards, setCards] = useState([])
	const [countMatch, setCountMatch] = useState(0)
  	const [choiceOne, setChoiceOne] = useState(null)
  	const [choiceTwo, setChoiceTwo] = useState(null)
  	const [disabled, setDisabled] = useState(false)
	const [win, setWin] = useState(false)

	const { turns, setTurns } = useContext(Context)


	// navigation  
	const navigate = useNavigate()
	const finish = useCallback(() => navigate('/', {replace: true}), [navigate])

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }))
		
		setWin(false)
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

	// prevents from double click to find match
	useEffect(() => {
		if (choiceOne) {
			setDisabled (true)
			setTimeout(() => {
				setDisabled(false)
			}, 180)
		}
	}, [choiceOne])

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
			setTimeout(() => setWin(true), 2000)
		} 
	}

	// plat another game 
	const playAgain = () => {
		setTimeout(() => shuffleCards(), 2000)
	}

	// start new game automatically 
	useEffect(() => {
		shuffleCards()
	}, [])

	return (
	win 
	? <div className="WinPage">
		<h2 
			className="text-center font-medium text-darkGreen 2xl:text-9xl lg:text-8xl md:text-7xl text-6xl 2xl:mt-32 xl:mt-24 lg:mt-16 md:mt-20 sm:mt-20 mt-12 dark:text-yellow duration-300">
			Congrats!
		</h2>
		<p 
			className="text-center text-xl mt-10 text-darkGreen dark:text-yellow italic">
			You finished the game in {turns} turns
		</p>
		<button 
			onClick={playAgain}
			className="main-button block text-darkGreen font-bold text-lg mx-auto md:mt-36 mt-32 w-52 px-[3.2rem] py-3 bg-lightBlue dark:bg-darkOrange overflow-hidden dark:text-yellow hover:bg-darkGreen dark:hover:bg-yellow dark:hover:text-darkGreen dark:hover:border-lightOrange">
			PLAY AGAIN
			<span> - and enjoy</span>
		</button>
	</div>

	: <div className="GamePage relative main-screen-size-sm">
		<div className="cards-buttons absolute flex justify-start items-center sm:flex-row flex-col lg:-top-20 md:top-[-5.1rem] sm:top-[-5rem] top-[-5.5rem] md:gap-4 sm:gap-2 gap-1">
		<button 
			onClick={finish}
			className="text-center lg:text-2xl md:text-xl sm:text-lg font-bold 2xl:w-32 lg:w-28 md:w-24 w-[4.5rem] text-darkGreen bg-transparent border-2 border-darkGreen hover:border-darkGreen rounded-3xl sm:py-1 py-0 hover:bg-darkGreen hover:text-yellow dark:border-yellow  dark:text-yellow dark:hover:border-yellow dark:hover:text-darkGreen dark:hover:bg-yellow duration-200">
			Finish
		</button>
		<button 
			onClick={shuffleCards}
			className="text-center lg:text-2xl md:text-xl sm:text-lg font-bold 2xl:w-32 lg:w-28 md:w-24 w-[4.5rem] text-darkGreen bg-transparent border-2 border-darkGreen hover:border-darkGreen rounded-3xl sm:py-1 py-0 hover:bg-darkGreen hover:text-yellow dark:border-yellow  dark:text-yellow dark:hover:border-yellow dark:hover:text-darkGreen dark:hover:bg-yellow duration-200">
			Restart
		</button>
		</div>

		<button
			disabled
			className="turn-button absolute lg:top-[-5.5rem] md:top-[-5.7rem] sm:top-[-5.4rem] top-[-5.3rem] text-center font-bold lg:text-3xl md:text-2xl text-xl rounded-3xl px-4 py-1 text-yellow bg-darkGreen border-8 border-darkBlue dark:text-darkGreen dark:bg-yellow dark:border-lightOrange duration-200">
			Turns : {turns}
		</button>

		<div className="cards flex justify-center items-start flex-wrap gap-[1.33%] w-full sm:w-11/12 h-full mx-auto lg:mt-9 sm:mt-10 mt-10 duration-0">
		{cards.map(card => (
			<SingleCard
				key={card.id} 
				card={card}
				handleChoice={handleChoice}
				flipped={card === choiceOne || card === choiceTwo || card.matched}
				disabled={disabled}
				cover={VanGogh_Cover}
			/>
		))}
		</div>
	</div>
	)
}

export default CardsPage
