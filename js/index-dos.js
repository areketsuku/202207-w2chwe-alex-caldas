let interval;
let paint = true;

document.addEventListener("click", (e) => {
  if (paint) {
    if (e.target.className === "alive") {
      e.target.classList.remove("alive");
    } else {
      e.target.classList.add("alive");
    }
  }
});

document.getElementById("start-stop").addEventListener("change", (e) => {
  if (document.getElementById("start-stop").checked) {
    paint = false;
    interval = window.setInterval(() => {
      console.log("a");
    }, 1000);
  } else {
    window.clearInterval(interval);
    interval = null;
    paint = true;
  }
});
