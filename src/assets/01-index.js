// img index.js to import all photos in a single import
import CardBack from './backOfCard.png';
import Rick from './rick.jpg';
// const CardBack = prefix('backOfCard.png');
// const Rick = prefix('rick.jpg')



const photoIndex = () => {

    const cardBack = () => { return CardBack };
    const rick = () => { return Rick };

    const images = {
        cardBack,
        rick
    }

    return images;
}

// update depending on the file path of Cards.js
function prefix(filePath) {
    const relativeFilePath = `./assets/${filePath}`;
    
    return relativeFilePath;
}

export {
    photoIndex
};
