import Tile from "./Tile";
import TileGrid from "./TileGrid";
import {useState} from "react";

const App = () => {

    const randomColour = () => {
        let letters = '0123456789ABCDEF';
        let colour = '#';
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }

    const staticArray = ['Egg', 'Rice', 'Cream', 'Honey', 'Salmon', 'Steve']
    const makeTileData = (text, id) => {
        return { text, id }
        }

    const newStaticArray = staticArray.map((item, i) => makeTileData(item, i+1));

    const doubleArray = [...newStaticArray, ...newStaticArray];

    const colouredArray = doubleArray.map((data) => ({...data, colour: randomColour()}))

    const randomArray = colouredArray.sort((a, b) => 0.5 - Math.random())


    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid array={randomArray}/>
        </>
    );
};

export default App;
