let firstNumber;
let operator;
let secondNumber;

function add(firstNumber,secondNumber){
    return firstNumber + secondNumber
}

function substract(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber){
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function operate(firstNumber, operator, secondNumber){
    switch(operator){
        case "+" :
            return add(firstNumber,secondNumber)
        case "-" :
            return substract(firstNumber,secondNumber)
        case "*":
            return multiply(firstNumber,secondNumber)
        case "/":
            return divide(firstNumber,secondNumber)
    }
}

console.log(operate(4,"+",6))