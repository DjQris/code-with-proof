/* 
The Algorithm:

Create a variable to hold the age.

Create a function that takes that age as an input.

Check the age against different "milestones" (13, 20, 65).

Print the result to the console so we can see it. */

// -------------------------------------------------

// Create a variable to test (You can change this number to test different ages!)
const userAge = 150;

// Define the function
function checkAgeCategory(age) {
  // create an empty string variable that will hold the output message later
  let message = "";

  // Use If-Else statement to check the ages and their corresponding category
  if (age < 0) {
    message = "That's not a real age!";
  } else if (age < 13) {
    message = "You are a Child.";
  } else if (age < 20) {
    message = "You are a Teenager.";
  } else if (age < 65) {
    message = "You are an Adult.";
  } else {
    message = "You are an Ancestor😁!!";
  }

  // 4. Print the final result to the console
  console.log(`At ${age} years old, ${message}`);
}

// call the function
checkAgeCategory(userAge);
