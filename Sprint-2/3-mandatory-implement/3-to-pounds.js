// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Remove the trailing 'p' from the input string
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // Pad with leading zeros to ensure we have at least 3 digits
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
  // Extract pounds (all digits except the last two)
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract pence (last two digits) and ensure it has exactly 2 digits
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // Return the formatted result
  return `£${pounds}.${pence}`;
}

// Tested the function with different inputs
console.log(toPounds("399p")); // £3.99
console.log(toPounds("199p")); // £1.99
console.log(toPounds("50p"));  // £0.50
console.log(toPounds("5p"));   // £0.05
console.log(toPounds("1234p")); // £12.34