import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from 'react-lottie-player'
import lottieJson1 from '../assets/lotties/lottie1.json'
import lottieJson2 from '../assets/lotties/lottie2.json'
import lottieJson3 from '../assets/lotties/lottie3.json'
import lottieJson4 from '../assets/lotties/lottie4.json'
import lottieJson5 from '../assets/lotties/lottie5.json'
import lottieJson6 from '../assets/lotties/lottie6.json'

const rawLotties = [ 
	{type: "lottieJson1", path: lottieJson1, flipped: false, matched: false}, 
	{type: "lottieJson2", path: lottieJson2, flipped: false, matched: false}, 
	{type: "lottieJson3", path: lottieJson3, flipped: false, matched: false}, 
	{type: "lottieJson4", path: lottieJson4, flipped: false, matched: false}, 
	{type: "lottieJson5", path: lottieJson5, flipped: false, matched: false}, 
	{type: "lottieJson6", path: lottieJson6, flipped: false, matched: false}
]

const lotties = [...rawLotties, ...rawLotties]



function CardsPage() {

	const [cards, setCards] = useState(lotties)

	const navigate = useNavigate()
	const finish = useCallback(() => navigate('/', {replace: true}), [navigate])
	const restart = useCallback(() => navigate('/game', {replace: true}), [navigate])

	useEffect(() => {
		shuffleCards()
		console.log(lotties)
	}, [])

	const shuffleCards = () => setCards((prev) => {
		const newRandomCards = [...prev]
		newRandomCards.sort(() => Math.random() - 0.5 )
		return newRandomCards
	}) 

	return(
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
			{cards
				.map((item) => 
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<Lottie
									loop
									animationData={item.path}
									style={{ width: 150, height: 150 }}
								/>
							</div>
							<div className="flip-card-back">
								<img src="/Users/david/projects/portfolio/random-cards/heart.png" alt="" />
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default CardsPage



// <ul
// 				className="flip-card">
// 			{cards
// 				.map((item) => 
// 					<li
// 						className="flip-card-inner">
// 						<div className="flip-card-front">
// 							<Lottie
// 								loop
// 								animationData={item.path}
// 								style={{ width: 150, height: 150 }}
// 							/>
// 						</div>
// 						<div className="flip-card-back">
// 							<img src="/Users/david/projects/portfolio/random-cards/heart.png" alt="" />
// 						</div>
// 					</li>
// 				)
// 			}
// 			</ul>


// /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
// .flip-card {
// 	background-color: transparent;
// 	width: 300px;
// 	height: 200px;
// 	border: 1px solid #f1f1f1;
// 	perspective: 1000px; /* Remove this if you don't want the 3D effect */
//   }
  
//   /* This container is needed to position the front and back side */
//   .flip-card-inner {
// 	position: relative;
// 	width: 100%;
// 	height: 100%;
// 	text-align: center;
// 	transition: transform 0.8s;
// 	transform-style: preserve-3d;
//   }
  
//   /* Do an horizontal flip when you move the mouse over the flip box container */
//   .flip-card:hover .flip-card-inner {
// 	transform: rotateY(180deg);
//   }
  
//   /* Position the front and back side */
//   .flip-card-front, .flip-card-back {
// 	position: absolute;
// 	width: 100%;
// 	height: 100%;
// 	-webkit-backface-visibility: hidden; /* Safari */
// 	backface-visibility: hidden;
//   }
  
//   /* Style the front side (fallback if image is missing) */
//   .flip-card-front {
// 	background-color: #bbb;
// 	color: black;
//   }
  
//   /* Style the back side */
//   .flip-card-back {
// 	background-color: dodgerblue;
// 	color: white;
// 	transform: rotateY(180deg);