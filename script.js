let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Create targetNumber function, to return a random integer between 0 and 9.
const generateTarget = () => {
    let targetNumber = Math.floor(Math.random() * 9) + 1;
    return targetNumber;
};


// Determine which guess is closest to the target number

const compareGuesses = (humanGuess, compGuess, secretTarget) => {

};