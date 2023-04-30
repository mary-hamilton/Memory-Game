import Tile from "./Tile";
import {Grid} from "@mui/material";
import {useState} from "react";

const TileGrid = ({array}) => {

    const [ firstGuess, setFirstGuess ] = useState("");
    const [ secondGuess, setSecondGuess ] = useState("");

    const flipTile = (tile) => {
        const thisTile = array.find((t) => t.id === tile.id);
        return thisTile.flipped = !thisTile.flipped;
    }
    const flipAll = () => {
        array.map((tile) => {
            if (tile.guessed === false) {
                return tile.flipped = false;
            }})
    }
    const clickyClick = (data) => {

        if (!firstGuess) {
            setFirstGuess(data)
        }

        if (firstGuess && !secondGuess) {
            setSecondGuess(data);
        }

        if (firstGuess && secondGuess) {
            flipAll();
            setFirstGuess(data);
            setSecondGuess("");
        }
    }
    if ((firstGuess.text === secondGuess.text) && (firstGuess.id !== secondGuess.id)) {
        const guessedTiles = array.filter((tile) => tile.text === firstGuess.text);
        guessedTiles.forEach((tile) => tile.guessed = true);
        setFirstGuess("")
        setSecondGuess("");
    }

        return (
            <>
                <Grid container>
                    {array.map((data, i) =>
                        <Grid key={i} item>
                            <Tile data={data}
                                  clickyClick={clickyClick}
                                  flipTile={flipTile}
                                  />
                        </Grid>)}
                </Grid>
            </>
        )
}

export default TileGrid;