
let btnRock = document.createElement("button");
btnRock.textContent = "Rock";
document.body.append(btnRock);
btnRock.classList.add('btn');

let divSpace01 = document.createElement("div")
divSpace01.style.height = '500 px';
document.body.append(divSpace01);

let btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
document.body.append(btnPaper);
btnPaper.classList.add('btn');

let divSpace02 = document.createElement("div")
divSpace02.style.height = '500 px';
document.body.append(divSpace02);

let btnScissor = document.createElement("button");
btnScissor.textContent = "Scissors";
document.body.append(btnScissor);
btnScissor.classList.add('btn');

let divSpace03 = document.createElement("div")
divSpace03.style.height = '500 px';
document.body.append(divSpace03);


let divResults = document.createElement("div");
document.body.append(divResults);
divResults.textContent = "Results";

let buttons = document.querySelectorAll('.btn');

let resultList = document.createElement("ul");

divResults.appendChild(resultList);

let humanScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener('click', function() {

       
        let humanChoice = this.textContent;
        humanChoice = humanChoice.toLowerCase();

        console.log("Your choice: " + humanChoice);
        let yourChoice = document.createElement('li');
        resultList.appendChild(yourChoice);
        yourChoice.textContent = "Your choice: " + humanChoice;
        
        let computerChoice = getComputerChoice();

        console.log("Computer's choice: " + computerChoice);
        let pcChoice = document.createElement('li');
        resultList.appendChild(pcChoice);
        pcChoice.textContent = "Computer's choice: " + computerChoice;

        playRound(humanChoice, computerChoice);

        console.log("Your Score: " + humanScore);
        let yourScore = document.createElement('li');
        resultList.appendChild(yourScore);
        yourScore.textContent = "Your Score: " + humanScore;

        console.log("Computer's Score: " + computerScore);
        let pcScore = document.createElement('li');
        resultList.appendChild(pcScore);
        pcScore.textContent = "Computer's Score: " + computerScore;
                
        console.log("");
        let space = document.createElement('li');
        resultList.appendChild(space);
        space.style.listStyleType= "none";
        space.textContent = "---";

        let finalMsg = ""

        if (humanScore === 5) {
            console.log("You win! Congrats!");
            finalMsg = document.createElement('li');
            resultList.appendChild(finalMsg);
            finalMsg.textContent = "You win! Congrats!";
            alert("You win! Congrats!");   
            
            let removeBullets = document.querySelectorAll("li");
            removeBullets.forEach(element => {
                element.remove();
            });

            humanScore = 0;
            computerScore = 0;

        } else if (computerScore === 5) {
            console.log("You lose! Try again.");
            finalMsg = document.createElement('li');
            resultList.appendChild(finalMsg);
            finalMsg.textContent = "You lose! Try again.";
            alert("You lose! Try again.");
            
            let removeBullets = document.querySelectorAll("li");
            removeBullets.forEach(element => {
                element.remove();
            });

            humanScore = 0;
            computerScore = 0;
        }
        
    });
});

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
    
    return computerChoice;
}




function playRound(humanChoice,computerChoice) {            
            
    let msg = "";

    if (humanChoice === computerChoice) {
        console.log("Draw");
        msg = "Draw";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        msg = "You lose! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
        msg = "You win! Rock beats Scissors.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
        msg = "You lose! Scissors beat Paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
        msg = "You win! Paper beats Rock.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        msg = "You lose! Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
        msg = "You win! Scissors beat Paper.";
    }


    let resultMsg = document.createElement('li');
    resultList.appendChild(resultMsg);
    resultMsg.textContent = msg;        
}


        

