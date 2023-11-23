import Card from "./Card";
import {Box} from "@mui/material";

const Header = ({ workingArray, shuffleArray }) => {

    const title = "CAT FLIPPER";
    const titleArray = shuffleArray(workingArray.slice(0, title.length));

    //TODO grid it, sort out sizing

    return (
        <>
            <Box
                style={{
                    display: `flex`,
                    flexDirection: `row`,
                    height: `8vw`,
                    width: `100%`,
                    midWidth: `55vh`,
                    padding: `2vh`,
                    gap: `0.5vh`
                }}
                >
        {titleArray.map((card, index) =>
            <Card
                card={card}
                letter={title[index]}
            />)}
            </Box>
        </>
    )
}

export default Header;