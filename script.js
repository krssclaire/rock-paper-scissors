/*
let rock = 0;
let paper = 1;
let scissors = 2;
*/

function game() {
    function playRound(playerSelection, computerSelection) {
        
        function getComputerChoice() {
            computerSelection = Math.floor(Math.random() * 3);

            if (computerSelection === 0) {
                console.log("Rock");
            } else if (computerSelection === 1) {
                console.log("Paper");
            } else {
                console.log("Scissors");
            }

            console.log(computerSelection);
        }

        function getPlayerSelection() {
            playerSelection = prompt("Choose among Rock, Paper or Scissors", "");
            playerSelection.toLowerCase();
            
            if (playerSelection === "rock") {
                console.log("Rock");
            } else if (playerSelection === "paper") {
                console.log("Paper");
            } else {
                console.log("Scissors");
            }
        }
        
        getPlayerSelection();
        getComputerChoice();

        const WIN = "You won!";
        const LOSE = "You lost!";
        const TIE = "It's a tie";

        if (
            (playerSelection === "rock" && computerSelection === 2) ||
            (playerSelection === "paper" && computerSelection === 0) ||
            (playerSelection === "scissors" && computerSelection === 1)  
            ) {
            console.log(WIN);
        } else if (
            (computerSelection === 0 && playerSelection === "scissors") ||
            (computerSelection === 1 && playerSelection === "rock") ||
            (computerSelection === 2 && playerSelection === "paper") 
            ) {
            console.log(LOSE);
        } else {
            console.log(TIE);
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}
console.log(game());
