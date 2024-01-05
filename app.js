// function for computer to randomly select choice

let computerSelection = function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 0);
  if (computerSelection == 1) {
    return 'rock';
  } else if (computerSelection == 2) {
    return 'paper';
  } else return 'scissors';
};
console.log(computerSelection());

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
    } else 'it\'s a tie'
}

playRPS(playerSelection(), computerSelection());



// function to keep score for best of 5

let playerScore = 0;
let computerScore = 0;

while (playerScore < 3 && computerScore < 3) {
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
  
    let result = playRPS(playerChoice, computerChoice);
    console.log(result);
  
    if (result.includes('Player wins')) {
      playerScore++;
    } else if (result.includes('Computer wins')) {
      computerScore++;
    }
  }
  
  // print the overall winner
  if (playerScore === 3) {
    console.log('Player is the big Winner!');
  } else {
    console.log('Computer is the big winner!');
  }
  