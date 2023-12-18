import Card from "./Card";
import {useEffect} from "react";

const CardGrid = ({
                      workingArray,
                      guessArray,
                      setGuessArray,
                      guessedPairs,
                      setGuessedPairs,
                      gameStarted,
                      setGameStarted,
                      tileColours
                  }) => {


    useEffect(() => {
        if (guessArray.length === 2) {
            checkForPair();
        }
    })

    const manageGuesses = (card) => {
        if (guessArray.length === 2) {
            setGuessArray([card]);
        } else {
            setGuessArray([card, ...guessArray]);
        }
    }

    const checkForPair = () => {
        if (guessArray[0].pairId === guessArray[1].pairId) {
            setGuessedPairs(prev => [...prev, ...guessArray])
            setGuessArray([]);
        }
    }

    const handleClick = (card) => {
        if (guessedPairs.includes(card) || guessArray.includes(card)) {
            return;
        }
        if (!gameStarted) {
            setGameStarted(true);
        }
        manageGuesses(card);
    }

    // Dynamically size grid and cards based on quantity

    const columns = Math.sqrt(workingArray.length);

    return (
        <div
            style={{
                gridColumn: `2 / 3`,
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `0.5rem`,
                // minWidth: `50rem`,
            }}>
            {workingArray.map((card) =>
                <Card
                    key={card.id}
                    card={card}
                    playable
                    handleClick={handleClick}
                    flipped={guessedPairs.includes(card) || guessArray.includes(card)}
                    colour={tileColours[card.id]}
                />
            )}
        </div>
    )
}

export default CardGrid;