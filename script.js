// select all choices
let choices = document.querySelectorAll(".choice");

// select user score paragraph
let userScorePara = document.querySelector("#user-score");

// select computer score paragraph
let compScorePara = document.querySelector("#comp-score");

// select msg
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

let userWin = true;

const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You win ! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lost !  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Add event to all the choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    console.log(userChoice);
    let compChoice = getCompChoice();
    console.log(compChoice);
    if (userChoice == compChoice) {
      msg.innerHTML = "Game was draw";
      msg.style.backgroundColor = "rgb(4, 4, 36)";
    } else {
      if (userChoice == "rock") {
        // paper,scissors
        userWin = compChoice == "paper" ? false : true;
      } else if (userChoice == "paper") {
        // rock , scissors
        userWin = compChoice == "rock" ? true : false;
      } else if (userChoice == "scissors") {
        // rock, paper
        userWin = compChoice == "rock" ? false : true;
      }
      showWinner(userChoice, compChoice);
    }
  });
});
