function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <div
                    className="front"
                > 
                    <img 
                        src={card.src} 
                        alt="card front" 
                    />
                </div>
                <div 
                    onClick={handleClick}
                    className="back">
                    Van <br /> Gogh's <br /> Art
                </div>
                {/*<img 
                    onClick={handleClick}
                    src={cover} 
                    alt="card back" 
                    className="back rounded-3xl"
                />*/}
            </div>
        </div>
    )
}

export default SingleCard