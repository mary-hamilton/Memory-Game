import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import Timer from "./Timer";
import Score from "./Score"
import axios from "axios";
import NewGame from "./NewGame";
import Loading from "./Loading";

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

    const getNewImages = (difficulty) => {
        axios({
            method: 'get',
            url: "https://api.thecatapi.com/v1/images/search",
            headers: {
                'x-api-key': API_KEY
            },
            params: {
                limit: difficulty,
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
    const score = workingArray.filter((card) => card.guessed).length / 2;

    useEffect(() => {
        getNewImages(8);
    }, [])

    useEffect(() => {
        if (images) {
            setUpGame(images)
        }
        console.log(images)
    }, [images]);


    const newGame = (difficulty) => {
        setLoading(true);
        getNewImages(difficulty);
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <Loading/>
            {/*<Typography variant="h3" p={2}>Flip Them Cats</Typography>*/}
            {/*<CardGrid*/}
            {/*    workingArray={workingArray}*/}
            {/*    setWorkingArray={setWorkingArray}*/}
            {/*    guessArray={guessArray}*/}
            {/*    setGuessArray={setGuessArray}*/}
            {/*    gameStarted={gameStarted}*/}
            {/*    setGameStarted={setGameStarted}*/}
            {/*/>*/}

            {/*<Timer*/}
            {/*    timecount={timecount}*/}
            {/*    setTimecount={setTimecount}*/}
            {/*    score={score}*/}
            {/*    maxScore={maxScore}*/}
            {/*    gameStarted={gameStarted}*/}
            {/*/>*/}
            {/*<NewGame newGame={newGame}/>*/}
            {/*<Score score={score}/>*/}
        </>
    );
};

export default App;
