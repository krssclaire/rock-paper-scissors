/*
let rock = 0;
let paper = 1;
let scissors = 2;
*/
let computerSelection;
let playerSelection;


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



getComputerChoice();