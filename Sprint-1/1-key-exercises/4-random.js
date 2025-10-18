const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// num represents a random integer number between the minimim (1) and a maximum (100) value. Includes both values.

// Order in expressions is the first open and close brackets, meaning max-min+1 closes before math.floor
// Then math.random is evaluated, which generates a random number between 0 and 1

//documentation used:
// https://www.youtube.com/watch?v=K2upGO5Bb48
// ChatGPT
// https://www.w3schools.com/js/js_math.asp

// 81 ; 37 ; 94 ; 60 ; 72 ; 10 ; 32 ;