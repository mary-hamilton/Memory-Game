import CardGrid from "./CardGrid";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import {buildArrayFromImages, shuffleArray, randomColourArray} from "./utilityFunctions";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

    // TODO error handling (error component)
    // TODO styling

    const title = "CAT FLIPPER";
    const difficulties = {
        easy: 8,
        hard: 18,
    }
    const initialDifficulty = difficulties.easy;

    const [ currentGuesses, setCurrentGuesses ] = useState([]);
    const [ guessedPairs, setGuessedPairs ] = useState([]);
    const [ gameStarted, setGameStarted ] = useState(false);
    const [ workingArray, setWorkingArray ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ tileColours, setTileColours ] = useState(randomColourArray(initialDifficulty * 2));
    const [ titleArray, setTitleArray ] = useState(title.split(""));

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
            <div
                style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr 6fr 1fr`,
                    gridTemplateRows: `1fr 4fr 1fr`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    // maxHeight: `80vh`,
                    /* there has got to be a better way to do this */
                    // background: `${randomColor({ hue: tileColours[0], luminosity: `dark`, seed: 1})}`
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
            </div>
        </>
    );
};

export default App;
