let humanScore = 0;
let computerScore = 0;

//Capturing the documents' elements 
const parent = document.querySelector(".user-choice");
const temp = document.querySelector(".tempname");
const playerWins = document.querySelector(".human-score");
const aiWins = document.querySelector(".ai-score");

parent.addEventListener("click", 
    (e) => playRound(e.target.name, getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
        default:
            return null; 
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors");
}

function lostMessage(p, c) {
    computerScore++;
    aiWins.textContent = computerScore; 
    return `You lost! ${p} loses to ${c}!`; 
}

function wonMessage(p, c) {
    humanScore++; 
    playerWins.textContent = humanScore;
    return `You won! ${p} wins against ${c}!`;
}

function playRound(humanChoice, computerChoice) {
    let decapitalized = humanChoice.toLowerCase().trim();

    console.log(decapitalized, computerChoice);

    let result = "";

    if (decapitalized===computerChoice) {
        result = `You tied! ${decapitalized} ties with ${computerChoice}!`;
    } else {

        switch(decapitalized) {
            case "rock":
                result = computerChoice==="paper" ? lostMessage(decapitalized, computerChoice) : wonMessage(decapitalized, computerChoice);
                break;
            case "scissors":
                result = computerChoice==="rock" ? lostMessage(decapitalized, computerChoice) : wonMessage(decapitalized, computerChoice);
                break;
            case "paper":
                result = computerChoice==="scissors" ? lostMessage(decapitalized, computerChoice) : wonMessage(decapitalized, computerChoice);
                break;
            default:
                result = null; 
        }
    }

    temp.textContent = result;  

    if (humanScore == 5) {
        alert("YOU ARE THE WINNER!");
    }

    if (computerScore == 5) {
        alert("YOU ARE THE LOSER!");
    }

    return result; 
}

function playGame() {

    /*
    for (let i=0; i<5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(humanScore);
        console.log(computerScore);
    }

    */
}

//playGame();