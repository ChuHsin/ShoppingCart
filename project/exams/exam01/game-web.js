const gameWeb = {
    getPage: function(ListString, id) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/game.css"/>
          <title>Welcome</title>
        </head>

        <h1 class="header">THIS IS A WORD GUESS GAME</h1>
        <p>Guess a word from this list:</p>
        <div class="wordList">
        <p>${ListString}</p>
        </div>
        <body>
        <div class="form">
          <form class="input" action="/" method="post">
            <label for="guess">Input Your Guess:</label>
            <input type="text" name="guess" value="" placeholder="Enter Your Guess Here">
            <input type="submit" name="guess" value="SUBMIT">
            <input type="hidden" id ="userId" name ="guess" value=${id}>
          </form>
        </div>
        </body>
        </html>
        `;
    },
  
    wrongGuess: function(ListString, id, userData, matched) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/game.css"/>
          <title>Wrong Guess</title>
        </head>

        <h1 class="header">THIS IS A WORD GUESS GAME</h1>
        <p>Guess a word from this list:</p>
        <div class="wordList">
        <p>${ListString}</p>
        </div>
        <body>
        <div class="form">
          <form class="input" action="/" method="post">
            <label for="guess">Take your guess:</label>
            <input type="text" name="guess" value="" placeholder="Input your Guess Here">
            <input type="submit" name="guess" value="SUBMIT">
            <input type="hidden" id = "userId" name = "guess" value=${id}>
          </form>
        </div>
        <div>
        <p>You've tried ${userData[id].userGusses.length} times, keep trying.</p>
        <p>Your last guess matches ${matched} letters, make some change.</p>
        <p>Words you've guessed so far:</p>
        <p>${userData[id].userGusses}</p>
        </div>
        </body>
        </html>
        `;
    },
    winPage: function(ListString, id, userData) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/game.css"/>
          <title>You Won!</title>
        </head>
        <h1 class="header">THIS IS A WORD GUESS GAME</h1>
        <p>Guess a word from this list:</p>
        <div class="wordList">
        <p>${ListString}</p>
        </div>
        <body>
        <div class="form">
          <form class="input" action="/" method="post">
            <label for="guess">Take your guess:</label>
            <input type="text" name="guess" value="" placeholder="Input your Guess Here">
            <input type="submit" name="guess" value="SUBMIT">
            <input type="hidden" id = "userId" name = "guess" value=${id}>
          </form>
        </div>
        <div>
        <p>You Guessed ${userData[id].userGusses.length} Words to finish!</p>
        <a href="/">I wanna a New Game!</a>
        </div>
        </body>
        </html>
        `;
    },
    invalidGuess: function(ListString, id, userData) {
      return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/game.css"/>
          <title>Invalid Guess</title>
        </head>
        <h1 class="header">THIS IS A WORD GUESS GAME</h1>
        <p>Guess a word from this list:</p>
        <div class="wordList">
        <p>${ListString}</P>
        </div>
        <body>
        <div class="form">
          <form class="input" action="/" method="post">
            <label for="guess">Take your guess:</label>
            <input type="text" name="guess" value="" placeholder="Input your Guess Here">
            <input type="submit" name="guess" value="SUBMIT">
            <input type="hidden" id = "userId" name = "guess" value=${id}>
          </form>
        </div>
        <div>
        <p>This is an INVALID guess. \n Try a word from upper list please.</p>
        <p>Words you've guessed so far:</p>
        <p>${userData[id].userGusses}</p>
        </div>
        </body>
        </html>
        `;
    }
  };

module.exports = gameWeb;
