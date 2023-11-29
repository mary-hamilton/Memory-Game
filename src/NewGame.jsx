import {Button, Typography} from "@mui/material";

const NewGame = ({ newGame, difficulties : {easy, hard} }) => {

    const handleClick = (difficulty) => {
        newGame(difficulty);
    }

    return (
        <>
            <Typography>New Game?</Typography>
            <Button onClick={() => handleClick(easy)}>Easy</Button>
            <Button onClick={() => handleClick(hard)}>Hard</Button>
        </>
    )
}

export default NewGame;