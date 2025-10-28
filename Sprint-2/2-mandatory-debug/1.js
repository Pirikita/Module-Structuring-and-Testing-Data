// Predict and explain first...
//  =============> write your prediction here
// The function sum is intended to return the sum of two numbers, a and b. there's an error in the return statement. 
// And again it's returning undefined because the return statement is divided. 
// Ouput is the sum and then undefined

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
  // ERROR:The sum of 10 and 32 is undefined
    // the return statement should have been written in one line as "return a + b;"

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 59 and 72 is ${sum(59 , 72)}`);

// Test 1 : The sum of 10 and 32 is 42
// Test 2 : The sum of 59 and 72 is 131