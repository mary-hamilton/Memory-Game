import Card from "./Card";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";

const Header = ({ tileColours, titleArray, title }) => {

    const [ randomNumber, setRandomNumber ] = useState(-1)

    useEffect(() => {
        let flipInterval = setInterval(() => {
            setRandomNumber(Math.floor(Math.random() * title.length));
            setTimeout(() => setRandomNumber(-1), 500)
        }, 2000);
        return () => clearInterval(flipInterval)
    }, [title.length])

    return (
        <>
            <Box
                style={{
                    display: `flex`,
                    justifyContent: `center`,
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
                card={card}
                letter={title[index]}
                colour={tileColours[index]}
                flipped={randomNumber === index}
            />)}
            </Box>
        </>
    )
}

export default Header;