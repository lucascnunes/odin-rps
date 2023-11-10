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
function game() {
    // debugger;
    playerChoice = prompt("Let's play Rock, Paper, Scissors! Pick one option:");

    if (
        playerChoice.toLowerCase() === "rock" ||
        playerChoice.toLowerCase() === "paper" ||
        playerChoice.toLowerCase() === "scissors"
    ) {
        //
        while (round <= 5) {
            if (round !== 1) playerChoice = prompt("Let's play Rock, Paper, Scissors! Pick one option:");

            console.log("Round " + round + " out of 5:");
            console.log("You've picked " + playerChoice);
            console.log(playRound(playerChoice, getComputerChoice()));
            round++;
        }

        console.log("End of the game!");

        // verify who won
        if (playerPoints === computerPoints) {
            console.log("You two draw with " + playerPoints + " points!");
        } else if (playerPoints > computerPoints) {
            console.log("You won with " + playerPoints + " points!");
        } else {
            console.log("The computer won with " + computerPoints + " points!");
        }

        // restart
        resetGame();
    } else {
        console.log("Please pick one of the options: Rock, Paper or Scissors");
        // restart
        resetGame();
    }
}

function resetGame() {
    round = 1;
    playerPoints = 0;
    computerPoints = 0;
    playerChoice = null;
    console.log("Type game() on the console to start Rock, Paper and Scissors game!");
}
