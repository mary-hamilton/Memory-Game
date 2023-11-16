import {Typography} from "@mui/material";
import {backCSS, containerCSS, frontCSS, isFlippedCSS, cardCSS} from "./CardCSS";
import {cx} from '@emotion/css'

const Card = ({card, handleClick}) => {

    const cardClasses = [cardCSS];
    if (card.flipped || card.guessed) {
        cardClasses.push(isFlippedCSS);
    }

    const frontAndBack = [frontCSS, backCSS];

    return (
        <>
            <div className={containerCSS}>
                <div
                    className={cx(cardClasses)}
                    onClick={card.guessed || card.flipped ? undefined : () => handleClick(card)}
                >
                    <div className={frontCSS} style={{backgroundColor: card.colour}}>
                    </div>
                    <div className={cx(frontAndBack)}>
                        <img src={card.image}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;