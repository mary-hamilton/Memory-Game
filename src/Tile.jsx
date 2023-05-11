import {Typography} from "@mui/material";
import {backCSS, containerCSS, frontCSS, isFlippedCSS, tileCSS} from "./TileCSS";

const Tile = ({data, handleClick}) => {

    return (
        <>
            <div className={containerCSS}>
                 <div
                     className={data.flipped || data.guessed ? isFlippedCSS : tileCSS}
                     onClick={data.guessed ? undefined : () => handleClick(data.id)}
                 >
                     <div className={frontCSS} style={{ backgroundColor: data.colour }}>
                     </div>
                     <div className={backCSS}>
                         <Typography>{data.text}</Typography>
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Tile;