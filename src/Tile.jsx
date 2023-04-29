import {Button, Card} from "@mui/material";
import {css} from "@emotion/css"

const Tile = ({data, clickyClick}) => {

    let tileCSS = css`
      height: 100px;
      width: 100px;
      //in future implement something to get nicer colours / themed colours
      background-color: ${data.colour};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const handleClick = () => {
        clickyClick(data);
    }

    return (
        <>
            <div onClick={handleClick} className={tileCSS}>
                <p>{data.text}</p>
            </div>
        </>
    )
}

export default Tile;