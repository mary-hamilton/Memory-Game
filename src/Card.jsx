import {containerCSS, isFlippedCSS, cardCSS, frontCSS, frontAndBack} from "./CardCSS";
import {cx} from '@emotion/css'
import {Typography} from "@mui/material";

const Card = ({card, handleClick, playable, letter, flipped, colour}) => {

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
                        {!playable && <Typography variant="h3">{letter}</Typography>}
                    </div>
                    <div className={cx(frontAndBack)} style={{backgroundImage: `url(${card.image})`,}}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;