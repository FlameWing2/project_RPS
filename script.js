const RPS = ['Rock', 'Paper', 'Scissors'];

const choice = () => RPS[Math.floor(Math.random()*3)]

const getComputerChoice = () => choice(); 

console.log(getComputerChoice())


