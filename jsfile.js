let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayNumber = '';

const screen = document.querySelector('#screen');
const numberBtn = document.querySelectorAll('.number');
const symbolBtn = document.querySelectorAll('.symbol');
const equalBtn = document.querySelector('.equal');
const wipeNumber = document.querySelector('.clearbtn');
const wipeNumber2 = document.querySelector('.clearbtn2');

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b === 0 ? 'Cannot divide by zero!' : a / b;
}
function operate(a, op, b) {
    switch (op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'x':
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return '';
    }
}

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        displayNumber += button.textContent;
        screen.value = displayNumber;
    });
});

symbolBtn.forEach(button => {
    button.addEventListener('click', () => {
        const symbol = button.textContent;
        if (symbol === '.') {
            if (!displayNumber.endsWith('.')) {
                displayNumber += '.';
                screen.value = displayNumber;
            }
            return;
        }

        if (displayNumber === '') return;

       
        if (operator === null) {
            firstNumber = parseFloat(displayNumber);
            operator = symbol;
            displayNumber += symbol; 
            screen.value = displayNumber;
        }
    });
});


equalBtn.addEventListener('click', () => {
    if (firstNumber !== null && operator && displayNumber !== '') {
        secondNumber = parseFloat(displayNumber);
        const result = operate(firstNumber, operator, secondNumber);
        screen.value = result;
        displayNumber = result.toString();
        firstNumber = null;
        operator = null;
        secondNumber = null;
    }
});


wipeNumber.addEventListener('click', () => {
    screen.value = '';
    displayNumber = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
});

wipeNumber2.addEventListener('click', () => {
    displayNumber = displayNumber.slice(0, -1);
    screen.value = displayNumber;
});
