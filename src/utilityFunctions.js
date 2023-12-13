import randomColor from "randomcolor";

const makeTileData = (image, index) => {
    return {
        id: index,
        image: image.url,
        pairId: image.id,
    }
};

export const buildArrayFromImages = (images, length) => {
    const doubleArray = [...images, ...images];
    return doubleArray.map((image, index) => makeTileData(image, index)).slice(0, length);
}

export const shuffleArray = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
}

// export const randomColour = () => {
//     const letters = '0123456789ABCDEF';
//     let colour = '#';
//     for (let i = 0; i < 6; i++) {
//         colour += letters[Math.floor(Math.random() * 16)];
//     }
//     return colour;
// }

export const randomColourArray = (length) => {
    const paletteOptions = ["pink", "yellow", "green"];
    const palette = paletteOptions[Math.floor(Math.random() * paletteOptions.length)]
    const colourArray = randomColor({
        count: length,
        luminosity: 'light',
        hue: palette
    });
    console.log(palette)
    return colourArray;
}