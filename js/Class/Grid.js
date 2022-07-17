class Grid {
  div = document.getElementsByTagName("div");
  gridHeight;
  gridWidth;
  interval;
  speed = 10;
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

  setNeighborsCountersToZero() {
    let y = 0;
    for (y; y < this.gridHeight; y += 1) {
      let x = 0;
      for (x; x < this.gridWidth; x += 1) {
        this.div[y].children[x].setAttribute("data-neighbors", 0);
      }
    }
  }

  reviveCells() {
    let y = 0;
    for (y; y < this.gridHeight; y += 1) {
      let x = 0;
      for (x; x < this.gridWidth; x += 1) {
        const cell = this.div[y].children[x];
        const cellNeighbors = cell.getAttribute("data-neighbors");
        if (cell.classList[0] !== "alive") {
          if (cellNeighbors > 2) {
            cell.classList.add("alive");
          }
        } else if (cellNeighbors < 2 || cellNeighbors > 3) {
          cell.classList.remove("alive");
        }
      }
    }
  }

  introduceCellToNeighbors(y, x) {
    const neighbor = this.div[y].children[x];
    const neighborCounter = neighbor.getAttribute("data-neighbors");
    neighbor.setAttribute("data-neighbors", Number(neighborCounter) + 1);
  }

  checkForNeighbors(y, x) {
    let my = y - 1;
    for (my; my <= y + 1; my += 1) {
      let mx = x - 1;
      for (mx; mx <= x + 1; mx += 1) {
        if (
          this.div[my] !== undefined &&
          this.div[my].children[mx] !== undefined
        ) {
          if (mx !== x || my !== y) {
            this.introduceCellToNeighbors(my, mx);
          }
        }
      }
    }
  }

  checkForAliveCells() {
    let y = 0;
    for (y; y < this.gridHeight; y += 1) {
      let x = 0;
      for (x; x < this.gridWidth; x += 1) {
        if (this.div[y].children[x].classList[0] === "alive") {
          this.checkForNeighbors(y, x);
        }
      }
    }
    this.reviveCells();
    this.setNeighborsCountersToZero();
  }

  startGame() {
    this.paint = false;
    this.interval = window.setInterval(() => {
      this.checkForAliveCells();
    }, this.speed);
  }

  stopGame() {
    window.clearInterval(this.interval);
    this.interval = null;
    this.paint = true;
  }
}

export default Grid;
