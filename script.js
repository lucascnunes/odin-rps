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
