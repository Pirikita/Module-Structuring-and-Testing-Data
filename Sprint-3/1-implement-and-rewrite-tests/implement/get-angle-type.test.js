const getAngleType = require('./1-get-angle-type');


// your test
test("indentifies type of angle", function () {
    expect(getAngleType(200)).toEqual("Reflex angle");
});  