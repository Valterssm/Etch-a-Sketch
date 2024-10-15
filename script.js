const container = document.querySelector('#container');
let cell;
let target;

function makeCell (numCell) {
    for (let c = 0; c < numCell; c++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    container.innerHTML = '';
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}

function promptGrid() {
    let number = prompt("Choose grid size between 5-64!", 16); 
     if (number >= 5 && number <= 64) {
         makeGrid (number,number);
     }else {
         do {
             number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
         }
         while(number < 5 || number > 64);
         makeGrid (number,number);
     }
 }

function changeColor (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});

const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', function() {
    window.location.reload();
});

promptGrid();