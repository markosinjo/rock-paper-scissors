function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper"; 
    } else return "scissors";
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = [];
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result[0] = "Draw, rock and rock";
            result[1] = 0;
            return result;

        } else if (computerSelection === "paper") {
            result[0] = "You lose, paper beats rock";
            result[1] = -1;
            return result;

        } else result[0] = "You win, rock beats scissors";
                result[1] = 1;
                return result;

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result[0] = "You win, paper beats rock";
            result[1] = 1;
            return result;

        } else if (computerSelection === "paper") {
            result[0] = "Draw, paper and paper";
            result[1] = 0;
            return result;

        } else result[0] = "You lose, scissors beat paper";
                result[1] = -1;
                return result;

    } else {
        if (computerSelection === "rock") {
            result[0] = "You lose, rock beats scissors";
            result[1] = -1;
            return result;

        } else if (computerSelection === "paper") {
             result[0] = "You win, scissors beat paper";
             result[1] = 1;
             return result;

        } else { 
            result[0] = "Draw, scissors and scissors";
            result[1] = 0;
            return result;
        }
    }
}



const btns = document.querySelectorAll(".btn");
const roundDisplay = document.querySelector("#roundResult");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

let totalPlayerScore = 0;
let totalComputerScore = 0;

btns.forEach((button) => {button.addEventListener("click",  (e) => {

    const result = playRound(e.target.innerText, getComputerChoice());
    // Display round result on page
    roundDisplay.textContent = result[0];

    if (result[1] === 1) {
        totalPlayerScore++;
    }
    if (result[1] === -1) {
        totalComputerScore++;
    }
    
    playerScore.textContent = "Player score: " + totalPlayerScore;
    computerScore.textContent = "Computer score: " +totalComputerScore;


    // reset the text style to default 
    roundDisplay.style.cssText = "color:black; font-size: 48px; font-weight: 400;"

    // Declare the winner, reset score after
    if (totalPlayerScore === 5) {
        roundDisplay.textContent = "YOU WIN"
        roundDisplay.style.cssText = "color: green; font-size: 84px; font-weight: 900;";
        totalPlayerScore = 0;
        totalComputerScore = 0;
    } 

    if (totalComputerScore === 5) {
        roundDisplay.textContent = "YOU LOSE"
        roundDisplay.style.cssText = "color: red; font-size: 84px;";
        totalComputerScore = 0;
        totalPlayerScore = 0;
    } 
})});

