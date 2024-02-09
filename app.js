// function for computer to randomly select choice

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection == 1) {
    return 'rock';
  } else if (computerSelection == 2) {
    return 'paper';
  } else return 'scissors';
};


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
    } else { return 'it\'s a tie'; 
}
}

// UI
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const displayMessage = document.querySelector('.display-message');

let playerScore = 0;
let computerScore = 0;


rockBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let result = playRPS('rock', computerSelection);
  if (result.includes('Player wins!')) {
    playerScore++;
  } else if (result.includes('Computer wins!')) {
    computerScore++
  } 
  displayMessage.textContent = result;
  updateScore();
  }
);

paperBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let result = playRPS('paper', computerSelection);
    if (result.includes('Player wins!')) {
        playerScore++
      } else if (result.includes('Computer wins!')) {
      computerScore++;
      }
      displayMessage.textContent = result;
     updateScore();
  }
);

scissorsBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let result = playRPS('scissors', computerSelection);
    if (result.includes('Player wins!')) {
        playerScore++
      } else if (result.includes('Computer wins!')) {
        
      computerScore++
      }
      displayMessage.textContent = result;
    updateScore();
  }
);


function updateScore() {
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
};