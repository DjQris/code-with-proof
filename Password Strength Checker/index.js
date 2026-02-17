/* 
Step-by-Step Algorithm

Create variables:

score
hasLowercase
hasUppercase
hasNumber
hasSpecialChar

Check if length ≥ 8 → increase score

Loop through every character in the password:

If character is between 'a' and 'z' → lowercase
If character is between 'A' and 'Z' → uppercase
If character is between '0' and '9' → number
Otherwise → special character

Increase score for each true condition

Return:

5 → Strong
3–4 → Medium
else → Weak 
*/

/* 
PSEUDOCODE

FUNCTION checkPassword(password)

    SET score = 0
    SET hasLowercase = false
    SET hasUppercase = false
    SET hasNumber = false
    SET hasSpecialChar = false

    IF password length >= 8
        increase score

    FOR each character in password

        IF character between 'a' and 'z'
            hasLowercase = true

        ELSE IF character between 'A' and 'Z'
            hasUppercase = true

        ELSE IF character between '0' and '9'
            hasNumber = true

        ELSE
            hasSpecialChar = true

    Increase score for each true flag

    Return strength based on score

*/

// PASSWORD STRENGTH CHECKER

function checkPasswordStrength(password) {
  // Start score at 0
  let score = 0;

  // flags to check what the password contains

  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  // check password length
  if (password.length >= 8) {
    score++;
  }

  // Loop through the characters in the password using "For Each" method

  for (let i = 0; i < password.length; i++) {
    // let's get the current character
    let char = password[i];

    // Check if character is lowercase letter 'a' to 'z'
    if (char >= "a" && char <= "z") {
      hasLowercase = true;
    }
    // Check if character is uppercase letter 'A' to 'Z'
    else if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    }
    // Check if character is a number '0' to '9'
    else if (char >= "0" && char <= "9") {
      hasNumber = true;
    }

    // If it's not letter or number, then it's a special character
    else {
      hasSpecialChar = true;
    }
  }

  // increase the score based on flags

  if (hasLowercase) score++;
  if (hasUppercase) score++;
  if (hasNumber) score++;
  if (hasSpecialChar) score++;

  // Let's decide the final strength
  if (score === 5) {
    return "Strong";
  } else if (score >= 3) {
    return "Medium";
  } else {
    return "Weak";
  }
}

// Let's create a test variable
let testPassword = "Superstar20!!";
let result = checkPasswordStrength(testPassword);

console.log("Password Strength is: ", result);
