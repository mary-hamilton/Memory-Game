import Card from "./Card";
import {Grid} from "@mui/material";

const CardGrid = ({ setGuessArray, guessArray, workingArray, gameStarted, setGameStarted, manageGuesses, maintainBoard}) => {

    //
    const handleClick = (card) => {
        manageGuesses(card);
        if (!gameStarted) {
            setGameStarted(true);
        }
    }

    return (
        <>
            <Grid spacing={1} style={{width: 900}} container>
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