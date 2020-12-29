"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY
  let answer = 0;

  const wordStr = word.toLowerCase().split('');
  const guessStr = guess.toLowerCase().split('');
  for(let i = 0; i < wordStr.length; i++){
    for(let j = 0; j < guessStr.length; j++){
      if(wordStr[i] == guessStr[j]){
        guessStr[j] = 0;
        answer++;
        break;
      }
    }
  }

/* YOU MAY MODIFY THE LINES BELOW */

  return answer; // this line is wrong
}
