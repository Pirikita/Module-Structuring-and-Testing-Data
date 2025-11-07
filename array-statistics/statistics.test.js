const { calculateSum, calculateMean, sortArray, calculateMedian} = require('./statistics.js');

let testArray = [1, 12, 7, 6, 98, 24, 10, 2];

test("returns the sum of the array", () => {
    expect(calculateSum(testArray)).toEqual(160);
});

test("returns the mean of the array", () => {
    expect(calculateMean(testArray)).toEqual(20);
});

test("returns a sorted copy without mutating the original array", () => {
    const sorted =sortArray(testArray);
    expect(sorted).toEqual([1, 2, 6, 7, 10, 12, 24, 98]);
    expect(testArray).toEqual([1, 12, 7, 6, 98, 24, 10, 2]);
});

test("returns the median of the array", () => {
    expect(calculateMedian(testArray)).toEqual(8.5);
});

// Test with odd-length array
const oddArray = [5, 3, 1, 4, 2];
expect(calculateMedian([5, 3, 1, 4, 2])).toEqual(3); 
// Sorted: [1, 2, 3, 4, 5] -> Median is 3
// console.log("Median of odd array:", calculateMedian(oddArray));

// Test with even-length array
const evenArray = [5, 3, 1, 2];
expect(calculateMedian([5, 3, 1, 2])).toEqual(2.5); 
// Sorted: [1, 2, 3, 5] -> Median is (2+3)/2 = 2.5
// console.log("Median of even array:", calculateMedian(evenArray));

// Test with one number
const singleArray = [42];
expect(calculateMedian([42])).toEqual(42);
// console.log("Median of single array:", calculateMedian(singleArray));

// Test with two numbers
const twoArray = [10, 20];
expect(calculateMedian([10, 20])).toEqual(15);
// console.log("Median of two array:", calculateMedian(twoArray));

// Test failing fast - This should cause an error!
try {
  calculateMedian([]);
} catch (error) {
  console.log("Good! Error caught for empty array:", error.message);
}

/*
console.log("Original array (should be unchanged):", testArray);
console.log("Sum:", calculateSum(testArray));
console.log("Mean:", calculateMean(testArray));
console.log("Sorted copy:", sortArray(testArray));
console.log("Original array (still unchanged):", testArray); // This must still be [1, 12, 7, 6, 98, 24, 10, 2]
*/