function countChar(str, char) {
  let count = 0;
  
  // passes through every char of the string 
  for (let i = 0; i < str.length; i++) {
    // if the the actual char is the same as the searched on
    if (str[i] === char) {
      count++; // add to the counter
  }
  
  return count;
}

module.exports = countChar;
