/**
 *
 * Calculator Object: Receives two numbers and operates on them.
 *
 * @type {{add: function(*, *): number, subtract: function(*, *): number, multiply: function(*, *): number, divide: function(*, *): number}}
 */
const calculator = {
  add: function(num1, num2) {
    return Math.round(num1 + num2);
  },
  subtract: function(num1, num2) {
    return Math.round(num1 - num2);
  },
  multiply: function(num1, num2) {
    return Math.round(num1 * num2);
  },
  divide: function(num1, num2) {
    return Math.round(num1 / num2);
  }
}

/**
 *
 * Display of the calculator. This is where the program gets the full user input.
 *
 * @type {HTMLElement}
 */
const display = document.getElementById("display");

let number;
let operator = "";

/**
 *
 * Condition to enable the equal button if a number is on display.
 *
 * @type {boolean}
 */
let in_operation = false;

/**
 *
 * Condition to lock the operator and first number.
 *
 *
 * @type {boolean}
 */
let operation_pressed = false;


/**
 *  Keyboard support for the calculator.
 */
addEventListener('keydown', function(e) {
  if (e.code.includes("Digit")) {
    appendNumber(e.key)
  } else if (e.code.includes("Period") && !display.textContent.includes('.')) {
    appendNumber(e.key)
  }
})

/**
 * Clear the display.
 */
function clearDisplay() {
  display.textContent = "";
}

/**
 * Backspace
 */
function clearLeft() {
  display.textContent = display.textContent.slice(0,-1)
}

/**
 * Check and disables period input if another period is already inserted.
 */
function checkDecimal() {
  document.getElementById("point").disabled = display.textContent.includes('.');
}


/**
 *
 * Appends a number, in form of string, to the display
 *
 *
 * @param num {string} Number to append
 */
function appendNumber(num) {
  if(!in_operation) {
    clearDisplay();
    in_operation = true ;
    document.getElementById("equal").disabled = false;
  }
  display.textContent += num;
  checkDecimal()
}

/**
 *
 * Gets and converts the display string into integer
 *
 * @returns {number} Display number in integer
 */
function getNumber() {
   return parseInt(display.textContent);
}


/**
 *
 * Gets the first number and operator picked by the user. Updates the global variables
 *
 * @param operation {string} Operation to execute.
 */
function getOperator(operation) {
  if(!operation_pressed){
    operator = operation;
    number = getNumber();
    operation_pressed = true;
    clearDisplay()
  }

}

/**
 *
 * Executes the operation, given the numbers and operator. Displays the results and readies the calculator for another operation.
 *
 *
 * @param num1 {integer} First number of the operation, already converted to int. Default value is the global variable number
 * @param num2 {string} Second number of the operation, in string. Is converted inside the function.
 * @param operation {string} Operation to execute. Default is global variable operator
 */
function operate(num1 = number, num2, operation = operator) {
  switch(operation) {
    case "plus":
      display.textContent = calculator.add(num1, parseInt(num2)).toString();
      break;
    case "minus":
      display.textContent = calculator.subtract(num1, parseInt(num2)).toString();
      break;
    case "multiplication":
      display.textContent = calculator.multiply(num1, parseInt(num2)).toString();
        break;
    case "division":
      if(parseInt(num2) === 0){
        alert("You cant divide by zero");
        clearDisplay();
      } else {
        display.textContent = calculator.divide(num1, parseInt(num2)).toString();
        break;
      }
  }

  in_operation = false;
  operation_pressed = false;
  document.getElementById("equal").disabled = true;
  document.getElementById("point").disabled = false;

}
