const previousPasswords = ["Test1*", "123$tesT", "Password3%"];

function passwordValidator(password) {
    if (password.length < 5) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[0-9]/.test(password)) {
        return false;
    }
        //The square brackets [ ] mean “any of these characters”.
    if (!/[!#$%.*&]/.test(password)){
        return false;
    }
    if (previousPasswords.includes(password)){
        return false;
    }
    return true;
    /* ^ used to check the opposite, so: if there isn't a character that is not a letter or digit
    if (!/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }
    */

   //original code: return password.length < 5 ? false : true
}
console.log(passwordValidator("lelelE159*"))

module.exports = passwordValidator;

/*- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. */