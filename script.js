const choices = ["rock", "paper", "scissors"];

game();

function game() {
  console.log("Game 1: ");
  playRound();
  console.log("Game 2: ");
  playRound();
}

function computerPlay() {
  let compInput = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer chose: " + compInput + "!");
  return compInput;
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerPlay();
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      console.log("Player Wins! Rock beats Scissors.");
    } else if (computerSelection == "paper") {
      console.log("Computer Wins! Paper beats Rock.");
    } else if (computerSelection == "rock") {
      console.log("Tie! You both chose Rock.");
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log("Computer Wins! Scissors beat Paper.");
    } else if (computerSelection == "rock") {
      console.log("Player Wins! Paper beats Rock.");
    } else if (computerSelection == "paper") {
      console.log("Tie! You both chose Paper.");
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("Computer Wins! Rock beats Scissors.");
    } else if (computerSelection == "paper") {
      console.log("Player Wins! Scissors beat Paper.");
    } else if (computerSelection == "scissors") {
      console.log("Tie! You both chose Scissors.");
    }
  }
}

function playerChoice() {
  let input = prompt("Choose Rock, Paper, or Scissors:");
  while (input == null) {
    input = prompt("Choose Rock, Paper, or Scissors:");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  if (check == true) {
    console.log("Player chose: " + input + "!");
    return input;
  }
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    alert(
      "You entered something other than our choices. Refresh the page to try again."
    );
    return false;
  }
}
