// function for computer to randomly select choice

let computerSelection = function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection == 1) {
    return 'rock';
  } else if (computerSelection == 2) {
    return 'paper';
  } else return 'scissors';
};

// option for player to select choice

let playerSelection = function getPlayerChoice() {
    let input = window.prompt('please select a choice: rock, paper, or scissors');
    return input.toLowerCase();
    //to Lower Case
};

// function that plays a single round

function playRPS(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Player wins! rock beat scissors!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Player wins! scissors beat paper!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Player wins! paper beats rock!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Computer wins! rock beat scissors!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Computer wins! scissors beat paper!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Computer wins! paper beats rock!'
    } else return "it's a tie"
};

playRPS(playerSelection(), computerSelection());
playRPS(playerSelection(), computerSelection());
playRPS(playerSelection(), computerSelection());
playRPS(playerSelection(), computerSelection());
playRPS(playerSelection(), computerSelection());

// function to keep score for best of 5

const currentTurn = 0;
let playerTurn = 0;
let computerTurn = 0;

// rules for winning
