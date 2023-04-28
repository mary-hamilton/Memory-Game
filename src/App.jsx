import Tile from "./Tile";
import TileGrid from "./TileGrid";

const App = () => {

    const staticArray = ['Egg', 'Rice', 'Cream', 'Honey', 'Salmon', 'Steve']

    return (
        <>
            <h1>My Lovely Game</h1>
            <TileGrid array={staticArray}/>
        </>
    );
};

export default App;
