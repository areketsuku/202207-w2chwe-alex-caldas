class Grid {
  div = document.getElementsByTagName("div");
  gridHeight;
  gridWidth;
  interval;
  speed = 1000;
  paint = true;

  constructor(inputHeight, inputWidth) {
    this.gridWidth = inputWidth;
    this.gridHeight = inputHeight;
    this.gridBuild();
  }

  gridBuild() {
    let newGrid = "";
    document.getElementsByTagName("main")[0].innerHTML = "";
    for (let y = 0; y < this.gridHeight; y += 1) {
      newGrid += "<div>";
      for (let x = 0; x < this.gridWidth; x += 1) {
        newGrid += "<span></span>";
      }
      newGrid += "</div>";
    }
    document.getElementsByTagName("main")[0].innerHTML = newGrid;
  }

  startGame() {
    if (document.getElementById("start-stop").checked) {
      this.paint = false;
      this.interval = window.setInterval(() => {
        console.log("tic-tac");
      }, this.speed);
    } else {
      window.clearInterval(this.interval);
      this.interval = null;
      this.paint = true;
    }
  }
}

export default Grid;
