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

let display = document.getElementById("display");

let number;
let operator = "";
let in_operation = false;
let operation_pressed = false;

function clearDisplay() {
  display.textContent = "";
}

function clearLeft() {
  display.textContent = display.textContent.slice(0,-1)
}

function checkDecimal() {
  document.getElementById("point").disabled = display.textContent.includes('.');
}

function appendNumber(num) {
  checkDecimal()

  if(!in_operation) {
    clearDisplay();
    in_operation = true ;
    document.getElementById("equal").disabled = false;
  }
  display.textContent += num;
}

function getNumber() {
   return parseInt(display.textContent);
}

function getOperator(operation) {
  if(!operation_pressed){
    operator = operation;
    number = getNumber();
    operation_pressed = true;
    clearDisplay()
  }

}


function operate(num1 = number, num2, operation = operator) {
  console.log(operator);
  console.log(num1)
  console.log(num2)
  num2 = parseInt(num2);

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
      if(num2 === 0){
        alert("You cant divide by zero");
        clearDisplay();
      } else {
        display.textContent = calculator.divide(num1, parseInt(num2)).toString();
        break;
      }
  }
  //Reset
  in_operation = false;
  operation_pressed = false;
  document.getElementById("equal").disabled = true;
  document.getElementById("point").disabled = false;

}
