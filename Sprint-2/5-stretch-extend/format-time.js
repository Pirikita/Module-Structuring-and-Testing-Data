// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5); // Get the minutes part
  
  let period = "am";
  let displayHours = hours;
  
  if (hours === 0) {
    displayHours = 12; // midnight
  } else if (hours === 12) {
    period = "pm";
  } else if (hours > 12) {
    displayHours = hours - 12;
    period = "pm";
  }
  
  return `${displayHours}:${minutes} ${period}`;
}

// Test cases
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "8:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.log("If no errors were logged, all tests passed!");

// Export correctly - choose ONE of these:
module.exports = formatAs12HourClock; // Direct export
// OR if you want named exports:
// module.exports = { formatAs12HourClock };