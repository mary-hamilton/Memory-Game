import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import {randomColour, buildArray, shuffleArray} from "./utilityFunctions";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

    const [images, setImages] = useState([]);
    const [currentGuesses, setCurrentGuesses] = useState([]);
    const [guessedPairs, setGuessedPairs] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [workingArray, setWorkingArray] = useState([]);
    const [loading, setLoading] = useState(true)

    const maxScore = workingArray.length / 2;
    const score = guessedPairs.length / 2;

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
        }).then(({data}) => {
            setImages(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getNewImages(8);
    }, [])

    useEffect(() => {
        if (images) {
            setWorkingArray(shuffleArray(buildArray(images)));
        }
    }, [images]);

    const newGame = (difficulty) => {
        setLoading(true);
        setCurrentGuesses([]);
        setGuessedPairs([]);
        setGameStarted(false);
        getNewImages(difficulty);
    }

    return (
        <>
            <Header
                workingArray={workingArray}
                shuffleArray={shuffleArray}
                randomColour={randomColour}
                images={images}
            />
            {loading
                ? <Loading/>
                : <CardGrid
                    workingArray={workingArray}
                    guessArray={currentGuesses}
                    setGuessArray={setCurrentGuesses}
                    guessedPairs={guessedPairs}
                    setGuessedPairs={setGuessedPairs}
                    gameStarted={gameStarted}
                    setGameStarted={setGameStarted}
                />
            }
            <Footer
                score={score}
                maxScore={maxScore}
                gameStarted={gameStarted}
                newGame={newGame}
            />
        </>
    );
};

export default App;
