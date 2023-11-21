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
    return `${600/numSquare}px`
}

function paintItBlack(event) {
    event.target.classList.add('painted');
}

