import {Box, Button, Typography} from "@mui/material";

const NewGame = ({ newGame, difficulties : {easy, hard} }) => {

    const handleClick = (difficulty) => {
        newGame(difficulty);
    }

    return (
        <>
            <Box
                style={{
                    flexFlow: `column wrap`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                }}>
            <Typography
                style={{
                        flexGrow: `1`,
                    }}>
                New Game?</Typography>
            <Button onClick={() => handleClick(easy)}>Easy</Button>
            <Button onClick={() => handleClick(hard)}>Hard</Button>
            </Box>
        </>
    )
}

export default NewGame;