// app.js 

import React, { useState } from 'react';
import './App.css';
import { photoIndex } from './assets/01-index';
import Cards from './components/js/Cards';
import logo from './assets/RandMLogo.png';


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

function App() {

  const [guesses, setGuesses] = useState(0);
  const [topScore, setTopScore] = useState(0);

  console.log(IMAGES);


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
