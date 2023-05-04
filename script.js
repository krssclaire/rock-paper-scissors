const displayedPlayerScore = document.querySelector('#player-score');
const displayedComputerScore = document.querySelector('#computer-score');
const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
const output = document.querySelector('.message');
const btn = document.getElementsByTagName('button');
const computerOptions = document.querySelectorAll('.computer div');

let playerScore = 0;
let computerScore = 0;

const buttonClicked = e => {
    buttonId = e.target.id;
    playRound();
}

for (let button of btn) {
    button.addEventListener('click', buttonClicked);

}

function playRound(playerSelection, computerSelection) {
    playerSelection = buttonId;
    computerSelection = Math.floor(Math.random() * 3);

        if (playerSelection === 'rock') {
            playerRock.style.backgroundColor = 'transparent';
            playerRock.style.color = 'white';
        } else if (playerSelection === 'paper') {
            playerPaper.style.backgroundColor = 'transparent';
            playerPaper.style.color = 'white';
        } else if (playerSelection === 'scissors') {
            playerScissors.style.backgroundColor = 'transparent';
            playerScissors.style.color = 'white';
        }

        if (computerSelection === 0) {
            computerSelection = 'rock';
            computerRock.style.backgroundColor = 'transparent';
            computerRock.style.color = 'white';
        } else if (computerSelection === 1) {
            computerSelection = 'paper';
            computerPaper.style.backgroundColor = 'transparent';
            computerPaper.style.color = 'white';
        } else {
            computerSelection = 'scissors';
            computerScissors.style.backgroundColor = 'transparent';
            computerScissors.style.color = 'white';
        }

        
    let message;
    let playerPoint = 0;
    let computerPoint = 0;

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')  
        ) {
        message = `You won: ${playerSelection} beats ${computerSelection}`;
        playerPoint += 1;
        output.textContent = message;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') 
        ) {
        computerPoint += 1;
        message = `You lost: ${computerSelection} beats ${playerSelection}`;
        output.textContent = message;
    } else {
        message = 'It is a tie!';
        playerPoint += 0;
        computerPoint += 0;
        output.textContent = message;
    }

    playerScore += playerPoint;
    computerScore += computerPoint;

    displayedPlayerScore.textContent = `Player: ${playerScore}`;
    displayedComputerScore.textContent = `Computer: ${computerScore}`;

}

if (playerScore == 5 && playerScore > computerScore) {
    console.log('Player is the final winner!');
} else if (computerScore == 5 && computerScore > playerScore) {
    console.log('Computer is the final winner!');
} else if (computerScore == 5 && playerScore == 5) {
    console.log('Peace and love, you both won :)');
} 