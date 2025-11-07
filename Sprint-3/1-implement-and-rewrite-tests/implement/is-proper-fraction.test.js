const isProperFraction = require('./2-is-proper-fraction');

test("identifies type of fraction", function () {
  // Test proper fractions (numerator < denominator)
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
  
  // Test improper fractions (numerator > denominator)  
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(7, 3)).toEqual(false);
  
  // Test negative numbers (-numerator)
  expect(isProperFraction(-4, 2)).toEqual(true);
  expect(isProperFraction(-9, 3)).toEqual(true);

  // Test equal numbers (numerator = denominator)
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
});