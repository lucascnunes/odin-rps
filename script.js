let round = 1;
let playerPoints = 0;
let computerPoints = 0;
let playerChoice = "";

console.log("Type game() on the console to start Rock, Paper and Scissors game!");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        // rock
        return "Rock";
    } else if (choice == 1) {
        // paper
        return "Paper";
    } else {
        // scissors
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("The computer picked " + computerSelection);
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerPoints += 1;
        return "You win! Rock beats Scissors!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerPoints += 1;
        return "You win! Scissors beats Paper!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerPoints += 1;
        return "You win! Paper beats Rock!!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerPoints += 1;
        return "You lose! Paper beats Rock!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerPoints += 1;
        return "You lose! Scissors beats Paper!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerPoints += 1;
        return "You lose! Rock beats Scissors!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Draw!!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return "Draw!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return "Draw!!";
    }
}
