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
if  (num1 != ' '){
    if (num2 == ' '){
        operator = this.textContent;
        display.textContent = this.textContent;
        decimalon = 'off';
    }     
    else if (num2 !== ' '){
        operate()
        display.textContent = result;
        operator = this.textContent;
        decimalon = 'off'
        num1 = result;  
    }
}
else {
    return;
}
};

function numberKeys(){
    if (operator === ' '){
        num1 += this.textContent;
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += this.textContent;
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
            return;
        } else {
            decimalon = 'off';
            num2 += '\.';
            decimalon = 'on';
            display.textContent = num2;
            console.log("num2= ",num2);
            return;
        }
    }

};
 
//add event listeners to all the buttons, update the display, and update nums,

var buttons = document.getElementsByClassName('number');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', numberKeys);
};

//add keyboard functionality
let keyboardPress = (event) => {
    var key_press = event.key;
    console.log(event.key);
    console.log(key_press);
 // Target each keypress and update the Display screen
 if (['0','1','2','3','4','5','6','7','8','9'].includes(key_press)){
    if (operator === ' '){
        num1 += key_press;
        display.textContent = num1;
        } else if (operator !== ' '){
        num2 += key_press;
        display.textContent = num2;
        }
    }
//update the operator
else if (['+','/','-','*'].includes(key_press)){
    if  (num1 != ' '){
        if (num2 == ' '){
            operator = key_press.textContent;
            display.textContent = key_press.textContent;
            decimalon = 'off';
        }     
        else if (num2 !== ' '){
            operate()
            display.textContent = result;
            operator = key_press.textContent;
            decimalon = 'off'
            num1 = result;  
        }
    }
    else {
        return;
    }
    }
else if (key_press = '=' ){
    operate();
}
else if (key_press = 'Backspace'){
    back();
}

else if (key_press = '.'){
    addDecimal();
}
else {
    return;
}
};

window.addEventListener('keydown',keyboardPress);


//adds event listeners to the operater keys and updates the operator 
var keys = document.getElementsByClassName('operator');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', operatorKeys);
};


//clear, decimal, and equals buttons
document.getElementById("clear").addEventListener("click", function(e) { 
    num1 = ' ';
    num2 = ' ';
    operator = ' ';
    decimalon = ' ';
    display.textContent = ''});
document.getElementById("equals").addEventListener("click", operate); 

document.getElementById("back").addEventListener("click", back)

document.getElementById("decimal").addEventListener("click", addDecimal)

