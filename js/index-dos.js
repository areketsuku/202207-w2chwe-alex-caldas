import Grid from "./Class/Grid.js";

let ThisGrid = new Grid(5, 5);
let gridWidth;
let gridHeight;

document.getElementById("submit").addEventListener("click", () => {
  gridWidth = document.getElementById("width").value;
  gridHeight = document.getElementById("height").value;
  ThisGrid = new Grid(gridHeight, gridWidth);
});

document.addEventListener("click", (e) => {
  if (ThisGrid.paint) {
    if (e.target.className === "alive") {
      e.target.classList.remove("alive");
    } else {
      e.target.classList.add("alive");
    }
  }
});

document.getElementById("start-stop").addEventListener("change", () => {
  ThisGrid.startGame();
});
