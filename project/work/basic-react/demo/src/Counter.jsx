import React from 'react';
import questions from './Questions';

const titles = Object.keys(questions);

const Counter = ({ turn, score, result }) => {
    if (turn < titles.length) {
        return (
            <div className="counter-area">
                Last Question Result: {result}<br />
      Turn: {turn} <br />
      Score: {score}
            </div>
        )
    } else {
        return (
            <div className="counter-area">
                Last Question Result: {result}<br />
                Turn: {turn} <br />
                <label className="final-score">Your Final Score is:</label> <br />
                <label className="final-score">{score}</label>
            </div>
        )
    }

}

export default Counter;