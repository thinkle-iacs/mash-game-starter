import { useState } from "react";
import "./App.css";

const App = () => {
  const [guesses,setGuesses] = useState([]);
  const [nextGuess,setNextGuess] = useState("");

  const renderGuesses = (guesses) => {
    if (guesses.length > 0) {
      let renderedGuesses = [];
      for (let g of guesses) {
        renderedGuesses.push(<div>{g}</div>);
      }
      return renderedGuesses;
    } else {
      return <div>You haven't guessed yet</div>;
    }
  }
  const applyGuess = () => {
    setGuesses([...guesses,nextGuess]);
    setNextGuess("");
  }

  return <main>
    <h2>Time to guess!</h2>
    <div>
      {renderGuesses(guesses)}
    </div>
    <input
      onChange={(e) => setNextGuess(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          applyGuess();
        }
      }}
      value={nextGuess}
      placeholder="Type your guess"
    />
    <button onClick={()=>applyGuess()}>Guess</button>
  </main>;
};

export default App;