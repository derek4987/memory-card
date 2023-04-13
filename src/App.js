// app.js 

import React, { useEffect, useState } from 'react';
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

let CLASSID = [
  'beth', 'beth', 
  'birdperson', 'birdperson',
  'evilMorty', 'evilMorty', 
  'iceT', 'iceT',
  'jerry', 'jerry', 
  'morty', 'morty',
  'mrMeeseeks', 'mrMeeseeks', 
  'mrNimbus', 'mrNimbus',
  'mrPoopybutthole', 'mrPoopybutthole', 
  'pencilvester', 'pencilvester',
  'phoenixperson', 'phoenixperson', 
  'pickleRick', 'pickleRick',
  'planetina', 'planetina', 
  'rick', 'rick',
  'scaryTerry', 'scaryTerry', 
  'spaceBeth', 'spaceBeth',
  'squanchy', 'squanchy', 
  'summer', 'summer'
]

// Array that tracks the number of cards you selected for your guess (2 max)
let selectedCards = [];

// shuffleArray function. shuffle image array before adding components
function shuffleArray(array1, array2) {
  for (let i = array1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array1[i], array1[j]] = [array1[j], array1[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }
  return [array1, array2];
}

// shuffle cards before mapping all components
const shuffledArray = shuffleArray(IMAGES, CLASSID);
IMAGES = shuffledArray[0];
CLASSID = shuffledArray[1];
console.log([IMAGES, CLASSID]);

// compare elements function
function compareElements(a, b) {
  return a.outerHTML === b.outerHTML;
}

// check for match
function checkForMatch(array) {
  // it is a match
  if (compareElements(array[0], array[1])) {
    // elements are equal
    console.log('true');
    selectedCards = [];
    for (const item of array) {
      item.parentElement.classList.remove('unMatched');
      item.parentElement.classList.add('matched');
      // make board2 img opacity0, but div underneath it semi opaque with different color
      item.classList.add('opacity0');
      item.parentElement.classList.add('dimMatched')
    }
  } else {
    // disable card if no match
    console.log('false');
    let buttons = document.querySelectorAll('.unMatched');
    for (const button of buttons) {
      button.classList.add('disableCards');
    }
  } return
}

function App() {

  const [guesses, setGuesses] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [imageState, setImage] = useState(IMAGES);
  const [classIDState, setClassID] = useState(CLASSID);


  // handleClick function
  /* handleClick logic
   if selectedCards.length is 2 and not a match, disable cards, 3rd click flips them over
   if selectedCards.length is 2 and is a match, disable matched cards and continue
   add 1 to the guesses state counter using setGuesses after both scenarios
  */
  function handleClick(e) {
    // logic for selecting a pair of card and checking for a match
    if (e.target.matches('.cardBack') && selectedCards.includes(e.target) === false) {
      if (selectedCards.length < 2) {
        e.target.parentElement.classList.add('opacity0');
        selectedCards.push(e.target);
        console.log(selectedCards);
        if (selectedCards.length === 2) {
          checkForMatch(selectedCards);
          // update setGuesses state
          setGuesses(prevGuesses => prevGuesses + 1);
          // if all cards are matched
          if (document.querySelectorAll('.matched').length === 36) {
            // if new top score
            if ((guesses + 1) < topScore || topScore === 0) {
              // guess + 1 so it includes most recent guess, renders prior value otherwise
              setTopScore(guesses + 1);
            };
            // open modal
            const modalWindow = document.querySelector('#modalWindow');
            modalWindow.classList.remove('modal-close');
            modalWindow.classList.add('modal-open');
          } else return;
        } return
      } else return
    }
  };

  function handleButtons(e) {
    // function to trigger when modal buttons are selected
    if (e.target.matches('#mbTryAgain')) {
      // reset guesses to 0 
      setGuesses(0);
    } else if (e.target.matches('#mbReset')) {
      // reset guesses and top score to 0
      setGuesses(0);
      setTopScore(0);
    } else return;
    // close modal
    const modalWindow = document.querySelector('#modalWindow');
    modalWindow.classList.remove('modal-open');
    modalWindow.classList.add('modal-close');
    // reset cards
    if (document.querySelectorAll('.matched').length === 36) {
      const cards = document.querySelectorAll('.matched');
      for (let i=0; i<cards.length; i++) {
        cards[i].classList.remove('matched');
        cards[i].classList.add('unMatched');
        cards[i].classList.remove('dimMatched');
        cards[i].classList.remove('opacity0');
        cards[i].firstChild.classList.remove('opacity0');
      };
    } else return;
    // update card states (shuffle them)
    const newShuffledArray = shuffleArray(IMAGES, CLASSID);
    const newIMAGES = newShuffledArray[0];
    const newCLASSID = newShuffledArray[1];
    console.log([newIMAGES, newCLASSID]);
    setImage(newIMAGES);
    setClassID(newCLASSID);
  };

  // event delegation block
  document.addEventListener('click', function(e) {

    // to flip cards back over if there wasn't a match
    if (e.target.matches('#board2') && selectedCards.length === 2) {
      let buttons = document.querySelectorAll('.unMatched');
      for (const button of buttons) {
        button.classList.remove('disableCards');
      }
      // flip cards back over, remove opacity0 class
      selectedCards[0].parentElement.classList.remove('opacity0');
      selectedCards[1].parentElement.classList.remove('opacity0');
      selectedCards = [];
    }

    // modal listeners after beating game
  
  }, false);

  const bottomCardsList = imageState.map((image, index) =>
    < Cards bgImg={image} matchClass={classIDState[index]} key={`cardImage${index}`} />
  );

  const topCardsList = classIDState.map((classID, index) =>
    < Cards bgImg={bgs.cardBack} matchClass={classID} key={`cardBack${index}`} handleClick={handleClick} />
  );

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
          {/* components cards are in 9x4 grid */}
          {bottomCardsList}
        </div>
        <div id='board2'>
          {/* components cards are in 9x4 grid */}
          {topCardsList}
        </div>
      </div>
      <div id='modalWindow' class="modal-close">
        <div className='disableBackground'>
        </div>
        <div className='modal'>
          <div className='modal-message'>
            You matched all the cards in {guesses} guesses
          </div>
          <div className='modal-message'>
            Your high score is {topScore}
          </div>
          <div className='m-buttonArea'>
            <button type='button' id='mbTryAgain' className='m-buttons' onClick={handleButtons}>Try Again</button>
            <button type='button' id='mbReset' className='m-buttons' onClick={handleButtons}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
