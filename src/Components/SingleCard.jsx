import Lottie from 'react-lottie-player'
import coverJson from '../lotties/cover.json'
import cover from '../pictures/cover.jpg'


function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card mx-auto 2xl:w-[15rem] 2xl:h-[12rem]">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    src={card.src} 
                    alt="card front" 
                    className="front 2xl:w-[16rem]"
                />
                <img 
                    onClick={handleClick}
                    src={cover} 
                    alt="card back" 
                    className="back"
                />
            </div>
        </div>
    )
}

export default SingleCard



/*
 <Lottie
                    className="front block mx-auto w-2/12 h-1/12"
                    loop
                    animationData={card.src}
                />
    <Lottie 
                    onClick={handleClick}
                    className="back mx-auto"
                    animationData={coverJson}
                />
*/

/*
import Lottie from 'react-lottie-player'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <Lottie
                    className="front mx-auto my-auto w-1/5"
                    loop
                    animationData={card.src}
                />
                <img 
                    onClick={handleClick}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULrGZas72ANP-QFws0PWwgKeON4fhjGThvjNNosYX&s"  
                    className="back"
                    alt="card back"
                />
            </div>
        </div>
    )
}

export default SingleCard
*/