const displayedPlayerScore = document.querySelector('#player-score');
const displayedComputerScore = document.querySelector('#computer-score');
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
const output = document.querySelector('.message');
const btn = document.getElementsByTagName('button');
let playerScore = 0;
let computerScore = 0;

const buttonClicked = e => {
    buttonId = e.target.id;
    if (playerScore == 5 && playerScore > computerScore) {
        output.textContent = 'Player is the final winner!';
        output.textContent = 'Refresh the page for a new round';
        button.removeEventListener('click', buttonClicked);
    } else if (computerScore == 5 && computerScore > playerScore) {
        output.textContent = 'Computer is the final winner!';
        output.textContent = 'Refresh the page for a new round';
        button.removeEventListener('click', buttonClicked);
    } else if (computerScore == 5 && playerScore == 5) {
        output.textContent = 'Peace and love, you both won :)';
        output.textContent = 'Refresh the page for a new round';
        button.removeEventListener('click', buttonClicked);
    } 
    playRound();
}

for (let button of btn) {
    button.addEventListener('click', buttonClicked);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = buttonId;
    computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection === 0) {
        computerSelection = 'rock';
        computerRock.style.backgroundColor = 'transparent';
        computerRock.style.color = 'white';
        computerPaper.style.backgroundColor = 'whitesmoke';
        computerPaper.style.color = 'black'; 
        computerScissors.style.backgroundColor = 'whitesmoke';
        computerScissors.style.color = 'black';
    } else if (computerSelection === 1) {
        computerSelection = 'paper';
        computerPaper.style.backgroundColor = 'transparent';
        computerPaper.style.color = 'white';
        computerRock.style.backgroundColor = 'whitesmoke';
        computerRock.style.color = 'black';
        computerScissors.style.backgroundColor = 'whitesmoke';
        computerScissors.style.color = 'black';
    } else {
        computerSelection = 'scissors';
        computerScissors.style.backgroundColor = 'transparent';
        computerScissors.style.color = 'white';
        computerRock.style.backgroundColor = 'whitesmoke';
        computerRock.style.color = 'black';
        computerPaper.style.backgroundColor = 'whitesmoke';
        computerPaper.style.color = 'black'; 
    }

    let playerPoint = 0;
    let computerPoint = 0;

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')  
        ) {
        playerPoint += 1;
        output.textContent = `Your point: ${playerSelection} beats ${computerSelection}`;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') 
        ) {
        computerPoint += 1;
        output.textContent = `Computer's point: ${computerSelection} beats ${playerSelection}`;
    } else {
        playerPoint += 0;
        computerPoint += 0;
        output.textContent = 'It is a tie!';
    }

    playerScore += playerPoint;
    computerScore += computerPoint;

    displayedPlayerScore.textContent = `Player: ${playerScore}`;
    displayedComputerScore.textContent = `Computer: ${computerScore}`;
}