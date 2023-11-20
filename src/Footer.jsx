import Timer from "./Timer";
import NewGame from "./NewGame";
import Score from "./Score";

const Footer = ({ timecount, setTimecount, score, maxScore, gameStarted, newGame }) => {
    return (
        <>
            <Timer
                timecount={timecount}
                setTimecount={setTimecount}
                score={score}
                maxScore={maxScore}
                gameStarted={gameStarted}
            />
            <NewGame newGame={newGame}/>
            <Score score={score}/>
        </>
    )
}

export default Footer;