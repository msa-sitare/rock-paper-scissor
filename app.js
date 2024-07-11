function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  //   const selectedChoice = Math.floor(Math.random() * choices.length);
  //   return choices[selectedChoice];
  return choices[0];
}

function getHumanChoice() {
  let gamePopup = prompt("Choose between: rock, paper or scissor?");
  return gamePopup.toLowerCase();
}

// WRITE EMPTHY PROMPT OF STATEMENT

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log(`It's draw! You both chose ${humanChoice}.`);
//   } else if (humanChoice === undefined) {
//     console.log(`You forgot to choose. You need to choose one to play the game!`);
//   } else {
//     console.log(`One of you won!`);
//   }
// };

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
