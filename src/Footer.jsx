import Timer from "./Timer";
import NewGame from "./NewGame";
import Score from "./Score";

const Footer = ({timecount, setTimecount, score, maxScore, gameStarted, newGame, difficulties}) => {
    return (
        <>
            <div
                style={{
                    gridColumn: `1 / -1`,
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 2fr`
                }}>
                <Timer
                    timecount={timecount}
                    setTimecount={setTimecount}
                    score={score}
                    maxScore={maxScore}
                    gameStarted={gameStarted}

                />
                <Score score={score}/>
                <NewGame
                    newGame={newGame}
                    difficulties={difficulties}
                />
            </div>
        </>
    )
}

export default Footer;