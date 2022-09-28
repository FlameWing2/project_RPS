const RPS = ['rock', 'paper', 'scissors'];
const score = [0, 0];
const choice = () => RPS[Math.floor(Math.random()*3)]
const getComputerChoice = () => choice(); 

const playRound = ( playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" &&     computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ) {
        score[0] = score[0] + 1;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}. Score: ${score}`); 

    } else if (playerSelection === "scissor" && computerSelection === "rock" || playerSelection === "rock" &&     computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ) {
        score[1] = score[1] + 1;
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}. Score: ${score}`);
        
    } else console.log('Its a tie!');
 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log(score)
    }
    console.log('Final score: ' + score)
    if (score[0] > score[1]) {
        console.log('Player Wins!');
    }else if (score[0] < score[1]) {
        console.log('Computer Wins!');
    } else console.log('TIE!');
}
game()