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
