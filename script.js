let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Returns a random integer between 0 and 9 used for the Computer's guess
const generateTarget = () => {
    let targetNumber = Math.floor(Math.random() * 9) + 1;
    return targetNumber;
}


// Determine which guess is closest to the target number

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
const humanDistance = Math.abs (secretTarget - humanGuess)
const computerDistance = Math.abs (secretTarget - computerGuess)
return humanDistance <= computerDistance;

}


// Increases the winner’s score after each round

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

  // Increases the round number
  const advanceRound = () => currentRoundNumber++;


  updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1