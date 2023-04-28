import {Card} from "@mui/material";
import {css} from "@emotion/css"

const Tile = ({content}) => {

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


    return (
        <>
            <div className={tileCSS}>
                <p>{content}</p>
            </div>
        </>
    )
}

export default Tile;