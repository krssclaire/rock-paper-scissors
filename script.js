const displayedPlayerScore = document.querySelector('#player-score');
const displayedComputerScore = document.querySelector('#computer-score');
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
const output = document.querySelector('.message');
const buttons = document.querySelectorAll('button');
const restart = document.querySelector('.invisible');
const restartBtn = document.querySelector('.restart-btn');
let finalOutput = document.querySelector('#final-output');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttonId = e.target.id;
        playRound();
        if (playerScore == 5 && playerScore > computerScore) {
            finalOutput.textContent = 'You are the final winner! Do you want to start a new round?';
            restart.classList.add('restart');
        } else if (computerScore == 5 && computerScore > playerScore) {
            finalOutput.textContent = 'Computer is the final winner! Do you want to retry?';
            restart.classList.add('restart');
        }
    })
});

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

restartBtn.addEventListener('click', () => document.location.reload());