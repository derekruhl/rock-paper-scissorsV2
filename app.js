// function for computer to randomly select choice

let computerSelection = function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 4);
  if (computerSelection == 1) {
    return 'rock';
  } else if (computerSelection == 2) {
    return 'paper';
  } else return 'scissors';
};

// option for player to select choice

let playerSelection = function getPlayerChoice() {
    window.prompt('please select a choice: rock, paper, or scissors');
};

playerSelection();
computerSelection();

// function that plays a single round

function playRPS(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && pcomputerSelection == 'scissors') {
        return 'rock beat scissors!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'scissors beat paper!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'paper beats rock!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'rock beat scissors!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'scissors beat paper!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'paper beats rock!'
    } else return "it's a tie"
};

playRPS(playerSelection, computerSelection);

// function to keep score for best of 5

// rules for winning

const currentTurn = 0;
let playerTurn = 0;
let computerTurn = 0;

