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
  return calculateSum(numbers) / numbers.length;
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

/**
 * Runs a complete analysis on the provided array of numbers.
 * Groups all results into a single object and logs them to the console.
 * @param {number[]} data - The array of numbers to analyze.
 * @returns {Object} An object containing the sum, mean, median, and the original sorted data.
 */

function analyzeData(data = numbers) {
  // 1. Fail Fast: Check if input is valid (e.g., not empty, all elements are numbers).
  // This is a more advanced check. For now, we can just check for empty array.
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Data array is empty. Nothing to analyze.");
  }
  if (!data.every(item => typeof item === "number")) {
    throw new Error("Data array must contain only numbers.");
  }

  // 2. Calculate all the statistics by assembling the parts you've built.
  const sum = calculateSum(data);
  const mean = calculateMean(data);
  const median = calculateMedian(data);
  const sorted = sortArray(data); // We reuse the function to get the sorted version

  // 3. Group the results into a single object.
  const results = {
    originalData: data,       // Keeping a reference to the original data
    sortedData: sorted,
    sum: sum,
    mean: mean,
    median: median
  };

  // 4. Log the results in a user-friendly way.
  console.log("=== Data Analysis Complete ===");
  console.log("Original Data:", results.originalData);
  console.log("Sorted Data:  ", results.sortedData);
  console.log("Sum:          ", results.sum);
  console.log("Mean:         ", results.mean);
  console.log("Median:       ", results.median);
  
  // 5. Return the results object.
  return results;
}

  analyzeData(numbers);


  module.exports = {
    calculateSum,
    calculateMean,
    sortArray,
    calculateMedian,
    analyzeData,
};