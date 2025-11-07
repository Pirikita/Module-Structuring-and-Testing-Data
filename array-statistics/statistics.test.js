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

/*
console.log("Original array (should be unchanged):", testArray);
console.log("Sum:", calculateSum(testArray));
console.log("Mean:", calculateMean(testArray));
console.log("Sorted copy:", sortArray(testArray));
console.log("Original array (still unchanged):", testArray); // This must still be [1, 12, 7, 6, 98, 24, 10, 2]
*/