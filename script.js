// Make functions for add, subtract, multiply and divide
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b);
    } else if (operator === '-') {
        subtract(a, b);
    } else if (operator === '*') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    }
};

// Create the functions that populate the display when you click the number buttons.

let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let operators = document.querySelectorAll('.btn-operator');
let clearButton = document.getElementById('clear');
let calculate = document.getElementById('calculate');

let currentNumber = '';
let previousNumber = '';
let operatorClicked = '';

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        appendNumber(e.target.textContent)
    })
});

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        previousNumber = currentNumber;
        currentNumber = '';

        appendNumber(currentNumber)

        display.textContent = previousNumber;
        operatorClicked = e.target.textContent;
    })
});

function appendNumber(number) {
    currentNumber += number;
    display.textContent = currentNumber;
};

function clear() {
    currentNumber = '';
    previousNumber = '';
    operatorClicked = '';

    display.textContent = '0';
};

clearButton.addEventListener('click', clear);
calculate.addEventListener('click', compute);

function compute() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operatorClicked === '+') {
        previousNumber += currentNumber;

    } else if (operatorClicked === '-') {
        previousNumber -= currentNumber;

    } else if (operatorClicked === 'x') {
        previousNumber *= currentNumber;

    } else if (operatorClicked === '/') {
        if (currentNumber <= 0) {
            previousNumber = 'ERROR'
        } else {
            previousNumber /= currentNumber;
        }
    }
    display.textContent = previousNumber;
    currentNumber = previousNumber;
    previousNumber = '';
};

// To Do:
// Make a delete button function
// Let users be able to make decimal numbers, but only one at a time
// Caluclate if operator is used more than once and display results accordingly
// Return no more than two decimal points if decimal number
// Add CSS to the buttons
// Add keyboard support 