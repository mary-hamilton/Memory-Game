import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

const Timer = ({ score, maxScore, gameStarted }) => {

    const [ timecount, setTimecount ] = useState(0);
    const gameFinished = score === maxScore

        useEffect(() => {
            if (!gameStarted) {
                setTimecount(0);
            }
            const counter = setInterval(() => {
                if (gameStarted && !gameFinished) {
                    setTimecount(t => t + 1)
                }
            }, 1000);
            return () => clearInterval(counter)
        }, [setTimecount, score, maxScore, gameStarted]);

    return (
        <>
            <Typography>{gameFinished ? `Your final time is: ${timecount} seconds!` : `Time elapsed: ${timecount}`}</Typography>
        </>
    )
}

export default Timer;