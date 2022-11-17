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