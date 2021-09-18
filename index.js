DEFAULTSIZE = 16;
DEFAULTCOLOR = '#333333';
DEFAULTMODE = 'color'
DEFAULTGRID = 'grid'


let currentSize = DEFAULTSIZE;
let currentColor = DEFAULTCOLOR;
let currentMode = DEFAULTMODE;
let currentGrid = DEFAULTGRID; 

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentGrid(newGrid) {
  currentGrid = newGrid;
}


const body = document.querySelector("body");
const box = document.querySelector(".boxes");
const clearBtn = document.querySelector(".btn-clear");
const sliderBtn = document.getElementById('sizeSlider');
const colorValue = document.getElementById('myColor');
const colorBtn = document.querySelector('.colorBtn')
const label = document.querySelector('label');
const rainbowBtn = document.querySelector('.rainbowBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const classicBtn = document.querySelector('.classic');
const gridStyleBtn = document.querySelector('.grid-style');


clearBtn.onclick = () => reloadGrid();
colorValue.onchange = e => setCurrentColor(e.target.value);
sliderBtn.onchange = e => changeSize(e.target.value);
sliderBtn.onmousemove = e => updateSizeValue(e.target.value);
rainbowBtn.onclick = () => setCurrentMode('rainbow');
classicBtn.onclick = () => square(currentSize, 'classic');
gridStyleBtn.onclick = () => square(currentSize, 'grid')



// function changePlatform(platform) {
//   if( platform === 'classic') {
//     reloadGrid()
//     for(let i = 0; i <= box.children.length; i++) {
//       box.children[i].classList.remove('squares')
//    }
// } else if (platform === "grid") {
//   reloadGrid()
// }
// }


function clearGrid() {
    box.innerHTML = ``;
}

function reloadGrid() {
    clearGrid();
    square(currentSize, currentGrid);
}

function changeSize(value){
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
}


function updateSizeValue(value) {
    label.innerHTML =`${value} x ${value}`;
}


function square(size, platform) {
    box.style.setProperty("--grid-rows", size);
    box.style.setProperty("--grid-cols", size);
   
    for (i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add('squares')
      div.addEventListener('mouseover', switchColor)
      box.appendChild(div)
    }



 console.log(platform)
};

function switchColor(colour) {
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    colour.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    colour.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    colour.target.style.backgroundColor = '#fefefe'
  }
}
  
window.onload = () => {
    square(DEFAULTSIZE, DEFAULTGRID)
}