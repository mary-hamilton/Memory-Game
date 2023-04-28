import Tile from "./Tile";
import {Grid} from "@mui/material";

const TileGrid = ({array, clickyClick}) => {

    return (
        <>
            <Grid container>
                {array.map((data, i) =>
                    <Grid key={i} item>
                        <Tile data={data} clickyClick={clickyClick}/>
                    </Grid>)
                    .sort((a, b) => 0.5 - Math.random())
                }
            </Grid>
        </>
    )
}

export default TileGrid;