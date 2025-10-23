let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // There are function calls in 3 lines: line 4, line 5, and line 10. 
    // line 4 there are 2 function calls: replaceAll and Number.
    // line 5 there are 2 function calls: replaceAll and Number.
    // line 10 there is 1 function call: console.log.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // error is in line 5. There is a missing comma in the replaceAll method.

// c) Identify all the lines that are variable reassignment statements
    //  lines 4 and 5.

// d) Identify all the lines that are variable declarations
    //  Line 1 and 2 with let and line 7 and 8 with const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // this expression is removing all commas from the carPrice string and converting the resulting string into a number data type.