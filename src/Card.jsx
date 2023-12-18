import {containerCSS, isFlippedCSS, cardCSS, frontCSS, frontAndBack} from "./CardCSS";
import {cx} from '@emotion/css'

const Card = ({card, handleClick, playable, flipped, colour, children}) => {

    const cardClasses = [cardCSS];
    if (flipped) {
        cardClasses.push(isFlippedCSS);
    }

    return (
        <>
            <div className={containerCSS}>
                <div
                    className={cx(cardClasses)}
                    onClick={playable ? () => handleClick(card) : undefined}
                >
                    <div className={frontCSS} style={{backgroundColor: colour}}>
                        {children}
                    </div>
                    <div className={cx(frontAndBack)} style={{backgroundImage: `url(${card.image})`,}}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;