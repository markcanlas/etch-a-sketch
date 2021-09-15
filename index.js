const body = document.querySelector('body')
const container = document.querySelector('.container');
let btn = document.createElement('button');


body.prepend(btn)

//creating 16x16 grid of squares
const square = (cols, rows) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(i = 0 ; i < (rows * cols); i++){
        let div = document.createElement('div')
        container.appendChild(div).className = 'squares';
    }
}

square(16,16);
 

//adding event listener to hover and change background color to the squares
container.addEventListener('mouseover', event => {
    let hover = event.target.className;

    if (hover === 'squares') {
        event.target.style.backgroundColor = 'black';
    }
})












