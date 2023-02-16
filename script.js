function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper"; 
    } else return "scissors";
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Draw, rock and rock");
            return 0;

        } else if (computerSelection === "paper") {
            console.log("You lose, paper beats rock");
            return -1;

        } else console.log("You win, rock beats scissors");
               return 1;

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win, paper beats rock");
            return 1;

        } else if (computerSelection === "paper") {
            console.log("Draw, paper and paper");
            return 0;

        } else console.log("You lose, scissors beat paper");
               return -1;

    } else {
        if (computerSelection === "rock") {
            console.log("You lose, rock beats scissors");
            return -1;

        } else if (computerSelection === "paper") {
             console.log("You win, scissors beat paper");
             return 1;

        } else { 
            console.log("Draw, scissors and scissors");
            return 0;
        }
    }
}

function game() {
    // Play the game 5 times and show the winner
    let result = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Chose rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        result += playRound(playerSelection, computerSelection);
    }
    if (result > 0) {
        console.log("You win " + result);
    } else if (result < 0) {
        console.log("You lose " + result * -1);
    } else console.log("Its a draw");
}


console.log(game());