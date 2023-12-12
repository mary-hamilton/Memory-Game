import Card from "./Card";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";

const Header = ({ workingArray, shuffleArray, tileColours }) => {

    const title = "CAT FLIPPER";
    const [ titleArray, setTitleArray ] = useState(title.split(""));
    const [ flipperThing, setFlipperThing ] = useState(-1)

    //TODO animate the fuckers

    useEffect(() => {
        if (workingArray.length > 0) {
            setTitleArray(shuffleArray(workingArray.slice(0, title.length)))
        }
    }, []);


    useEffect(() => {
        let flipInterval = setInterval(() => {
            setFlipperThing(Math.floor(Math.random() * title.length));
            setTimeout(() => setFlipperThing(-1), 500)
        }, 2000);
        return () => clearInterval(flipInterval)
    })

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
                /* work out something better for the flip randomness */
                flipped={flipperThing % index === 0}
            />)}
            </Box>
        </>
    )
}

export default Header;