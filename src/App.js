import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hot and Cold</h1>
    <section class="game">
        <h2>Make a guess!</h2>
        <form>
          <label htmlFor="userGuess">Make Your Guess</label>
            <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
        <p>Guess #<span id="count">0</span>!</p>
        <ul id="guessList" class="guessBox clearfix"></ul>
    </section>
      </div>
    );
  }
}

export default App;
