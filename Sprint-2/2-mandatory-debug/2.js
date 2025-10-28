// Predict and explain first...
  // The function getLastDigit is intended to return the last digit of a given number.
  // We are declaring the given number as a constant variable 'num' with a value of 103.
  // However, the function does not take any parameters and always uses the constant 'num'.
  // Therefore, when we call getLastDigit with different numbers (42, 105, 806), 
  // it still returns the last digit of 103, which is '3'.
  

// Predict the output of the following code:  
// =============> Write your prediction here
    //  The last digit of 42 is 3
    //  The last digit of 105 is 3
    //  The last digit of 806 is 3

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
    //The last digit of 42 is 3
    //The last digit of 105 is 3
    //The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
    // because we are declaring the num = 103, even if we change the parameter in the console it still considers the num value
// Finally, correct the code to fix the problem
// =============> write your new code here



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


//NEW OUTPUT
    //The last digit of 42 is 2
    //The last digit of 105 is 5
    //The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
