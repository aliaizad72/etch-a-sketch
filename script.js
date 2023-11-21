/* 
SELECT sketch container variable
CREATE empty div
APPEND to sketch container
REPEAT 16 times

SELECT all the divs inside the sketch container
CREATE empty div
APPEND to each div 16 times
*/

const sketchContainer = document.querySelector('#sketch-container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'rows');
    if (i === 15) {
        row.style.borderBottom = `1px solid black`;
    }

    for(j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        column.addEventListener('mouseover', paintItBlack);

        row.appendChild(column);
        if(j === 15) {
            column.style.borderRight = '0';
        }
    }
    
    sketchContainer.appendChild(row);
}

function paintItBlack(event) {
    event.target.classList.add('painted');
}