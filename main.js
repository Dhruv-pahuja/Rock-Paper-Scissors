const choices = document.querySelectorAll(".btn");
let msg = document.querySelector('.msg-box')
let userScore = 0;
let compScore = 0;

let resetBtn = document.querySelector(".reset-btn")

const userScorePara = document.querySelector("#pcount");
const compScorePara = document.querySelector("#ccount");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = `player: ${userScore}`;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = `computer: ${compScore}`;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) {
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
  
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});

resetBtn.onclick = () =>{
    userScorePara.innerText = `player: 0`;
    msg.innerText = `Pick your move`;
    msg.style.backgroundColor = "#081b31";
    compScorePara.innerText = `computer: 0`;
    userScore = 0;
    compScore = 0;
}