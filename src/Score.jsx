const Score = ({workingArray}) => {
    return (
        <p>The new score is {workingArray.filter((card) => card.guessed === true).length / 2}</p>
    )
}

export default Score;