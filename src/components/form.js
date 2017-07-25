import React from 'react';


export default function Form(props) {
    return (
        <form>
          <label htmlFor="userGuess">Make Your Guess</label>
            <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
}
