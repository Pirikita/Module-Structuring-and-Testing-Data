const penceString = "5p";

// here with without trailing p we are informing the program to remove the 'p' from the string. With substring (0, penceString.length - 1) 
// we are telling the program to start from index 0 and go up to the length of the string minus 1 (which removes the last character 'p')
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// here we are padding the string, meaning we are saying that we need 3 characters in total and if there's not 3 it should add 0's until
// we have 3 characters. This is important for cases where we have less than 3 characters in the string
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//here we are extracting the pounds part of the string by taking all characters from index 0 up to the length of the string
// minus 2 (which gives us the last two characters for pence)
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// here we are repeating the same process for pence, but this time we are taking the last two characters of the string
// and padding it to ensure it has 2 characters
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");


// here we declare that we want the output to be in the format of £ followed by pounds, a dot, and then pence
console.log(`£${pounds}.${pence}`);

// 1test = 399p = £3.99
// 2test = 120p = £1.20
// 3test = 5p = £0.05

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
