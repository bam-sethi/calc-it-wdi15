
/*Basic Calculator

Must be able to +, -, / and *
Must take user input using prompt
Must be able display the result using alert
Should use a loop!
Should handle floats*/


var op =  prompt('choose an operator ( + , - , * , / , sqrt or power)');
console.log('op', op);

var num1 = prompt('choose a number');
console.log('num1', num1);


num1 = parseInt(num1);
// num2= parseInt(num2).toFixed(2);
 
var answer; 

if ( op != 'sqrt' ) {
  var num2 = parseInt(prompt('choose another number.'));
  
} else {
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

} else if (op === 'power') {
  
  answer= Math.pow(num1, num2);

} else {
  alert("Incorrect Input")
  console.log('No Actions Taken');

}

console.log('answer', answer);
alert("Your answer is: " + answer.toFixed(2));




