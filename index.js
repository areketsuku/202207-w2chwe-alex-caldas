const div = document.getElementsByTagName("div");
const gridWidth = 5;
const gridHeight = 5;

const setNeighboursCountersToZero = () => {
  let y = 0;
  for (y; y < gridHeight; y += 1) {
    let x = 0;
    for (x; x < gridWidth; x += 1) {
      div[y].children[x].setAttribute("data-neighbours", 0);
    }
  }
};

const reviveCells = () => {
  let y = 0;
  for (y; y < gridHeight; y += 1) {
    let x = 0;
    for (x; x < gridWidth; x += 1) {
      const cell = div[y].children[x];
      const cellNeighbours = cell.getAttribute("data-neighbours");
      if (cell.classList[0] !== "alive") {
        if (cellNeighbours > 2) {
          cell.classList.add("alive");
        }
      } else if (cellNeighbours < 2 || cellNeighbours > 3) {
        cell.classList.remove("alive");
      }
    }
  }
};

const checkForNeighbours = (y, x) => {
  let my = y - 1;
  for (my; my <= y + 1; my += 1) {
    let mx = x - 1;
    for (mx; mx <= x + 1; mx += 1) {
      if (div[my] !== undefined) {
        if (div[my].children[mx] !== undefined) {
          if (mx === x && my === y) {
          } else {
            const neighbour = div[my].children[mx];
            let neighbourCounter = neighbour.getAttribute("data-neighbours");
            neighbour.setAttribute(
              "data-neighbours",
              Number(neighbourCounter) + 1
            );
            neighbourCounter = neighbour.getAttribute("data-neighbours");
          }
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
        checkForNeighbours(y, x);
      }
    }
  }
  reviveCells();
  setNeighboursCountersToZero();
};

setInterval(() => {
  checkForAlive();
}, 100);

// 0 --> min 3 alive neighbours --> 1
// 1 --> inf a 2 alive neighbours or sup a 3 alive neighbours --> 0
