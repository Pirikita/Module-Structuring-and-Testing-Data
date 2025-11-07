/**
 * Calculates the sum of all numbers in the array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The total sum of the numbers.
 * Must use a for-loop for iteration.
 */

function calculateSum(numbers) {
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let numbers = [1, 12, 7, 6, 98, 24, 10, 2];
//console.log(calculateSum(numbers));

/**
 * Calculates the mean (average) of the array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The mean of the numbers.
 * Hint: Reuse your calculateSum function!
 */

function calculateMean(numbers) {
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
//console.log(calculateMean(numbers));


/**
 * Creates a new sorted version of the array without mutating the original.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number[]} A new, sorted array.
 * Important: The original input array must remain unchanged (No Side-effects!).
 * Hint: Use the .slice() method to create a copy first.
 */
function sortArray(numbers) {
    const COPY = numbers.slice();
    COPY.sort((a, b) => a - b);
    return COPY;
}
const SORTED = sortArray(numbers);

//console.log('Original:', numbers);
//console.log('Sorted:', SORTED);


module.exports = {
    calculateSum,
    calculateMean,
    sortArray,
};