//variables

var display = document.getElementById('display');

var operator = ' ';
var num1 = 5;
var num2 = 6;
var result = ' ';



//functions
let add = (num1, num2) => Number(num1) + Number(num2);
let subtract = (num1, num2) => Number(num1) - Number(num2);
let multiply = (num1, num2) => Number(num1) * Number(num2);
let divide = (num1, num2) => Number(num1) / Number(num2);


let operate = () => {
switch(operator){
    case '+': result = add(num1,num2);
    break;
    case '-': result = subtract(num1,num2);
    break;
    case '*': result = multiply(num1,num2);
    break;
    case '/': result = divide(num1,num2);
}
operator = ' ';
display.textContent = result;
};

//add event listeners to all the buttons, update the display, update nums, update operator, make equals work

document.getElementById("one").addEventListener("click", function() { 
    if (operator === ' '){
        num1 += '1';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '1'
        display.textContent = num2;
        }
    });
document.getElementById("two").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '2';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '2'
        display.textContent = num2;
        }
    });
document.getElementById("three").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '3';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '3'
        display.textContent = num2;
        }
    });
document.getElementById("four").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '4';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '4'
        display.textContent = num2;
        }
    });
document.getElementById("five").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '5';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '5'
        display.textContent = num2;
        }
    });
document.getElementById("six").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '6';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '6'
        display.textContent = num2;
        }
    });
document.getElementById("seven").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '7';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '7'
        display.textContent = num2;
        }
    });
document.getElementById("eight").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '8';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '8'
        display.textContent = num2;
        }
    });
document.getElementById("nine").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '9';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '9'
        display.textContent = num2;
        }
    });
document.getElementById("zero").addEventListener("click", function(e) { 
    if (operator === ' '){
        num1 += '0';
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += '0'
        display.textContent = num2;
        }
    });
document.getElementById("plus").addEventListener("click", function(e) { 
    operator = '+';
    display.textContent = '+'});
document.getElementById("minus").addEventListener("click", function(e) { 
    operator = '-';
    display.textContent = '-'});
document.getElementById("division").addEventListener("click", function(e) { 
    operator = '/';
    display.textContent = '/'});
document.getElementById("multiply").addEventListener("click", function(e) { 
    operator = '*';
    display.textContent = '*'});
document.getElementById("clear").addEventListener("click", function(e) { 
    num1 = ' ';
    num2 = ' ';
    operator = ' ';
    display.textContent = ' '});
document.getElementById("equals").addEventListener("click", operate);
