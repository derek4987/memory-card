// cards.js component

import React from 'react';
import '../styles/Cards.css';
// import cardBack from '../../assets/backOfCard.png';
// import { photoIndex } from '../../assets/01-index';

// will need to add clarity to what I click (targeting entire button or img);

// const bgs = photoIndex();

function Cards(props) {

    // const [source, setSource] = useState(bgs.cardBack);

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
            <img className='cardImg cardBack' src={ props.bgImg } alt='back of cards png' />
        </button>
    );

} 

export default Cards;