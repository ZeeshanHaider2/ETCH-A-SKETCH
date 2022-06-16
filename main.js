


const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');

let createDiv = (col,row)=> {
    for (let i = 0; i < (row * col) ; i ++){
    const div = document.createElement('div');
    container.appendChild(div).classList.add('box');
    div.style.border = `1px solid red`;
   
    container.style.gridTemplateColumns= `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows= `repeat(${row}, 1fr)`;
    
    }
}

createDiv(6,6);


let greyColor=()=> {
    const boxes = document.querySelectorAll('.box');
    btnGrey.textContent = 'Grey';
    btnGrey.addEventListener('click', e => {
        boxes.forEach(box => box.addEventListener('mouseover', e => {
            let randNum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${randNum},${randNum},${randNum})`;
            //console.log(randNum);
        }));
    });
    buttonsContainer.appendChild(btnGrey).classList.add('btn');
}

greyColor();

let blackColor= ()=>{
    const boxes = document.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', e => {
        boxes.forEach(box => box.addEventListener('mouseover', e => {
            
            box.style.background = `black`;
            
        }));
    });
    buttonsContainer.appendChild( btnBlack).classList.add('btn');
}

blackColor();

let rgbColor=()=> {
    const boxes = document.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', e => {
        boxes.forEach(box => box.addEventListener('mouseover', e => {
            let randNumR = Math.floor(Math.random() * 255);
            let randNumG = Math.floor(Math.random() * 255);
            let randNumB = Math.floor(Math.random() * 255);

            box.style.background = `rgb(${randNumR},${randNumG},${randNumB})`;
            //console.log(randNum);
        }));
    });
    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}

rgbColor();