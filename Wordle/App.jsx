import React, {useState} from "react";
import "./App.css";
import Row from "./Row.jsx";

const App = () => {
  const targetWord = "REACT";
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const maxAttempts = 6;
  const [isGameOver, setIsGameOver] = useState(false);

  function handleInputChange(event){
    setCurrentGuess(event.target.value.toUpperCase());
  }

  function handleGuess(){
    if(currentGuess.length !== 5){
      return;
    }
    const updatedGuesses = [...guesses, currentGuess];
    setGuesses(updatedGuesses);
    if (currentGuess === targetWord || updatedGuesses.length >= maxAttempts){
      setIsGameOver(true);
    }
  }

  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <div key = {index}><Row guess={guess} targetWord={targetWord} /></div>
      ))}
      {!isGameOver && (
      <>
        <input onChange={handleInputChange} maxLength={targetWord.length} placeholder="Enter your guess"/> 
        <button onClick={handleGuess}>Guess</button>
      </>
      )}
      {isGameOver && currentGuess !== targetWord && (
        <p>{`Game over! The word was: ${targetWord}`}</p>
      )}
      
    </div>
  );
};

export default App;
