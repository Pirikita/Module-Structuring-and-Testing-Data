// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require('../1-get-angle-type');



test("indentifies type of angle", function () {
    expect(getAngleType(200)).toEqual("Reflex angle");
});  
// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("indentifies acute angle", function () {
    expect(getAngleType(63)).toEqual("Acute angle");
});  


// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("indentifies obtuse angle", function () {
    expect(getAngleType(110)).toEqual("Obtuse angle");
});  


// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("indentifies straight angle", function () {
    expect(getAngleType(180)).toEqual("Straight angle");
});  


// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("indentifies reflex angle", function () {
    expect(getAngleType(250)).toEqual("Reflex angle");
});  
