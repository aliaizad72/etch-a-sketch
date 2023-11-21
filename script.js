createGrid(16, 16)

function createGrid (numRows, numColumns) {
    const sketchContainer = document.querySelector('#sketch-container');
    for (i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'rows');
        row.style.height = calculateDimensions(numRows);
        if (i === numRows-1) {
            row.style.borderBottom = `1px solid black`;
        }
    
        for(j = 0; j < numColumns; j++) {
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            column.style.width = calculateDimensions(numColumns);
            column.addEventListener('mouseover', paintItBlack);
            row.appendChild(column);
            if(j === numColumns-1) {
                column.style.borderRight = '0';
            }
        }
        
        sketchContainer.appendChild(row);
    }
}

function calculateDimensions (numSquare) {
    return `${525/numSquare}px`
}

function paintItBlack(event) {
    event.target.classList.add('painted');
}

const setGridBtn = document.querySelector('#set-grid-button');
setGridBtn.addEventListener('click', changeGrid);

function changeGrid(event) {
    const rowVal = document.querySelector('#row-settings').value;
    const columnVal = document.querySelector('#column-settings').value;
    if (rowVal && columnVal) {
        if (rowVal < 101 && rowVal > 0 && columnVal > 0 && columnVal < 101) {
            removeGrid();
            createGrid(+rowVal, +columnVal);
        } else {
            alert('Please enter a number from 0 to 100')
            removeGrid();
            createGrid(16, 16)
        }
    } else {
        alert(`Please insert a number in both text fields`);
        removeGrid();
        createGrid(16, 16)
    }
    
}

function removeGrid() {
    const grid = document.querySelectorAll('.rows');
    grid.forEach((row) => row.remove());
}