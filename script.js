/*let element = document.getElementById("testelem");
let slider = document.getElementById("slider");
let label = document.getElementById("sliderlabel");
slider.addEventListener("input", () => {
    element.style.width = `${slider.value}px`;
    label.innerHTML = `${slider.value}%`;
});

let slider2 = document.getElementById("slider2");
let label2 = document.getElementById("sliderlabel2");
slider2.addEventListener("input", () => {
    element.style.height = `${slider2.value}px`;
    label2.innerHTML = `${slider2.value}%`;
});
*/

// Since this is a basic calculator, it will only do two arguments. 
let inputStack = [];
let temporaryOperand = "";
let operatorList = ["plus", "minus", "divide", "multiply"];
let operatorSelect = {
    plus: function(operand1, operand2) {
        return operand1 + operand2;
    },
    minus: function(operand1, operand2) {
        return operand1 - operand2;
    },
    multiply: function(operand1, operand2) {
        return operand1 * operand2;
    },
    divide: function(operand1, operand2) {
        return operand1 / operand2;
    }
};

function isOperator(value) {
    if (value in operatorList) {
        return true;
    }
}

function buttonPress(event) {
    if (isOperator(event.target.id)) {
        inputStack.push(temporaryOperand);
        temporaryOperand = "";
        inputStack.push(event.target.id);
    } else if (event.target.id == "equals") {
        calculate(inputStack);
    } else {
        temporaryOperand = temporaryOperand.concat(event.target.id);
    }

    console.log(inputStack);
}

function calculate(inputStack) {
    let result = operatorSelect[inputStack[1]](inputStack[0], inputStack[2]);
    setDisplay(result);
}

let display = document.getElementById("display-text");
function setDisplay(value) {
    display.innerHTML = `${value}`;
}

let buttons = document.querySelectorAll(".button");
for(let button of buttons) {
    button.addEventListener("click", buttonPress);
}