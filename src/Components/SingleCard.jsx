function SingleCard({ card, handleChoice, flipped, disabled, cover }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div 
            className="card mx-auto  rounded-2xl sm:w-[24%] w-[32%] sm:h-[32%] h-[24%]">
            <div 
                className={flipped ? "flipped" : ""} 
                style={{position: 'relative', width: '100%', height: '100%'}}
            >
                <div className="front absolute w-full h-full">
                    <img
                        src={card.src} 
                        alt="card front" 
                        className=" rounded-2xl w-full h-full duration-0"
                    />
                </div>
                <div 
                    onClick={handleClick}
                    className="back relative text-center rounded-2xl w-full h-full bg-[#fcda72] dark:bg-[#7ea6a1] sm:shadow-[4px_4px_#AED6D1] shadow-[2px_2px_#AED6D1] active:shadow-none sm:dark:shadow-[4px_4px] dark:shadow-[2px_2px] dark:shadow-lightOrange sm:dark:shadow-lightOrange duration-0">
                    <img 
                        src={cover}
                        className="img-cover 2xl:w-[30%] 2xl:h-[50%] xl:w-[36%] xl:h-[54%] lg:w-[40%] lg:h-[50%] md:w-[46%] md-[50%] sm:w-[50%] sm:h-[50%] w-[60%] h-[60%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleCard