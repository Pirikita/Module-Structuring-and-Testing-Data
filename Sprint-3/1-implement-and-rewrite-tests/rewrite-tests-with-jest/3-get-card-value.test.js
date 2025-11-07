// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);


// Case 2: Handle Number Cards (2-10):
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);


// Case 3: Handle Face Cards (J, Q, K):
  const kingofSpades = getCardValue("K♠");
  expect(kingofSpades).toEqual(10);

// Case 4: Handle Ace (A):
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);

// Case 5: Handle Invalid Cards:
  const twelveofHearts = getCardValue("12♥");
  expect(twelveofHearts).toEqual(Invalid card rank);

});