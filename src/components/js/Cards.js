// cards.js component

import React, { useState } from 'react';
import '../styles/Cards.css';

function Cards(props) {

    const bgImg = props.bgImg;
    const matchClass = props.matchClass;
    const handleClick = props.handleClick;

    let source = bgImg();

    return (
        <button className='card unMatched'>
            <img className={`cardImg cardBack ${matchClass}`} src={ source } alt='cards png' onClick={ handleClick } />
        </button>
    );

} 

export default Cards;