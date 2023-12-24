// function for computer to randomly select choice

function getComputerChoice() {

}

// option for player to select choice

// function that plays a single round

function playRPS(param1, param2) {
    if (param1 == 'rock' && param2 == 'scissors') {
        return 'rock beat scissors!'
    } else if (para1 == 'scissors' && para2 == 'paper') {
        return 'scissors beat paper!'
    } else if (para1 == 'paper' && param2 == 'rock') {
        return 'paper beats rock!'
    } else return "it's a tie"
};

// function to keep score for best of 5

// rules for winning

const currentTurn = 0;
let playerTurn = 0;
let computerTurn = 0;

