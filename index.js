let firstClick = true;
let display = document.querySelector(".display");
let num1 = 0,
  num2 = 0,
  operator;
numGiven = false;
const handleClick = (operand, isoperator = false) => {
  if (firstClick) {
    if (isoperator) {
      display.innerHTML = "Error";
      return;
    }
    display.innerHTML = "";
    firstClick = false;
  }
  if (operand == "C") {
    num1 = 0;
    num2 = 0;
    operator = "";
    display.innerHTML = "";
    numGiven = false;
    return;
  }

  if (isoperator) {
    if (numGiven == false) {
      num1 = Number.parseFloat(display.innerHTML);
      display.innerHTML = "";
      operator = operand;
      numGiven = true;
    } else {
      if (operand == "=") {
        num2 = Number.parseFloat(display.innerHTML);
        switch (operator) {
          case "/":
            display.innerHTML = num1 / num2;
            break;
          case "*":
            display.innerHTML = num1 * num2;
            break;
          case "+":
            display.innerHTML = num1 + num2;
            break;
          case "-":
            display.innerHTML = num1 - num2;
            break;
        }
      }
    }
  } else {
    display.innerHTML += operand;
  }
};
