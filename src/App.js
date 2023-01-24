// app.js 

import React, { useState } from 'react';
import './App.css';
import { photoIndex } from './assets/01-index';
import Cards from './components/js/Cards';
import logo from './assets/RandMLogo.png';


const bgs = photoIndex();

function App() {

  const [guesses, setGuesses] = useState(0);
  const [topScore, setTopScore] = useState(0);




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
          < Cards frontImage={ bgs.rick } />
        </div>
      </div>
    </div>
  );
}

export default App;
