const express = require('express');
const bodyParser = require('body-parser');
const compare = require('./compare');
const gameWeb = require('./game-web');
const wordList = require('./words');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

let userData = {};
let ListString = "";
for(let i = 0; i < wordList.length; i++){
  if(i % 6 === 0) ListString += "</br>";
  ListString += wordList[i] + " ";
}
 
function generateId(){
  return Math.floor(Math.random()*1000);
}

function newGame(id){
  userData[id] = {
    secretWord : wordList[Math.floor((Math.random() * wordList.length + 1))],
    userGusses : []
  };
}

// GET Method New Game
app.get('/', (req, res) => {
  let id = generateId();
  newGame(id);
  console.log("This user's ID is: " + id + " || The Secret Word is: " + userData[id].secretWord);
  res.send(gameWeb.getPage(ListString, id));
});

// POST Method
app.post('/', (req, res) => {
  let id = req.body.guess[2];
  let input = req.body.guess[0].toUpperCase();

    // Guess is inside wordList
  if(wordList.includes(input)){
    userData[id].userGusses.push(input + " ");
    let matched = compare(userData[id].secretWord, input);

    if(matched < userData[id].secretWord.length){
      res.send(gameWeb.wrongGuess(ListString, id, userData, matched));
    }
    else{
      res.send(gameWeb.winPage(ListString, id, userData));
    }
  }
  else{ //Word is not in List
    res.send(gameWeb.invalidGuess(ListString, id, userData));
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

