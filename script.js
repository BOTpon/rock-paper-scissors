let randomNumber = Math.floor(Math.random() * 3) + 1;

function computerPlay() {
  if (randomNumber == 1) {
    console.log("Rock!");
  } else if (randomNumber == 2) {
    console.log("Paper!");
  } else {
    console.log("Scissors!");
  }
}

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function singleRound(playerSelection, computerSelection) {
  if (playerSelection == rock) {
    if (computerSelection == scissors) {
      console.log("Player Wins! Rock beats Scissors.");
    } else if (computerSelection == paper) {
      console.log("Computer Wins! Paper beats Rock.");
    } else if (computerSelection == rock) {
      console.log("Tie! You both chose Rock.");
    }
  }
  if (playerSelection == paper) {
    if (computerSelection == scissors) {
      console.log("Computer Wins! Scissors beat Paper.");
    } else if (computerSelection == rock) {
      console.log("Player Wins! Paper beats Rock.");
    } else if (computerSelection == paper) {
      console.log("Tie! You both chose Paper.");
    }
    if (playerSelection == scissors) {
      if (computerSelection == rock) {
        console.log("Computer Wins! Rock beats Scissors.");
      } else if (computerSelection == paper) {
        console.log("Player Wins! Scissors beat Paper.");
      } else if (computerSelection == scissors) {
        console.log("Tie! You both chose Scissors.");
      }
    }
  }
}
