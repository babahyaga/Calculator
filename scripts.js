//variables

var display = document.getElementById('display');
display.innerHTML = display.innerHTML.substring(0,300)

var operator = ' ';
var num1 = ' ';
var num2 = ' ';
var result = ' ';
var decimalon = ' ';
var decimal = document.getElementById('decimal');


//functions
let add = (num1, num2) => Number(num1) + Number(num2);
let subtract = (num1, num2) => Number(num1) - Number(num2);
let multiply = (num1, num2) => Number(num1) * Number(num2);
let divide = (num1, num2) => Number(num1) / Number(num2);

//clears nums depending on what point of the equation the user is pressing back
let back = () => {if( num2 !== ' '){
    num2 = ' ';
    display.textContent = ' ';
}else if (num1 !== ' ' && num2 == ' '){
    num1 = ' ';
    display.textContent = ' ';
} else{
    return;
}
};

let operate = () => {
result = ' ';
display.textContent = ' ';
switch(operator){
    case '+': result = add(num1,num2);
    break;
    case '-': result = subtract(num1,num2);
    break;
    case '*': result = multiply(num1,num2);
    break;
    case '/': result = divide(num1,num2);
}
//round decimal if over 7 digits
if(result.toString().length >7){   
    display.innerText = Number(result.toFixed(7));
}
else {
display.textContent = Number(result);
}
num2= ' ';
num1= ' ';
};


function operatorKeys() {
    if (num2 == ' '){
    operator = this.textContent;
    display.textContent = this.textContent;
    console.log(operator);
    console.log("num1= ",num1);
    console.log("num2= ",num2);
    } else if (num2 !== ' '){
     operate()
     display.textContent = result;
     operator = this.textContent;
     console.log(operator);
     console.log("num1= ",num1);
     console.log("num2= ",num2);
     num1 = result;  
    }
};

function numberKeys(){
    if (operator === ' '){
        num1 += this.textContent;
        console.log(operator);
        console.log("num1= ",num1);
        console.log("num2= ",num2);
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 +=this.textContent;
        console.log(operator);
        console.log("num1= ",num1);
        console.log("num2= ",num2);
        display.textContent = num2;
        }
}


function addDecimal() {
    if (decimalon == 'on'){
        return;
    } else{
        if(num2 == ' ' && operator == ' '){
            decimalon = 'on';
            num1 += '\.';
            display.textContent = num1;
            console.log("num1= ",num1);
        } else {
            decimalon = 'off';
            num2 += '\.';
            decimalon = 'on';
            display.textContent = num2;
            console.log("num2= ",num2);
        }
    }

};
 
//add event listeners to all the buttons, update the display, and update nums,

var buttons = document.getElementsByClassName('number');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', numberKeys);
};

//adds event listeners to the operater keys and updates the operator aswell as assuring the you can perform multiple operations
var keys = document.getElementsByClassName('operator');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', operatorKeys);
};


//clear and equals buttons
document.getElementById("clear").addEventListener("click", function(e) { 
    num1 = ' ';
    num2 = ' ';
    operator = ' ';
    display.textContent = ''});
document.getElementById("equals").addEventListener("click", operate); 

document.getElementById("back").addEventListener("click", back)

document.getElementById("decimal").addEventListener("click", addDecimal)

