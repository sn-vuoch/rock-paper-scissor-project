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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log(
        `You tie! You choose ${humanChoice} and Computer also choose ${computerChoice}`,
      );
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  
  if (humanScore > computerScore) {
    console.log(
      `You win! your score is ${humanScore}. Computer score is ${computerScore}.`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose! your score is ${humanScore}. Computer score is ${computerScore}.`,
    );
  } else {
    console.log(
      `You tie! your score is ${humanScore}. Computer score is ${computerScore}.`,
    );
  }
}

playGame();
