let firstNum = '';
let secondNum = '';
let operator = '';
let displayText = '';
const display = document.querySelector('.display');   

// init
const initCalc = (firstInput = '', opr='') => {
    firstNum = firstInput;
    secondNum = '';
    operator = opr;
    displayText = '';    
}
// add
const add = (a, b) => +a + +b;
// subtract
const subtract = (a, b) => +a - +b;
// multiply
const multiply = (a, b) => +a * +b;
// divide
const divide = (a, b) => +a / +b;
// operate
const operate = (firstNum, secondNum, operator) => {
    let result;
    switch (operator) {
        case 'add':
            result = add(firstNum, secondNum)            
            break;
        case 'subtract':
            result = subtract(firstNum, secondNum)            
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum)            
            break;
        case 'divide':
            result = divide(firstNum, secondNum)            
            break;    
        default:
            break;
    }
    return result;
}

const clearDisplay = () => {
    display.innerHTML = '0';
}

const updateDisplay = (text='0') => {
    let txt = text.toString();
    const splitNum = txt.split('.');    
    if(splitNum[0].length > 10) {
        txt = parseFloat(txt).toExponential(2);
    } else if (splitNum[1] && splitNum[1].length > 10) {
        txt = parseFloat(txt).toFixed(2);
    }

    display.innerHTML = txt;
}
const noFirstNum = () => {
    return !(parseFloat(firstNum) >= 0 || parseFloat(firstNum) <= 0)
} 

const isReadyForCalc = () => {
    const first = (parseFloat(firstNum) >= 0 || parseFloat(firstNum) <= 0) 
    const second = (parseFloat(secondNum) >= 0 || parseFloat(secondNum) <= 0) 
    const opr = operator.length > 0;
    return (first && second && opr)
}
const showDisplay = (event, buttonType) => {     
    console.log(event, buttonType);
       
    const buttonText = event ? event.currentTarget.textContent : '';
    const target = event ? event.currentTarget : null;
    
    switch (buttonType) {
        case 'number':
            const isDecimalBtn = Array.from(target.classList).includes('decimal');            
            const isBackSpaceBtn = Array.from(target.classList).includes('backspace');   

            const constructFirstNumber = noFirstNum() || !operator;
            const constructSecondNumber = (parseFloat(firstNum) >= 0 || parseFloat(firstNum) <= 0) && operator;
            
            if (constructFirstNumber) {
                const alreadyHasDecimal = isDecimalBtn ? firstNum.toString().includes('.') : false;
                if (alreadyHasDecimal) return;
                
                if (isBackSpaceBtn) {
                    if (firstNum.toString().length > 0) {
                        const temp = firstNum.toString().split('');
                        temp.pop();
                        firstNum = temp.join('');
                    } 
                } else {
                    firstNum = firstNum.toString() + `${buttonText}`                                 
                }
                                
                updateDisplay(firstNum);
            } 
            else if (constructSecondNumber) {        
                const alreadyHasDecimal = isDecimalBtn ? secondNum.toString().includes('.') : false;
                if (alreadyHasDecimal) return;

                if (isBackSpaceBtn) {
                    if (secondNum.toString().length > 0) {
                        const temp = secondNum.toString().split('');
                        temp.pop();
                        secondNum = temp.join('');
                    }
                } else {
                    secondNum = secondNum.toString() + `${buttonText}` 
                }
                
                updateDisplay(secondNum);
            }                            
            break;
    
        case 'operator':
            if (noFirstNum()) return;    
            const calcFirst = isReadyForCalc();
            if (calcFirst) {
                const result = operate(firstNum, secondNum, operator);
                updateDisplay(result);    
                initCalc(result, operator);    
            }                        
            operator = target.id;
            
            break;
    
        case 'equal':  
            if(!isReadyForCalc()) return;
            const result = operate(firstNum, secondNum, operator);
            updateDisplay(result);    
            initCalc(result);    
            break;
    
        case 'clear':
            initCalc();
            clearDisplay();
            break;
    
        default:            
            updateDisplay('0');
            break;
    }    
    console.log(
        {firstNum,
        secondNum,
        operator,
        displayText}
    );
    
}

const attachEvents = () => {
    const numberButtons = document.querySelectorAll('.button-container .number');
    numberButtons.forEach(btn => {
        btn.addEventListener('click', (event) => showDisplay(event,'number'));
    })
    
    const actionButtons = document.querySelectorAll('.button-container .action');
    actionButtons.forEach(btn => {
        const isOperatorBtn = Array.from(btn.classList).includes('operator');
        const isOperateBtn = Array.from(btn.classList).includes('operate');
        const isClearBtn = Array.from(btn.classList).includes('clear');
        
        if (isOperatorBtn) {
            btn.addEventListener('click', (event) => showDisplay(event,'operator'));
        } else if (isOperateBtn) {
            btn.addEventListener('click', (event) => showDisplay(event,'equal'));
        } else if (isClearBtn) {
            btn.addEventListener('click', (event) => showDisplay(event,'clear'));

        }
        
    })
}

attachEvents();
showDisplay();