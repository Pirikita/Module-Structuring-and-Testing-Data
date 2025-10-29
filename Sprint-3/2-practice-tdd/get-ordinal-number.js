
function getOrdinalNumber(number) {
    // Handle special cases 11th, 12th, 13th
    if (number % 100 >= 11 && number % 100 <= 13) {
        return number + "th";
    }
    
    const lastDigit = number % 10; //to divide and see the last digit
    
    if (lastDigit === 1) {
        return number + "st";
    } else if (lastDigit === 2) {
        return number + "nd";
    } else if (lastDigit === 3) {
        return number + "rd";
    } else {
        return number + "th";
    }
};

module.exports = getOrdinalNumber;

console.log(getOrdinalNumber(11)); 