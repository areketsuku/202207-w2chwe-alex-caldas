import Grid from "./Class/Grid.js";

let ThisGrid = new Grid(5, 5);
let gridWidth;
let gridHeight;

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
  if (document.getElementById("start-stop").checked === true) {
    ThisGrid.startGame();
  } else {
    ThisGrid.stopGame();
  }
}

function newGrid() {
  document.getElementById("start-stop").checked = false;
  ThisGrid.stopGame();

  gridWidth = document.getElementById("width").value;
  gridHeight = document.getElementById("height").value;
  ThisGrid = new Grid(gridHeight, gridWidth);
}

// Triggers
document.addEventListener("click", (e) => {
  changeLifeOfClickedCell(e);
});

document.getElementById("start-stop").addEventListener("change", () => {
  startStopGame();
});

document.getElementById("submit").addEventListener("click", () => {
  newGrid();
});
