let playerChoice = "";

const message = document.querySelector("#message");
const choices = document.querySelectorAll("button");
choices.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        playRound(playerChoice, getComputerChoice());
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        document.querySelector("#pc-rock").classList.add("active");
        return "Rock";
    } else if (choice == 1) {
        document.querySelector("#pc-paper").classList.add("active");
        return "Paper";
    } else {
        document.querySelector("#pc-scissors").classList.add("active");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        message.innerHTML = "You win! Rock beats Scissors!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        message.innerHTML = "You win! Scissors beats Paper!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        message.innerHTML = "You win! Paper beats Rock!!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        message.innerHTML = "You lose! Paper beats Rock!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        message.innerHTML = "You lose! Scissors beats Paper!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        message.innerHTML = "You lose! Rock beats Scissors!!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        message.innerHTML = "Draw!!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        message.innerHTML = "Draw!!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        message.innerHTML = "Draw!!";
    }

    message.classList.remove("hidden");
    setTimeout(() => {
        document.querySelector("#pc-rock").classList.remove("active");
        document.querySelector("#pc-paper").classList.remove("active");
        document.querySelector("#pc-scissors").classList.remove("active");

        message.classList.add("hidden");
    }, 800);
}

function resetGame() {
    playerChoice = "";
}
