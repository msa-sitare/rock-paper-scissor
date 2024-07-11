function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const selectedChoice = Math.floor(Math.random() * choices.length);
  return choices[selectedChoice];
}

getComputerChoice();

function getHumanChoice() {
    let gamePopup = prompt('Choose between: rock, paper or scissor?');
    return gamePopup;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}
