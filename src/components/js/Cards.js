// cards.js component

import React, { useState } from 'react';
import '../styles/Cards.css';
// import cardBack from '../../assets/backOfCard.png';
// import { photoIndex } from '../../assets/01-index';

// will need to add clarity to what I click (targeting entire button or img);

// const bgs = photoIndex();

function Cards(props) {

    const bgImg = props.bgImg;
    const matchClass = props.matchClass;

    const [source, setSource] = useState(bgImg);

    // const handleSetSource = (e) => {
    //     setSource(props.frontImage);
    //     // add clarity to what I want to click
    //     e.target.setAttribute('alt','front of cards jpg');
    //     e.target.classList.remove('cardBack');
    //     e.target.classList.add('cardFront');
    //     e.target.classList.add('selected');       
    // }

    return (
        <button className='card unMatched'>
            <img className={`cardImg cardBack ${matchClass}`} src={ source } alt='cards png' />
        </button>
    );

} 

export default Cards;