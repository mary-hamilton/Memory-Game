import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import {buildArrayFromImages, shuffleArray, randomColourArray} from "./utilityFunctions";
import {Box} from "@mui/material";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

    // TODO error handling
    // TODO styling
    // TODO colour pallette - minimum limit anything too dark

    const title = "CAT FLIPPER";

    const [ currentGuesses, setCurrentGuesses ] = useState([]);
    const [ guessedPairs, setGuessedPairs ] = useState([]);
    const [ gameStarted, setGameStarted ] = useState(false);
    const [ workingArray, setWorkingArray ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ tileColours, setTileColours ] = useState([]);
    const [ titleArray, setTitleArray ] = useState(title.split(""));

    const difficulties = {
        easy: 8,
        hard: 18,
    }
    const initialDifficulty = difficulties.easy;

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
            setWorkingArray(shuffleArray(buildArrayFromImages(data, data.length * 2)));
            setTitleArray(shuffleArray(buildArrayFromImages(data, title.length)));
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getNewImages(initialDifficulty);
        setTileColours(randomColourArray(initialDifficulty * 2))
    }, [initialDifficulty])

    const newGame = (difficulty) => {
        setLoading(true);
        setCurrentGuesses([]);
        setGuessedPairs([]);
        setGameStarted(false);
        setTileColours(randomColourArray(difficulty * 2))
        getNewImages(difficulty);
    }

    return (
        <>
            <Box
                style={{
                    flexDirection: `column`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    /* add something to make background colour a darker version of one of the random colours */
                    background: `grey`
                }}>
            <Header
                tileColours={tileColours}
                titleArray={titleArray}
                title={title}
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
                    tileColours={tileColours}
                />
            }
            <Footer
                score={score}
                maxScore={maxScore}
                gameStarted={gameStarted}
                newGame={newGame}
                difficulties={difficulties}
            />
            </Box>
        </>
    );
};

export default App;
