import React from 'react';
import data from './Questions';

let questions = data;
const titles = Object.keys(questions);

const Question = ({ turn, onTurn, score, onScore, onResult }) => {
    if (turn === 0) {
        titles.sort(function () {
            return .5 - Math.random();
        });
    }
    let title = titles[turn];
    let question = questions[title];
    function check(option, question) {
        if (option === question.answer) {
            onScore(score + 1);
            onResult("TRUE");
        } else {
            onResult("FALSE");
        }
    }
    if (turn < titles.length) {
        return (
            <div className="question-area">
                <label className="question-body">{question.question}</label>  <br />
                <ul className="options-area">
                    {Object.keys(questions[title].options).map((option) =>
                        (<li key={option}><button key={option} onClick={() => {
                            onTurn(turn + 1);
                            check(option, question);
                        }}>
                            {option}: {questions[title].options[option]}
                        </button></li>
                        )
                    )}
                </ul>

            </div>
        );
    } else {
        return (
            <div className="question-area">
                <label className="finish-label">You have Finished All Questions!</label>  <br />
                <button
                    onClick={() => { onTurn(0); onScore(0); onResult("") }}>
                    Play Again!
                </button>
            </div>
        );
    }
}
export default Question;