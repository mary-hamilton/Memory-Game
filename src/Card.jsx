import {containerCSS, isFlippedCSS, cardCSS, frontCSS, frontAndBack} from "./CardCSS";
import {cx} from '@emotion/css'
import {Typography} from "@mui/material";

const Card = ({card, handleClick, playable, letter, flipped}) => {

    const cardClasses = [cardCSS];
    if (flipped) {
        cardClasses.push(isFlippedCSS);
    }

    const cardFront = playable
        ? <div className={frontCSS}
               style={{
                   backgroundColor: card.colour
               }}>
        </div>
        : <div className={frontCSS}
               style={{
                   backgroundColor: card ? card.colour : `pink`
               }}>
            <Typography variant="h3">{letter}</Typography>
        </div>

    return (
        <>
            <div className={containerCSS}>
                <div
                    className={cx(cardClasses)}
                    onClick={playable ? () => handleClick(card) : undefined}
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