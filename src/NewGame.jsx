import {Button, Typography} from "@mui/material";

const NewGame = ({newGame, difficulties: {easy, hard}}) => {

    const handleClick = (difficulty) => {
        newGame(difficulty);
    }

    return (
        <>
            <div
                style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                    justifyContent: `center`,
                    justifyItems: `center`
                }}>
                <Typography
                    style={{
                        gridColumn: `1 / -1`,
                        textAlign: `center`
                    }}>
                    New Game?</Typography>
                <Button
                    style={{
                        gridColumn: `2 / 3`,
                    }}
                    onClick={() => handleClick(easy)}>Easy</Button>
                <Button
                    style={{
                        gridColumn: `3 / 4`,
                    }}
                    onClick={() => handleClick(hard)}>Hard</Button>
            </div>
        </>
    )
}

export default NewGame;