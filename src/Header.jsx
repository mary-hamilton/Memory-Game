import Card from "./Card";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";

const Header = ({ workingArray, shuffleArray, images, tileColours }) => {

    const title = "CAT FLIPPER";
    const [ titleArray, setTitleArray ] = useState(title.split(""));

    //TODO make the title array update once the call to the API has completed!! And make the colours random again
    //TODO and animate the fuckers

    useEffect(() => {
        if (workingArray.length > 0) {
            setTitleArray(shuffleArray(workingArray.slice(0, title.length)))
        }
    }, []);

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
                key={index}
                card={card.id ? card : false}
                letter={title[index]}
                colour={tileColours[index]}
            />)}
            </Box>
        </>
    )
}

export default Header;