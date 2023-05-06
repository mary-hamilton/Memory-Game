import {css} from "@emotion/css"
import {useState} from "react";

const Tile = ({data, handleClick}) => {

    let tileCSS = css`
      height: 100px;
      width: 100px;
      background-color: ${data.colour};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    return (
        <>
            <div className={tileCSS}
                onClick={() => handleClick(data.id)}>
                {data.flipped &&
                    <p>{data.text}</p>}
            </div>
        </>
    )
}

export default Tile;