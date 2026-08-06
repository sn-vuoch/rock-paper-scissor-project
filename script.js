let container = document.querySelector(".container");
let resultBox = document.querySelector(".result-box");
let result = document.createElement("div");
let humanScoreRunning = document.createElement("p");
let computerScoreRunning = document.createElement("p");
let round = document.querySelector(".round");
let finalResult = document.createElement("div");

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

function updateScoreRunning(result, humanScore, computerScore) {
  humanScoreRunning.textContent = `Your Score: ${humanScore}`;
  computerScoreRunning.textContent = `Computer Score: ${computerScore}`;
  resultBox.appendChild(result);
  resultBox.appendChild(humanScoreRunning);
  resultBox.appendChild(computerScoreRunning);
}

function checkFinalResult(humanScore, computerScore) {
  switch (true) {
    case humanScore > computerScore:
      finalResult.textContent = `You win! your score is ${humanScore}. Computer score is ${computerScore}.`;
      break;
    case humanScore < computerScore:
      finalResult.textContent = `You lose! your score is ${humanScore}. Computer score is ${computerScore}.`;
      break;
    default:
      finalResult.textContent = `You tie! your score is ${humanScore}. Computer score is ${computerScore}.`;
  }
  container.appendChild(finalResult);
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let clickCount = 0;

  container.addEventListener("click", (e) => {
    round.textContent = `${clickCount + 1}`;
    // Clear result after click to show a new result
    result.textContent = "";
    finalResult.textContent = "";

    let humanChoice = e.target.textContent.toLowerCase();
    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      clickCount++;
      playRound(humanChoice, getComputerChoice());

      // Reset to 0 after 5 rounds
      if (clickCount === 5) {
        clickCount = 0;
      }
    }
  });

  function playRound(humanChoice, computerChoice) {
    switch (true) {
      case humanChoice === "paper" && computerChoice === "rock":
        result.textContent = "You win! Paper beats Rock.";
        humanScore++;
        break;
      case humanChoice === "paper" && computerChoice === "scissors":
        result.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
        break;
      case humanChoice === "rock" && computerChoice === "paper":
        result.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        break;
      case humanChoice === "rock" && computerChoice === "scissors":
        result.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        break;
      case humanChoice === "scissors" && computerChoice === "paper":
        result.textContent = "You win! Scissors beats Paper.";
        humanScore++;
        break;
      case humanChoice === "scissors" && computerChoice === "rock":
        result.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        break;
      default:
        result.textContent = `You tie! You choose ${humanChoice} and Computer also choose ${computerChoice}.`;
    }

    // Update human and computer's score after check condition
    updateScoreRunning(result, humanScore, computerScore);

    if (clickCount === 5) {
      checkFinalResult(humanScore, computerScore);
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();
