const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

        // My prediction: is not working because slice doesn't apply to numbers, it only works on strings and arrays. 

// Then run the code and see what error it gives.

        // Error: TypeError: cardNumber.slice is not a function


// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

        // We have to transform the number into a string so it can use the slice to get the last 4 digits.
