// cards.js component

import React, { useState } from 'react';
import '../styles/Cards.css';
// import cardBack from '../../assets/backOfCard.png';
import { photoIndex } from '../../assets/01-index';

// will need to add clarity to what I click (targeting entire button or img);

const bgs = photoIndex();

function Cards() {

    const [source, setSource] = useState(bgs.cardBack);

    const handleSetSource = (e) => {
        setSource(bgs.rick);
        // add clarity to what I want to click (won't work if img is selected)
        e.target.firstElementChild.setAttribute('alt','front of cards jpg')
    }

    return (
        <button className='card' onClick={handleSetSource}>
            <img className='cardImg' src={ source } alt='back of cards png' />
        </button>
    );

} 

export default Cards;