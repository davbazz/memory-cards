import cover from '../img/cover.jpg'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card mx-auto">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    src={card.src} 
                    alt="card front" 
                    className="front"
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