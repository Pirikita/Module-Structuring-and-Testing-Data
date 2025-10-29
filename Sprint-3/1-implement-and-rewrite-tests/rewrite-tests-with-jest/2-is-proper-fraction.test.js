// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("identifies type of fraction", function () => {
  // Test proper fractions (numerator < denominator)
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
  
// Case 2: Identify Improper Fractions:
  // Test improper fractions (numerator > denominator)  
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(7, 3)).toEqual(false);
  
// Case 3: Identify Negative Fractions:
  // Test negative numbers (-numerator)
  expect(isProperFraction(-4, 2)).toEqual(true);
  expect(isProperFraction(-9, 3)).toEqual(true);

// Case 4: Identify Equal Numerator and Denominator:
  // Test equal numbers (numerator = denominator)
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
});