//variables

var display = document.getElementById('display');
display.innerHTML = display.innerHTML.substring(0,300)

var operator = ' ';
var num1 = ' ';
var num2 = ' ';
var result = ' ';



//functions
let add = (num1, num2) => Number(num1) + Number(num2);
let subtract = (num1, num2) => Number(num1) - Number(num2);
let multiply = (num1, num2) => Number(num1) * Number(num2);
let divide = (num1, num2) => Number(num1) / Number(num2);


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


//add event listeners to all the buttons, update the display, and update nums,

var buttons = document.getElementsByClassName('number');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', numberKeys);
}
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

//adds event listeners to the operater keys and updates the operator aswell as assuring the you can perform multiple operations
var keys = document.getElementsByClassName('operator');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', operatorKeys);
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
//clear and equals buttons
document.getElementById("clear").addEventListener("click", function(e) { 
    num1 = ' ';
    num2 = ' ';
    operator = ' ';
    display.textContent = ''});
document.getElementById("equals").addEventListener("click", operate); 

