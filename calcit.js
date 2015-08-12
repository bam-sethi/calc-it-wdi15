
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


num1 = parseInt(num1);
num2= parseInt(num2);

var answer;

  if ( op != 'sqrt' ) {
  var num2 = prompt('choose another number');
  
} else if (op === 'squrt' ) {
    
    answer= Math.sqrt(num1);
}

  

  if (op === '+'){
    
    answer= num1 + num2;

  } else if (op === '-' ){
    
    answer= num1 - num2;

  } else if (op === '/' ){
    
    answer= num1/num2;

  } else if (op === '*' ){
    
    answer= num1 * num2;

  } else {
    console.log('No Actions Taken..Try Again.');

}
console.log('answer', answer);
alert("Your answer is: " + parseInt(answer));




