DEFAULTSIZE = 16;
DEFAULTCOLOR = '#f1f3f5';


let size = DEFAULTSIZE;
let color = DEFAULTCOLOR;

const body = document.querySelector("body");
const box = document.querySelector(".boxes");
const boxes = document.querySelector(".squares");
let btn = document.createElement("button");
const clearbtn = document.querySelector(".btn-clear");
const colorbtn = document.querySelector('input');
const sliderbtn = document.getElementById('sizeSlider')
const colorValue = document.getElementById('myColor')




//change size of grids
// sliderbtn.addEventListener('change', e => {
//     let size = e.target.value
//     clearGrid();
// })
square(16, 16);

//adding event listener to hover and change background color to the squares



//clearing the grid
clearbtn.addEventListener("click", e => {
    clearGrid();
});

colorbtn.addEventListener('change', e => {
    let pickColor = colorValue.value;
    switchColor(pickColor);
})

//creating 16x16 grid of squares
function square(size, size) {
    box.style.setProperty("--grid-rows", size);
    box.style.setProperty("--grid-cols", size);
    
    for (i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        box.appendChild(div).className = "squares";
    }
    
};


box.addEventListener("mouseover", (event) => {
    let hover = event.target.className;
        
    if (hover === "squares") {
         event.target.style.backgroundColor = 'black';
        } 
    });


function switchColor(colorPicker) {
    box.addEventListener("mouseover", (event) => {
        let hover = event.target.className;
            
        if (hover === "squares") {
             event.target.style.backgroundColor = colorPicker;
            } 
        });
}

function clearGrid() {
    let grids = box.querySelectorAll('.squares');
    grids.forEach(grid => grid.style.cssText = '1px solid #f1f3f5');
    switchColor('black');
    colorValue.value;
}



