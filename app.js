const choices = ["rock", "paper", "scissor"];

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  //   const selectedChoice = Math.floor(Math.random() * choices.length);
  //   return choices[selectedChoice];
  return choices[0];
}

function getHumanChoice() {
  let gamePopup = prompt("Choose between: rock, paper or scissor?");
  return gamePopup ? gamePopup.toLowerCase() : "";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's draw! You both chose ${humanChoice}.`);
  } else if (!choices.includes(humanChoice)) {
    console.log(
      `You forgot to choose. You need to choose one to play the game!`
    );
  } else if (
    (humanChoice === "rock") && (computerChoice === "scissor") ||
    (humanChoice === "paper") && (computerChoice === "rock") ||
    (humanChoice === "scissor") && (computerChoice === "paper")
  ) {
    console.log(`You won! ${capitalize(humanChoice)} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lost! ${capitalize(computerChoice)} beats ${humanChoice}.`);
    computerScore++;
  }

  console.log(`Score You: ${humanScore} Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
