// function for computer to randomly select choice

let computerSelection = function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection == 1) {
    return 'rock';
  } else if (computerSelection == 2) {
    return 'paper';
  } else return 'scissors';
};
console.log(computerSelection());

// option for player to select choice

// let playerSelection = function getPlayerChoice() {
//     let input = window.prompt('please select a choice: rock, paper, or scissors');
//     return input.toLowerCase();
//     };

// console.log(playerSelection());

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
    } else 'it\'s a tie'
}

playRPS(playerSelection(), computerSelection());

// UI
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerScore = document.querySelector('player-score');
const computerScore = document.querySelector('computer-score');
const displayMessage = document.querySelector('display-message');


rockBtn.addEventListener('click', () => {
    playRPS('rock', computerSelection());
});

paperBtn.addEventListener('click', () => {
    playRPS('paper', computerSelection());
});

scissorsBtn.addEventListener('click', () => {
    playRPS('scissors', computerSelection());
});

//logic for keeping score

if (playRPS().includes('Player wins!')) {
    div.textContent = 'The winner is Player!' && playerScore++;
} else div.textContent = 'The winner is Computer!' && computerScore++;

