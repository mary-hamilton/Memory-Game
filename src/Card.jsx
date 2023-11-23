import {containerCSS, isFlippedCSS, cardCSS, frontCSS, frontAndBack} from "./CardCSS";
import {cx} from '@emotion/css'
import {Typography} from "@mui/material";

const Card = ({ card, handleClick, playable, letter }) => {

    const cardClasses = [cardCSS];
    if (card.flipped || card.guessed) {
        cardClasses.push(isFlippedCSS);
    }

    const cardFront = playable ?
                <div className={frontCSS}
                     style={{
                         backgroundColor: card.colour
                     }}>
                </div>
            :
                <div className={frontCSS}
                     style={{
                         backgroundColor: card.colour
                     }}>
                    <Typography variant="h3">{letter}</Typography>
                </div>

    return (
        <>
            <div className={containerCSS}>
                <div
                    className={cx(cardClasses)}
                    onClick={card.guessed || card.flipped || !playable ? undefined : () => handleClick(card)}
                >
                    {cardFront}
                    <div className={cx(frontAndBack)}
                         style={{
                             backgroundImage: `url(${card.image})`,
                         }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;