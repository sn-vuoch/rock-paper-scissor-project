# rock-paper-scissor-project

## Pseudocode

getComputerChoice() function:

- Create a function name getComputerChoice.
- Use Math.random() to random between 0 to 1, multiply it by 10 to get number between 0.432.. to 9.922..
- If value between 0 - 3.33 = rock, 3.33 - 6.66 = paper, 6.66 - 9.99 = scissor.

getHumanChoice() function:

- Create a function called getHumanChoice.
- Prompt to get user input.
- Convert input to string.
- Make it lowercase all cases(Rock, rock, ...).
- Return value.

playRound() function:

- Get arguments from getComputerChoice() and getHumanChoice().
- Compare those two value based on condition.

playGame() function:

- Declare score variables to keep track score.
- Move playRound() inside playGame() to able use score variables.
- Call playRound() 5 times to play 5 times.
- Compare between human score and computer score to find winner.

## Acknowledge
I would like to fully thank you to The Odin Project.