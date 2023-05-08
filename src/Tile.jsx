import {Typography} from "@mui/material";
import {backCSS, containerCSS, frontCSS, isFlipped, otherBackCSS, otherIsFlipped, tileCSS} from "./TileCSS";

const Tile = ({data, handleClick}) => {

    const randomFlip = Math.round(Math.random());

    return (
        <>
            <div className={containerCSS}>
                 <div
                     className={data.flipped || data.guessed ? (randomFlip ? isFlipped : otherIsFlipped) : tileCSS}
                     onClick={data.guessed ? undefined : () => {handleClick(data.id)}}
                 >
                     <div className={frontCSS} style={{ backgroundColor: data.colour }}>
                     </div>
                     <div className={randomFlip ? backCSS : otherBackCSS}>
                         <Typography>{data.text}</Typography>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Tile;