import Tile from "./Tile";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";

const TileGrid = ({array}) => {

    const [guessArray, setGuessArray] = useState([]);
    const [workingArray, setWorkingArray] = useState([])

    useEffect(() => setWorkingArray([...array]),[array])

    const handleClick = (cardID) => {
        setWorkingArray(workingArray.map((card) => {
            if (card.id === cardID) {
                manageGuesses(card);
                return {
                    ...card,
                    flipped: !card.flipped
                };
            } else {
                return guessArray.length === 2 ? {...card, flipped: false} : card;
            }
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