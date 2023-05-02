import Tile from "./Tile";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";

const TileGrid = ({array}) => {

    useEffect(() => {
        console.log('Component rendered or updated');
        setWorkingArray(array);
    });

    const [workingArray, setWorkingArray] = useState([]);
    const [firstGuess, setFirstGuess] = useState("");
    const [secondGuess, setSecondGuess] = useState("");



    const flipTile = (tile) => {
        const thisTile = workingArray.find((t) => t.id === tile.id);
        return thisTile.flipped = !thisTile.flipped;
    }
    const flipAll = () => {
        workingArray.map((tile) => {
            if (!tile.guessed) {
                return tile.flipped = false;
            }
        })
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
        const guessedTiles = workingArray.filter((tile) => tile.text === firstGuess.text);
        guessedTiles.forEach((tile) => tile.guessed = true);
        setFirstGuess("")
        setSecondGuess("");
    }

    return (
        <>
            <Grid container>
                {workingArray.map((data, i) =>
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