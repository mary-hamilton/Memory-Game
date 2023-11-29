
const makeTileData = (image, id) => {
    return {
        id,
        image: image.url,
        pairId: image.id,
    }
};

export const buildArray = (array) => {
    const doubleArray = [...array, ...array];
    return doubleArray.map((item, id) => {
        return makeTileData(item, id)
    });
}

export const shuffleArray = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
}

export const randomColour = () => {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

export const randomColourArray = (length) => {
    let colourArray = [];
    for (let i = 0; i < length; i++) {
        colourArray.push(randomColour());
    }
    return colourArray;
}