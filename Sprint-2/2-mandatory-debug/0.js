// Predict and explain first...

// =============> write your prediction here
  // we have a function that multiplies two numbers and logs the result,


/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
  //we have the console doing the multiplication and loggin it, but we 
//are not returning anything from the funcntion. there's why the output is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 27 and 39 is ${multiply(27, 39)}`);

// Test 1 answer: 
// 320
// The result of multiplying 10 and 32 is 320
// Test 2 answer: 
// 1053
// The result of multiplying 27 and 39 is 1053