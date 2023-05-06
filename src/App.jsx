import TileGrid from "./TileGrid";
import {useEffect, useLayoutEffect, useState} from "react";
import {Button} from "@mui/material";

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


    const staticArray = ['Egg', 'Rice', 'Cream', 'Honey', 'Salmon', 'Steve', 'Fish', 'Different Egg'];

    const setUpGame = (array) => {
        const doubleArray = [...array, ...array];
        const idArray = doubleArray.map((item, i) => makeTileData(item, i));
        return idArray.sort((a, b) => 0.5 - Math.random());
    }

    const [gameArray, setGameArray] = useState([]);

    useEffect(() => setGameArray(setUpGame(staticArray)), [])

    const handleClick = () => {
        setGameArray(setUpGame(staticArray));
    }

    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid array={gameArray}/>
            <Button
                onClick={handleClick}
                variant="outline"
            >Reset</Button>
        </>
    );
};

export default App;
