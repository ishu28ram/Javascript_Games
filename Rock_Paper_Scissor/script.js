const rockUserBtn = document.getElementById("rock-user");
const paperUserBtn = document.getElementById("paper-user");
const scissorUserBtn = document.getElementById("scissor-user");
const comp = document.querySelectorAll(".comp");
const user = document.querySelectorAll(".user");
let result = document.querySelector(".result-title");
let compScoreEle = document.querySelector(".comp-score p");
let userScoreEle = document.querySelector(".user-score p");

let arr = ["rock-comp", "scissor-comp", "paper-comp"];
let compScore = 0;
let userScore = 0;

function won() {
  userScore++;
  result.textContent = "You Won";
  result.classList.add("won");
  result.classList.remove("draw");
  result.classList.remove("lost");
  compScoreEle.textContent = compScore;
  userScoreEle.textContent = userScore;
}
function lost() {
  compScore++;
  result.textContent = "You Lost";
  result.classList.add("lost");
  result.classList.remove("draw");
  result.classList.remove("draw");
  compScoreEle.textContent = compScore;
  userScoreEle.textContent = userScore;
}
function draw() {
  result.textContent = "You Draw";
  result.classList.add("draw");
  result.classList.remove("won");
  result.classList.remove("lost");
}

function computerHandler() {
  let compChoice;
  let random = Math.floor(Math.random() * arr.length);

  comp.forEach((item) => {
    if (item.id == arr[random]) {
      item.classList.add("active");
      compChoice = item.id;
    } else {
      item.classList.remove("active");
    }
  });
  return compChoice;
}

function gameHandler(userChoice) {
  let compChoice = computerHandler();
  switch (`${userChoice}_${compChoice}`) {
    case "rock-user_scissor-comp":
    case "paper-user_rock-comp":
    case "scissor-user_paper-comp":
      won();
      break;

    case "scissor-user_rock-comp":
    case "rock-user_paper-comp":
    case "paper-user_scissor-comp":
      lost();
      break;

    case "rock-user_rock-comp":
    case "paper-user_paper-comp":
    case "scissor-user_scissor-comp":
      draw();
      break;
  }
}

function mainHandler() {
  rockUserBtn.addEventListener("click", () => {
    let rockUser = rockUserBtn.getAttribute("id");
    rockUserBtn.classList.add("active");
    paperUserBtn.classList.remove("active");
    scissorUserBtn.classList.remove("active");
    gameHandler(rockUser);
  });

  paperUserBtn.addEventListener("click", () => {
    let paperUser = paperUserBtn.getAttribute("id");
    paperUserBtn.classList.add("active");
    rockUserBtn.classList.remove("active");
    scissorUserBtn.classList.remove("active");
    gameHandler(paperUser);
  });

  scissorUserBtn.addEventListener("click", () => {
    let scissorUser = scissorUserBtn.getAttribute("id");
    scissorUserBtn.classList.add("active");
    paperUserBtn.classList.remove("active");
    rockUserBtn.classList.remove("active");
    gameHandler(scissorUser);
  });
}
mainHandler();
