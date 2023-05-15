import Tile from "./Tile";
import {Grid} from "@mui/material";

const TileGrid = ({setGuessArray, setWorkingArray, guessArray, workingArray, matchingGuesses, gameStarted, setGameStarted}) => {

    const handleClick = (selectedCard) => {

        manageGuesses(selectedCard);

        if (!gameStarted) {
            setGameStarted(true)
        }


    }

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card])
        } else {
            setGuessArray([card, ...guessArray])
        }
    }

    return (
        <>
            <Grid spacing={1} style={{width: 450}} container>
                {workingArray.map((data, i) =>
                    <Grid
                        key={i}
                        item>
                        <Tile
                            data={data}
                            handleClick={handleClick}
                        />
                    </Grid>)}
            </Grid>
        </>
    )
}

export default TileGrid;