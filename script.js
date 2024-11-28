const playBtns = document.querySelectorAll(".rps-choice");
const msgBox = document.querySelector(".msg-box");
const resultBox = document.querySelector(".result-box");
const scoreMsg = document.querySelector(".score-msg");
const resetBtn = document.querySelector(".reset-btn");

let round = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    let buttonValue = playBtn.textContent.toLowerCase();
    const humanSelection = getHumanChoice(buttonValue);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    result();
  });
});

resetBtn.addEventListener("click", reset)


function randomNumberOneToNinety() {
  return Math.floor(Math.random() * 90);
}

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

function getHumanChoice(buttonValue) {
  return buttonValue;
}

function playRound(humanChoice, computerChoice) {
  // Matching Computer with Human

  if (humanChoice === computerChoice) {
    msgBox.textContent = "Match Draw! Neither win";
    round++;
  } else if (
    (humanChoice === rock && computerChoice == scissors) ||
    (humanChoice === scissors && computerChoice === paper) ||
    (humanChoice === paper && computerChoice === rock)
  ) {
    msgBox.textContent = `You Win! ${humanChoice} beats The ${computerChoice}`;
    humanScore++;
    round++;
  } else {
    msgBox.textContent = `You Lose! ${humanChoice} is beaten by The ${computerChoice}`;
    computerScore++;
    round++;
  }

  // A simple message to show who has high score

  resultBox.textContent = `Your Score: ${humanScore} \n Computer Score: ${computerScore}`;

  if (computerScore > humanScore) {
    scoreMsg.textContent = "Computer Score Running High!!";
  } else if (computerScore < humanScore) {
    scoreMsg.textContent = "Your Score is Running High!!!";
  } else {
    scoreMsg.textContent = "Same Scores!";
  }
}

function result() {
  if (round >= 5) {
    playBtns.forEach((button) => {
      button.disabled = true;
    });

    if (humanScore > computerScore) {
      resultBox.textContent = `Congratulations! You WON the match by ${humanScore},
                Computer score: ${computerScore}`;
    } else {
      resultBox.textContent = `Better Luck Next time. 
                   your score: ${humanScore}
                   computer score: ${computerScore}`;
    }
    scoreMsg.textContent = ""
  }
}

function reset() {
  msgBox.textContent = "";
  resultBox.textContent = "";
  scoreMsg.textContent = "";
  round = 0
  playBtns.forEach(playBtn => {
    playBtn.disabled = false
  });
}
