console.log("hello");

function getComputerChoice() {

    let computerNumber = Math.floor((Math.random() * 3));

    let computerChoice = "";

    if (computerNumber === 0) {
        computerChoice = "rock";
    } else if (computerNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("Computer's choice: " + computerChoice);
    
    return computerChoice;
    
}



function getHumanChoice() {

    let humanChoice = (prompt("Type 'rock', 'paper' or 'scissors': ")).toLowerCase();

    console.log("Your choice: " + humanChoice) 

    return humanChoice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Your Score: " + humanScore);
console.log("Computer's Score: " + computerScore);