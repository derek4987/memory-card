// app.js 

import React, { useState } from 'react';
import './App.css';
import { photoIndex } from './assets/01-index';
import Cards from './components/js/Cards';
import logo from './assets/RandMLogo.png';
import { findAllByTestId } from '@testing-library/react';


const bgs = photoIndex();

// images array for cards
let IMAGES = [
  bgs.beth, bgs.beth,
  bgs.birdperson, bgs.birdperson,
  bgs.evilMorty, bgs.evilMorty,
  bgs.iceT, bgs.iceT,
  bgs.jerry, bgs.jerry,
  bgs.morty, bgs.morty,
  bgs.mrMeeseeks, bgs.mrMeeseeks,
  bgs.mrNimbus, bgs.mrNimbus,
  bgs.mrPoopybutthole, bgs.mrPoopybutthole,
  bgs.pencilvester, bgs.pencilvester,
  bgs.phoenixperson, bgs.phoenixperson,
  bgs.pickleRick, bgs.pickleRick,
  bgs.planetina, bgs.planetina,
  bgs.rick, bgs.rick,
  bgs.scaryTerry, bgs.scaryTerry,
  bgs.spaceBeth, bgs.spaceBeth,
  bgs.squanchy, bgs.squanchy,
  bgs.summer, bgs.summer
]

// Array that tracks the number of cards you selected for your guess
// Adds 2 cards in array
let selectedCards = [];

// shuffleArray function. shuffle image array before adding components
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// edit card source to change to back of card
function editSrcAttribute(element, newSrc) {
  element.src = newSrc;
}

// compare elements function
function compareElements(a, b) {
  return a.outerHTML === b.outerHTML;
}

// check for match
function checkForMatch(array) {
  // it is a match, logic in if statement not working
  if (compareElements(array[0], array[1])) {
    // elements are equal
    selectedCards = [];
    for (const item of array) {
      item.parentElement.classList.remove('unMatched');
      item.classList.remove('selected');
      item.parentElement.classList.add('matched');
    }
  } else {
    // disable card if no match
    let buttons = document.querySelectorAll('.unMatched');
    for (const button of buttons) {
      button.classList.add('disableCards');
    }
  }
}

// game logic

// button event listener, on click add counter
  // if counter is 2, third click turns selected cards back over
  // How to track selected cards and flip back over / gray out ??
  // add 'selected' class to search for and compare

// close notes

function App() {

  const [guesses, setGuesses] = useState(0);
  const [topScore, setTopScore] = useState(0);

  // IMAGES = shuffleArray(IMAGES);

  // Event delegation listeners
  document.addEventListener('click', function(e) {

    // logic for selecting a pair of card and checking for a match
    if (e.target.matches('.selected') && selectedCards.includes(e.target) === false) {
      if (selectedCards.length < 2) {
        const selectedCard = e.target;
        selectedCards.push(selectedCard);
        console.log(selectedCards);
        if (selectedCards.length === 2) {
          checkForMatch(selectedCards);
          // update setGuesses state
        }          
      } else return;            
    }

    // to flip cards back over is there wasn't a match
    if (e.target.matches('#board') && selectedCards.length === 2) {
      let buttons = document.querySelectorAll('.unMatched');
      for (const button of buttons) {
        button.classList.remove('disableCards');
      }
      // flip cards back over, change src to cardBack
        // below js not working. need to change state inside component
      // editSrcAttribute(selectedCards[0], bgs.cardBack);
      // editSrcAttribute(selectedCards[1], bgs.cardBack);
      selectedCards = [];
    }

  }, false);

  return (
    <div className="App">
      <div id='header-area'>
        <div id='header'>
          <div id='header-left'>
            <img id='logo' src={logo} alt='rick and morty logo' />
            <div id='instructions'>Match the pairs in as few guesses as possible</div>
          </div>
          <div id='header-right'>
            <div id='guesses'>Guesses: {guesses}</div>
            <div id='highScore'>Top score: {topScore}</div>
          </div>
        </div>
      </div>
      <div id='cards-area'>
        <div id='board'>
          {/* components cards are in 9x4 grid  */}
          {IMAGES.map(image => (
            < Cards frontImage={image} key={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
