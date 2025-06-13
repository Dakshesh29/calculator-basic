let firstNumber;
let operator;
let secondNumber;

let displayNumber = '';

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
    if (secondNumber === 0) {
        return "Cannot divide by zero!";
    }
    return firstNumber / secondNumber;
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

let screen = document.querySelector('#screen')
let numberBtn = document.querySelectorAll('.number')

numberBtn.forEach(button =>{
    button.addEventListener('click',function(){
        displayNumber += button.textContent
        screen.value = displayNumber
    })
})

let symbolBtn = document.querySelectorAll('.symbol')
symbolBtn.forEach(button => {
    button.addEventListener('click',function(){
        displayNumber += button.textContent
        screen.value = displayNumber
    })
})




