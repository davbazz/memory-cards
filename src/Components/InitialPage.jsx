function InitialPage({ setGame }) {

	const startTheGame = () => {
		setTimeout(() => setGame(true), 2000)
	}

	return (
		<div className="relative">
			<h1 
				className="text-center font-medium text-darkGreen 2xl:text-[116px] lg:text-8xl md:text-7xl text-6xl 2xl:mt-32 xl:mt-24 lg:mt-16 md:mt-20 sm:mt-20 mt-12 dark:text-yellow duration-300">
				Memory Cards Game
			</h1>
			<h2 
				className="text-center text-xl mt-10 text-darkGreen dark:text-yellow italic">
				Find matching Van Gogh's art in as few turns as possible!
			</h2>
			<button 
				onClick={startTheGame}
				className="main-button block text-darkGreen font-bold text-lg mx-auto sm:mt-40 mt-20 sm:w-52 w-48 sm:px-8 px-6 py-3 bg-lightBlue dark:bg-darkOrange overflow-hidden dark:text-yellow hover:bg-darkGreen dark:hover:bg-yellow dark:hover:text-darkGreen dark:hover:border-lightOrange">
				START THE GAME
				<span> - and have fun</span>
			</button>
		</div>
	)
}

export default InitialPage
