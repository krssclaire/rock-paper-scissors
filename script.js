let playerScore = 0;
let computerScore = 0;

let btn = document.querySelector('button');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

btn.addEventListener('click', playRound); 

function playRound(playerSelection, computerSelection) {
    
    function getComputerChoice() {
        computerSelection = Math.floor(Math.random() * 3);
        
        if (computerSelection === 0) {
            console.log('Rock');
        } else if (computerSelection === 1) {
            console.log('Paper');
        } else {
            console.log('Scissors');
        }
    }
    
    function getPlayerChoice() {
        rock.addEventListener('click', () => {
            playerSelection = 'rock';
            return playerSelection
        });
        paper.addEventListener('click', () => {
            playerSelection = 'paper'; 
            return playerSelection
        });
        scissors.addEventListener('click', () => {
            playerSelection = 'scissors;'
            return playerSelection
        });
        
        if (playerSelection == 'rock') {
            console.log('Rock');
        } else if (playerSelection == 'paper') {
            console.log('Paper');
        } else if (playerSelection == 'scissors') {
            console.log('Scissors');
        }
    }
    
    getPlayerChoice();
    getComputerChoice();

        

    // Display messages
    let message;
    let playerPoint = 0;
    let computerPoint = 0;

    if (
        (playerSelection === 'rock' && computerSelection === 2) ||
        (playerSelection === 'paper' && computerSelection === 0) ||
        (playerSelection === 'scissors' && computerSelection === 1)  
        ) {
        message = 'You won!';
        playerPoint += 1;
        playerScore += playerPoint;
        computerScore += computerPoint;
        console.log(message);
        console.log('Player pts: ' + playerPoint);
        console.log('Computer pts: ' + computerPoint);
    } else if (
        (computerSelection === 0 && playerSelection === 'scissors') ||
        (computerSelection === 1 && playerSelection === 'rock') ||
        (computerSelection === 2 && playerSelection === 'paper') 
        ) {
        computerPoint += 1;
        message = 'You lost!';
        playerScore += playerPoint;
        computerScore += computerPoint;
        console.log(message);
        console.log('Player pts: ' + playerPoint);
        console.log('Computer pts: ' + computerPoint);
    } else if (
        (computerSelection === 0 && playerSelection === 'rock') ||
        (computerSelection === 1 && playerSelection === 'paper') ||
        (computerSelection === 2 && playerSelection === 'scissors')    
        ) {
        message = 'It is a tie';
        playerPoint += 0;
        computerPoint += 0;
        playerScore += playerPoint;
        computerScore += computerPoint;
        console.log(message);
        console.log('Player pts: ' + playerPoint);
        console.log('Computer pts: ' + computerPoint);
    }

    console.log('Player Score: ' + playerScore);
    console.log('ComputerScore: ' + computerScore); 
    console.log('------------'); // Divider for Web Console logs
}

/*
for (let i = 0; i <= 10; i++) {

    playRound();

    if (playerScore == 5 && playerScore > computerScore) {
        console.log('Player is the final winner!');
        break;
    } else if (computerScore == 5 && computerScore > playerScore) {
        console.log('Computer is the final winner!');
        break;
    } else {
        console.log('Peace and love, you both won :)');
        break;
    }
}*/

