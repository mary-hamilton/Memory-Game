import {useEffect} from "react";
import {Typography} from "@mui/material";

const Timer = ({ timecount, setTimecount, score, maxScore, gameStarted }) => {

        useEffect(() => {
            const counter = setInterval(() => setTimecount(gameStarted && (score !== maxScore) ? t => t + 1 : t => t), 1000);
            return () => clearInterval(counter)
        }, [setTimecount, score, maxScore, gameStarted]);

    return (
        <>
            <Typography>{score === maxScore ? `Your final time is: ${timecount} seconds!` : `Time elapsed: ${timecount}`}</Typography>
        </>
    )
}

export default Timer;