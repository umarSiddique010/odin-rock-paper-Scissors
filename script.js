const playBtns = document.querySelectorAll(".rps-choice");
const msgBox = document.querySelector(".msg-box");
const scoreMsg = document.querySelector(".score-msg");
const scoreBox = document.querySelector(".score-box");
const resetBtn = document.querySelector(".reset-btn");
const resultMsg = document.querySelector(".result-msg");
const resetContainer = document.querySelector(".reset-container");

let round = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    let buttonValue = playBtn.classList[1]; 
    const humanSelection = getHumanChoice(buttonValue);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    result();
  });
});

resetBtn.addEventListener("click", reset);

function randomNumberOneToNinety() {
  return Math.floor(Math.random() * 90);
}

function getComputerChoice() {
  const randomNumber = randomNumberOneToNinety();
  if (randomNumber < 30) return rock;
  if (randomNumber < 60) return paper;
  return scissors;
}

function getHumanChoice(buttonValue) {
  return buttonValue;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    msgBox.textContent = "Match Draw! Neither wins.";
    round++;
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === scissors && computerChoice === paper) ||
    (humanChoice === paper && computerChoice === rock)
  ) {
    msgBox.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
    round++;
  } else {
    msgBox.textContent = `You Lose! ${humanChoice} is beaten by ${computerChoice}.`;
    computerScore++;
    round++;
  }

  // Update running score
  scoreBox.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

  // High score message
  if (computerScore > humanScore) {
    scoreMsg.textContent = "Computer is leading!";
  } else if (humanScore > computerScore) {
    scoreMsg.textContent = "You're leading!";
  } else {
    scoreMsg.textContent = "It's a tie!";
  }
}

function result() {
  if (round >= 5) {
    playBtns.forEach((button) => {
      button.disabled = true;
    });

    resetContainer.classList.add("visible");  

    if (humanScore > computerScore) {
      resultMsg.textContent = `🎉 Congratulations! You won! Final Score: ${humanScore} - ${computerScore}`;
    } else if (humanScore < computerScore) {
      resultMsg.textContent = `😞 Better luck next time! Final Score: ${humanScore} - ${computerScore}`;
    } else {
      resultMsg.textContent = `🤝 It's a tie! Final Score: ${humanScore} - ${computerScore}`;
    }
  }
}

function reset() {
  // Reset scores, rounds, and messages
  msgBox.textContent = "";
  scoreMsg.textContent = "";
  scoreBox.textContent = "";
  resultMsg.textContent = "";
  humanScore = 0;
  computerScore = 0;
  round = 0;

  resetContainer.classList.remove("visible");

  playBtns.forEach((playBtn) => {
    playBtn.disabled = false;
  });
}
