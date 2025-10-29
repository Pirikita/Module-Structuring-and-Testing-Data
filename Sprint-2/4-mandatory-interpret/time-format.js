function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61)); // Expected output: "00:01:01"
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 - hours minutes seconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 (totalHours = 0 when input is 61 seconds)

// c) What is the return value of pad is called for the first time?
// =============> "00" (0 padded to 2 digits becomes "00")

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 (remainingSeconds = 61 % 60 = 1)

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> return value is "01". 
/*Explanation:
num = 1 (remainingSeconds)

num.toString() converts 1 to "1"

.padStart(2, "0") pads "1" to 2 digits with leading zeros

*/
