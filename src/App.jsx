import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import Timer from "./Timer";
import Score from "./Score"
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const randomColour = () => {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

const makeTileData = (image, id) => {
    return {
        id,
        image: image.url,
        imageId: image.id,
        flipped: false,
        guessed: false,
        colour: randomColour()}
};

const buildArray = (array) => {
    const doubleArray = [...array, ...array];
    const idArray = doubleArray.map((item, id) => {
        return makeTileData(item, id)
    });
    return idArray.sort((a, b) => 0.5 - Math.random());
}

const App = () => {

    const [images, setImages] = useState([]);
    const [timecount, setTimecount] = useState(0);
    const [guessArray, setGuessArray] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [workingArray, setWorkingArray] = useState([]);
    const [loading, setLoading] = useState(true)

    const getNewImages = () => {
        axios({
            method: 'get',
            url: "https://api.thecatapi.com/v1/images/search",
            headers: {
                'x-api-key': API_KEY
            },
            params: {
                limit: 8,
                include_breeds: 0,
                include_categories: 0,
                mime_types: "jpg"
            }
        }).then(({ data }) => {
            setImages(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    const setUpGame = (array) => {
        setGuessArray([]);
        setTimecount(0);
        setGameStarted(false);
        setWorkingArray(buildArray(array));
    }

    const maxScore = workingArray.length / 2;
    const matchingGuesses = (guessArray.length === 2) && (guessArray[0].imageId === guessArray[1].imageId);
    const score = workingArray.filter((card) => card.guessed).length / 2;

    useEffect(() => {
        getNewImages();
    }, [])

    useEffect(() => {
        if (images) {
            setUpGame(images)
        }
    }, [images]);

    // CANNOT WORK OUT HOW TO GET RID OF THIS :'(
    useEffect(() => {
        maintainBoard();
    }, [guessArray])

    const maintainBoard = () => {

        setWorkingArray(workingArray.map((card) => {

            const inGuessArray = guessArray.some(guess => guess.id === card.id);

            if (matchingGuesses && card.imageId === guessArray[0].imageId) {
                return {
                    ...card,
                    guessed: true
                }
            }

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
        setLoading(true);
        getNewImages();
    }

    if (loading) {
        return <Typography>Loading cats</Typography>
    }

    return (
        <>
            <Typography variant="h3" p={2}>Flip Them Cats</Typography>
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
