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
let score = [0,0];
let random = 0;
let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
let name0 = document.querySelector("#name-0");
let name1 = document.querySelector("#name-1");
let dice = document.querySelector(".dice");
let score0 = document.querySelector("#score-0");
let score1 = document.querySelector("#score-1");
let current0 = document.querySelector("#current-0");
let current1 = document.querySelector("#current-1");

// Randomly pick a number between 1 and 6s
function shuffle() {
  random = Math.floor(Math.random() * 6) + 1;
};

btnRoll.addEventListener("click", function() {
  shuffle();
  current0.textContent = roundScore;
  dice.src = "dice-" + random + ".png";
  roundScore = roundScore + random;
  console.log(roundScore);
});

btnHold.addEventListener("click", function() {
  score[0] = roundScore;
  score0.textContent = roundScore;
  current0.textContent = 0;
});
