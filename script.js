//script plays a game of rock, paper, scissors where a player plays the computer

//write a function called game -> ALL LOGIC FOR THE GAME INSIDE THIS FUNCTION
function game() {
    //initialize global variables
    let roundNumber = 1;
    let playerWin = 0;
    let computerWin = 0;

    //get player input by listening for button click
    const choices = document.querySelectorAll(".choices");

    choices.forEach((choice) => {
        choice.addEventListener("click", function () {
            playerSelection = this.textContent;

            //generate computer input
            const computerChoices = ["rock", "paper", "scissors"];
            const computerSelection = computerChoices[Math.floor(Math.random() * 3)];

            //call playRound
            playRound(playerSelection, computerSelection);
        });
    });

    //write a function called playRound that plays a single round of Rock Paper Scissors
    function playRound (playerSelection, computerSelection) {
        //compare player vs computer selections to decide winner of current round
        const currentRound = `You chose: ${playerSelection}\nComputer chose: ${computerSelection}`;

        //if playerSelection equals computerSelection, the round is a tie
        if (playerSelection === computerSelection) {
            alert(`${currentRound}\nThis round is a tie!`);
        }  
        //if player wins round
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            alert(`${currentRound}\nYou win!`)
        }
        //if player loses round
        if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            alert(`${currentRound}\nYou lose!`);
        }
    }

    //announce winner once either player or computer wins 5 rounds
    if (playerWin === 5) {
        //let player know they won
        console.log("Congratulations! You've beaten the Computer!");
        //return "Congratulations! You've beaten the Computer!";
    } else if (computerWin === 5) {
        //let player know they lost
        console.log("Sad Panda! The Computer has bested you!");
        //return "Sad Panda! The Computer has bested you!";
    }
}
//call game function at the end
game();