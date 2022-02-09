//initializations
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const choices = document.querySelectorAll(".choices");

//for each choice the player makes,
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        //identify player choice
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

        //check for a winner
        checkWinner();
    });
});

//update the moves in the browser
function updateMoves(playerSelection, computerSelection) {
    document.getElementById("playerMove").src = `./img/${playerSelection}.svg`;
    document.getElementById("computerMove").src = `./img/${computerSelection}.svg`;
}

//play a single round of Rock Paper Scissors
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

//update the score in the browser
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

//check for a winner once either player or computer wins 5 rounds
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        openEndGameModal();
        displayEndGameMessage();
        restartGame();
    }
}

//end of game modal initializations
const endGameModal = document.getElementById("endGameModal");
const endGameModalTitle = document.getElementById("endGameModalTitle");
const modalOverlay = document.getElementById("modalOverlay");
const restartButton = document.getElementById("restartButton");


//pop open the modal with overlay
function openEndGameModal() {
    endGameModal.classList.add("active");
    modalOverlay.classList.add("active");
}

//populate modal title
function displayEndGameMessage() {
    return playerScore > computerScore
    ? (endGameModalTitle.textContent = `Congratulations! After ${roundNumber} rounds, you've won!`)
    : (endGameModalTitle.textContent = `After ${roundNumber} rounds, the computer has bested you...`);
}

//restart the game
function restartGame() {
    restartButton.addEventListener("click", () => {
        window.location.reload();
    });
}