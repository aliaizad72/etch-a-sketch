createGrid(16)

function createGrid (numGrid) {
    const sketchContainer = document.querySelector('#sketch-container');
    for (i = 0; i < numGrid; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'rows');
        row.style.height = calculateDimensions(numGrid);
        if (i === numGrid-1) {
            row.style.borderBottom = `1px solid black`;
        }
    
        for(j = 0; j < numGrid; j++) {
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            column.style.width = calculateDimensions(numGrid);
            column.addEventListener('mouseover', paintItBlack);
            row.appendChild(column);
            if(j === numGrid-1) {
                column.style.borderRight = '0';
            }
        }
        
        sketchContainer.appendChild(row);
    }
}

function calculateDimensions (numGrid) {
    return `${525/numGrid}px`;
}

function paintItBlack(event) {
    event.target.classList.add('painted');
}

const setGridBtn = document.querySelector('#set-grid-button');
setGridBtn.addEventListener('click', changeGrid);

function changeGrid() {
    const gridVal = document.querySelector('#grid-settings').value;
    if (gridVal) {
        if (gridVal < 101 && gridVal > 0) {
            removeGrid();
            createGrid(+gridVal);
        } else {
            alert('Please enter a number from 0 to 100')
            removeGrid();
            createGrid(16);
        }
    } else {
        alert(`Please insert a number in the field`);
        removeGrid();
        createGrid(16);
    }
    
}

function removeGrid() {
    const grid = document.querySelectorAll('.rows');
    grid.forEach((row) => row.remove());
}

const randomColorBtn = document.querySelector('#random-color-mode');
randomColorBtn.addEventListener('click', randomColorMode);

function randomColorMode() {
    changeGrid();
    const grid = document.querySelectorAll('.column');
    grid.forEach((square) => {
        square.addEventListener('mouseover', paintItRandom);
    })
}

function paintItRandom(event) {
    if (event.target.style.backgroundColor === "") {
        event.target.style.backgroundColor = randomRGB();
    }
}

function randomRGB() {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}



const getsDarkerBtn = document.querySelector('#progressive-black');
getsDarkerBtn.addEventListener('click', getsDarkerMode);
let counter = 9;

function getsDarkerMode() {
    changeGrid();
    const grid = document.querySelectorAll('.column');
    grid.forEach((square) => {
        square.addEventListener('mouseover', paintItDarker);
    })
}

function paintItDarker(event) {
    if (event.target.style.backgroundColor === "") {
        if (counter > 1) {
            event.target.style.backgroundColor = `hsl(0, 0%, ${counter*10}%)`;
            counter--;
        } else {
            event.target.style.backgroundColor = `hsl(0, 0%, ${counter*10}%)`;
            counter = 9;
        }
    }
}
/*
INITIATE a counter, start at 0
EVERY time a mouseover event occurs,
PAINT the square at 0% brighness
ADD 1 to the counter
Once it reached 100%
SET the counter to 0 again
*/
