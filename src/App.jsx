import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import Timer from "./Timer";
import Score from "./Score"

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

    const staticArray = [
        'Egg',
        'Rice',
        'Cream',
        'Honey',
        'Salmon',
        'Steve',
        'Fish',
        'Different Egg'
    ];

    const [timecount, setTimecount] = useState(0);
    const [guessArray, setGuessArray] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);

    const setUpGame = (array) => {
        setGuessArray([]);
        setTimecount(0);
        setGameStarted(false);
        const doubleArray = [...array, ...array];
        const idArray = doubleArray.map((item, i) => makeTileData(item, i));
        return idArray.sort((a, b) => 0.5 - Math.random());
    }

    const [workingArray, setWorkingArray] = useState(() => setUpGame(staticArray));

    const maxScore = workingArray.length / 2;
    const matchingGuesses = (guessArray.length === 2) && (guessArray[0].text === guessArray[1].text);
    const score = workingArray.filter((card) => card.guessed).length / 2;


    // CANNOT WORK OUT HOW TO GET RID OF THIS :'(
    useEffect(() => {
        maintainBoard();
    }, [guessArray])

    const maintainBoard = () => {

        setWorkingArray(workingArray.map((card) => {

            if (matchingGuesses && card.text === guessArray[0].text) {
                return {
                    ...card,
                    guessed: true
                }
            }

            const inGuessArray = guessArray.some(guess => guess.id === card.id);

            if (inGuessArray) {
                return {
                    ...card,
                    flipped: true
                };
            }

            // if we've just guessed the first card of a new pair, flip the two previously guessed cards back over
            return guessArray.length === 1 ? {...card, flipped: false} : card;
        }));
    }

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card]);
        } else {
            setGuessArray([card, ...guessArray]);
        }

    }

    const handleClick = () => {
        setWorkingArray(setUpGame(staticArray));
    }

    return (
        <>
            <Typography variant="h3" p={2}>My Lovely Game</Typography>
            <CardGrid
                workingArray={workingArray}
                guessArray={guessArray}
                setGuessArray={setGuessArray}
                gameStarted={gameStarted}
                setGameStarted={setGameStarted}
                manageGuesses={manageGuesses}
                maintainBoard={maintainBoard}
            />

            <Timer
                timecount={timecount}
                setTimecount={setTimecount}
                score={score}
                maxScore={maxScore}
                gameStarted={gameStarted}
            />
            <Score score={score}/>
            <Button
                onClick={handleClick}
            >Reset</Button>
        </>
    );
};

export default App;
