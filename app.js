/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declare the variables
let roundScore = 0;
//player scores
let playerScore0 = 0;
let playerScore1 = 0
//random
let random = 0;
//variable to switch players
let activePlayer = 0;
let playing = true;
//selectors
let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
//dice image
let dice = document.querySelector(".dice");
//total score
let score0 = document.querySelector("#score-0");
let score1 = document.querySelector("#score-1");
//current score
let current0 = document.querySelector("#current-0");
let current1 = document.querySelector("#current-1");
//player styles
let player0 = document.querySelector(".player-0-panel");
let player1 = document.querySelector(".player-1-panel");
//player headings
let name0 = document.querySelector("#name-0");
let name1 = document.querySelector("#name-1");

//shuffle and hide dice on window load
window.onload = function() {
  // hide the dice on refresh
  dice.style.visibility = "hidden";
  shuffle();
  console.log("STARTED!");
};

// Randomly pick a number between 1 and 6
function shuffle() {
  random = Math.floor(Math.random() * 6) + 1;
  //change the dice image
  dice.src = "dice-" + random + ".png";
};

//the roll button
btnRoll.addEventListener("click", function() {
  if (playing) {
    shuffle();
    // show the dice
    dice.style.visibility = "visible";
    //check if the dice / random is 1
    //check if the game is finished
    if (random !== 1) {
      currentPlayer();
    } else {
      // reset round score
      roundScore = 0;
      current0.textContent = roundScore;
      current1.textContent = roundScore;
      //toggle the active player class
      player0.classList.toggle("active");
      player1.classList.toggle("active");
      //change players if roll a 1
      if (activePlayer === 0) {
        activePlayer = 1;
        } else {
            activePlayer = 0;
        }
      };
  };
});

//the current player function
function currentPlayer() {
  if (activePlayer === 0) {
    // update the current score
    roundScore = roundScore + random;
    console.log("Player 1 round score is " + roundScore);
    current0.textContent = roundScore;
  } else {
    roundScore = roundScore + random;
    current1.textContent = roundScore;
    console.log("Player 2 round score is " + roundScore);
  }
};

//the hold button
btnHold.addEventListener("click", function() {
  // hide the dice
  dice.style.visibility = "hidden";
  //if player 1 is playing
  if (activePlayer === 0) {
    //change to player 2 for the next round
    activePlayer = 1;
    //update the active score
    playerScore0 = playerScore0 + roundScore;
    console.log("The current total for player 1 is " + playerScore0);
    //display the player's score
    score0.textContent = playerScore0;
    //reset the current score
    current0.textContent = 0;
    //reset the round score
    roundScore = 0;
    //change the curent player style
    player0.classList.remove("active");
    player1.classList.add("active");
    } else if (activePlayer === 1) {
        //change to player 1 for the next round
        activePlayer = 0;
        //update the active score
        playerScore1 = playerScore1 + roundScore;
        console.log("This is the current total for player 1 is " + playerScore1);
        //display the player's score
        score1.textContent = playerScore1;
        //reset the current score
        current1.textContent = 0;
        //reset the round score
        roundScore = 0;
        //change the current player style
        player0.classList.add("active");
        player1.classList.remove("active");
    };
      gameFinish();
});

//new game event listener
btnNew.addEventListener("click", function() {
  console.log("Clicked!");
  newGame();

});

//the game finish function
function gameFinish() {
  if (playerScore0 >= 100) {
    name0.textContent = "WINNER!"
    finStyles();
  } else if (playerScore1 >= 100) {
    name1.textContent = "WINNER!"
    finStyles();
  };
};

function finStyles() {
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  dice.style.visibility = "hidden";
  playing = false;
}

//the new game function
function newGame() {
  playing = true;
  shuffle();
  //reset the round score and the total scores
  roundScore = 0;
  playerScore0 = 0;
  playerScore1 = 0;
  //reset current score to zero
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  // hide the dice
  dice.style.visibility = "hidden";
  //switch the active player to 1
  player0.classList.add("active");
  player1.classList.remove("active");
  //reset name from winner to player
  name0.textContent = "Player 1";
  name1.textContent = "Player 1";
};
