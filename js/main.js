'use strict';
// funzioni 

function myCreateElement(htmlElement, className,htmlValeu){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValeu;

    element.addEventListener('click', function(){
        element.classList.add('cell-onclick');
        console.log(htmlValeu)
    });
    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement)
}
// main 
let cellNumber = 100; 
const containerBoard = document.querySelector('.board')
const buttonPlay = document.getElementById('play');
const selectedDifficulty = document.getElementById('difficulty')

buttonPlay.addEventListener('click', function(){ 
    containerBoard.innerHTML=''
    const selectedDifficultyValue = selectedDifficulty.value;
    if(selectedDifficultyValue === 'hard'){
        let cellNumber = 49;
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell-hard', i);
            myAppendElement(containerBoard, createdElement);  
        } 
    }
    else if (selectedDifficultyValue === 'medium'){
        let cellNumber = 81;
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell-medium', i);
            myAppendElement(containerBoard, createdElement);  
        } 
    }
    else{
        for(let i = 1; i <= cellNumber ; i++ ){
            const createdElement = myCreateElement('div', 'cell', i);
            myAppendElement(containerBoard, createdElement);  
        } 
    }
})