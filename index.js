DEFAULTSIZE = 32;
DEFAULTCOLOR = "#333333";
DEFAULTMODE = "color";
DEFAULTBOARD = "classic";

let currentSize = DEFAULTSIZE;
let currentColor = DEFAULTCOLOR;
let currentMode = DEFAULTMODE;
let currentBoard = DEFAULTBOARD;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentBoard(newBoard) {
  currentBoard = newBoard;
}

const buttons = document.querySelectorAll("button");
const box = document.querySelector(".boxes");
const boxChilds = document.querySelectorAll(".all-box");
const clearBtn = document.querySelector(".btn-clear");
const sliderBtn = document.getElementById("sizeSlider");
const colorValue = document.getElementById("myColor");
const colorText = document.querySelector(".colorText");
const label = document.querySelector(".label");
const rainbowBtn = document.querySelector(".rainbowBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const classicBtn = document.querySelector(".classic");
const gridStyleBtn = document.querySelector(".grid-style");

colorValue.onchange = (e) => setCurrentColor(e.target.value);
sliderBtn.onchange = (e) => changeSize(e.target.value);
sliderBtn.onmousemove = (e) => updateSizeValue(e.target.value);
clearBtn.onclick = () => reloadGrid();
rainbowBtn.addEventListener("click", clickHandler);
colorValue.addEventListener("click", clickHandler);
eraserBtn.addEventListener("click", clickHandler);
classicBtn.addEventListener("click", clickHandler);
gridStyleBtn.addEventListener("click", clickHandler);

function clearGrid() {
  box.innerHTML = ``;
}

function reloadGrid() {
  clearGrid();
  square(currentSize, currentBoard);
}

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

function updateSizeValue(value) {
  label.innerHTML = `${value} x ${value}`;
}

function clickHandler(event) {
  const el = event.target;
  const removeMode = buttons.forEach((button) =>
    button.classList.remove("_mode")
  );
  const removeTextMode = colorText.classList.remove("_mode");

  if (el.contains(rainbowBtn)) {
    setCurrentMode("rainbow");
    removeMode;
    removeTextMode;
    rainbowBtn.classList.add("_mode");
  } else if (el.contains(colorValue)) {
    setCurrentMode("color");
    removeMode;
    colorText.classList.add("_mode");
  } else if (el.contains(eraserBtn)) {
    setCurrentMode("eraser");
    removeMode;
    removeTextMode;
    eraserBtn.classList.add("_mode");
  } else if (el.contains(classicBtn)) {
    clearGrid();
    setCurrentBoard("classic");
    square(currentSize, "classic");
    removeMode;
    removeTextMode;
    classicBtn.classList.add("_mode");
  } else if (el.contains(gridStyleBtn)) {
    setCurrentBoard("grid");
    clearGrid();
    square(currentSize, "grid");
    removeMode;
    removeTextMode;
    gridStyleBtn.classList.add("_mode");
  }
}

function square(size, name) {
  box.style.setProperty("--grid-rows", size);
  box.style.setProperty("--grid-cols", size);
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", switchColor);
    box.appendChild(div);
    if (name === "grid") {
      div.classList.remove("remove-squares");
      div.classList.add(`squares`);
    } else if (name === "classic") {
      div.classList.remove("squares");
      div.classList.add("remove-squares");
    }
  }
}

function switchColor(colour) {
  if (currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    colour.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === "color") {
    colour.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    colour.target.style.backgroundColor = "#dee2e6";
  }
}

window.onload = () => {
  square(DEFAULTSIZE, DEFAULTBOARD);
};
