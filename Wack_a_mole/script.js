let mainEle = document.querySelector("main");
let scoreEle = document.querySelector(".score");
let timerEle = document.querySelector(".timer");
let moleContainerEle = document.querySelector(".mole-container");
let moleEle = document.querySelector(".mole");
// let modalEle = document.querySelector(".modal");

let gameInterval;
let score = 0;
let counter = 60;
let counterInterval;
let modalEle;

// moleContainerEle.addEventListener("mouseover", (e) => {
//   console.log(e.pageY - moleContainerEle.offsetTop);
// });

function intervalHandler() {
  let X = Math.floor(Math.random() * 100);
  let Y = Math.floor(Math.random() * 90);
  console.log(X, Y);
  moleEle.style.setProperty("--X", X + "%");
  moleEle.style.setProperty("--Y", Y + "%");
}
gameInterval = setInterval(intervalHandler, 500);

moleEle.addEventListener("click", () => {
  score++;
  scoreEle.textContent = `Score: ${score}`;
});

// timer
function counterTimeHandler() {
  counter--;
  timerEle.textContent = `Timer: ${counter}`;
  if (counter == 0) {
    clearInterval(gameInterval);
    clearInterval(counterInterval);

    modalEle = document.createElement("div");
    modalEle.classList.add("modal");
    modalEle.innerHTML = `
        <h1>Wack A Mole</h1>
        <p>Your Game is Over</p>
        <h3>Score: ${score}</h3>
        <button class='restart-btn'>Start Again</button>
    `;
    mainEle.appendChild(modalEle);
    document.querySelector(".restart-btn").addEventListener("click", () => {
      restartGame();
    });
  }
}
counterInterval = setInterval(counterTimeHandler, 1000);

function restartGame() {
  counter = 60;
  score = 0;
  scoreEle.textContent = `Score: ${score}`;
  timerEle.textContent = `Timer: ${counter}`;
  modalEle.classList.remove("modal");
  modalEle.remove();
  gameInterval = setInterval(intervalHandler, 1000);
  counterInterval = setInterval(counterTimeHandler, 500);
}
