// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("should return 0 when character does not exist", () => {
  const str = "hello";
  const char = "x";  // 'x' doesn't exist in "hello"
  const count = countChar(str, char);
  expect(count).toEqual(0);  // Should return 0, not undefined or error
});

test("should be case-sensitive and return 0 for different case", () => {
  const str = "Hello";
  const char = "h";  // lowercase 'h' vs uppercase 'H' in "Hello"
  const count = countChar(str, char);
  expect(count).toEqual(0);  // Should return 0 because cases don't match
});
