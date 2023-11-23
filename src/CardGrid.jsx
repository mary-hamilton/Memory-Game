import Card from "./Card";
import {Grid} from "@mui/material";
import {useEffect} from "react";

const CardGrid = ({ setGuessArray, guessArray, workingArray, setWorkingArray, gameStarted, setGameStarted }) => {

    const matchingGuesses = (guessArray.length === 2) && (guessArray[0].imageId === guessArray[1].imageId);

    useEffect(() => {
        maintainBoard();
    }, [guessArray])

    const maintainBoard = () => {

        setWorkingArray(workingArray.map((card) => {

            const inGuessArray = guessArray.some(guess => guess.id === card.id);

            if (matchingGuesses && card.imageId === guessArray[0].imageId) {
                return {
                    ...card,
                    guessed: true
                }
            }

            if (inGuessArray) {
                return {
                    ...card,
                    flipped: true
                };
            }

            // if we've just guessed the first card of a new pair, flip the two previously guessed cards back over
            return guessArray.length === 1 ? {...card, flipped: false} : card;
        }));
    }

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card]);
        } else {
            setGuessArray([card, ...guessArray]);
        }

    }
    const handleClick = (card) => {
        manageGuesses(card);
        if (!gameStarted) {
            setGameStarted(true);
        }
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
                        />
                    </Grid>)}
            </Grid>
        </div>
    )
}

export default CardGrid;