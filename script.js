function game() {

    let playerScore = 0;
    let computerScore = 0;

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

        function getPlayerChoice() {
            playerSelection = prompt('Choose among Rock, Paper or Scissors and do not forget to open Web Console to see the result (ctrl + Shift + J)', '');
            playerSelection.toLowerCase();
            
            if (playerSelection === "rock") {
                console.log("Rock");
            } else if (playerSelection === "paper") {
                console.log("Paper");
            } else {
                console.log("Scissors");
            }
        }
        
        getPlayerChoice();
        getComputerChoice();

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
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log("Player is the final winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer is the final winner!");
    } else {
        console.log("Peace and love, you both won :)");
    }
 }

game();
