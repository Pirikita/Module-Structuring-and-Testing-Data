function find(str, char) {
  let index = 0;
//We start with index = 0 (the first character in the string).

  while (index < str.length) {  //The while loop will keep running as long as index is smaller than the string’s length.
                                //That means it checks every character from start to end.
    if (str[index] === char) {
      return index;
    } /*For each character, it checks:
        Is the current character (str[index]) equal to the one we’re looking for (char)?
        If yes → it immediately returns that index (stops the function). */

    index++; //If it doesn’t find a match, it increases index by 1 and checks the next character.
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

/* a) How the index variable updates during the call to find
  It starts on the first character, if it doesn't match, increases the index by 1 and runs the test again until it finds the character
  or it doesn't and in that case returns -1
*/

/* b) What is the if statement used to check
    Is used to check if the character is equal to what we are looking for, if yes it returns the position and stops the function, if not,
    it keeps running.
*/

/* c) Why is index++ being used?
    If the first character doesn't match it increase the index by 1 and checks the next character.
*/

/* d) What is the condition index < str.length used for?
    The condition is used to check the entire length of the string. Is checking every character from start to end. */
