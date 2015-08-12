
/*Basic Calculator

Must be able to +, -, / and *
Must take user input using prompt
Must be able display the result using alert
Should use a loop!
Should handle floats*/


var op =  prompt('choose an operation');
console.log('op', op);

var num1 = prompt('choose a number');
console.log('num1', num1);

var num2 = prompt('choose another number');
console.log('num1', num2);

num1 = parseInt(num1);
num2= parseInt(num2);



if (op === '+'){
    
    answer= num1 + num2;

  } else if (op === '-' ){
    
    answer= num1 - num2;

  } else if (op === '/' ){
    
    answer= num1/num2;

  } else if (op === '*' ){
    
    answer= num1 * num2;

  }

var answer= alert("Your answer is: " + parseInt(answer));
console.log('answer', answer);



