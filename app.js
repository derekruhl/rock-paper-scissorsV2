// function for computer to randomly select choice

function getComputerChoice() {

}

// option for player to select choice

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

// function to keep score for best of 5

// rules for winning

const currentTurn = 0;
let playerTurn = 0;
let computerTurn = 0;

