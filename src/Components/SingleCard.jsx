import cover from '../img/cover.jpg'

function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card mx-auto rounded-3xl w-3/12">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    src={card.src} 
                    alt="card front" 
                    className="front rounded-3xl border-2 border-darkGreen dark:border-yellow"
                />
                <div 
                    onClick={handleClick}
                    className="back text-2xl font-bold text-center text-darkGreen dark:text-yellow rounded-3xl w-full h-full border-4 border-darkGreen dark:border-yellow bg-yellow dark:bg-darkGreen">
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