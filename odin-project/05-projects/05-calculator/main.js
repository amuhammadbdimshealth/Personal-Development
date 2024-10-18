let firstNum = '';
let secondNum = '';
let operator = '';
let displayText = '';

// add
const add = (a, b) => a + b;
// subtract
const subtract = (a, b) => a - b;
// multiply
const multiply = (a, b) => a * b;
// divide
const divide = (a, b) => a / b;
// operate
const operate = (firstNum, secondNum, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = add(firstNum, secondNum)            
            break;
        case '-':
            result = subtract(firstNum, secondNum)            
            break;
        case '*':
            result = multiply(firstNum, secondNum)            
            break;
        case '/':
            result = divide(firstNum, secondNum)            
            break;    
        default:
            break;
    }
    return result;
}

const showDisplay = (event, buttonType) => {
    console.log(event,buttonType);
    
    const buttonText = event ? event.target.textContent : '';
    const keepMakingFirstNum = !firstNum || !operator;
    const keepMakingSecondNum = firstNum && operator;

    if (keepMakingFirstNum) {
        firstNum = firstNum.toString() + `${buttonText}` 
    } 
    else if (keepMakingSecondNum) {        
        secondNum = secondNum.toString() + `${buttonText}` 
    }
    displayText = `${firstNum} ${operator} ${secondNum}`;
    const display = document.querySelector('.display');
    display.innerHTML = displayText;    
    
}

const numberButtons = document.querySelectorAll('.button-container .number');
numberButtons.forEach(btn => {
    btn.addEventListener('click', (event) => showDisplay(event,'number'));
})

const actionButtons = document.querySelectorAll('.button-container .action');
actionButtons.forEach(btn => {
    btn.addEventListener('click', (event) => showDisplay(event,'action'));
})

showDisplay()