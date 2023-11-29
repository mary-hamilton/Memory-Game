import Card from "./Card";
import {Grid} from "@mui/material";
import {useEffect} from "react";

const CardGrid = ({ workingArray, guessArray, setGuessArray, guessedPairs, setGuessedPairs, gameStarted, setGameStarted }) => {

    useEffect(() => {
        if(guessArray.length === 2) {
            checkForPair();
        }
    })

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card]);
        } else {
            setGuessArray([card, ...guessArray]);
        }
    }

    const checkForPair = () => {
        if(guessArray[0].pairId === guessArray[1].pairId) {
            setGuessedPairs(prev => [...prev, ...guessArray])
            setGuessArray([]);
        }
    }

    const handleClick = (card) => {
        if(guessedPairs.includes(card) || guessArray.includes(card)) {
            return;
        }
        if (!gameStarted) {
            setGameStarted(true);
        }
        manageGuesses(card);
    }

    // Dynamically size grid and cards based on quantity

    const columns = 12 / Math.sqrt(workingArray.length);

    return (
        <div
            style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`
        }}>
            <Grid
                container
                spacing={1}
                  style={{
                      width: `80%`,
                      minWidth: `55vh`,
            }}>
                {workingArray.map((card) =>
                    <Grid
                        key={card.id}
                        xs={columns}
                        item>
                        <Card
                            card={card}
                            playable
                            handleClick={handleClick}
                            flipped={guessedPairs.includes(card) || guessArray.includes(card)}
                        />
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default CardGrid;