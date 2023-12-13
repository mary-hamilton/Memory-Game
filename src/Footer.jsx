import Timer from "./Timer";
import NewGame from "./NewGame";
import Score from "./Score";
import {Box} from "@mui/material";

const Footer = ({timecount, setTimecount, score, maxScore, gameStarted, newGame, difficulties}) => {
    return (
        <>
            <Box
                style={{
                    flexDirection: `row`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                }}>
                <Timer
                    timecount={timecount}
                    setTimecount={setTimecount}
                    score={score}
                    maxScore={maxScore}
                    gameStarted={gameStarted}

                />
                <NewGame
                    newGame={newGame}
                    difficulties={difficulties}
                />
                <Score score={score}/>
            </Box>
        </>
    )
}

export default Footer;