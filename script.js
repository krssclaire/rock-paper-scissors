const btn = document.getElementsByTagName('button');

const buttonClicked = e => {
    buttonId = e.target.id;
    playRound();
}

for (let button of btn) {
    button.addEventListener("click", buttonClicked);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = buttonId;
    computerSelection = Math.floor(Math.random() * 3);

    function displayPlayerSelection() {
        if (playerSelection === "rock") {
            console.log("Rock");
        } else if (playerSelection === "paper") {
            console.log("Paper");
        } else if (playerSelection === "scissors") {
            console.log("Scissors");
        }
    }

    function displayComputerSelection() {
        if (computerSelection === 0) {
            console.log("Rock");
        } else if (computerSelection === 1) {
            console.log("Paper");
        } else if (computerSelection === "scissors") {
            console.log("Scissors");
        }
        
        console.log(computerSelection);
    }

    displayPlayerSelection();
    displayComputerSelection();

    
    

    
    let message;
    let playerPoint = 0;
    let computerPoint = 0;

    if (
        (playerSelection === "rock" && computerSelection === 2) ||
        (playerSelection === "paper" && computerSelection === 0) ||
        (playerSelection === "scissors" && computerSelection === 1)  
        ) {
        message = "You won!";
        playerPoint += 1;
        console.log(message);
        console.log("Player pts: " + playerPoint);
        console.log("Computer pts: " + computerPoint);
    } else if (
        (computerSelection === 0 && playerSelection === "scissors") ||
        (computerSelection === 1 && playerSelection === "rock") ||
        (computerSelection === 2 && playerSelection === "paper") 
        ) {
        computerPoint += 1;
        message = "You lost!";
        console.log(message);
        console.log("Player pts: " + playerPoint);
        console.log("Computer pts: " + computerPoint);
    } else {
        message = "It's a tie";
        playerPoint += 0;
        computerPoint += 0;
        console.log(message);
        console.log("Player pts: " + playerPoint);
        console.log("Computer pts: " + computerPoint);
    }

    if (message === "You won!") {
        playerScore += playerPoint;
        computerScore += computerPoint;
    } else if (message === "You lost!") {
        playerScore += playerPoint;
        computerScore += computerPoint;
    } else {
        playerScore += playerPoint;
        computerScore += computerPoint;
    }

    console.log("Player Score: " + playerScore);
    console.log("ComputerScore: " + computerScore); 
   
    console.log("------------"); 
}

/*
    if (playerScore > computerScore) {
        console.log("Player is the final winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer is the final winner!");
    } else {
        console.log("Peace and love, you both won :)");
    }
 }
 */