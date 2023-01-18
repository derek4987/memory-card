// app.js 

import React, { useState } from 'react';
import './App.css';
import logo from './assets/RandMLogo.png';

function App() {
  return (
    <div className="App">
      <div id='header-area'>
        <div id='header'>
          <div id='header-left'>
            <img id='logo' src={logo} alt='rick and morty logo' />
            <div id='instructions'>Match the pairs in as few guesses as possible</div>
          </div>
          <div id='header-right'>
            <div id='guesses'>Guesses: 0</div>
            <div id='highScore'>High score: 0</div>
          </div>
        </div>
      </div>
      <div id='cards-area'>
        <div id='board'>
          {/* div's here as placeholders so I can test page layout will be component */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
