// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here - will not run because decimalNumber is declared twice

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here - An error occur because we are declaring the decimalNumber variable twice.
//we declare it in the function and in the first const.
//we are also logging decimalNumber we should log the function 

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`; 

  return percentage;
}
console.log(convertToPercentage());
