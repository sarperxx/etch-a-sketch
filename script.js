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
      let height = 5000 / (parseInt(cellNum) + parseInt(cellNum));
      newCell.style.height = `${height}px`;
      newCell.style.width = `${height}px`;
    }
  }
}
//Default grid
makeRows(16);
makeColumns(16);
//change color
addEventListener("mouseover", (event) => {
  if (event.target.className === "cell") {
    event.target.classList.add("my-colour-class");
  }
});
