//script plays a game of rock, paper, scissors where a player plays the computer

let playerScore = 0;
let computerScore = 0;

//get player input by listening for button click
const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        playerSelection = this.textContent;

        //generate computer input
        const computerChoices = ["rock", "paper", "scissors"];
        const computerSelection = computerChoices[Math.floor(Math.random() * 3)];

        //play the round with player and computer choices
        playRound(playerSelection, computerSelection);

        //update score in browser
        updateScore();

        //check for a winner, and reset game if there is one
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

//function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection) {
    //compare player vs computer selections to decide winner of current round
    const currentRound = `You chose: ${playerSelection}\nComputer chose: ${computerSelection}`;

    //if the round is a tie
    if (playerSelection === computerSelection) {
        alert(`${currentRound}\nThis round is a tie!`);
    }  
    //if player wins
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        alert(`${currentRound}\nYou win!`)
        playerScore++;
    }
    //if player loses
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        alert(`${currentRound}\nYou lose!`);
        computerScore++;
    }
}

//function that updates the score in the browser
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

//function that checks for a winner once either player or computer wins 5 rounds
function checkWinner() {
    if (playerScore === 5) {
        alert("Congratulations! You've beaten the Computer!");
        return true;
    } else if (computerScore === 5) {
        alert("Sad Panda! The Computer has bested you!");
        return true;
    } else {
        return false;
    }
}