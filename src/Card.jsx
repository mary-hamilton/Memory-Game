import {Typography} from "@mui/material";
import {backCSS, containerCSS, frontCSS, isFlippedCSS, cardCSS} from "./CardCSS";

const Card = ({ card, handleClick }) => {

    return (
        <>
            <div className={containerCSS}>
                 <div
                     className={card.flipped || card.guessed ? isFlippedCSS : cardCSS}
                     onClick={card.guessed ? undefined : () => handleClick(card)}
                 >
                     <div className={frontCSS} style={{ backgroundColor: card.colour }}>
                     </div>
                     <div className={backCSS}>
                         <Typography>{card.text}</Typography>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Card;