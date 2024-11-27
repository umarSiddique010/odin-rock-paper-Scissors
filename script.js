const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

const randomNumberOneToNinety = () => Math.floor(Math.random() * 90);

function getComputerChoice() {
  const randomNumber = randomNumberOneToNinety();

  if (randomNumber >= 0 && randomNumber < 30) {
    return rock;
  }

  if (randomNumber >= 30 && randomNumber < 60) {
    return paper;
  }

  if (randomNumber >= 60 && randomNumber < 90) {
    return scissors;
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter - Rock, Paper or Scissors to Play the Game");

  //  Checking if user filled a not valid input

  if (![rock, paper, scissors].includes(humanChoice)) {
    alert("Please enter a VALID Input");
    return;
  }

  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  // Matching Computer with User

  if (humanChoice === computerChoice) {
    console.log("Match Draw! Neither win");
  } else if (
    (humanChoice === rock && computerChoice == scissors) ||
    (humanChoice === scissors && computerChoice === paper) ||
    (humanChoice === paper && computerChoice === rock)
  ) {
    console.log(`You Win! ${humanChoice} beats The ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You Lose! ${computerChoice} beats The ${humanChoice}`);
    computerScore++;
  }

  // A simple message to show who has high score

  if (computerScore > humanScore) {
    console.warn("Computer Score Running High!!");
  } else if (computerScore < humanScore) {
    console.info("Your Score is Running High!!!");
  } else {
    console.warn("Same Scores! Match Draw😐");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  for (let i = 0; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection) {
      playRound(humanSelection, computerSelection);
    } else {
      i--;
    }
  }
}

    function result() {

        if (humanScore > computerScore) {
            console.log(`Congratulations! You WON the match by ${humanScore},
                Computer score: ${computerScore}`)
        } else {
                console.log((`Better Luck Next time. 
                   your score: ${humanScore}
                   computer score: ${computerScore}`));
                
        }

    }


try {
  playGame();
  result()
} catch (error) {
  alert("Something went Wrong");
}
