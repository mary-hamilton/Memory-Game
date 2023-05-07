import TileGrid from "./TileGrid";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import Timer from "./Timer";
import {logDOM} from "@testing-library/react";

const App = () => {

    const randomColour = () => {
        let letters = '0123456789ABCDEF';
        let colour = '#';
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }

    const makeTileData = (text, id) => {
        return {text, id, flipped: false, guessed: false, colour: randomColour()}
    };

    const staticArray = ['Egg',
        // 'Rice',
        // 'Cream',
        // 'Honey',
        // 'Salmon',
        'Steve',
        'Fish',
        'Different Egg'];

    const setUpGame = (array) => {
        setGuessArray([]);
        setScore(0);
        setTimecount(0);
        const doubleArray = [...array, ...array];
        const idArray = doubleArray.map((item, i) => makeTileData(item, i));
        return idArray.sort((a, b) => 0.5 - Math.random());
    }

    const [guessArray, setGuessArray] = useState([]);
    const [workingArray, setWorkingArray] = useState([]);
    const [score, setScore] = useState(0);
    const [timecount, setTimecount] = useState(0);


    const uniquePairs = workingArray.length / 2
    const matchingGuesses = (guessArray.length === 2) && (guessArray[0].text === guessArray[1].text);
    const newScore = workingArray.filter((card) => card.guessed === true) / 2

    useEffect(() => setWorkingArray(setUpGame(staticArray)), [setWorkingArray]);
    useEffect(() => setScore(matchingGuesses ? s => s + 1 : s => s),[matchingGuesses, setScore]);

    useEffect(() => console.log("rerendered"))

    const handleClick = () => {
       setWorkingArray(setUpGame(staticArray));
    }

    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid
                workingArray={workingArray}
                setWorkingArray={setWorkingArray}
                guessArray={guessArray}
                setGuessArray={setGuessArray}
                setScore={setScore}
                matchingGuesses={matchingGuesses}
            />
            <p>Score: {score}</p>
            <Timer
                timecount={timecount}
                setTimecount={setTimecount}
                score={score}
                uniquePairs={uniquePairs}
            />
            <Button
                onClick={handleClick}
            >Reset</Button>
        </>
    );
};

export default App;
