import {useEffect} from "react";

const Timer = ({timecount, setTimecount, score, uniquePairs, gameStarted}) => {

    if (gameStarted) {
        useEffect(() => {
            const counter = setInterval(() => setTimecount(score === uniquePairs ? t => t : t => t + 1), 1000);
            return () => clearInterval(counter)
        }, [setTimecount, score, uniquePairs])
    }


    return (
        <>
            <p>{score === uniquePairs ? `Your final time is: ${timecount} seconds!` : `Time elapsed: ${timecount}`}</p>
        </>
    )
}

export default Timer;