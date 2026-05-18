function getComputerChoice() {
  let computerRandomNumber = Math.random() * 10;
  if (computerRandomNumber <= 3.33) {
    return "rock";
  } else if (computerRandomNumber <= 6.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userPrompt = String(
    prompt("Enter rock, paper or scissors!"),
  ).toLowerCase();
  return userPrompt;
}

let computerScore = 0;
let humanScore = 0;
