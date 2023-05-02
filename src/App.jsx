import TileGrid from "./TileGrid";
import {useEffect, useState} from "react";
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

    const staticArray = ['Egg', 'Rice', 'Cream', 'Honey', 'Salmon', 'Steve', 'Fish', 'Different Egg'];
    const [gameArray, setGameArray] = useState([]);
    const makeTileData = (text, id) => {
        return {text, id, flipped: false, guessed: false, colour: randomColour()}
    };
    const setUpGame = (array) => {
        const doubleArray = [...array, ...array];
        const idArray = doubleArray.map((item, i) => makeTileData(item, i));
        setGameArray(idArray.sort((a, b) => 0.5 - Math.random()));
    }

    useEffect(
        () => setUpGame(staticArray), []
    )

    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid array={gameArray}/>
            <Button onClick={() => setUpGame(staticArray)} variant="outline">Reset</Button>
        </>
    );
};

export default App;
