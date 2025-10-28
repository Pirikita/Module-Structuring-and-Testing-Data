// Predict and explain first...
//  =============> we declare a variable str twice

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here 
// The error occurs because we are trying to declare a variable 'str' inside the function using 'let',
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("beatriz")); // Output: "Beatriz"
