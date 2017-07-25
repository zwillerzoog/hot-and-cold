import React, { Component } from "react";
import "./App.css";
import Form from "./components/form.js";
import GuessCount from "./components/guessCount.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hot and Cold</h1>
        <section class="game">
          <h2>Make a guess!</h2>
          <Form />
          <GuessCount />
          <ul id="guessList" class="guessBox clearfix" />
        </section>
      </div>
    );
  }
}

export default App;
