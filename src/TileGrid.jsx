import Tile from "./Tile";
import {Grid} from "@mui/material";
import {useEffect} from "react";

const TileGrid = ({array, setGuessArray, setWorkingArray, setScore, guessArray, workingArray, score}) => {

    useEffect(() => setWorkingArray([...array]), [array])
    useEffect(() => setScore((guessArray.length === 2) && (guessArray[0].text === guessArray[1].text) ? s => s + 1 : s => s),[guessArray])
    const handleClick = (cardID) => {
        setWorkingArray(workingArray.map((card) => {
            if (card.id === cardID) {
                manageGuesses(card);
                return {
                    ...card,
                    flipped: !card.flipped
                }
            }
            return guessArray.length === 2 ? {...card, flipped: false} : card
        }));
        setWorkingArray(wa => wa.map((card) => {
                if ((guessArray.length === 2) && (guessArray[0].text === guessArray[1].text)) {
                    if ((card.id === guessArray[0].id) || (card.id === guessArray[1].id)) {
                        return {
                            ...card,
                            guessed: true
                        }
                    }
                }
            return card
        }))
    }

    const manageGuesses = (card) => {
        if (guessArray.length < 2) {
            setGuessArray([...guessArray, card])
        } else {
            setGuessArray([card])
        }
    }

    return (
        <>
            <Grid spacing={1} container>
                {workingArray.map((data, i) =>
                    <Grid key={i} item>
                        <Tile data={data}
                              handleClick={handleClick}
                        />
                    </Grid>)}
            </Grid>
        </>
    )
}

export default TileGrid;