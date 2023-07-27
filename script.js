// Sets important constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.querySelectorAll(".cell");

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  // Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

// Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
      newCell.style.height = "100%";
      let height = 1400 / (parseInt(cellNum) + parseInt(cellNum));
      newCell.style.height = `${height}px`;
      newCell.style.width = `${height}px`;
    }
  }
}
//create rgb colors
const createRandomRGB = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
};
//Default grid
makeRows(16);
makeColumns(16);
//change to rainbow
function changerainbow() {
  addEventListener("mouseover", (event) => {
    if (event.target.className === "cell") {
      event.target.style.backgroundColor = createRandomRGB();
    }
  });
}

//change to black
function changeblack() {
  addEventListener("mouseover", (event) => {
    if (event.target.className === "cell") {
      event.target.style.backgroundColor = "black";
    }
  });
}

let erase = document.getElementById("myBtn");
const randomColor = document.getElementById("color");

function eraseFunction() {
  let pixel = prompt("Please enter a number between 1-100");
  if (pixel > 100) {
    alert("You cannot enter a number bigger than 100");
    return;
  }
  container.innerHTML = "";
  makeRows(pixel);
  makeColumns(pixel);
}

erase.addEventListener("click", eraseFunction);
