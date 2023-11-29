import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

const Timer = ({ score, maxScore, gameStarted }) => {

    const [timecount, setTimecount] = useState(0);

        useEffect(() => {
            if (!gameStarted) {
                setTimecount(0);
            }
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