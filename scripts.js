//functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

var operator = '+';
var a = 5;
var b = 6;

switch(operator){
    case '+': add(a,b);
    break;
    case '-': subtract(a,b);
    break;
    case '*': multiply(a,b);
    break;
    case '/': divide(a,b);
};