import {Button, Typography} from "@mui/material";

const NewGame = ({ newGame }) => {

    const handleClick = (difficulty) => {
        newGame(difficulty);
    }

    return (
        <>
            <Typography>New Game?</Typography>
            <Button onClick={() => handleClick(8)}>Easy</Button>
            <Button onClick={() => handleClick(18)}>Hard</Button>
        </>
    )
}

export default NewGame;