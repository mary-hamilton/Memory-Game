import Card from "./Card";
import {Grid} from "@mui/material";

const CardGrid = ({ setGuessArray, guessArray, workingArray, gameStarted, setGameStarted }) => {

    const handleClick = (card) => {

        manageGuesses(card);

        if (!gameStarted) {
            setGameStarted(true);
        }
    }

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card]);
        } else {
            setGuessArray([card, ...guessArray]);
        }
    }

    return (
        <>
            <Grid spacing={1} style={{width: 450}} container>
                {workingArray.map((card) =>
                    <Grid
                        key={card.id}
                        item>
                        <Card
                            card={card}
                            handleClick={handleClick}
                        />
                    </Grid>)}
            </Grid>
        </>
    )
}

export default CardGrid;