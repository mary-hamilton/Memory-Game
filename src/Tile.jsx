import {Button, Card} from "@mui/material";
import {css} from "@emotion/css"

const Tile = ({data, clickyClick}) => {

    const randomColour = () => {
        let letters = '0123456789ABCDEF';
        let colour = '#';
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }

    let tileCSS = css`
      height: 100px;
      width: 100px;
      //in future implement something to get nicer colours / themed colours
      background-color: ${randomColour()};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    // have managed to make this do something but 1. Don't really understand why I needed to return the
    // function call and 2. Need to stop the app from re-rendering every time.
    const handleClick = () => {
        return clickyClick(data);
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