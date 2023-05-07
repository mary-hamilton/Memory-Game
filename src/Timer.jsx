import {useEffect} from "react";

const Timer = ({timecount, setTimecount, score, uniquePairs}) => {

    useEffect( () => {
        const counter = setInterval(() => setTimecount(score !== uniquePairs ? t => t + 1 : t => t), 1000);
        return () => clearInterval(counter)
    }, [setTimecount, score])


    return (
        <>
            <p>{score === uniquePairs ? `Your final time is: ${timecount} seconds!` : `Time elapsed: ${timecount}`}</p>
        </>
    )
}

export default Timer;