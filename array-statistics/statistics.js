/**
 * Calculates the sum of all numbers in the array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The total sum of the numbers.
 * Must use a for-loop for iteration.
 */

let numbers = [1, 12, 7, 6, 98, 24, 10, 2];


function calculateSum(numbers) {
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
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


/**
 * Calculates the median of the array.
 * The median is the middle number of a sorted list. If the list length is even, it's the average of the two middle numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The median of the numbers.
 * Hint: Reuse your sortArray function to get a sorted copy.
 */
function calculateMedian(numbers) {
  // 1. Fail Fast: Check if the array is empty. If it is, throw an Error. (Failing Fast)
  if (numbers.length === 0) {
    throw new Error("Cannot calculate median of an empty array.");
  } 
  // 2. Create a sorted copy of the array using your sortArray function.
  const sorted = sortArray(numbers);

  // 3. Find the middle index.
  const middleIndex = Math.floor(sorted.length / 2);
  // 4. Check if the array length is odd or even and return the correct value.
  if (sorted.length % 2 !==0) {
    return sorted[middleIndex];
  } else {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }

}
//console.log(calculateMedian(numbers));

module.exports = {
    calculateSum,
    calculateMean,
    sortArray,
    calculateMedian,
};