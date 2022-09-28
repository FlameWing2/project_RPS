const RPS = ['rock', 'paper', 'scissors'];

const choice = () => RPS[Math.floor(Math.random()*3)]

const getComputerChoice = () => choice(); 

const playRound = ( playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" &&     computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ) {
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "scissor" && computerSelection === "rock" || playerSelection === "rock" &&     computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ) {
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    } else console.log('Its a tie!')
}

