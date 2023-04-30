import {css} from "@emotion/css"

const Tile = ({data, clickyClick, flipTile}) => {

    let tileCSS = css`
      height: 100px;
      width: 100px;
      background-color: ${data.colour};
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const handleClick = () => {
        if (!data.guessed) {
            clickyClick(data);
            flipTile(data);
        }
    }

    return (
        <>
            <div onClick={handleClick} className={tileCSS}>
                {data.flipped &&
                <p>{data.text}</p>}
            </div>
        </>
    )
}

export default Tile;