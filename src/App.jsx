import Tile from "./Tile";
import TileGrid from "./TileGrid";
import {useState} from "react";

const App = () => {

    const staticArray = ['Egg', 'Rice', 'Cream', 'Honey', 'Salmon', 'Steve']
    const makeTileData = (text, id) => {
        return { text, id }
        }

    const newStaticArray = staticArray.map((item, i) => makeTileData(item, i));

    const doubleArray = [...newStaticArray, ...newStaticArray];

    const [ firstGuess, setFirstGuess ] = useState("egg");
    const [ secondGuess, setSecondGuess ] = useState("");

    const clickyClick = (data) => {
       setFirstGuess(data.id);
       console.log(firstGuess);
    }

    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid array={doubleArray} clickyClick={clickyClick}/>
            <p>{firstGuess}</p>
        </>
    );
};

export default App;
