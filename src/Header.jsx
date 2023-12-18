import Card from "./Card";
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Header = ({tileColours, titleArray, title}) => {

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
            <div
                style={{
                    gridColumn: `1 / -1`,
                    display: `grid`,
                    gridTemplateColumns: `repeat(${title.length}, 1fr)`,
                    width: `100%`,
                    minWidth: `38rem`,
                    gap: `0.5vh`
                }}
            >
                {titleArray.map((card, index) =>
                    <Card
                        key={index}
                        card={card}
                        colour={tileColours[index]}
                        flipped={randomNumber === index}
                    >
                        <Typography variant={"h3"}>{title[index]}</Typography>
                    </Card>
                )}
            </div>
        </>
    )
}

export default Header;