const div = document.getElementsByTagName("div");
const gridWidth = 5;
const gridHeight = 5;

const setNeighborsCountersToZero = () => {
  let y = 0;
  for (y; y < gridHeight; y += 1) {
    let x = 0;
    for (x; x < gridWidth; x += 1) {
      div[y].children[x].setAttribute("data-neighbors", 0);
    }
  }
};

const reviveCells = () => {
  let y = 0;
  for (y; y < gridHeight; y += 1) {
    let x = 0;
    for (x; x < gridWidth; x += 1) {
      const cell = div[y].children[x];
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
};

const introduceCellToNeighbors = (y, x) => {
  const neighbor = div[y].children[x];
  const neighborCounter = neighbor.getAttribute("data-neighbors");
  neighbor.setAttribute("data-neighbors", Number(neighborCounter) + 1);
};

const checkForNeighbors = (y, x) => {
  let my = y - 1;
  for (my; my <= y + 1; my += 1) {
    let mx = x - 1;
    for (mx; mx <= x + 1; mx += 1) {
      if (div[my] !== undefined && div[my].children[mx] !== undefined) {
        if (mx !== x || my !== y) {
          introduceCellToNeighbors(my, mx);
        }
      }
    }
  }
};

const checkForAlive = () => {
  let y = 0;
  for (y; y < gridHeight; y += 1) {
    let x = 0;
    for (x; x < gridWidth; x += 1) {
      if (div[y].children[x].classList[0] === "alive") {
        checkForNeighbors(y, x);
      }
    }
  }
  reviveCells();
  setNeighborsCountersToZero();
};

setInterval(() => {
  checkForAlive();
}, 100);
