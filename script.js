//script plays a game of rock, paper, scissors where a player plays the computer

//initialize scores to 0
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

//get player input by listening for button click
const choices = document.querySelectorAll(".choices");

//main game function
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        playerSelection = this.value;

        //generate computer input
        const computerChoices = ["rock", "paper", "scissors"];
        const computerSelection = computerChoices[Math.floor(Math.random() * 3)];

        //update the moves player and computer chose
        updateMoves(playerSelection, computerSelection);

        //play the round with player and computer choices
        playRound(playerSelection, computerSelection);

        //update score in browser
        updateScore();

        //check for a winner, and reset game if there is one
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
            document.getElementById("playerMove").src = `./img/person.svg`;
            document.getElementById("computerMove").src = `./img/computer.svg`;
            document.getElementById("displayResult").textContent = "Choose your weapon!";
            roundNumber = 1;
        }
    });
});

//function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection) {
    //if the round is a tie
    if (playerSelection === computerSelection) {
        document.getElementById("displayResult").textContent = `Round ${roundNumber}: Tie!`;
        roundNumber++;
    }  
    //if player wins
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        document.getElementById("displayResult").textContent = `Round ${roundNumber}: You win this round!`;
        playerScore++;
        roundNumber++;
    }
    //if player loses
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        document.getElementById("displayResult").textContent = `Round ${roundNumber}: You lost this round...`;
        computerScore++;
        roundNumber++;
    }
}

//function that updates the moves in the browser
function updateMoves(playerSelection, computerSelection) {
    document.getElementById("playerMove").src = `./img/${playerSelection}.svg`;
    document.getElementById("computerMove").src = `./img/${computerSelection}.svg`;
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
        alert("The Computer has bested you!");
        return true;
    } else {
        return false;
    }
}