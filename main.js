
let displayCalc = document.getElementById("displayCalc"); 
let calcHistory = document.getElementById("calcHistory"); 
let numbers = document.getElementsByClassName("numbers");
let operators = document.getElementsByClassName("operators");
let equalBtn = document.getElementById("equalBtn");
let clearDisplay = document.getElementById("clearDisplay");
let clearSteps = document.getElementById("clearSteps");


let firstNumber;
let secondNumber;
let typeOfOperator;
let typeOfOperatorKeeper;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",() => {
        
      typeOfOperator ?  displayCalc.value = numbers[i].innerHTML : displayCalc.value += numbers[i].innerHTML;
      typeOfOperator = false;

    })    
}

for (let i = 0; i < operators.length; i++) {  
    operators[i].addEventListener("click",() => {
        firstNumber = Number(displayCalc.value);
        console.log({firstNumber});  
        typeOfOperator = operators[i].innerHTML;
        typeOfOperatorKeeper = typeOfOperator;
        calcHistory.value = firstNumber
        calcHistory.value += typeOfOperator;
    });
}

let typeOfOperation = (someOperator,firstNumber,secondNumber) => {
    switch (someOperator) {

        case "+":
            return firstNumber + secondNumber;
            
        case "-":
            return firstNumber - secondNumber;
            
        case "/":
            return firstNumber / secondNumber;
            
        case "x":
            return firstNumber * secondNumber;   
    }
}


equalBtn.addEventListener("click",() => {
    secondNumber = Number (displayCalc.value);
    console.log({secondNumber});
    displayCalc.value = typeOfOperation(typeOfOperatorKeeper,firstNumber,secondNumber);
    calcHistory.value += secondNumber;
})  

let clear = () => {
    clearDisplay.addEventListener("click",() => {
        displayCalc.value = " ";
        calcHistory.value = " ";
        firstNumber = 0;
        secondNumber = 0;
    })
}
clear();

let clearStepsFunc = () => {
    clearSteps.addEventListener("click",() => {
        displayCalc.value = displayCalc.value.substr(0,displayCalc.value.length -1);
    })
} 

clearStepsFunc();






