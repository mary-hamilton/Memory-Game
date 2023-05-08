import {useEffect} from "react";
import {Typography} from "@mui/material";

const Timer = ({timecount, setTimecount, score, uniquePairs, gameStarted}) => {

        useEffect(() => {
            const counter = setInterval(() => setTimecount(gameStarted && (score !== uniquePairs) ? t => t + 1 : t => t), 1000);
            return () => clearInterval(counter)
        }, [setTimecount, score, uniquePairs, gameStarted])

    return (
        <>
            <Typography>{score === uniquePairs ? `Your final time is: ${timecount} seconds!` : `Time elapsed: ${timecount}`}</Typography>
        </>
    )
}

export default Timer;