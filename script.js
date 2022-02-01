//script runs a console-based game of rock, paper, scissors where a player plays the computer

//Write a function called computerPlay
function computerPlay () {
    //generate a random number between 0 and 2 inclusive
    let num = Math.floor(Math.random()*3);
    //for 0, return 'rock'
    if (num === 0) {
        return "rock";
    }
    //for 1, return 'paper'
    if (num === 1) {
        return "paper";
    }
    //for 2, return 'scissors'
    if (num === 2) {
        return "scissors";
    }
}

//Call computerPlay to create computerSelection variable to pass into playRound
const computerSelection = computerPlay();

//test computerPlay
console.log(computerPlay());

//ask player for input of 'rock', 'paper', or 'scissors' (case insensitive)
const playerSelection = prompt("Choose your weapon: rock, paper, or scissors").toLowerCase();

//test playerSelection
console.log(playerSelection);

//Write a function called playRound that takes two parameters
function playRound (playerSelection, computerSelection) {
//plays a single round of Rock Paper Scissors
    //compare user vs computer inputs to decide winner of current round
        //if playerSelection equals computerSelection
            //return "It's a tie!"
        //if playerSelection is rock and computerSelection is paper
            //return "You lose! Paper covers Rock."
        //if playerSelction is rock and computerSelection is scissors
            //return "You win! Rock crushes Scissors."
        //if playerSelection is paper and computerSelection is rock
            //return "You win! Paper covers Rock."
        //if playerSelction is paper and computerSelection is scissors
            //return "You lose! Scissors cuts Paper."
        //if playerSelection is scissors and computerSelection is rock
            //return "You lose! Rock crushes Scissors."
        //if playerSelction is scissors and computerSelection is paper
            //return "You win! Scissors cuts Paper."
    //run keepScore function to add to the winner's score
}

//Write a function called keepScore
    //keeps track of who won previous games
        //initialize playerCount and computerCount variables
        //if playRound returns "It's a tie!"
            //return playerCount and computerCount
        //if playRound returns "You win!..."
            //add 1 to playerCount
            //return playerCount and computerCount
        //if playRound returns "You lose!..."
            //add 1 to computerCount
            //return playerCount and computerCount

//Write a function called game
    //run playRound 5 times
    //announce winner at the end
        //if user score > computer score
            //return "Congratulations! You've beaten the Computer!"
        //if computer score > user score
            //return "Sad Panda! The Computer has bested you!"