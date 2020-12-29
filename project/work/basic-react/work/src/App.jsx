import React, { useState } from 'react';
import Question from './Question';
import Counter from './Counter';
import './App.css';

function App() {
  const [turn, setTurn] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        Here is the Quiz
    </header>
      <Question
        turn={turn} onTurn={(turn) => setTurn(turn)}
        score={score} onScore={(score) => setScore(score)}
        onResult={(result) => setResult(result)}
      />
      <Counter
        turn={turn} score={score} result={result}
      />
    </div>
  );
}

export default App;
