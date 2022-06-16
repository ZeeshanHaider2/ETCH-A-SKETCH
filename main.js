


const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnSize = document.createElement('button');

let loop = (row,col)=> {
    for (let i = 1; i <= row*col ; i ++){
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.border = `1px solid red`;
    container.style.border = `1px solid black`;

    container.style.gridTemplateColumns= `repeat (${col}, 1fr)`;
    container.style.gridTemplateRows= `repeat (${row}, 1fr)`;
    container.style.gridTemplateRows.border = `1px solid green`;
    }
}

loop(15, 5);
