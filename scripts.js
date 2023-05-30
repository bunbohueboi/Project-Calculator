let firstNum=1;
let secondNum=2;
let operator='/';

function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1, operator, num2){
    if (operator == '+'){return add(num1,num2)};
    if (operator == '-'){return subtract(num1,num2)};
    if (operator == '*'){return multiply(num1,num2)};
    if (operator == '/'){return divide(num1,num2)};
}

console.log(operate(firstNum,operator,secondNum));

let numbers = document.querySelectorAll('button');
const displayContainer = document.querySelector('.display-container');
let display=document.createElement('div');
display.classList='display';
display.innerText='\n';
displayContainer.append(display);

buttons = document.querySelector('#clear');
buttons.addEventListener('click',(e)=>{
    console.log(e);
})


/*
Calculator logic
    -firstNum:                                                                                                                                                                                                                                                                                                                                      
    -operator: 
    -secondNum: 

    buttoneventlistener: 
        -firstNum: if firstNum null, first number pressed added to firstNum. 
            - if another number is pressed and operand is empty, append to firstNum
        
        -operand: operand button press with be stored in operand variable
            - if operand already exists, replace current operand

        -secondNum: 
            - if firstNum and operand exists, button press with be stored here
            - if firstNum & operand & secondNum != null, append secondNum

        -equal button: call operate function and calculate answer from variables
            

*/