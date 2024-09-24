let userScore = 0;
let compScore = 0;

const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
//ACCESS MSG ID
const msg = document.querySelector("#msg");

//ARROW FUNCTION TO GENERATE COMPUTER CHOICE BY RANDOM FUNCTION
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //rock,paper,scissors
};

//ARROW FUNCTION FOR GAME DRAW
const drawGame = () => {
  msg.innerText = "Game Draw, Play again";
  msg.style.backgroundColor = "purple";
};

//ARROW FUNCTION TO SHOW  WINNER
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreBoard.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScoreBoard.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//ARROW FUNCTION FOR PLAYING THE GAME BY CHOOSING
const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//FOR EACH LOOP TO STORE WHAT WE CHOOSE
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
