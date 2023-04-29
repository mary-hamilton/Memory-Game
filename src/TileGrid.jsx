import Tile from "./Tile";
import {Grid} from "@mui/material";
import {useState} from "react";

const TileGrid = ({array}) => {

    const [ firstGuess, setFirstGuess ] = useState("");
    const [ secondGuess, setSecondGuess ] = useState("");
    const clickyClick = (data) => {

        if (!firstGuess) {
            setFirstGuess(data.id)
        }

        if (firstGuess && !secondGuess) {
            setSecondGuess(data.id);
            console.log(firstGuess, secondGuess)
        }
       if (firstGuess && secondGuess) {
            setFirstGuess(data.id);
            setSecondGuess("");
            console.log(firstGuess, secondGuess)
        }

    // firstGuess ? setSecondGuess(data.id) : setFirstGuess(data.id);
    }

    const victory = (firstGuess === secondGuess)

    console.log(victory);

        return (
            <>
                <Grid container>
                    {array.map((data, i) =>
                        <Grid key={i} item>
                            <Tile data={data} clickyClick={clickyClick}/>
                        </Grid>)
                    }
                </Grid>
                {victory && (
                <p>YOU WIN!</p>
                    )}

            </>
        )


}

export default TileGrid;