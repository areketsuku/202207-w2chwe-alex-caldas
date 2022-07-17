import Grid from "./Class/Grid.js";

let gridWidth = document.getElementById("width").value;
let gridHeight = document.getElementById("height").value;
let speed = document.getElementById("speed").value;
let ThisGrid = new Grid(gridHeight, gridWidth, speed);

function newGrid() {
  document.getElementById("startStop").checked = false;
  ThisGrid.stopGame();
  ThisGrid = new Grid(gridHeight, gridWidth, speed);
}

function changeLifeOfClickedCell(e) {
  if (ThisGrid.paint) {
    if (e.target.className === "alive") {
      e.target.classList.remove("alive");
    } else {
      e.target.classList.add("alive");
    }
  }
}

function startStopGame() {
  if (document.getElementById("startStop").checked === true) {
    ThisGrid.startGame(speed);
  } else {
    ThisGrid.stopGame();
  }
}

// Triggers

document.addEventListener("click", (e) => {
  changeLifeOfClickedCell(e);
});

document.getElementById("startStop").addEventListener("change", () => {
  startStopGame();
});

document.getElementById("submit").addEventListener("click", () => {
  newGrid();
});

document.getElementById("width").addEventListener("change", () => {
  gridWidth = document.getElementById("width").value;
});

document.getElementById("height").addEventListener("change", () => {
  gridHeight = document.getElementById("height").value;
});

document.getElementById("speed").addEventListener("change", () => {
  speed = document.getElementById("speed").value;
});
