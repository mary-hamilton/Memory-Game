import Tile from "./Tile";
import {Grid} from "@mui/material";

const TileGrid = ({array}) => {

    return (
        <>
            <Grid container>
                {array.map((text, i) =>
                    <Grid key={i} item>
                        <Tile content={text}/>
                    </Grid>)
                    .sort((a, b) => 0.5 - Math.random())
                }
            </Grid>
        </>
    )
}

export default TileGrid;