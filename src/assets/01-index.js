// img index.js to import all photos in a single import
import CardBack from './backOfCard.png';
import Beth from './beth.jpg';
import Birdperson from './birdperson.jpg';
import EvilMorty from './evilMorty.jpg';
import IceT from './iceT.jpg';
import Jerry from './jerry.jpg';
import Morty from './morty.jpg';
import MrMeeseeks from './mrMeeseeks.jpg';
import MrNimbus from './mrNimbus.jpg';
import MrPoopybutthole from './mrPoopybutthole.jpg';
import Pencilvester from './pencilvester.jpg';
import Phoenixperson from './phoenixperson.jpg';
import PickleRick from './pickleRick.jpg';
import Planetina from './planetina.jpg';
import Rick from './rick.jpg';
import ScaryTerry from './scaryTerry.jpg';
import SpaceBeth from './spaceBeth.jpg';
import Squanchy from './squanchy.jpg';
import Summer from './summer.jpg';



const photoIndex = () => {

    const cardBack = () => { return CardBack };
    const beth = () => { return Beth };
    const birdperson = () => { return Birdperson };
    const evilMorty = () => { return EvilMorty };
    const iceT = () => { return IceT };
    const jerry = () => { return Jerry };
    const morty = () => { return Morty };
    const mrMeeseeks = () => { return MrMeeseeks };
    const mrNimbus = () => { return MrNimbus };
    const mrPoopybutthole = () => { return MrPoopybutthole };
    const pencilvester = () => { return Pencilvester };
    const phoenixperson = () => { return Phoenixperson };
    const pickleRick = () => { return PickleRick };
    const planetina = () => { return Planetina };
    const rick = () => { return Rick };
    const scaryTerry = () => { return ScaryTerry };
    const spaceBeth = () => { return SpaceBeth };
    const squanchy = () => { return Squanchy };
    const summer = () => { return Summer };

    const images = {
        cardBack,
        beth,
        birdperson,
        evilMorty,
        iceT,
        jerry,
        morty,
        mrMeeseeks,
        mrNimbus,
        mrPoopybutthole,
        pencilvester,
        phoenixperson,
        pickleRick,
        planetina,
        rick,
        scaryTerry,
        spaceBeth,
        squanchy,
        summer
    }

    return images;
}

// update depending on the file path of Cards.js
// Most likely will not need this function
// function prefix(filePath) {
//     const relativeFilePath = `./assets/${filePath}`;
    
//     return relativeFilePath;
// }

export {
    photoIndex
};
