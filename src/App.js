import React, { Component } from 'react';
import './App.css';
import Form from './components/form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hot and Cold</h1>
    <section class="game">
        <h2>Make a guess!</h2>
<Form />
        <p>Guess #<span id="count">0</span>!</p>
        <ul id="guessList" class="guessBox clearfix"></ul>
    </section>
      </div>
    );
  }
}

export default App;
