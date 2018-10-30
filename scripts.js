//variables

var display = document.getElementById('display');

//functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;



var operator = '/';
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

//add event listeners to all the buttons

document.getElementById("one").addEventListener("click", function() { 
    display.textContent = '1';
});
document.getElementById("two").addEventListener("click", function(e) { display.textContent = '2'});
document.getElementById("three").addEventListener("click", function(e) { display.textContent = '3'});
document.getElementById("four").addEventListener("click", function(e) { display.textContent = '4'});
document.getElementById("five").addEventListener("click", function(e) { display.textContent = '5'});
document.getElementById("six").addEventListener("click", function(e) { display.textContent = '6'});
document.getElementById("seven").addEventListener("click", function(e) { display.textContent = '7'});
document.getElementById("eight").addEventListener("click", function(e) { display.textContent = '8'});
document.getElementById("nine").addEventListener("click", function(e) { display.textContent = '9'});
document.getElementById("zero").addEventListener("click", function(e) { display.textContent = '0'});
document.getElementById("plus").addEventListener("click", function(e) { display.textContent = '+'});
document.getElementById("minus").addEventListener("click", function(e) { display.textContent = '-'});
document.getElementById("division").addEventListener("click", function(e) { display.textContent = '/'});
document.getElementById("multiply").addEventListener("click", function(e) { display.textContent = '*'});
document.getElementById("clear").addEventListener("click", function(e) { display.textContent = ' '});
