const movieLength = 10000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    //There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
    // There are 5 function calls: %60 (is used 2 times to give us the remaining seconds and minutes)
        // for totalHours and totalMinutes we also use function calls
        // console.log is also a function call. 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // the expression represents the remainder of the division of movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //means that the totalMinutes variable is being assigned the value of movieLength minus the remaining seconds, divided by 60 to convert seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //Represents the formatted time of the movie in hours, minutes, and seconds. A better name could be movieDurationFormatted or movieLenghthFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    //Original code shows: 2:26:24 for 8784 seconds
    //1st test: 2:11:24 for 7894 seconds
    //2nd test: 2:46:40 for 10000 seconds
