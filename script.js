//script runs a console-based game of rock, paper, scissors where a player plays the computer

//write a function called game -> ALL LOGIC FOR THE GAME INSIDE THIS FUNCTION
function game() {
    //initialize global variables
    let roundNumber = 1;
    let playerWin = 0;
    let computerWin = 0;

    //write a function called computerPlay to generate computer's choice
    function computerPlay () {
        //generate a random number between 0 and 2 inclusive
        let computerSelection = Math.floor(Math.random()*3);
        //for 0, return 'rock'; for 1, return 'paper'; for 2, return 'scissors'
        return computerSelection === 0 ? "rock" : computerSelection === 1 ? "paper" : "scissors";
    }

    //ask player for input of 'rock', 'paper', or 'scissors' (case insensitive)
    function getPlayerChoice () {
        const playerSelection = prompt("Choose your weapon: rock, paper, or scissors").toLowerCase();
        //validate player input
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            return playerSelection;
        } else {
            //if rock, paper, or scissors isn't chosen, tell player to correct their choice
            console.log("please choose rock, paper, or scissors");
            //call function to get player choice again
            getPlayerChoice();
        }
    }

    //write a function called playRound that takes two parameters and
    //plays a single round of Rock Paper Scissors
    function playRound (playerSelection, computerSelection) {
        //compare player vs computer selections to decide winner of current round
        //if playerSelection equals computerSelection, the round is a tie
        if ((playerSelection === "rock" && computerSelection === "rock") ||
            (playerSelection === "paper" && computerSelection === "paper") ||
            (playerSelection === "scissors" && computerSelection === "scissors")) {
            //let player know it's a tie, and replay the round
            console.log("It's a tie! Try again.");
            //return result = "It's a tie! Try again.";
        }  
        //if player wins round
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            //move onto next round, add to player score, let player know they won
            console.log(`Round: ${roundNumber++};
                        Player Chose: ${playerSelection} - Player Score: ${++playerWin};
                        Computer Chose: ${computerSelection} - Computer Score: ${computerWin};
                        You win!`);
            //return (roundNumber++, playerWin++, result = "You win!");
        }
        //if player loses round
        if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            //move onto next round, add to computer score, let player know they lost
            console.log(`Round: ${roundNumber++};
                        Player Chose: ${playerSelection} - Player Score: ${playerWin};
                        Computer Chose: ${computerSelection} - Computer Score: ${++computerWin};
                        You lose!`);
            //return (roundNumber++, computerWin++, result = "You lose!");
        }
    }

    //run playRound 5 times (loop this later)
    playRound(getPlayerChoice(), computerPlay()); //round 1
    playRound(getPlayerChoice(), computerPlay()); //round 2
    playRound(getPlayerChoice(), computerPlay()); //round 3
    playRound(getPlayerChoice(), computerPlay()); //round 4
    playRound(getPlayerChoice(), computerPlay()); //round 5

    //announce winner at the end of 5 rounds (for a best of 5)
    if (playerWin >= 3) {
        //let player know they won
        console.log("Congratulations! You've beaten the Computer!");
        //return "Congratulations! You've beaten the Computer!";
    } else if (computerWin >= 3) {
        //let player know they lost
        console.log("Sad Panda! The Computer has bested you!");
        //return "Sad Panda! The Computer has bested you!";
    } else {
        //let player know it's a cats game
        console.log("After 5 rounds, nobody wins...");
        //return "After 5 rounds, nobody wins...";
    }
}
//call game function at the end
game();